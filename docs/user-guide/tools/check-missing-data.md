# ✅ Check Missing Data

Verify data completeness by checking for missing folders and files.

---

## :material-folder-search: Overview

The **Check Missing Data** tool (Data Integrity Checker) scans your data directories to identify missing academic year folders, semester data, and consolidated files. It uses your course duration configuration to determine what data should exist.

!!! info "When to Use This Tool"
    Use this tool when you need to:

    - Verify all required data folders exist
    - Identify gaps in your exam processing history
    - Audit data completeness before academic reviews
    - Ensure no semesters have been accidentally skipped

---

## :material-navigation: Accessing the Tool

**Tools → Check Missing Data...**

---

## :material-clipboard-list-outline: Step-by-Step Guide

### :material-numeric-1-circle: Open the Dialog

Click **Tools → Check Missing Data...** to open the data integrity checker.

### :material-numeric-2-circle: Select Check Options

Choose what to check:

| Option | Description |
|--------|-------------|
| **Check Input Folders** | Verify input folder structure exists |
| **Check Output/Consolidated Files** | Verify processed results exist |

!!! tip "Both Options"
    For a complete check, enable both options. This ensures you have both raw data and processed results for all semesters.

### :material-numeric-3-circle: Run Check

1. Click **Run Check**
2. Progress bar shows the scan progress
3. Results display when complete

### :material-numeric-4-circle: Review Results

Results are displayed in three sections:

=== ":material-chart-pie: Summary"
    **Overall Statistics**

    Shows total issues found:

    - **Errors** - Critical missing items (entire academic years)
    - **Warnings** - Important missing items (semester folders)
    - **Info** - Optional missing items (consolidated files)

    Summary box color indicates severity:

    - Green - All data present
    - Yellow - Warnings only
    - Red - Errors found

=== ":material-calendar-multiple: Academic Years"
    **Expected Years Coverage**

    Shows expected academic years based on course duration:

    | Year | Status |
    |------|--------|
    | 2021-2022 | :material-check-circle:{ .success } Found |
    | 2022-2023 | :material-check-circle:{ .success } Found |
    | 2023-2024 | :material-close-circle:{ .error } Missing |
    | 2024-2025 | :material-check-circle:{ .success } Found |
    | 2025-2026 | :material-check-circle:{ .success } Found |

=== ":material-tree: Missing Items"
    **Detailed Missing Items**

    Tree view organized by severity:

    ```
    Errors (2 items)
    ├── 📁 Academic year folder: 2023-2024
    └── 📁 2024-2025/YR3

    Warnings (5 items)
    ├── 📁 Missing semester: 2024-2025/YR2/SEM2
    ├── 📁 Missing scoresheets folder: 2024-2025/YR4/SEM1
    └── ...

    Info (3 items)
    ├── 📄 Missing consolidated: 2024-2025/YR1/SEM2
    └── ...
    ```

### :material-numeric-5-circle: Export Report

To save a detailed report:

1. Click **Export Report**
2. Choose save location (default: `outputs/` folder)
3. Report is saved as text file with timestamp
4. Optionally click **Yes** to open the folder

---

## :material-calculator: How It Works

### Expected Data Calculation

The tool calculates expected academic years based on:

1. **Course Duration** - Read from syllabus JSON (e.g., 5 years)
2. **Current Academic Year** - Determined from today's date
3. **Expected Years** - Current year back to (current - duration + 1)

!!! example "Example Calculation"
    For a 5-year course in January 2026:

    - Current academic year: 2025-2026
    - Expected years: 2021-2022 through 2025-2026 (5 years)
    - Each year should have YR1-YR5 folders with SEM1/SEM2

### Folder Structure Checked

For each expected academic year and year of study:

```
inputs/{academic_year}/YR{n}/
├── SEM1/
│   └── scoresheets/        ← Must contain .xlsx files
└── SEM2/
    └── scoresheets/        ← Must contain .xlsx files

outputs/verified_results/{academic_year}/YR{n}/
├── SEM1/
│   └── 2024_2025_YR3_SEM1_consolidated_verified.xlsx
├── SEM2/
│   └── 2024_2025_YR3_SEM2_consolidated_verified.xlsx
└── ANNUAL/
    └── 2024_2025_YR3_annual_consolidated.xlsx
```

!!! info "Hidden Raw Folder"
    Auto-generated backups are stored in the hidden `outputs/.raw/` folder. These are reference copies and should not be edited directly.

---

## :material-alert: Severity Levels

| Severity | Icon | Description | Examples |
|----------|------|-------------|----------|
| **Error** | :material-close-circle:{ .error } | Critical missing data | Academic year folder, Year folder |
| **Warning** | :material-alert:{ .warning } | Important missing data | Semester folder, Empty scoresheets |
| **Info** | :material-information:{ .info } | Optional missing data | Consolidated files, Annual files |

---

## :material-file-document: Report Contents

The exported report includes:

```
======================================================================
DATA INTEGRITY CHECK REPORT
======================================================================
Generated: 2026-01-27 10:30:45

Course Duration: 5 years
Current Academic Year: 2025-2026

SUMMARY:
  Total Issues: 15
    - Errors: 2
    - Warnings: 8
    - Info: 5

----------------------------------------------------------------------
DETAILED STATUS BY ACADEMIC YEAR
----------------------------------------------------------------------

📅 2021-2022: ✓ FOUND
   └── YR1:
       └── SEM1: ✓ Exists | Scoresheets: ✓ (6 files) | Consolidated: ✓
       └── SEM2: ✓ Exists | Scoresheets: ✓ (6 files) | Consolidated: ✓
       └── ANNUAL: ✓ Consolidated exists

📅 2023-2024: ✗ MISSING
   (Entire academic year folder is missing)

...

----------------------------------------------------------------------
ISSUES REQUIRING ATTENTION
----------------------------------------------------------------------

[CRITICAL] (2 items)
  📁 Academic year folder: 2023-2024
  📁 2024-2025/YR3

[WARNINGS] (8 items)
  📁 Missing semester: 2024-2025/YR2/SEM2
  ...
```

---

## :material-lightbulb-on: Best Practices

<div class="grid cards" markdown>

-   :material-calendar-check: **Run Regularly**

    ---

    Run the check at the start of each semester to ensure all historical data is intact.

-   :material-backup-restore: **Before Backups**

    ---

    Run before creating backups to ensure you're not backing up incomplete data.

-   :material-file-check: **After Migration**

    ---

    Run after moving data to a new computer or restoring from backup.

-   :material-archive: **End of Year**

    ---

    Run at the end of each academic year to verify completeness.

</div>

---

## :material-cog: Configuration

### Syllabus JSON Requirement

The tool requires the course syllabus JSON to be configured:

1. Go to **File → Settings**
2. Select the **Paths** tab
3. Set **Units JSON** to your course syllabus file

The syllabus determines course duration by counting year keys (1st Year, 2nd Year, etc.).

!!! warning "Missing Configuration"
    If the syllabus JSON is not configured, the tool will display a warning with instructions to configure it.

---

## :material-alert-outline: Troubleshooting

??? warning "Course duration seems wrong"
    **Problem:** The tool expects more or fewer years than your course has.

    **Solutions:**

    1. Check your syllabus JSON file structure
    2. Verify year keys match pattern: "1st Year", "2nd Year", etc.
    3. Update the syllabus file if years are missing
    4. Re-run the check after corrections

??? warning "Too many missing items"
    **Problem:** The report shows many missing items that shouldn't be missing.

    **Solutions:**

    1. Verify the data base directory path in settings
    2. Check folder naming matches expected pattern
    3. Ensure folders aren't in a different location
    4. Create missing folders using **Create Academic Folder** tool

??? warning "Export fails"
    **Problem:** Cannot export the report.

    **Solutions:**

    1. Check write permissions to the output folder
    2. Ensure the output folder exists
    3. Try exporting to a different location
    4. Close any programs that might have the file open

---

## :material-arrow-right: Related Tools

<div class="grid cards" markdown>

-   :material-folder-plus: **Create Academic Folder**

    ---

    Create missing folder structures

    [:octicons-arrow-right-24: Create Academic Folder](create-academic-folder.md)

-   :material-cog: **Settings**

    ---

    Configure paths and course structure

    [:octicons-arrow-right-24: Settings Guide](../settings.md)

</div>
