# Encrypting Exam Documents with OpenPGP

Secure guide for encrypting sensitive exam materials (scoresheets, question papers, answer keys) for safe transmission to examination offices.

---

## :material-lock-question: What is OpenPGP?

!!! info "OpenPGP in 30 Seconds"
    OpenPGP is an encryption standard that lets you lock files using the recipient’s public key. **Only the recipient can unlock** those files using their private key. You do not have the key, and no one else does. This is like placing documents in a box and locking it with the recipient’s padlock. Anyone can lock the box, but only the recipient, who owns the padlock, has the key to open it.

**Core Capabilities:**

:material-shield-lock: **Encrypt files** - Make content unreadable to everyone except intended recipient

:material-shield-check: **Sign files** - Prove authenticity and detect tampering

:material-key-chain: **Key pairs** - You encrypt with recipient's public key, they decrypt with their private key

### :material-help-circle-outline: Understanding the Terminology

<div class="grid" markdown>

!!! example "PGP"
    **Pretty Good Privacy**

    The original commercial software created in 1991

!!! example "OpenPGP"
    **The Standard**

    Open protocol defining how encryption works

!!! example "GPG"
    **GNU Privacy Guard**

    Free tool we'll use (implements OpenPGP)

</div>

!!! tip "Simple Analogy"
    **Think of it like documents:**

    - **OpenPGP** = The standard way to write documents (like "use A4 paper")
    - **GPG/Gpg4win/GPG Suite** = The pen you use to write (different brands, same result)
    - **.gpg file** = The locked document (same lock, different keys to open it)

    **All OpenPGP tools are compatible** - A file encrypted with GPG on Linux can be decrypted with Gpg4win on Windows or GPG Suite on Mac. They all speak the same "language."

---

## :material-key-chain: How Public/Private Keys Work

!!! abstract "The Two-Key System"
    Think of public/private keys like a mailbox:

    - **Public Key** = The mailbox slot (anyone can drop mail in)
    - **Private Key** = The mailbox key (only you can retrieve mail)

**How Encryption Works:**

```
        YOU                           EXAM OFFICE
         ↓                                 ↓

    🔑 Get their          📦 Encrypt with      📧 Email        🔓 They decrypt
    public key      →     their public key →   .gpg file  →   with private key

                          exam.zip  →  exam.zip.gpg  →  [Email]  →  exam.zip

                          ⚠️ You CANNOT decrypt .gpg - keep original .zip!
```

### :material-account-multiple: Sender vs Recipient

<div class="grid cards" markdown>

-   :material-account-edit: **YOU (Sender)**

    ---

    **Your Keys:**

    - :material-key-variant: Private Key (keep secret)
    - :material-lock-open: Public Key (share freely)

    **Your Actions:**

    1. Get recipient's public key
    2. Encrypt using THEIR public key
    3. :material-alert: You CANNOT decrypt what you encrypted
    4. :material-check: Keep original files as backup!

-   :material-account-school: **EXAM OFFICE (Recipient)**

    ---

    **Their Keys:**

    - :material-key-variant: Private Key (they keep secret)
    - :material-lock-open: Public Key (they share with you)

    **Their Actions:**

    1. Share their public key with you
    2. Decrypt using THEIR private key
    3. :material-check: Can read encrypted files
    4. Extract and process exam materials

</div>

!!! danger "Critical Security Concept"
    **You cannot decrypt files encrypted for someone else!**

    Once you encrypt a file with the recipient's public key, only their matching private key can decrypt it - not even you can open it. This is intentional security.

    **Always keep your original .zip file as backup before encrypting!**

---

## :material-arrow-right-bold: Encryption Workflow

!!! success "Complete Process at a Glance"
    ```
    📄 Exam Files      🗜️ Zip Archive      🔐 Encrypt         📧 Email          🔓 Recipient
    (PDF, DOCX)    →   (.zip)          →   (.zip.gpg)     →   Secure send  →   Decrypts
       ↓                  ↓
    Organize         Keep backup!
    ```

**Step-by-Step Instructions:**

| Step | Action | Important Notes |
|:----:|--------|-----------------|
| **1** | Organize exam files (PDF/DOCX) | Collect all materials in one folder |
| **2** | Create .ZIP archive | ⚠️ Use .ZIP only (universal format)<br>Don't use .RAR, .7z, or other formats |
| **3** | **SAVE ZIP BACKUP** | ⭐ **CRITICAL**: Keep this safe!<br>You cannot decrypt the .gpg later |
| **4** | Import recipient's public key | Get their .asc file and import it |
| **5** | Encrypt ZIP → .gpg file | Creates: `exam.zip.gpg` |
| **6** | Email both files | 📎 Attach TWO files:<br>• `exam.zip.gpg` (encrypted exams)<br>• `your-public-key.asc` (for replies) |
| **7** | Recipient decrypts | They use their private key to open |

---

## :material-download: Installation Guide

!!! note "Choose Your Platform"
    Click the tab for your operating system below for specific installation instructions.

=== ":fontawesome-brands-windows: Windows"
    ### Gpg4win - GPG for Windows

    !!! download "Download & Install"
        **Step 1: Download**

        Visit [gpg4win.org](https://www.gpg4win.org/) and download the latest version

        **Step 2: Run Installer**

        Execute `gpg4win-x.x.x.exe`

        **Step 3: Select Components**

        - :material-check-bold: **GnuPG** (required - core encryption)
        - :material-check-bold: **Kleopatra** (required - user interface)
        - :material-checkbox-blank-outline: **GpgOL** (optional - Outlook integration)
        - :material-checkbox-blank-outline: **GpgEX** (optional - File Explorer integration)

        **Step 4: Complete Installation**

        Follow the installation wizard prompts

    !!! success "Verify Installation"
        Open **Command Prompt** or **PowerShell** and run:

        ```cmd
        gpg --version
        ```

        Expected output: `gpg (GnuPG) 2.x.x`

=== ":fontawesome-brands-ubuntu: Ubuntu/Linux"
    ### GPG (Usually Pre-installed)

    !!! info "Check Installation"
        Most Linux distributions include GPG by default. Verify with:

        ```bash
        gpg --version
        ```

    !!! download "Install if Needed"
        If not installed:

        ```bash
        sudo apt update
        sudo apt install gnupg
        ```

        For other distributions:

        - **Fedora/RHEL:** `sudo dnf install gnupg2`
        - **Arch:** `sudo pacman -S gnupg`

    !!! success "Verify Installation"
        ```bash
        gpg --version
        ```

        Expected output: `gpg (GnuPG) 2.x.x`

=== ":fontawesome-brands-apple: macOS"
    ### GPG Suite for Mac

    !!! download "Installation Methods"
        === "Homebrew (Recommended)"
            **If you have Homebrew installed:**

            ```bash
            brew install gnupg
            ```

            **Don't have Homebrew?** Install from [brew.sh](https://brew.sh/)

        === "GPG Suite (GUI)"
            **For graphical interface:**

            1. Visit [gpgtools.org](https://gpgtools.org/)
            2. Download GPG Suite
            3. Open the `.dmg` file
            4. Run the installer
            5. Complete installation

    !!! success "Verify Installation"
        Open **Terminal** and run:

        ```bash
        gpg --version
        ```

        Expected output: `gpg (GnuPG) 2.x.x`

---

## :material-key-plus: First-Time Setup

!!! warning "One-Time Setup"
    You only need to generate your key pair **once**. It will be stored securely on your computer for future use.

### :material-numeric-1-circle: Generate Your Key Pair

Your key pair consists of:

- :material-key-variant: **Private Key** - Stays on your computer (never share!)
- :material-key: **Public Key** - Share with others so they can send YOU encrypted files

=== ":fontawesome-brands-windows: Windows (Kleopatra GUI)"
    !!! example "Step-by-Step Key Creation"
        **1. Launch Kleopatra**

        - Open from Start Menu → Gpg4win → Kleopatra

        **2. Create New Key**

        - Click **New Key Pair** button (top toolbar)

        **3. Enter Your Details**

        ```
        Name:    Your Full Name
        Email:   coordinator@institution.edu
        ```

        **4. Advanced Settings (Optional)**

        - Click **Advanced Settings**
        - Key Material: RSA, 4096 bits (recommended)
        - Valid until: No expiration (or set custom)

        **5. Create Key**

        - Click **Create**

        **6. Set Passphrase**

        - Enter a **strong passphrase** (you'll need this to use the key)
        - Confirm passphrase
        - :material-alert: **Remember this passphrase!** Cannot be recovered if lost

        **7. Finish**

        - Click **Finish**
        - Your key pair is now created and ready to use!

    !!! success "Key Created Successfully"
        You should now see your key listed in the Kleopatra main window.

=== ":fontawesome-brands-ubuntu: Ubuntu/Linux (Command Line)"
    !!! example "Generate Key Pair"
        **Run the generation command:**

        ```bash
        gpg --full-generate-key
        ```

        **Follow the prompts:**

        ```
        Please select what kind of key you want:
           (1) RSA and RSA (default)
           (2) DSA and Elgamal
           ...
        Your selection? 1 ← Press 1

        What keysize do you want? (3072) 4096 ← Type 4096

        Please specify how long the key should be valid.
           0 = key does not expire
        Key is valid for? (0) 0 ← Type 0 (no expiration)

        Is this correct? (y/N) y ← Type y
        ```

        **Enter your information:**

        ```
        Real name: Your Full Name
        Email address: coordinator@institution.edu
        Comment: (optional - can leave blank)

        Change (N)ame, (C)omment, (E)mail or (O)kay/(Q)uit? O ← Type O
        ```

        **Set passphrase:**

        - Enter a strong passphrase
        - Confirm passphrase
        - :material-alert: **Remember this!** Cannot be recovered

    !!! success "Key Generated"
        ```bash
        gpg: key XXXXXXXX marked as ultimately trusted
        gpg: revocation certificate stored at '/home/user/.gnupg/openpgp-revocs.d/...'
        public and secret key created and signed.
        ```

=== ":fontawesome-brands-apple: macOS (Command Line)"
    !!! example "Generate Key Pair"
        **Run the generation command:**

        ```bash
        gpg --full-generate-key
        ```

        **Follow the prompts:**

        ```
        Please select what kind of key you want:
           (1) RSA and RSA (default)
           (2) DSA and Elgamal
           ...
        Your selection? 1 ← Press 1

        What keysize do you want? (3072) 4096 ← Type 4096

        Please specify how long the key should be valid.
           0 = key does not expire
        Key is valid for? (0) 0 ← Type 0 (no expiration)

        Is this correct? (y/N) y ← Type y
        ```

        **Enter your information:**

        ```
        Real name: Your Full Name
        Email address: coordinator@institution.edu
        Comment: (optional - can leave blank)

        Change (N)ame, (C)omment, (E)mail or (O)kay/(Q)uit? O ← Type O
        ```

        **Set passphrase:**

        - Enter a strong passphrase
        - Confirm passphrase
        - :material-alert: **Remember this!** Cannot be recovered

    !!! success "Key Generated"
        ```bash
        gpg: key XXXXXXXX marked as ultimately trusted
        public and secret key created and signed.
        ```

---

### :material-numeric-2-circle: Export Your Public Key

Others need your public key to send YOU encrypted files. It's safe to share publicly.

=== ":fontawesome-brands-windows: Windows (Kleopatra)"
    !!! example "Export Public Key"
        **1. Find Your Key**

        - In Kleopatra main window, locate your key

        **2. Export**

        - Right-click your key
        - Select **Export...**

        **3. Save File**

        - Choose location
        - Filename: `YourName-PublicKey.asc`
        - Click **Save**

        **4. Share**

        - Email this `.asc` file to anyone who needs to send you encrypted documents
        - :material-check: Safe to share publicly - it's your public key!

=== ":fontawesome-brands-ubuntu: Ubuntu/Linux"
    !!! example "Export Public Key"
        ```bash
        gpg --export -a coordinator@institution.edu > MyPublicKey.asc
        ```

        This creates `MyPublicKey.asc` in your current directory.

        **Verify the export:**

        ```bash
        ls -lh MyPublicKey.asc
        cat MyPublicKey.asc  # Should show ASCII-armored key
        ```

        **Share this file** with anyone who needs to send you encrypted documents.

=== ":fontawesome-brands-apple: macOS"
    !!! example "Export Public Key"
        ```bash
        gpg --export -a coordinator@institution.edu > MyPublicKey.asc
        ```

        This creates `MyPublicKey.asc` in your current directory.

        **Verify the export:**

        ```bash
        ls -lh MyPublicKey.asc
        cat MyPublicKey.asc  # Should show ASCII-armored key
        ```

        **Share this file** with anyone who needs to send you encrypted documents.

---

### :material-numeric-3-circle: Import Recipient's Public Key

Before encrypting files for someone, you need their public key.

!!! info "Getting the Recipient's Key"
    Contact your institution's exam office and request their public GPG key. They should provide a `.asc` file.

=== ":fontawesome-brands-windows: Windows (Kleopatra)"
    !!! example "Import Public Key"
        **1. Get the Key File**

        - Save the recipient's `.asc` file (e.g., `ExamsOffice-PublicKey.asc`)

        **2. Import in Kleopatra**

        - Click **Import...** button (top toolbar)
        - Browse and select the `.asc` file
        - Click **Open**

        **3. Verify Import**

        - Key should now appear in your key list
        - Check the name/email matches the exam office

        **4. Certify Trust (Optional)**

        - Right-click the imported key
        - Select **Certify...** to mark as trusted

    !!! success "Key Imported"
        The recipient's key is now ready for encrypting files.

=== ":fontawesome-brands-ubuntu: Ubuntu/Linux"
    !!! example "Import Public Key"
        ```bash
        gpg --import ExamsOffice-PublicKey.asc
        ```

        **Verify the import:**

        ```bash
        gpg --list-keys
        ```

        You should see the exam office's key listed.

        **Check the fingerprint (recommended):**

        ```bash
        gpg --fingerprint exams@institution.edu
        ```

        Verify this matches the fingerprint provided by the exam office (via phone or in-person).

=== ":fontawesome-brands-apple: macOS"
    !!! example "Import Public Key"
        ```bash
        gpg --import ExamsOffice-PublicKey.asc
        ```

        **Verify the import:**

        ```bash
        gpg --list-keys
        ```

        You should see the exam office's key listed.

        **Check the fingerprint (recommended):**

        ```bash
        gpg --fingerprint exams@institution.edu
        ```

        Verify this matches the fingerprint provided by the exam office (via phone or in-person).

---

## :material-file-lock: Encrypting Exam Documents

Now let's encrypt your exam materials for secure transmission.

### :material-numeric-1-circle: Create a Zip Archive

Combine all exam files into a single compressed archive.

!!! warning "Use ZIP Format Only"
    **Always use .ZIP format** - it's universally supported on all platforms (Windows, Mac, Linux) without additional software.

    **Do NOT use:**

    - ❌ .RAR (requires WinRAR)
    - ❌ .7z (requires 7-Zip)
    - ❌ .tar.gz (Linux-specific, confusing on Windows)
    - ❌ Other proprietary formats

    **Why ZIP?** Built into every operating system, guaranteed to work everywhere, exam offices can open it without installing extra software.

=== ":fontawesome-brands-windows: Windows"
    !!! example "Create ZIP File"
        === "File Explorer Method"
            **1. Organize Files**

            - Create a folder: `MSc-Exams-Dec2025`
            - Place all exam files inside:
                - Question papers (PDFs)
                - Answer keys (DOCX)
                - Marking schemes
                - Score sheets

            **2. Compress**

            - Right-click the folder
            - Select **Send to → Compressed (zipped) folder**
            - Result: `MSc-Exams-Dec2025.zip`

        === "7-Zip Method"
            If you have 7-Zip installed:

            - Right-click the folder
            - Select **7-Zip → Add to "MSc-Exams-Dec2025.zip"**

    !!! success "ZIP Created"
        You now have: `MSc-Exams-Dec2025.zip`

        :material-alert: **Keep this file as backup!** You'll need it later if issues arise.

=== ":fontawesome-brands-ubuntu: Ubuntu/Linux"
    !!! example "Create ZIP Archive"
        ```bash
        # Navigate to parent directory
        cd /path/to/exams/

        # Create zip archive
        zip -r MSc-Exams-Dec2025.zip MSc-Exams-Dec2025/
        ```

        **For verbose output:**

        ```bash
        zip -rv MSc-Exams-Dec2025.zip MSc-Exams-Dec2025/
        ```

        **Verify the zip:**

        ```bash
        ls -lh MSc-Exams-Dec2025.zip
        unzip -l MSc-Exams-Dec2025.zip  # List contents without extracting
        ```

    !!! success "ZIP Created"
        Archive created: `MSc-Exams-Dec2025.zip`

        :material-alert: **Keep this as backup!**

=== ":fontawesome-brands-apple: macOS"
    !!! example "Create ZIP Archive"
        === "Finder Method"
            **1. Organize Files**

            - Create folder: `MSc-Exams-Dec2025`
            - Add all exam files

            **2. Compress**

            - Right-click (or Control+click) the folder
            - Select **Compress "MSc-Exams-Dec2025"**
            - Result: `MSc-Exams-Dec2025.zip`

        === "Terminal Method"
            ```bash
            # Navigate to parent directory
            cd /path/to/exams/

            # Create zip archive
            zip -r MSc-Exams-Dec2025.zip MSc-Exams-Dec2025/
            ```

    !!! success "ZIP Created"
        Archive created: `MSc-Exams-Dec2025.zip`

        :material-alert: **Keep this as backup!**

---

### :material-numeric-2-circle: Encrypt the Archive

Now encrypt the zip file so only the recipient can open it.

=== ":fontawesome-brands-windows: Windows (Kleopatra)"
    !!! example "Encrypt with Kleopatra"
        **1. Start Encryption**

        - Click **Sign/Encrypt...** button (top toolbar)
        - Or: File → Sign/Encrypt Files

        **2. Select Your ZIP File**

        - Browse and select: `MSc-Exams-Dec2025.zip`
        - Click **Open**

        **3. Choose Options**

        - :material-check-bold: Check **Encrypt**
        - :material-check-bold: Optional: Check **Sign** (proves authenticity)

        **4. Select Recipient**

        - Choose: **Exams Office** (or their email)
        - This is the public key you imported earlier

        **5. Encrypt**

        - Click **Encrypt** button
        - Choose save location (same folder is fine)
        - Result: `MSc-Exams-Dec2025.zip.gpg`

    !!! success "File Encrypted"
        :material-check-circle: Encrypted file created: `MSc-Exams-Dec2025.zip.gpg`

        :material-email: Ready to email to exam office

        :material-backup-restore: Original .zip kept as backup

=== ":fontawesome-brands-ubuntu: Ubuntu/Linux"
    !!! example "Encrypt via Command Line"
        **Basic encryption:**

        ```bash
        gpg --trust-model always --encrypt \
          --recipient exams@institution.edu \
          MSc-Exams-Dec2025.zip
        ```

        **With signature (recommended for authenticity):**

        ```bash
        gpg --trust-model always --sign --encrypt \
          --recipient exams@institution.edu \
          MSc-Exams-Dec2025.zip
        ```

        **For ASCII-armored output (.asc instead of .gpg):**

        ```bash
        gpg --trust-model always --armor --encrypt \
          --recipient exams@institution.edu \
          MSc-Exams-Dec2025.zip
        ```

    !!! info "Understanding the Flags"
        - `--trust-model always` - Skip trust verification (use if you trust the key)
        - `--encrypt` - Encrypt the file
        - `--sign` - Add your digital signature
        - `--armor` - Create ASCII text output (.asc) instead of binary (.gpg)
        - `--recipient` - Who can decrypt (their email from their key)

    !!! success "File Encrypted"
        Created: `MSc-Exams-Dec2025.zip.gpg`

        ```bash
        ls -lh MSc-Exams-Dec2025.zip*
        ```

        You should see both files:
        - `MSc-Exams-Dec2025.zip` (original - keep this!)
        - `MSc-Exams-Dec2025.zip.gpg` (encrypted - email this)

=== ":fontawesome-brands-apple: macOS"
    !!! example "Encrypt via Command Line"
        **Basic encryption:**

        ```bash
        gpg --trust-model always --encrypt \
          --recipient exams@institution.edu \
          MSc-Exams-Dec2025.zip
        ```

        **With signature (recommended for authenticity):**

        ```bash
        gpg --trust-model always --sign --encrypt \
          --recipient exams@institution.edu \
          MSc-Exams-Dec2025.zip
        ```

        **For ASCII-armored output (.asc instead of .gpg):**

        ```bash
        gpg --trust-model always --armor --encrypt \
          --recipient exams@institution.edu \
          MSc-Exams-Dec2025.zip
        ```

    !!! info "Understanding the Flags"
        - `--trust-model always` - Skip trust verification
        - `--encrypt` - Encrypt the file
        - `--sign` - Add your digital signature
        - `--armor` - Create ASCII text output (.asc)
        - `--recipient` - Who can decrypt (their email)

    !!! success "File Encrypted"
        Created: `MSc-Exams-Dec2025.zip.gpg`

        You should see both:
        - Original: `MSc-Exams-Dec2025.zip` (keep!)
        - Encrypted: `MSc-Exams-Dec2025.zip.gpg` (email)

---

### :material-numeric-3-circle: Send via Email

!!! example "Email Delivery"
    **1. Compose New Email**

    - To: `exams@institution.edu`
    - Subject: `MSc December 2025 Examinations - Encrypted`

    **2. Write Brief Message**

    ```
    Dear Exams Office,

    Please find attached the encrypted examination materials for MSc December 2025.

    Attachments:
    1. MSc-Exams-Dec2025.zip.gpg (encrypted exam files)
    2. MyPublicKey.asc (my public key for your replies)

    Contents:
    - Question papers (5 courses)
    - Marking schemes
    - Answer keys

    Please confirm receipt and use my public key if you need to send
    encrypted materials back to me.

    Best regards,
    [Your Name]
    [Your Department]
    ```

    **3. Attach Files**

    Attach **TWO files**:

    1. :material-file-lock: `MSc-Exams-Dec2025.zip.gpg` (the encrypted exams)
    2. :material-key: `MyPublicKey.asc` (your public key - so they can send encrypted replies to you)

    !!! tip "Why attach your public key?"
        Including your public key allows the exam office to:

        - Send encrypted confirmation back to you
        - Send encrypted score reports or feedback
        - Avoid having to request your key later

        **Your public key is safe to share** - it can only encrypt, not decrypt.

    **Do NOT attach:**

    - :material-close: The original .zip file (keep this as backup)

    **4. Send**

    - Click Send
    - :material-check: Email is now safely encrypted end-to-end

!!! success "Encryption Complete"
    :material-check-circle-outline: Exam materials encrypted
    :material-check-circle-outline: Sent securely via email
    :material-check-circle-outline: Only recipient can decrypt
    :material-check-circle-outline: Original files backed up

---

## :material-file-document-multiple: Complete Example Workflow

Let's walk through a real-world scenario from start to finish.

!!! abstract "Scenario: Sending Supplementary Exam Papers"
    You need to submit BSc December 2025 supplementary exams containing:

    - EMCH101-Exam.pdf
    - EMCH102-Exam.pdf
    - Marking-Scheme.pdf

=== ":fontawesome-brands-windows: Windows"
    ```powershell
    # 1. Organize files in folder
    # C:\Users\You\Documents\Exams\BSc-Supp-Dec2025\
    #   ├── EMCH101-Exam.pdf
    #   ├── EMCH102-Exam.pdf
    #   └── Marking-Scheme.pdf

    # 2. Create ZIP (via File Explorer)
    # Right-click folder → Send to → Compressed folder
    # Result: BSc-Supp-Dec2025.zip

    # 3. Encrypt using Kleopatra
    # - Open Kleopatra
    # - Click "Sign/Encrypt"
    # - Select BSc-Supp-Dec2025.zip
    # - Choose recipient: Exams Office
    # - Check "Encrypt" and "Sign"
    # - Click Encrypt
    # Result: BSc-Supp-Dec2025.zip.gpg

    # 4. Email the .gpg file to exams@institution.edu

    # 5. Move original .zip to backup folder (keep it safe!)
    ```

    !!! tip "Pro Tips"
        - Create a folder structure: `Exams/Submitted/` and `Exams/Backup/`
        - After successful delivery, move .gpg to archive
        - Keep original .zip in `Backup/` folder
        - Maintain a submission log (Excel/Word)

=== ":fontawesome-brands-ubuntu: Ubuntu/Linux"
    ```bash
    # 1. Create folder and organize files
    mkdir -p ~/Exams/BSc-Supp-Dec2025
    cd ~/Exams/

    # Copy exam files into folder
    cp /path/to/EMCH101-Exam.pdf BSc-Supp-Dec2025/
    cp /path/to/EMCH102-Exam.pdf BSc-Supp-Dec2025/
    cp /path/to/Marking-Scheme.pdf BSc-Supp-Dec2025/

    # 2. Create ZIP archive
    zip -r BSc-Supp-Dec2025.zip BSc-Supp-Dec2025/

    # Verify contents
    unzip -l BSc-Supp-Dec2025.zip

    # 3. Encrypt for exam office
    gpg --trust-model always --sign --encrypt \
      --recipient exams@institution.edu \
      BSc-Supp-Dec2025.zip

    # Verify encryption succeeded
    ls -lh BSc-Supp-Dec2025.zip.gpg

    # 4. Email the .gpg file
    # Use your email client to attach and send BSc-Supp-Dec2025.zip.gpg

    # 5. Backup original ZIP
    mkdir -p ~/Exams/Backup/
    cp BSc-Supp-Dec2025.zip ~/Exams/Backup/

    # Optional: Clean up after confirmation of delivery
    # rm BSc-Supp-Dec2025.zip.gpg
    ```

    !!! tip "Automation Tip"
        Create a shell script for repeated submissions:

        ```bash
        #!/bin/bash
        # encrypt-exams.sh
        EXAM_FOLDER=$1
        RECIPIENT="exams@institution.edu"

        zip -r "${EXAM_FOLDER}.zip" "$EXAM_FOLDER"
        gpg --trust-model always --sign --encrypt --recipient "$RECIPIENT" "${EXAM_FOLDER}.zip"
        echo "Created: ${EXAM_FOLDER}.zip.gpg"
        ```

=== ":fontawesome-brands-apple: macOS"
    ```bash
    # 1. Create folder and organize files
    mkdir -p ~/Documents/Exams/BSc-Supp-Dec2025
    cd ~/Documents/Exams/

    # Copy exam files into folder
    cp /path/to/EMCH101-Exam.pdf BSc-Supp-Dec2025/
    cp /path/to/EMCH102-Exam.pdf BSc-Supp-Dec2025/
    cp /path/to/Marking-Scheme.pdf BSc-Supp-Dec2025/

    # 2. Create ZIP archive
    zip -r BSc-Supp-Dec2025.zip BSc-Supp-Dec2025/

    # Verify contents
    unzip -l BSc-Supp-Dec2025.zip

    # 3. Encrypt for exam office
    gpg --trust-model always --sign --encrypt \
      --recipient exams@institution.edu \
      BSc-Supp-Dec2025.zip

    # Verify encryption succeeded
    ls -lh BSc-Supp-Dec2025.zip.gpg

    # 4. Email the .gpg file
    # Use Mail.app or your email client to attach BSc-Supp-Dec2025.zip.gpg

    # 5. Backup original ZIP
    mkdir -p ~/Documents/Exams/Backup/
    cp BSc-Supp-Dec2025.zip ~/Documents/Exams/Backup/
    ```

    !!! tip "Finder Integration"
        You can create an Automator Quick Action to encrypt files:

        1. Open Automator
        2. Create new Quick Action
        3. Add "Run Shell Script"
        4. Save as "Encrypt for Exams Office"
        5. Right-click any file → Quick Actions → Encrypt for Exams Office

---

## :material-frequently-asked-questions: Common Questions

??? question "Can I decrypt files I encrypted for others?"
    **No, you cannot.** This is by design for security.

    When you encrypt a file with someone else's public key:

    - Only their private key can decrypt it
    - Even you (the encryptor) cannot decrypt it
    - This ensures only the intended recipient can read the contents

    **Solution:** Always keep the original .zip file as backup before encrypting!

??? question "What if I lose my private key?"
    If you lose your private key:

    - :material-close: You cannot decrypt files encrypted FOR you
    - :material-check: You can still encrypt files for others (only need their public key)
    - :material-close: Cannot recover your private key without backup

    **Where private keys are stored:**

    - **Linux/Mac:** `~/.gnupg/`
    - **Windows:** `%APPDATA%\gnupg\`

    **Prevention:** [Backup your private key](#backing-up-your-keys) to secure storage!

??? question "Can I use the same encryption for multiple recipients?"
    **No.** Each recipient needs their own encrypted copy.

    To send to multiple recipients:

    ```bash
    # Encrypt for first recipient
    gpg --encrypt --recipient office1@institution.edu exam.zip

    # Encrypt for second recipient
    gpg --encrypt --recipient office2@institution.edu exam.zip
    ```

    Or encrypt for multiple recipients at once:

    ```bash
    gpg --encrypt \
      --recipient office1@institution.edu \
      --recipient office2@institution.edu \
      exam.zip
    ```

    This creates one file both recipients can decrypt with their respective private keys.

??? question "How do I verify I have the correct public key?"
    Always verify the key fingerprint with the recipient via a different channel (phone, in-person, official website).

    **Check fingerprint:**

    === "Windows (Kleopatra)"
        - Right-click the key
        - Select **Certificate Details**
        - View **Fingerprint**

    === "Linux/Mac"
        ```bash
        gpg --fingerprint exams@institution.edu
        ```

    **Compare this fingerprint** with what the exam office officially provides (via phone, official letterhead, institutional website).

??? question "What's the difference between signing and encrypting?"
    Both serve different security purposes:

    | Feature | Signing | Encrypting |
    |---------|---------|------------|
    | **Purpose** | Prove authenticity | Ensure confidentiality |
    | **Who can read?** | Anyone | Only recipient |
    | **Verifies** | File origin & integrity | Nothing (just locks content) |
    | **Protects against** | Tampering & forgery | Unauthorized reading |

    **Best practice:** Use both for exam submissions!

    ```bash
    gpg --sign --encrypt --recipient exams@institution.edu exam.zip
    ```

??? question "The recipient says they can't decrypt my file"
    Common causes and solutions:

    | Issue | Solution |
    |-------|----------|
    | **Wrong public key used** | Verify you imported their correct key |
    | **Sent .zip instead of .gpg** | Check attachment - must be .gpg file |
    | **Key mismatch** | Their private key doesn't match the public key you used |
    | **Corrupted file** | Re-encrypt and resend |
    | **Wrong recipient specified** | Check `--recipient` email matches their key |

    **Debug steps:**

    1. Verify you have their current public key
    2. Check the encrypted file extension (.gpg or .asc)
    3. Test by asking them to confirm their public key fingerprint
    4. Try re-encrypting with explicit recipient ID

??? question "Can I password-protect instead of using keys?"
    Yes, GPG supports symmetric encryption (password-based), but it's less secure for exam submissions.

    **Symmetric encryption:**

    ```bash
    gpg --symmetric exam.zip
    ```

    **Why key-based is better:**

    - :material-check: No need to share passwords over phone/email
    - :material-check: Stronger security (4096-bit vs typical passwords)
    - :material-check: Non-repudiation (signing proves it's from you)
    - :material-check: Key management (rotate keys, revoke compromised keys)

    **When to use symmetric:** Personal backups, temporary sharing

??? question "How large can encrypted files be?"
    GPG has no practical size limit for modern systems.

    **Considerations:**

    | Size Range | Notes |
    |------------|-------|
    | **< 25 MB** | Email directly without issues |
    | **25-100 MB** | May need institutional email or Google Drive/OneDrive |
    | **> 100 MB** | Use file sharing services, share .gpg file link |

    **Email size limits:**

    - Gmail: 25 MB
    - Outlook.com: 20 MB
    - Institutional email: Varies (typically 25-50 MB)

    **For large files:**

    1. Upload .gpg file to Google Drive/OneDrive
    2. Share link with exam office (file still encrypted, safe to share link)
    3. They download and decrypt locally

??? question "What if I forget my passphrase?"
    **Unfortunately, your passphrase cannot be recovered.**

    **Impact:**

    - :material-close: Cannot use your private key
    - :material-close: Cannot decrypt files sent to you
    - :material-close: Cannot sign files
    - :material-check: Your public key still exists (others can still encrypt for you)

    **Solution:**

    1. Generate a new key pair
    2. Export and distribute your new public key
    3. Inform contacts about key change
    4. Revoke old key (if you backed up the revocation certificate)

---

## :material-backup-restore: Backup and Recovery

!!! danger "Critical: Backup Your Private Key"
    Your private key is the ONLY way to decrypt files sent to you. If your computer crashes or is replaced, you'll lose access to all encrypted communications unless you have a backup!

### :material-download-box: Backing Up Your Keys

=== ":fontawesome-brands-windows: Windows (Kleopatra)"
    !!! example "Export Private Key Backup"
        **1. Open Kleopatra**

        **2. Export Secret Key**

        - Right-click your key
        - Select **Export Secret Keys...**
        - Choose secure location
        - Filename: `PRIVATE-KEY-BACKUP-YourName.asc`
        - Click **Save**

        **3. Secure Storage**

        Store in one of these secure locations:

        - :material-usb-flash-drive: Encrypted USB drive
        - :material-cloud-lock: Password manager (1Password, Bitwarden)
        - :material-safe: Physical safe with encrypted backup
        - :material-harddisk: External hard drive (encrypted volume)

    !!! danger "Never Share This File"
        - :material-close: Never email your private key
        - :material-close: Never upload to cloud (unless encrypted)
        - :material-close: Never share with anyone
        - :material-check: Only keep in secure, encrypted storage

=== ":fontawesome-brands-ubuntu: Ubuntu/Linux"
    !!! example "Export Private Key"
        ```bash
        # Export your private key
        gpg --export-secret-keys -a coordinator@institution.edu > PRIVATE-KEY-BACKUP.asc

        # Verify the export
        ls -lh PRIVATE-KEY-BACKUP.asc
        file PRIVATE-KEY-BACKUP.asc
        ```

        **Secure the backup:**

        ```bash
        # Move to secure location
        mv PRIVATE-KEY-BACKUP.asc ~/SecureBackup/

        # Set strict permissions
        chmod 600 ~/SecureBackup/PRIVATE-KEY-BACKUP.asc

        # Optional: Encrypt the backup with a password
        gpg --symmetric ~/SecureBackup/PRIVATE-KEY-BACKUP.asc
        ```

    !!! warning "Storage Recommendations"
        - Store on encrypted USB drive
        - Keep offline backup in safe location
        - Use password manager for secure cloud storage
        - Never commit to git repositories

=== ":fontawesome-brands-apple: macOS"
    !!! example "Export Private Key"
        ```bash
        # Export your private key
        gpg --export-secret-keys -a coordinator@institution.edu > PRIVATE-KEY-BACKUP.asc

        # Verify the export
        ls -lh PRIVATE-KEY-BACKUP.asc
        file PRIVATE-KEY-BACKUP.asc
        ```

        **Secure the backup:**

        ```bash
        # Move to secure location
        mv PRIVATE-KEY-BACKUP.asc ~/Documents/SecureBackup/

        # Set strict permissions
        chmod 600 ~/Documents/SecureBackup/PRIVATE-KEY-BACKUP.asc

        # Optional: Create encrypted disk image
        hdiutil create -encryption AES-256 -size 10m -volname "GPG Backup" -fs HFS+ GPGBackup.dmg
        # Mount and copy backup file to encrypted image
        ```

    !!! warning "Storage Recommendations"
        - Use macOS Keychain for additional protection
        - Store on encrypted Time Machine backup
        - Keep offline copy in secure location

---

### :material-upload-box: Restoring Keys on New Computer

=== ":fontawesome-brands-windows: Windows (Kleopatra)"
    !!! example "Restore Private Key"
        **1. Install Gpg4win**

        - Download and install on new computer
        - Launch Kleopatra

        **2. Import Private Key**

        - Click **Import...**
        - Browse to `PRIVATE-KEY-BACKUP.asc`
        - Select and click **Open**
        - Enter your passphrase

        **3. Import Recipient Public Keys**

        - Click **Import...**
        - Select exam office public key files
        - Import each recipient key you work with

        **4. Verify**

        - Your key should show :material-key: (public) and :material-key-variant: (private)
        - Check that all recipient keys are imported

    !!! success "Restoration Complete"
        You can now encrypt and decrypt files as before!

=== ":fontawesome-brands-ubuntu: Ubuntu/Linux"
    !!! example "Restore Keys"
        ```bash
        # Install GPG (if needed)
        sudo apt install gnupg

        # Import your private key
        gpg --import PRIVATE-KEY-BACKUP.asc

        # Import recipient public keys
        gpg --import ExamsOffice-PublicKey.asc
        gpg --import RegistrarOffice-PublicKey.asc

        # Verify imports
        gpg --list-secret-keys  # Your private key
        gpg --list-keys         # All public keys

        # Set ultimate trust on your own key
        gpg --edit-key coordinator@institution.edu
        # At gpg> prompt, type: trust
        # Select: 5 = I trust ultimately
        # Type: quit
        ```

    !!! success "Keys Restored"
        ```bash
        # Test encryption
        echo "Test" > test.txt
        gpg --encrypt --recipient exams@institution.edu test.txt

        # If successful, you're ready to go!
        rm test.txt test.txt.gpg
        ```

=== ":fontawesome-brands-apple: macOS"
    !!! example "Restore Keys"
        ```bash
        # Install GPG (via Homebrew)
        brew install gnupg

        # Import your private key
        gpg --import PRIVATE-KEY-BACKUP.asc

        # Import recipient public keys
        gpg --import ExamsOffice-PublicKey.asc

        # Verify imports
        gpg --list-secret-keys  # Your private key
        gpg --list-keys         # All public keys

        # Set ultimate trust on your own key
        gpg --edit-key coordinator@institution.edu
        # At gpg> prompt, type: trust
        # Select: 5 = I trust ultimately
        # Type: quit
        ```

    !!! success "Keys Restored"
        Test the restoration:

        ```bash
        echo "Test" > test.txt
        gpg --encrypt --recipient exams@institution.edu test.txt
        ls test.txt.gpg  # Should exist
        rm test.txt test.txt.gpg
        ```

---

## :material-console: Quick Reference

### Command Cheat Sheet

=== ":fontawesome-brands-windows: GUI (Kleopatra)"
    | Task | Action |
    |------|--------|
    | **Create key pair** | New Key Pair button |
    | **Import public key** | Import... → Select .asc file |
    | **Export your public key** | Right-click key → Export... |
    | **Export your private key (backup)** | Right-click key → Export Secret Keys... |
    | **Encrypt file** | Sign/Encrypt... → Select file → Choose recipient |
    | **Decrypt file** | Decrypt/Verify... → Select .gpg file |
    | **View all keys** | Main window (automatic display) |
    | **Check key fingerprint** | Right-click → Certificate Details |

=== ":fontawesome-brands-ubuntu: Ubuntu/Linux"
    | Command | Purpose |
    |---------|---------|
    | `gpg --full-generate-key` | Create new key pair |
    | `gpg --list-keys` | List all public keys |
    | `gpg --list-secret-keys` | List your private keys |
    | `gpg --import file.asc` | Import a public key |
    | `gpg --export -a email > key.asc` | Export your public key |
    | `gpg --export-secret-keys -a email > key.asc` | Backup your private key |
    | `gpg --encrypt --recipient email file` | Encrypt file |
    | `gpg --sign --encrypt --recipient email file` | Sign and encrypt |
    | `gpg --decrypt file.gpg > file` | Decrypt file |
    | `gpg --fingerprint email` | Show key fingerprint |
    | `gpg --edit-key email` | Edit key (trust, sign, etc.) |

=== ":fontawesome-brands-apple: macOS"
    | Command | Purpose |
    |---------|---------|
    | `gpg --full-generate-key` | Create new key pair |
    | `gpg --list-keys` | List all public keys |
    | `gpg --list-secret-keys` | List your private keys |
    | `gpg --import file.asc` | Import a public key |
    | `gpg --export -a email > key.asc` | Export your public key |
    | `gpg --export-secret-keys -a email > key.asc` | Backup your private key |
    | `gpg --encrypt --recipient email file` | Encrypt file |
    | `gpg --sign --encrypt --recipient email file` | Sign and encrypt |
    | `gpg --decrypt file.gpg > file` | Decrypt file |
    | `gpg --fingerprint email` | Show key fingerprint |
    | `gpg --edit-key email` | Edit key (trust, sign, etc.) |

---

## :material-shield-check: Security Best Practices

<div class="grid cards" markdown>

-   :material-check-circle: **Critical DO's**

    ---

    - ✅ **Always keep original .zip files** - You can't decrypt your own .gpg files!
    - ✅ **Use .ZIP format only** - Universal compatibility (not RAR/7z)
    - ✅ **Back up your private key** - Secure, offline storage
    - ✅ **Verify recipient's key fingerprint** - Ensure authenticity
    - ✅ **Test before deadline** - Practice the process when not under pressure

-   :material-close-circle: **Critical DON'Ts**

    ---

    - ❌ **Never share your private key** - Not with anyone, ever!
    - ❌ **Don't delete originals after encrypting** - You'll need them!
    - ❌ **Don't forget you can't decrypt what you encrypt** - Only recipient can
    - ❌ **Don't store private keys unencrypted** - Even in cloud backups
    - ❌ **Don't skip importing recipient's key** - Must have it before encrypting

</div>

---

## :material-tools: Troubleshooting

??? warning "**Error:** No public key available"
    **Problem:** You haven't imported the recipient's public key.

    **Solution:**

    1. Request the recipient's public key (.asc file)
    2. Import it: `gpg --import recipient-key.asc`
    3. Verify: `gpg --list-keys` shows their key
    4. Retry encryption

??? warning "**Error:** Unusable public key"
    **Problem:** The imported key is expired, revoked, or corrupted.

    **Solution:**

    1. Contact recipient for a current public key
    2. Remove old key: `gpg --delete-keys email@domain.edu`
    3. Import new key
    4. Verify expiration: `gpg --list-keys email@domain.edu`

??? warning "**Error:** Cannot find gpg command"
    **Problem:** GPG not installed or not in system PATH.

    **Solution:**

    === "Windows"
        1. Reinstall Gpg4win
        2. Restart Command Prompt/PowerShell
        3. Try: `"C:\Program Files (x86)\GnuPG\bin\gpg.exe" --version`

    === "Linux"
        ```bash
        # Install GPG
        sudo apt install gnupg  # Ubuntu/Debian
        sudo dnf install gnupg2  # Fedora
        ```

    === "Mac"
        ```bash
        brew install gnupg
        # Or reinstall: brew reinstall gnupg
        ```

??? warning "**Error:** Forgot passphrase"
    **Problem:** Cannot remember passphrase for private key.

    **Solution:**

    **Unfortunately, passphrases cannot be recovered.** You must:

    1. Generate a new key pair
    2. Export and distribute new public key
    3. Notify all contacts of key change
    4. Revoke old key (if you created revocation certificate)

??? warning "**Problem:** File too large for email"
    **Problem:** Encrypted .gpg file exceeds email attachment limits.

    **Solution:**

    **Option 1: Institutional File Sharing**

    1. Upload .gpg file to Google Drive/OneDrive
    2. Share link with exam office
    3. File remains encrypted - safe to share link

    **Option 2: Split Large Files**

    ```bash
    # Split encrypted file into parts
    split -b 20M exam.zip.gpg exam.zip.gpg.part-

    # Creates: exam.zip.gpg.part-aa, exam.zip.gpg.part-ab, etc.
    # Email each part separately

    # Recipient reassembles:
    cat exam.zip.gpg.part-* > exam.zip.gpg
    gpg --decrypt exam.zip.gpg > exam.zip
    ```

??? warning "**Error:** There is no assurance this key belongs to the named user"
    **Problem:** GPG cannot verify the authenticity of the imported key.

    **Solution:**

    **Option 1: Bypass with trust flag**

    ```bash
    gpg --trust-model always --encrypt --recipient email@domain.edu file
    ```

    **Option 2: Manually trust the key**

    ```bash
    gpg --edit-key email@domain.edu
    # At gpg> prompt:
    trust
    # Select: 4 = I trust fully (or 5 = I trust ultimately)
    quit
    ```

    **Option 3: Verify and sign the key**

    1. Verify key fingerprint with recipient (phone/in-person)
    2. Sign their key: `gpg --sign-key email@domain.edu`

??? warning "**Problem:** Permission denied errors"
    **Problem:** Insufficient file permissions on GPG directories.

    **Solution:**

    === "Linux/Mac"
        ```bash
        # Fix GPG directory permissions
        chmod 700 ~/.gnupg
        chmod 600 ~/.gnupg/*
        chmod 700 ~/.gnupg/*.d

        # Fix key files
        find ~/.gnupg -type f -exec chmod 600 {} \;
        find ~/.gnupg -type d -exec chmod 700 {} \;
        ```

    === "Windows"
        1. Right-click `%APPDATA%\gnupg` folder
        2. Properties → Security
        3. Ensure your user has Full Control
        4. Remove other users if present

??? warning "**Problem:** Recipient cannot decrypt"
    **Problem:** Exam office reports they cannot decrypt your file.

    **Troubleshooting checklist:**

    - [ ] Verify you sent the .gpg file (not the .zip)
    - [ ] Confirm you used their correct public key
    - [ ] Check their key fingerprint matches what they provided
    - [ ] Ask them to verify their GPG installation
    - [ ] Test by encrypting a simple text file for them
    - [ ] Ensure file wasn't corrupted during transmission
    - [ ] Try re-encrypting with explicit --armor flag

    **Debug test:**

    ```bash
    # Create test file
    echo "Test message" > test.txt

    # Encrypt
    gpg --armor --encrypt --recipient exams@institution.edu test.txt

    # Send test.txt.asc to recipient
    # If they can decrypt this, issue is with your original file
    ```

---

## :material-information: Additional Resources

<div class="grid cards" markdown>

-   :material-book-open-variant: **Official Documentation**

    ---

    - [GnuPG Official Docs](https://gnupg.org/documentation/)
    - [OpenPGP Standard](https://www.openpgp.org/)
    - [RFC 4880 - OpenPGP Message Format](https://tools.ietf.org/html/rfc4880)

-   :fontawesome-brands-windows: **Windows Tools**

    ---

    - [Gpg4win Homepage](https://www.gpg4win.org/)
    - [Kleopatra User Manual](https://docs.kde.org/stable5/en/kleopatra/kleopatra/)
    - [Gpg4win Compendium (PDF Guide)](https://www.gpg4win.org/doc/en/gpg4win-compendium.html)

-   :fontawesome-brands-apple: **macOS Tools**

    ---

    - [GPG Suite for Mac](https://gpgtools.org/)
    - [Homebrew GPG Formula](https://formulae.brew.sh/formula/gnupg)
    - [GPG Keychain User Guide](https://gpgtools.tenderapp.com/kb)

-   :fontawesome-brands-ubuntu: **Linux Resources**

    ---

    - [Ubuntu GPG Guide](https://help.ubuntu.com/community/GnuPrivacyGuardHowto)
    - [Arch Wiki - GnuPG](https://wiki.archlinux.org/title/GnuPG)
    - [Debian GPG Documentation](https://www.debian.org/doc/manuals/securing-debian-manual/ch7.en.html)

</div>

### :material-school: Video Tutorials

!!! info "Learning Resources"
    - Search for "GPG encryption tutorial" on YouTube for visual guides
    - Look for platform-specific tutorials (Windows/Mac/Linux)
    - Many universities provide institutional GPG training

---

## :material-link: Related Documentation

<div class="grid cards" markdown>

-   :material-shield-lock: **[Data Security](security.md)**

    ---

    Learn about DEEPS comprehensive security features and institutional data protection

-   :material-frequently-asked-questions: **[FAQ](../support/faq.md)**

    ---

    Frequently asked questions about DEEPS functionality and troubleshooting

-   :material-help-circle: **[Support Center](../support/contact.md)**

    ---

    Get help from the DEEPS team for technical issues and guidance

</div>

---

!!! success "You're Now Ready to Encrypt Exam Documents!"
    You've learned how to:

    - ✅ Install and configure GPG on your platform
    - ✅ Generate and manage key pairs
    - ✅ Import recipient public keys
    - ✅ Create encrypted zip archives
    - ✅ Send encrypted exams securely
    - ✅ Backup and restore your keys

    **Remember:** Always keep original files as backup before encrypting!

*For more information about DEEPS security practices, see [Data Security](security.md) documentation.*
