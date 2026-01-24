# Frequently Asked Questions

Common questions about DEEPS and their answers.

---

## :material-download: Installation and Setup

??? question "What are the system requirements?"
    - **Windows:** Windows 10 or later (64-bit)
    - **macOS:** macOS 10.15 (Catalina) or later
    - **Linux:** Ubuntu 18.04+ or equivalent
    - **RAM:** 4GB minimum
    - **Disk:** 500MB for application + space for your data

??? question "Does DEEPS require an internet connection?"
    Only for:

    - Initial license activation
    - License renewal

    All data processing works completely offline.

??? question "Is DEEPS free?"
    DEEPS is **donation-supported** software. Support the project at [siliconwit.com/donate](https://siliconwit.com/donate) to receive activation credentials.

---

## :material-file-excel: Working with Scoresheets

??? question "What Excel formats are supported?"
    DEEPS supports `.xlsx` files (Excel 2007 and later).

    Older `.xls` files should be saved as `.xlsx` first.

??? question "What if lecturers use different Excel layouts?"
    DEEPS is flexible with column names. Common variations like "REG NO", "Reg. No.", "Registration Number" are recognized.

    For best results, provide lecturers with a standard template using **Tools → Next Semester Scoresheets**.

??? question "How should I name scoresheet files?"
    Include the unit code in the filename:

    - `EMT3101-Thermodynamics.xlsx`
    - `SMA2101.xlsx`
    - `EMT3102 Solid Mechanics.xlsx`

??? question "What happens if a student is missing from a scoresheet?"
    DEEPS will process available data and flag missing students in the special cases output.

---

## :material-folder-multiple: Folder Organization

??? question "Why does DEEPS need a specific folder structure?"
    The folder structure (`inputs/YEAR/YR#/SEM#/scoresheets/`) allows DEEPS to automatically detect:

    - Academic year
    - Year of study
    - Semester

    This information is used in outputs and documents.

??? question "Can I change the folder structure?"
    DEEPS expects the standard structure. Use **Tools → Create Academic Folder** to create properly organized folders.

??? question "Where are output files saved?"
    Outputs go to:

    - `outputs/verified_results/` - Consolidated scoresheets
    - `outputs/senate_documents/` - Word documents
    - `outputs/.raw/` - Intermediate files

---

## :material-file-document: Senate Documents

??? question "Can I customize the senate document format?"
    Yes, configure institution details in **File → Settings → Senate Documents**:

    - Institution name and logo
    - School and department names
    - Signing officials

??? question "What document formats are generated?"
    DEEPS generates:

    - Microsoft Word (.docx) for editing
    - PDF for distribution

??? question "How are engineering rules cited?"
    Configure the rules JSON file in **Settings → Paths → Rules JSON**. DEEPS will automatically cite relevant rules (e.g., ENG. 15(d)) in senate documents.

---

## :material-shield: Data Security

??? question "Where is my data stored?"
    All data stays on your local computer in the folders you specify. DEEPS does not transmit any data externally.

??? question "How should I back up my data?"
    Back up these folders regularly:

    - `inputs/` - Source scoresheets
    - `outputs/` - Generated results
    - `~/.config/deeps/` - Settings

    See [Cloud Backup](../user-guide/cloud-backup.md) for automated cloud backup.

??? question "How do I securely send results to the exam office?"
    Use GPG encryption. See [Encrypting Documents](../user-guide/encrypting-documents.md) for detailed instructions.

---

## :material-alert: Troubleshooting

??? question "DEEPS won't start"
    **Windows:** Install Visual C++ Redistributable if prompted

    **Linux:** Check Python version: `python3 --version` (requires 3.8+)

    **macOS:** Allow the app in System Preferences → Security & Privacy

??? question "License activation fails"
    - Check your internet connection
    - Verify username and key are correct
    - Contact support if the problem persists

??? question "Processing takes a long time"
    - Check for very large files (>50MB)
    - Close other applications
    - Ensure sufficient disk space

??? question "Some students are missing from consolidated results"
    Check for:

    - Typos in registration numbers
    - Inconsistent reg number formats across files
    - Missing rows in source scoresheets

---

## :material-license: Licensing

??? question "How do I get a license?"
    1. Support the project at [siliconwit.com/donate](https://siliconwit.com/donate)
    2. Receive credentials via email
    3. Activate in **License → Renew License**

??? question "What happens when my license expires?"
    Processing features become limited. Renew your license to restore full functionality.

??? question "Can I use DEEPS on multiple computers?"
    Contact support to discuss multi-machine licensing.

---

## :material-help-circle: Still Have Questions?

Use the **chat widget** in the bottom-right corner, or visit our contact page.

[:octicons-arrow-right-24: Contact Page](contact.md)
