# Cloud Backup with rclone

Set up automatic backups of your DEEPS data to Google Drive using rclone.

---

## :material-cloud-upload: Overview

This guide shows how to configure **push-only** backups to Google Drive. Your local files are uploaded to the cloud, but nothing is downloaded from Google Drive to your computer.

!!! info "What Gets Backed Up"
    The DEEPS `resources/data/` folder containing:

    - `inputs/` - Scoresheets by academic year
    - `outputs/` - Generated documents
    - `images/` - University logo, signatures
    - `rules/` - Engineering rules JSON
    - `units/` - Unit codes and assessments JSON

---

## :material-download: Install rclone

=== ":fontawesome-brands-ubuntu: Ubuntu/Debian"

    ```bash
    sudo apt install rclone -y
    ```

=== ":fontawesome-brands-fedora: Fedora"

    ```bash
    sudo dnf install rclone
    ```

=== ":fontawesome-brands-apple: macOS"

    ```bash
    brew install rclone
    ```

=== ":fontawesome-brands-windows: Windows"

    Download from [rclone.org/downloads](https://rclone.org/downloads/)

---

## :material-cog: Configure Google Drive Remote

### Step 1: Start Configuration

```bash
rclone config
```

### Step 2: Create New Remote

When prompted:

| Prompt | Enter |
|--------|-------|
| `n/s/q>` | `n` (new remote) |
| Name | `gdrive` (or any memorable name) |
| Storage type | `drive` (Google Drive) |
| Client ID | *leave blank* (press Enter) |
| Client Secret | *leave blank* (press Enter) |
| Scope | `1` (full access) |
| Root folder ID | *leave blank* |
| Service account | *leave blank* |
| Advanced config | `n` |
| Auto config | `y` (opens browser to authenticate) |
| Team Drive | `n` |
| Confirm | `y` |

### Step 3: Verify Setup

```bash
rclone listremotes
# Should show: gdrive:
```

!!! tip "Multiple Google Accounts"
    Run `rclone config` again with a different name (e.g., `gdrive-backup`) to add a second Google Drive account for redundant backups.

---

## :material-upload: Manual Backup

Push your DEEPS data folder to Google Drive:

```bash
rclone copy /path/to/deeps/resources/data gdrive:DEEPS/backup --progress
```

Replace `/path/to/deeps/resources/data` with your actual DEEPS data folder path.

### Check What's on Google Drive

```bash
# List files
rclone ls gdrive:DEEPS/backup | head -20

# List directories
rclone lsd gdrive:DEEPS/backup

# Check total size
rclone size gdrive:DEEPS/backup
```

### Dry Run (Preview)

See what would be uploaded without actually uploading:

```bash
rclone copy /path/to/deeps/resources/data gdrive:DEEPS/backup --dry-run
```

---

## :material-sync: Automatic Backup (Linux)

Set up systemd services to automatically backup when files change.

### Prerequisites

```bash
sudo apt install inotify-tools
```

### Create Service File

Create `~/.config/systemd/user/deeps-backup.service`:

```ini
[Unit]
Description=DEEPS Google Drive Backup (Push Only)
After=network-online.target

[Service]
Type=simple
ExecStart=/bin/bash -c 'while inotifywait -r -e modify,create,delete,move /path/to/deeps/resources/data 2>/dev/null; do sleep 2; rclone copy /path/to/deeps/resources/data gdrive:DEEPS/backup --quiet; done'
Restart=on-failure
RestartSec=5

[Install]
WantedBy=default.target
```

!!! warning "Update Paths"
    Replace `/path/to/deeps/resources/data` with your actual path and `gdrive` with your remote name.

### Create Timer (Alternative)

For periodic backups instead of real-time, create `~/.config/systemd/user/deeps-backup.timer`:

```ini
[Unit]
Description=DEEPS Backup Timer

[Timer]
OnBootSec=5min
OnUnitActiveSec=30min
Persistent=true

[Install]
WantedBy=timers.target
```

### Enable Services

```bash
# Reload systemd
systemctl --user daemon-reload

# Option 1: Real-time (watches for changes)
systemctl --user enable --now deeps-backup.service

# Option 2: Every 30 minutes
systemctl --user enable --now deeps-backup.timer

# Allow services to run at boot
sudo loginctl enable-linger $USER
```

### Check Status

```bash
systemctl --user status deeps-backup.service
systemctl --user list-timers
journalctl --user -u deeps-backup.service -f
```

---

## :material-delete: Deletion Behavior

| Action | Result |
|--------|--------|
| **Delete locally** | File **stays** on Google Drive |
| **Delete on Drive** | File gets **re-uploaded** on next sync |

This is intentional - Google Drive acts as an archive. Local deletions don't propagate to the cloud.

!!! note "To Permanently Delete"
    1. Delete the file locally
    2. Delete from Google Drive manually

---

## :material-wrench: Maintenance

### Reconnect (if auth expires)

```bash
rclone config reconnect gdrive:
```

### Test Connection

```bash
rclone lsd gdrive: --max-depth 1
```

---

## :material-help-circle: Troubleshooting

??? warning "Authentication Failed"
    Run `rclone config reconnect gdrive:` to re-authenticate.

??? warning "Files Not Uploading"
    - Check the path in your service file is correct
    - Verify with `rclone copy ... --dry-run` first
    - Check logs: `journalctl --user -u deeps-backup.service`

??? warning "Service Not Starting"
    ```bash
    systemctl --user daemon-reload
    systemctl --user restart deeps-backup.service
    ```

---

*For more rclone options, see [rclone.org/docs](https://rclone.org/docs/)*
