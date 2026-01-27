# 📑 Sheet Extractor

Extract specific sheets from multi-sheet Excel workbooks into separate files.

---

## :material-file-table-box-multiple: Overview

The **Sheet Extractor** tool allows you to extract individual sheets from an Excel workbook and save them as separate files. This is useful when you need to share specific unit data without revealing other sheets.

!!! info "When to Use This Tool"
    Use this tool when you need to:

    - Share a single unit's results with a specific lecturer
    - Create standalone files from a combined workbook
    - Separate different data types into individual files
    - Archive specific sheets for records

---

## :material-navigation: Accessing the Tool

**Tools → Sheet Extractor...**

---

## :material-clipboard-list-outline: Step-by-Step Guide

### :material-numeric-1-circle: Open the Dialog

Click **Tools → Sheet Extractor...** to open the extraction dialog.

### :material-numeric-2-circle: Select Source File

Choose the Excel workbook containing the sheets you want to extract:

1. Click **Browse**
2. Navigate to and select the `.xlsx` file
3. The sheet list populates automatically

### :material-numeric-3-circle: Select Sheets to Extract

Choose which sheets to extract:

| Selection Mode | Description |
|---------------|-------------|
| **Select All** | Extract every sheet in the workbook |
| **Individual Selection** | Click checkboxes to select specific sheets |
| **Deselect All** | Clear all selections |

!!! tip "Sheet Preview"
    Hover over a sheet name to see a preview of its contents (first few rows).

### :material-numeric-4-circle: Choose Output Options

Configure how extracted sheets are saved:

| Option | Description |
|--------|-------------|
| **Output Folder** | Where to save extracted sheets |
| **Naming Pattern** | How to name the output files |
| **Format** | Excel (.xlsx) or CSV (.csv) |

**Naming Pattern Options:**

- `{sheet_name}` - Uses the sheet name as filename
- `{source}_{sheet_name}` - Combines source filename with sheet name
- `{sheet_name}_{date}` - Adds current date to filename

### :material-numeric-5-circle: Extract

1. Click **Extract**
2. Progress bar shows extraction status
3. Success message displays the number of sheets extracted
4. Click **Open Folder** to view the files

---

## :material-code-tags: Naming Patterns

Use these placeholders to customize output filenames:

| Placeholder | Replaced With | Example |
|-------------|---------------|---------|
| `{sheet_name}` | Name of the sheet | `EMT3101` |
| `{source}` | Source workbook name | `consolidated` |
| `{date}` | Current date | `2024-12-15` |
| `{index}` | Sheet number (1, 2, 3...) | `1` |

**Example Patterns:**

| Pattern | Output |
|---------|--------|
| `{sheet_name}` | `EMT3101.xlsx` |
| `{source}_{sheet_name}` | `consolidated_EMT3101.xlsx` |
| `Sheet_{index}_{sheet_name}` | `Sheet_1_EMT3101.xlsx` |

---

## :material-lightbulb-on: Use Cases

<div class="grid cards" markdown>

-   :material-share-variant: **Share with Lecturers**

    ---

    Extract a specific unit's sheet to share results with the responsible lecturer without revealing other units' data.

-   :material-archive: **Archiving**

    ---

    Extract and archive specific sheets for departmental records or auditing purposes.

-   :material-database-export: **Data Migration**

    ---

    Extract sheets to prepare data for import into other systems or databases.

-   :material-content-copy: **Backup Specific Data**

    ---

    Create standalone backups of critical sheets before making changes to the workbook.

</div>

---

## :material-alert-outline: Troubleshooting

??? warning "No sheets listed"
    **Problem:** The sheet list is empty after selecting a file.

    **Solutions:**

    1. Verify the file is a valid Excel workbook (.xlsx)
    2. Check that the file is not corrupted
    3. Ensure the file contains at least one sheet
    4. Try opening the file in Excel first to verify it works

??? warning "Extraction fails for some sheets"
    **Problem:** Some sheets fail to extract while others succeed.

    **Solutions:**

    1. Check if the sheet is protected or hidden
    2. Verify the sheet name doesn't contain invalid filename characters
    3. Ensure you have write permissions to the output folder
    4. Try extracting the problematic sheet individually

??? warning "Formulas not preserved"
    **Problem:** Extracted sheets show values instead of formulas.

    **Note:** This is expected behavior. Extracted sheets contain:

    - All values and formatting
    - Cell styles and colors
    - Column widths and row heights

    **Formulas are converted to values** because cross-sheet references would break in standalone files.

---

## :material-arrow-right: Related Tools

<div class="grid cards" markdown>

-   :material-file-pdf-box: **XLSX to PDF**

    ---

    Convert Excel files to PDF format

    [:octicons-arrow-right-24: XLSX to PDF](xlsx-to-pdf.md)

-   :material-file-edit: **Update Consolidated**

    ---

    Edit consolidated results files

    [:octicons-arrow-right-24: Update Consolidated](update-consolidated.md)

</div>
