# 📜 Generate Senate Documents

Create official senate documents from processed exam results.

---

## :material-file-document-edit: Overview

The **Generate Senate Documents** tool creates formal academic documents from your processed results. These documents are formatted for presentation to senate meetings and include all required sections, citations, and formatting.

!!! info "When to Use This Tool"
    Use this tool when you need to:

    - Prepare results for senate approval
    - Generate official examination reports
    - Create case listings with rule citations
    - Produce print-ready senate submission documents

---

## :material-navigation: Accessing the Tool

**Tools → Generate Senate Documents...**

---

## :material-clipboard-list-outline: Step-by-Step Guide

### :material-numeric-1-circle: Open the Dialog

Click **Tools → Generate Senate Documents...** to open the generator dialog.

### :material-numeric-2-circle: Select Consolidated File

Choose the verified consolidated results file:

1. Click **Browse**
2. Navigate to `outputs/verified_results/{academic_year}/{year}/{semester}/`
3. Select the `*_consolidated_verified.xlsx` file
4. Student data is loaded and analyzed

### :material-numeric-3-circle: Enter Meeting Details

Provide information about the senate meeting:

| Field | Description | Example |
|-------|-------------|---------|
| **Meeting Date** | Date of the senate meeting | 15th December 2024 |
| **Meeting Venue** | Location of the meeting | Senate Hall |
| **Meeting Reference** | Meeting number/reference | S.M. 423/24 |
| **Chairperson** | Name of the chairperson | Prof. John Smith |

### :material-numeric-4-circle: Select Document Sections

Choose which sections to include:

| Section | Description | Default |
|---------|-------------|---------|
| **Header with Logo** | Institution logo and header | Yes |
| **Meeting Details** | Date, venue, reference | Yes |
| **Pass List** | Students proceeding normally | Yes |
| **Supplementary Cases** | Students with supp exams | Yes |
| **Retake Cases** | Students requiring retake | Yes |
| **Special Cases** | Cases requiring manual review | Yes |
| **Rule Citations** | Reference to regulations | Yes |
| **Signature Lines** | Spaces for official signatures | Yes |

### :material-numeric-5-circle: Configure Formatting

Set document formatting options:

| Option | Description |
|--------|-------------|
| **Paper Size** | A4, Letter |
| **Margins** | Normal, Narrow |
| **Font** | Times New Roman, Arial |
| **Include Statistics** | Summary statistics section |

### :material-numeric-6-circle: Generate

1. Click **Generate**
2. Documents are created in both Word (.docx) and PDF formats
3. Success message shows the output location
4. Click **Open Folder** to view the documents

---

## :material-file-document-multiple: Document Sections

=== ":material-file-document: Header"
    **Document Header**

    - Institution logo (centered)
    - Document title: "EXAMINATION RESULTS"
    - Academic year and semester
    - Course/Program name
    - Date of document generation

=== ":material-check-circle: Pass List"
    **Candidates Proceeding Normally**

    Lists all students who passed all units:

    | S/N | Reg. No. | Name | Average | Remarks |
    |-----|----------|------|---------|---------|
    | 1 | E022-01-1234/2024 | John Doe | 65.4 | Pass |
    | 2 | E022-01-1235/2024 | Jane Smith | 72.1 | Pass |

    Includes reference to ENG. 13 (a) or relevant regulation.

=== ":material-alert-circle: Supplementary Cases"
    **Candidates with Supplementary Examinations**

    Lists students requiring supp exams with:

    - Registration number and name
    - Failed unit(s) with marks
    - Supp exam date (if scheduled)
    - Rule citation

    !!! example "Sample Entry"
        **E022-01-1240/2024 - Alex Brown**

        Failed Units: EMT3103 (38%), EMT3105 (35%)

        *Ref: ENG. 15 (d) - Student shall be allowed supplementary examination*

=== ":material-refresh: Retake Cases"
    **Candidates Required to Retake**

    Lists students who must repeat:

    - Registration number and name
    - Reason for retake
    - Academic standing
    - Rule citation

=== ":material-help-circle: Special Cases"
    **Cases for Individual Consideration**

    Lists unusual cases requiring senate attention:

    - Deferred examinations
    - Medical cases
    - Extenuating circumstances
    - System-flagged anomalies

    Each case includes:

    - Student details
    - Case description
    - Supporting information
    - Recommendation

=== ":material-signature-freehand: Signatures"
    **Signature Section**

    Signature lines for:

    - Examination Officer
    - Head of Department
    - Dean of Faculty
    - Academic Registrar

    Each line includes:

    - Name field
    - Signature space
    - Date field

---

## :material-cog: Rule Citations

The document automatically includes relevant regulation citations:

| Rule | Description | Auto-Applied To |
|------|-------------|-----------------|
| **ENG. 13 (a)** | Normal progression | Pass cases |
| **ENG. 15 (d)** | Supplementary examinations | Supp cases |
| **ENG. 16** | Retake requirements | Retake cases |
| **ENG. 17** | Discontinuation | Disc cases |

!!! tip "Custom Rules"
    Configure rule citations in **Settings → Paths → Rules JSON** or view current rules via **View → Engineering Rules**.

---

## :material-lightbulb-on: Best Practices

<div class="grid cards" markdown>

-   :material-check-all: **Verify Data First**

    ---

    Review the consolidated file thoroughly before generating documents. Corrections after printing are difficult.

-   :material-calendar-check: **Meeting Details**

    ---

    Confirm the correct meeting date, venue, and reference number before generating.

-   :material-printer: **Print Preview**

    ---

    Always preview the PDF before printing to catch formatting issues.

-   :material-backup-restore: **Keep Copies**

    ---

    Archive both the Word and PDF versions with the semester's records.

</div>

---

## :material-file-tree: Output Files

Generated documents are saved to:

```
outputs/senate_documents/{academic_year}/{year}/{semester}/
├── 2024_2025_YR3_SEM1_senate_document.docx
├── 2024_2025_YR3_SEM1_senate_document.pdf
└── 2024_2025_YR3_SEM1_generation_log.txt
```

| File | Purpose |
|------|---------|
| **.docx** | Editable version for final adjustments |
| **.pdf** | Print-ready version for distribution |
| **_log.txt** | Generation details and statistics |

---

## :material-alert-outline: Troubleshooting

??? warning "Logo not appearing"
    **Problem:** The institution logo is missing from the document.

    **Solutions:**

    1. Check logo path in Settings → Logo Configuration
    2. Verify the logo file exists and is accessible
    3. Ensure the logo is in a supported format (PNG, JPG)
    4. Try re-selecting the logo file in settings

??? warning "Rule citations incorrect"
    **Problem:** The wrong regulation is cited for a case.

    **Solutions:**

    1. Review the case decision rules in **View → Case Decision Rules**
    2. Check the rules JSON configuration
    3. Manually edit the Word document if needed
    4. Contact support if the citation logic appears wrong

??? warning "Formatting issues in PDF"
    **Problem:** The PDF has unexpected formatting (page breaks, margins, etc.).

    **Solutions:**

    1. Try different paper size settings
    2. Adjust margins in the options
    3. Edit the Word version and re-export to PDF
    4. Check that all required fonts are installed

---

## :material-arrow-right: Related Tools

<div class="grid cards" markdown>

-   :material-filter-variant: **Extract Cases**

    ---

    Extract students by case type for review

    [:octicons-arrow-right-24: Extract Cases](extract-cases.md)

-   :material-calendar-sync: **Annual Consolidated**

    ---

    Generate annual consolidated results

    [:octicons-arrow-right-24: Annual Consolidated](generate-annual-consolidated.md)

</div>
