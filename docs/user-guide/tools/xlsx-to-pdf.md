# 📄 XLSX to PDF Converter

Convert Excel spreadsheets to PDF format for printing and distribution.

---

## :material-file-pdf-box: Overview

The **XLSX to PDF Converter** tool converts Excel files (.xlsx) to PDF format. This is useful for creating print-ready versions of scoresheets, consolidated results, and reports.

!!! info "When to Use This Tool"
    Use this tool when you need to:

    - Print exam results for notice boards
    - Create PDF copies for digital archives
    - Share results without allowing editing
    - Submit documents to examination offices

---

## :material-navigation: Accessing the Tool

**Tools → XLSX to PDF Converter...**

---

## :material-clipboard-list-outline: Step-by-Step Guide

### :material-numeric-1-circle: Open the Dialog

Click **Tools → XLSX to PDF Converter...** to open the conversion dialog.

### :material-numeric-2-circle: Select Excel Files

Choose the Excel file(s) to convert:

1. Click **Browse** or drag-and-drop files
2. Select one or more `.xlsx` files
3. Files appear in the list with their names

!!! tip "Batch Conversion"
    You can select multiple files at once. Hold `Ctrl` (Windows/Linux) or `Cmd` (Mac) to select multiple files.

### :material-numeric-3-circle: Configure Options

Set your conversion preferences:

| Option | Description | Default |
|--------|-------------|---------|
| **Page Orientation** | Portrait or Landscape | Landscape |
| **Paper Size** | A4, Letter, Legal, etc. | A4 |
| **Fit to Page** | Scale content to fit page width | Enabled |
| **Include Gridlines** | Show cell borders in output | Enabled |
| **Sheet Selection** | Convert all sheets or specific ones | All sheets |

### :material-numeric-4-circle: Choose Output Location

Select where to save the PDF files:

- **Same folder** - Save PDFs alongside original Excel files
- **Custom folder** - Choose a different destination

### :material-numeric-5-circle: Convert

1. Click **Convert**
2. Progress bar shows conversion status
3. Success message displays when complete
4. Click **Open Folder** to view the PDFs

---

## :material-cog: Conversion Options

=== ":material-page-layout-header: Page Layout"
    | Setting | Options | Recommended |
    |---------|---------|-------------|
    | **Orientation** | Portrait, Landscape | Landscape for wide tables |
    | **Paper Size** | A4, Letter, Legal, A3 | A4 |
    | **Margins** | Normal, Narrow, Wide | Narrow |
    | **Scaling** | Fit to page, Actual size | Fit to page |

=== ":material-table: Content Options"
    | Setting | Description | Default |
    |---------|-------------|---------|
    | **Gridlines** | Show cell borders | On |
    | **Headers** | Include column headers | On |
    | **Row numbers** | Include row numbers | Off |
    | **Print area** | Convert entire sheet or selection | Entire sheet |

=== ":material-file-document-multiple: Multi-Sheet Handling"
    | Setting | Description |
    |---------|-------------|
    | **All sheets** | Convert every sheet to PDF |
    | **Active sheet** | Convert only the currently active sheet |
    | **Selected sheets** | Choose specific sheets to convert |

---

## :material-lightbulb-on: Best Practices

<div class="grid cards" markdown>

-   :material-check-circle: **Use Landscape for Results**

    ---

    Consolidated results tables are typically wide. Use landscape orientation to fit all columns on one page.

-   :material-check-circle: **Check Print Preview**

    ---

    Before converting, use Excel's Print Preview to verify how content will appear in the PDF.

-   :material-check-circle: **Name Files Clearly**

    ---

    Use descriptive names like `YR3_SEM1_consolidated_results.xlsx` for easy identification.

-   :material-alert-circle: **Verify Before Sharing**

    ---

    Always review the PDF output to ensure all data is visible and correctly formatted.

</div>

---

## :material-alert-outline: Troubleshooting

??? warning "Text is cut off in PDF"
    **Problem:** Some text is truncated or missing in the PDF.

    **Solutions:**

    1. Use **Fit to Page** option to scale content
    2. Switch to **Landscape** orientation
    3. Reduce font size in the original Excel file
    4. Use **A3** paper size for very wide tables

??? warning "PDF is blank or has missing data"
    **Problem:** The PDF file appears empty or has missing sheets.

    **Solutions:**

    1. Ensure the Excel file has data (not just formatting)
    2. Check that sheets are not hidden in Excel
    3. Verify the file is not password-protected
    4. Try converting a single sheet first

??? warning "Conversion fails with error"
    **Problem:** The tool shows an error during conversion.

    **Solutions:**

    1. Close the Excel file if it's open in another program
    2. Check that you have write permissions to the output folder
    3. Ensure the Excel file is not corrupted
    4. Try saving the Excel file with a new name and convert again

---

## :material-arrow-right: Related Tools

<div class="grid cards" markdown>

-   :material-file-table-box-multiple: **Sheet Extractor**

    ---

    Extract individual sheets from multi-sheet workbooks

    [:octicons-arrow-right-24: Sheet Extractor](sheet-extractor.md)

-   :material-file-edit: **Update Consolidated**

    ---

    Edit and update consolidated results files

    [:octicons-arrow-right-24: Update Consolidated](update-consolidated.md)

</div>
