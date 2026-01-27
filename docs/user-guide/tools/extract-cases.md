# 🔍 Extract Cases

Extract students by case type from consolidated results into separate files.

---

## :material-filter-variant: Overview

The **Extract Cases** tool filters and extracts students from consolidated results based on their case decision (Pass, Supplementary, Retake, etc.). This creates separate files for different student categories, useful for administrative workflows.

!!! info "When to Use This Tool"
    Use this tool when you need to:

    - Create separate lists for different student outcomes
    - Generate supplementary exam lists
    - Identify students requiring academic review
    - Prepare case-specific reports for departments

---

## :material-navigation: Accessing the Tool

**Tools → Extract Cases...**

---

## :material-clipboard-list-outline: Step-by-Step Guide

### :material-numeric-1-circle: Open the Dialog

Click **Tools → Extract Cases...** to open the extraction dialog.

### :material-numeric-2-circle: Select Consolidated File

Choose the consolidated results file:

1. Click **Browse**
2. Navigate to the consolidated file
3. Select `*_consolidated_verified.xlsx`
4. The tool analyzes the file and shows available cases

### :material-numeric-3-circle: Select Case Types

Choose which cases to extract:

| Case Type | Description | Students Included |
|-----------|-------------|-------------------|
| **Pass** | Students proceeding normally | All units ≥ 40 marks |
| **Supplementary** | Students with supp exams | At least one unit < 40 |
| **Retake** | Students requiring retake | Multiple failures or policy violation |
| **Discontinued** | Students to be discontinued | Exceeded retake limits |
| **Special** | Requires manual review | Unusual cases flagged by system |

!!! tip "Multiple Selections"
    You can select multiple case types to extract them all at once. Each case type creates a separate file.

### :material-numeric-4-circle: Configure Output

Set extraction options:

| Option | Description |
|--------|-------------|
| **Output Folder** | Where to save extracted files |
| **Include Summary** | Add a summary sheet with statistics |
| **Include Full Details** | Include all columns from original |

### :material-numeric-5-circle: Extract

1. Click **Extract**
2. The tool creates separate files for each case type
3. Success message shows the number of students in each category
4. Click **Open Folder** to view the files

---

## :material-file-document-multiple: Output Files

The tool creates separate Excel files for each selected case type:

```
extracted_cases/
├── 2024_2025_YR3_SEM1_PASS_students.xlsx        # 45 students
├── 2024_2025_YR3_SEM1_SUPP_students.xlsx        # 12 students
├── 2024_2025_YR3_SEM1_RETAKE_students.xlsx      # 3 students
├── 2024_2025_YR3_SEM1_SPECIAL_students.xlsx     # 2 students
└── 2024_2025_YR3_SEM1_extraction_summary.xlsx   # Summary statistics
```

Each extracted file contains:

- Registration number
- Student name
- All unit marks and grades
- Total marks and overall grade
- Case decision
- Relevant rule citations

---

## :material-chart-pie: Case Type Details

=== ":material-check-circle: Pass"
    **Students Proceeding Normally**

    - All units passed (≥ 40 marks)
    - No outstanding supplementary exams
    - Ready for progression to next semester/year

    **Typical actions:**

    - Update student records
    - Generate progression lists
    - Prepare for next semester registration

=== ":material-alert-circle: Supplementary"
    **Students with Supplementary Exams**

    - One or more units < 40 marks (first attempt)
    - Eligible for supplementary examination
    - Must pass supp exam to proceed

    **Typical actions:**

    - Generate supplementary exam lists
    - Schedule supplementary examinations
    - Notify affected students

=== ":material-refresh: Retake"
    **Students Requiring Course Retake**

    - Failed supplementary exam(s)
    - Multiple unit failures
    - Policy-based retake requirement

    **Typical actions:**

    - Generate retake lists
    - Calculate fee implications
    - Update academic standing

=== ":material-close-circle: Discontinued"
    **Students to be Discontinued**

    - Exceeded maximum retake attempts
    - Policy-mandated discontinuation
    - Requires academic board review

    **Typical actions:**

    - Prepare discontinuation letters
    - Generate appeal information
    - Update enrollment status

=== ":material-help-circle: Special Cases"
    **Requires Manual Review**

    - Deferred exams
    - Medical cases
    - Unusual circumstances
    - System-flagged anomalies

    **Typical actions:**

    - Manual case-by-case review
    - Gather supporting documentation
    - Present to academic committee

---

## :material-lightbulb-on: Best Practices

<div class="grid cards" markdown>

-   :material-check-all: **Verify Source Data**

    ---

    Ensure the consolidated file is complete and accurate before extracting cases.

-   :material-lock: **Restrict Access**

    ---

    Case lists contain sensitive student information. Limit distribution to authorized personnel only.

-   :material-calendar-check: **Extract After Review**

    ---

    Run extractions after the departmental review process to include any corrections.

-   :material-archive: **Archive Extractions**

    ---

    Keep extracted case files with the semester's records for future reference.

</div>

---

## :material-alert-outline: Troubleshooting

??? warning "No students in a case type"
    **Problem:** A case type shows 0 students when you expected some.

    **Solutions:**

    1. Verify the consolidated file is correct
    2. Check case decision column in the source file
    3. Ensure the file was processed with the latest rules
    4. Re-run Update Consolidated to refresh case decisions

??? warning "Student appears in wrong case"
    **Problem:** A student is categorized incorrectly.

    **Solutions:**

    1. Review the student's marks in the consolidated file
    2. Check the case decision rules in **View → Case Decision Rules**
    3. Verify IGS/retake unit markings
    4. Use Update Consolidated to correct if needed

---

## :material-arrow-right: Related Tools

<div class="grid cards" markdown>

-   :material-file-edit: **Update Consolidated**

    ---

    Edit and recalculate consolidated results

    [:octicons-arrow-right-24: Update Consolidated](update-consolidated.md)

-   :material-file-document-edit: **Generate Senate Documents**

    ---

    Create official documents with case listings

    [:octicons-arrow-right-24: Senate Documents](generate-senate-documents.md)

</div>
