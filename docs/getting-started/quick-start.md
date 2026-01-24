# Quick Start Guide

Process your first semester of exam scoresheets in 10 minutes.

---

## :material-clipboard-check: Prerequisites

Before starting, ensure you have:

- [x] DEEPS installed and licensed ([Installation Guide](installation.md))
- [x] Excel scoresheets from lecturers
- [x] University logo image (PNG format)
- [x] Basic folder structure created

---

## :material-numeric-1-circle: Prepare Your Scoresheets

### Expected Scoresheet Format

Each lecturer provides an Excel file with student marks:

```
┌────────────┬──────────────────┬──────┬────────┬──────┐
│ Reg. No    │ Name             │ CAT  │ Assign │ Exam │
├────────────┼──────────────────┼──────┼────────┼──────┤
│ E021-01-001│ John Doe         │ 25   │ 15     │ 45   │
│ E021-01-002│ Jane Smith       │ 28   │ 18     │ 52   │
│ ...        │ ...              │ ...  │ ...    │ ...  │
└────────────┴──────────────────┴──────┴────────┴──────┘
```

!!! tip "Scoresheet Tips"
    - First column should contain registration numbers
    - Names can be in one column or split (First, Last)
    - Mark columns should match the unit's assessment pattern
    - File name should include the unit code (e.g., `EMT2101-scores.xlsx`)

---

## :material-numeric-2-circle: Organize Input Folder

Place your scoresheets in the correct folder structure:

```
inputs/
└── 2024-2025/              # Academic year
    └── YR3/                # Year of study
        └── SEM1/           # Semester
            └── scoresheets/
                ├── EMT3101-Thermodynamics.xlsx
                ├── EMT3102-Mechanics.xlsx
                └── EMT3103-Electronics.xlsx
```

!!! info "Create Folder Structure"
    Use **Tools → Create Academic Folder** to automatically create this structure.

---

## :material-numeric-3-circle: Open Input Folder

1. Launch DEEPS
2. Click **File → Open Input Folder...**
3. Navigate to your semester folder (e.g., `inputs/2024-2025/YR3/SEM1`)
4. Click **Select Folder**

DEEPS will scan the `scoresheets/` subfolder and display found files.

---

## :material-numeric-4-circle: Process Scoresheets

### Start Processing

1. Review the list of detected scoresheet files
2. Click **Process Scoresheets**
3. DEEPS will:
   - Read each Excel file
   - Extract student marks
   - Validate data integrity
   - Calculate totals and grades
   - Generate consolidated results

### Monitor Progress

Watch the log panel for:

- :material-check: Successfully processed files
- :material-alert: Warnings (missing data, format issues)
- :material-close: Errors (unreadable files, invalid data)

---

## :material-numeric-5-circle: Review Outputs

After processing, DEEPS generates several output files:

### Consolidated Results

Located in `outputs/verified_results/2024-2025/YR3/SEM1/`:

| File | Description |
|------|-------------|
| `YR3_SEM1_consolidated_verified.xlsx` | All marks merged by student |
| `YR3_SEM1_pass_list.xlsx` | Students who passed all units |
| `YR3_SEM1_supp_list.xlsx` | Students with supplementary exams |
| `YR3_SEM1_special_cases.xlsx` | Cases requiring manual review |

### Raw Files

Located in `outputs/.raw/2024-2025/YR3/SEM1/`:

- Intermediate processing files
- Useful for debugging

---

## :material-numeric-6-circle: Generate Senate Document

Once processing is complete:

1. Go to **Tools → Generate Senate Documents...**
2. Select the processed semester
3. Configure document options:
   - Include pass list
   - Include supplementary list
   - Add special cases
4. Click **Generate**
5. Find the document in `outputs/senate_documents/`

---

## :material-check-all: Complete Workflow Summary

```
┌─────────────────────────────────────────────────────────────┐
│                    DEEPS Workflow                           │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  1. COLLECT         Gather Excel scoresheets from lecturers │
│        ↓                                                    │
│  2. ORGANIZE        Place in inputs/YEAR/YR#/SEM#/          │
│        ↓                                                    │
│  3. OPEN            File → Open Input Folder                │
│        ↓                                                    │
│  4. PROCESS         Click "Process Scoresheets"             │
│        ↓                                                    │
│  5. REVIEW          Check outputs for errors/warnings       │
│        ↓                                                    │
│  6. GENERATE        Tools → Generate Senate Documents       │
│        ↓                                                    │
│  7. SUBMIT          Send documents for approval             │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## :material-lightbulb: Tips for Success

!!! success "Best Practices"
    - **Consistent naming** - Use unit codes in filenames
    - **Backup originals** - Keep copies of lecturer files
    - **Review warnings** - Address issues before generating documents
    - **Test first** - Process one file to verify format works

!!! warning "Common Mistakes"
    - Mixing different years in the same folder
    - Incorrect column headers in scoresheets
    - Missing registration numbers
    - Processing wrong semester folder

---

## :material-arrow-right: Next Steps

<div class="grid cards" markdown>

-   :material-folder-multiple: **Folder Structure**

    ---

    Learn about the complete folder organization

    [:octicons-arrow-right-24: Folder Structure](../user-guide/folder-structure.md)

-   :material-tools: **Tools Reference**

    ---

    Explore all available tools and features

    [:octicons-arrow-right-24: Tools Reference](../user-guide/tools-reference.md)

-   :material-cog: **Settings**

    ---

    Configure DEEPS for your institution

    [:octicons-arrow-right-24: Settings Guide](../user-guide/settings.md)

</div>
