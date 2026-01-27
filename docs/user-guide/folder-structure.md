# Folder Structure

Understanding how DEEPS organizes your academic data.

---

## :material-database-outline: Data Architecture

!!! info "XLSX Files Are the Source of Truth"
    DEEPS uses **Excel files (.xlsx)** as the primary data storage. All your exam data lives in these files on your local computer.

    - **All data is stored locally** - DEEPS does not upload data to any server
    - **XLSX files are the master copy** - Any edits you make to consolidated files are preserved
    - **Student Search uses a local cache** - A SQLite database indexes your XLSX files for fast searching
    - **The cache syncs automatically** - When you edit XLSX files, the database updates to reflect your changes

!!! danger "Backup Your Data"
    Since all data is stored locally on your computer:

    - **If files are deleted, they cannot be recovered** from DEEPS
    - **Set up regular backups** to cloud storage (Google Drive, OneDrive, etc.)
    - See [Cloud Backup Guide](cloud-backup.md) for setup instructions

---

## :material-file-tree: Overview

DEEPS uses a hierarchical folder structure to organize exam data by academic year, year of study, and semester:

```
project-root/
├── inputs/                    # Source files from lecturers
│   └── 2024-2025/            # Academic year
│       ├── YR1/
│       │   ├── SEM1/
│       │   └── SEM2/
│       ├── YR2/
│       │   ├── SEM1/
│       │   └── SEM2/
│       └── ...
│
└── outputs/                   # Generated files
    ├── verified_results/      # Consolidated scoresheets
    ├── senate_documents/      # Official documents
    └── .raw/                  # Intermediate files
```

---

## :material-folder-upload: Input Folder Structure

### Semester Folder Contents

Each semester folder contains subfolders for different file types:

```
inputs/2024-2025/YR3/SEM1/
├── scoresheets/           # Excel files from lecturers
│   ├── EMT3101.xlsx
│   ├── EMT3102.xlsx
│   └── EMT3103.xlsx
│
├── student_matters/       # Leave applications, deferrals
│   ├── leave_requests.xlsx
│   └── special_cases.xlsx
│
└── templates/             # Empty scoresheet templates
    └── next_semester_template.xlsx
```

### Folder Descriptions

| Folder | Purpose | Contents |
|--------|---------|----------|
| `scoresheets/` | Lecturer submissions | Excel files with student marks |
| `student_matters/` | Administrative files | Leave, deferrals, special cases |
| `templates/` | Blank templates | For next semester preparation |

---

## :material-folder-download: Output Folder Structure

### Verified Results

Processed and validated data (user-editable):

```
outputs/verified_results/2024-2025/YR3/SEM1/
├── 2024_2025_YR3_SEM1_consolidated_verified.xlsx   # All marks merged
├── 2024_2025_YR3_SEM1_processing_report.txt        # Processing log
└── (category sheets are added to the consolidated file)
```

### Senate Documents

Official documents for board approval:

```
outputs/senate_documents/2024-2025/YR3/SEM1/
└── 2024_2025_YR3_SEM1_senate_document.docx         # Senate document
```

### Raw Files (Hidden)

Auto-generated backup copies (not for editing):

```
outputs/.raw/2024-2025/YR3/SEM1/
└── 2024_2025_YR3_SEM1_consolidated_raw.xlsx        # Original auto-generated
```

!!! note "Raw Folder"
    The `.raw/` folder contains auto-generated backups. Always edit the files in `verified_results/` instead.

---

## :material-folder-plus: Special Folders

### Annual Folder

For end-of-year processing:

```
inputs/2024-2025/YR3/ANNUAL/
└── (annual consolidated results go here)
```

Created using **Tools → Create Academic Folder** with "ANNUAL" option.

### Graduation Folder

For final-year students only:

```
inputs/2024-2025/YR5/GRADUATION/
└── (graduation processing files)
```

Created using **Tools → Create Academic Folder** with "GRADUATION" option (only available for final year).

---

## :material-folder-cog: Creating Folder Structure

### Using the GUI Tool

1. Go to **Tools → Create Academic Folder**
2. Select:
   - **Academic Year**: e.g., 2024/2025
   - **Year of Study**: e.g., Year 3
   - **Folder Type**: SEM1, SEM2, ANNUAL, or GRADUATION
3. Check **Create output folders** (recommended)
4. Click **Create Folder**

!!! tip "Folder Preview"
    The dialog shows a preview of folders that will be created before you confirm.

### Manual Creation

If creating folders manually, ensure:

- Academic year format: `2024-2025` (hyphen, not slash)
- Year format: `YR1`, `YR2`, etc.
- Semester format: `SEM1`, `SEM2`
- Subfolders: `scoresheets/`, `student_matters/`, `templates/`

---

## :material-file-tree: File Naming Conventions

### Scoresheet Files (Input)

Recommended naming pattern:

```
[UNIT_CODE]-[description].xlsx
```

**Examples:**

- `EMT3101-Thermodynamics.xlsx`
- `EMT3102-Solid-Mechanics.xlsx`
- `SMA2101-Engineering-Math.xlsx`

### Output Files

DEEPS automatically names output files with the academic year prefix:

```
[ACADEMIC_YEAR]_[YEAR]_[SEMESTER]_[type].xlsx
```

**Examples:**

| File | Description |
|------|-------------|
| `2024_2025_YR3_SEM1_consolidated_verified.xlsx` | Semester consolidated |
| `2024_2025_YR3_annual_consolidated.xlsx` | Annual consolidated |
| `2024_2025_YR3_SEM1_senate_document.docx` | Senate document |
| `2024_2025_YR3_SEM1_processing_report.txt` | Processing log |

---

## :material-backup-restore: Backup Recommendations

!!! danger "Always Back Up Your Data"
    Exam data is critical. Set up automatic backups to prevent data loss.

### Recommended Backup Structure

```
backup-location/
├── inputs/                 # Copy of all input files
│   └── 2024-2025/
├── outputs/                # Generated results
│   └── 2024-2025/
└── settings/               # App configuration
    └── settings.json
```

### Backup Methods

| Method | Description |
|--------|-------------|
| **Cloud sync** | Use rclone to sync to Google Drive |
| **External drive** | Regular copy to USB/external HDD |
| **Network share** | Copy to institutional backup server |

---

## :material-help-circle: Common Questions

??? question "Where should I put lecturer Excel files?"
    Place them in `inputs/[year]/[YR#]/[SEM#]/scoresheets/`

    Example: `inputs/2024-2025/YR3/SEM1/scoresheets/EMT3101.xlsx`

??? question "Can I change the folder structure?"
    DEEPS expects the standard structure. Changing it may cause processing errors.

??? question "What if a folder already exists?"
    The Create Academic Folder tool will detect existing folders and offer to open them instead of creating duplicates.

??? question "How do I process multiple semesters?"
    Open each semester folder separately and process one at a time. DEEPS processes one semester per session.

---

## :material-arrow-right: Next Steps

<div class="grid cards" markdown>

-   :material-file-excel: **Processing Scoresheets**

    ---

    Learn how to process and validate scoresheet data

    [:octicons-arrow-right-24: Processing Guide](processing-scoresheets.md)

-   :material-tools: **Tools Reference**

    ---

    Explore all available tools

    [:octicons-arrow-right-24: Tools Reference](tools-reference.md)

</div>
