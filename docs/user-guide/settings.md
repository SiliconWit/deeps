# Settings Guide

Configure DEEPS for your institution.

---

## :material-cog: Accessing Settings

Open settings via **File → Settings...** or press `Ctrl+,`

The settings dialog has multiple tabs:

| Tab | Purpose |
|-----|---------|
| **Paths** | File paths for logos, JSON configs |
| **Senate Documents** | Institution details, officials |
| **Processing** | Data processing options |

---

## :material-folder-open: Paths Tab

Configure file paths for DEEPS resources.

### University Logo

**Purpose:** Displayed in document headers (Excel and Word documents)

**Format:** PNG image (recommended), JPG also supported

**Recommended size:** 200-400 pixels wide

!!! tip "Logo Tips"
    - Use a transparent PNG for best results
    - Keep file size under 500KB
    - Square or horizontal logos work best

### Units JSON

**Purpose:** Defines course units and their titles for your program

**Format:** JSON file with hierarchical structure

**Example:**

```json
{
  "Year 1": {
    "Semester 1": [
      {"Unit Code": "EMT1101", "Unit Title": "Engineering Mathematics I"},
      {"Unit Code": "EMT1102", "Unit Title": "Engineering Drawing"}
    ],
    "Semester 2": [
      {"Unit Code": "EMT1201", "Unit Title": "Engineering Mathematics II"}
    ]
  },
  "Year 2": {
    // ...
  }
}
```

### Unit Assessments JSON

**Purpose:** Defines assessment breakdown for each unit

**Format:** JSON file with patterns and unit mappings

**Example:**

```json
{
  "assessment_patterns": {
    "standard": {
      "description": "CAT 30%, Exam 70%",
      "cat": 30,
      "exam": 70
    },
    "with_labs": {
      "description": "CAT 20%, Labs 20%, Exam 60%",
      "cat": 20,
      "practicals": 20,
      "exam": 60
    }
  },
  "units": {
    "EMT3101": "standard",
    "EMT3102": "with_labs"
  }
}
```

### Rules JSON

**Purpose:** Engineering rules for citations in senate documents

**Format:** JSON file with rule codes and full text

**Example:**

```json
{
  "eng_15_d": {
    "code": "ENG. 15 (d)",
    "title": "Staying Out / Retake",
    "full_text": "A candidate for Bachelor of Science in Engineering who fails more than two units..."
  },
  "eng_13_a": {
    "code": "ENG. 13 (a)",
    "title": "Supplementary Examination",
    "full_text": "A candidate who fails in one or two units..."
  }
}
```

---

## :material-file-document: Senate Documents Tab

Configure institution details for official documents.

### Institution Information

| Field | Example |
|-------|---------|
| **Institution Name** | Dedan Kimathi University of Technology |
| **School** | School of Engineering |
| **Department** | Department of Mechatronic Engineering |
| **Program** | BSc. Mechatronic Engineering |

### Academic Year

| Field | Example |
|-------|---------|
| **Academic Year** | 2024/2025 |
| **Current Semester** | Semester 1 |

### Signing Officials

| Role | Example |
|------|---------|
| **Chairperson** | Dr. Jane Doe |
| **Dean** | Prof. John Smith |
| **Registrar** | Mr. Peter Johnson |

### Meeting Details

| Field | Example |
|-------|---------|
| **Board Name** | School of Engineering Board of Examiners |
| **Meeting Date** | (Set when generating document) |
| **Venue** | (Set when generating document) |

---

## :material-tune: Processing Tab

Configure data processing behavior.

### Mark Thresholds

| Setting | Default | Description |
|---------|---------|-------------|
| **Pass Mark** | 40 | Minimum mark to pass |
| **Distinction** | 70 | Minimum for distinction |
| **Maximum Mark** | 100 | Upper bound for validation |

### Student ID Format

| Setting | Example |
|---------|---------|
| **ID Pattern** | `E###-##-###` |
| **ID Column Name** | REG NO, Reg. No., Registration |

### Processing Options

| Option | Description |
|--------|-------------|
| **Auto-calculate totals** | Sum mark columns automatically |
| **Validate marks** | Flag marks outside expected range |
| **Skip empty rows** | Ignore rows without registration number |

---

## :material-content-save: Saving Settings

- Click **OK** to save and close
- Click **Apply** to save without closing
- Click **Cancel** to discard changes

!!! info "Settings Location"
    Settings are saved to `~/.config/deeps/settings.json`

---

## :material-backup-restore: Resetting Settings

To reset to defaults:

1. Close DEEPS
2. Delete or rename `~/.config/deeps/settings.json`
3. Restart DEEPS

!!! warning "Backup First"
    Export your settings before resetting if you want to restore them later.

---

## :material-import: Import/Export Settings

### Export Settings

1. Open Settings
2. Click **Export...**
3. Save the JSON file

### Import Settings

1. Open Settings
2. Click **Import...**
3. Select previously exported JSON file

!!! tip "Sharing Settings"
    Export and share settings files to configure multiple DEEPS installations identically.

---

## :material-help-circle: Common Configuration Questions

??? question "Where do I get the Units JSON file?"
    Create one based on your program's curriculum, or contact your academic department for a template.

??? question "Can I use different logos for different documents?"
    Currently, DEEPS uses one logo for all documents. Set the most commonly used logo in settings.

??? question "How do I add a new unit?"
    Edit the Units JSON file to add new units. DEEPS reads this file each time you process.

??? question "Settings aren't saving?"
    Check file permissions on `~/.config/deeps/`. The folder and files need write permission.

---

## :material-arrow-right: Related Pages

<div class="grid cards" markdown>

-   :material-tools: **Tools Reference**

    ---

    Learn about all available tools

    [:octicons-arrow-right-24: Tools Reference](tools-reference.md)

-   :material-folder-multiple: **Folder Structure**

    ---

    Understand data organization

    [:octicons-arrow-right-24: Folder Structure](folder-structure.md)

</div>
