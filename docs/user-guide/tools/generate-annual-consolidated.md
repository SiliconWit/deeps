# 📅 Generate Annual Consolidated

Combine both semester results into an annual consolidated summary.

---

## :material-calendar-sync: Overview

The **Generate Annual Consolidated** tool combines SEM1 and SEM2 results into a comprehensive annual report. This provides a complete view of student performance for the entire academic year and is essential for progression decisions.

!!! info "When to Use This Tool"
    Use this tool when you need to:

    - Create year-end consolidated results
    - Determine annual progression status
    - Generate annual academic reports
    - Prepare data for graduation processing

---

## :material-navigation: Accessing the Tool

**Tools → Generate Annual Consolidated...**

---

## :material-clipboard-list-outline: Step-by-Step Guide

### :material-numeric-1-circle: Open the Dialog

Click **Tools → Generate Annual Consolidated...** to open the generator dialog.

### :material-numeric-2-circle: Select Semester 1 File

Choose the SEM1 consolidated results:

1. Click **Browse** for SEM1
2. Navigate to `outputs/verified_results/{academic_year}/{year}/SEM1/`
3. Select the `*_consolidated_verified.xlsx` file
4. Student data is loaded

### :material-numeric-3-circle: Select Semester 2 File

Choose the SEM2 consolidated results:

1. Click **Browse** for SEM2
2. Navigate to `outputs/verified_results/{academic_year}/{year}/SEM2/`
3. Select the `*_consolidated_verified.xlsx` file
4. Student data is merged with SEM1

!!! warning "File Order Matters"
    Ensure you select files from the same academic year and year of study. Mismatched files will produce incorrect results.

### :material-numeric-4-circle: Verify Student Matching

The tool displays matching statistics:

| Statistic | Description |
|-----------|-------------|
| **SEM1 Students** | Number of students in SEM1 file |
| **SEM2 Students** | Number of students in SEM2 file |
| **Matched** | Students found in both semesters |
| **SEM1 Only** | Students only in SEM1 (possible withdrawal/deferral) |
| **SEM2 Only** | Students only in SEM2 (possible late registration/transfer) |

Review any discrepancies before proceeding.

### :material-numeric-5-circle: Configure Options

Set annual consolidation options:

| Option | Description | Default |
|--------|-------------|---------|
| **Include All Students** | Include students from both semesters | Yes |
| **Calculate Annual Average** | Compute annual weighted average | Yes |
| **Determine Annual Status** | Assign annual case decision | Yes |
| **Include Unit Details** | Show all 12 units (6 per sem) | Yes |

### :material-numeric-6-circle: Select Output Location

Choose where to save the annual consolidated file:

1. Default: `outputs/verified_results/{academic_year}/{year}/ANNUAL/`
2. Click **Browse** to change if needed

### :material-numeric-7-circle: Generate

1. Click **Generate**
2. The tool merges data and calculates annual results
3. Success message displays output location
4. Click **Open Folder** to view the file

---

## :material-table: Annual Consolidated Structure

The generated file contains the following sheets:

=== ":material-view-list: Summary Sheet"
    **Annual Summary**

    | Column | Description |
    |--------|-------------|
    | S/N | Serial number |
    | Reg. No. | Registration number |
    | Name | Student name |
    | SEM1 Average | Semester 1 average |
    | SEM2 Average | Semester 2 average |
    | Annual Average | Weighted annual average |
    | Status | Annual case decision |

=== ":material-file-table: SEM1 Details"
    **Semester 1 Unit Results**

    All SEM1 units with:

    - CAT, Exam, Lab marks
    - Total and Grade
    - Unit status (Pass/Fail/Supp)

=== ":material-file-table: SEM2 Details"
    **Semester 2 Unit Results**

    All SEM2 units with:

    - CAT, Exam, Lab marks
    - Total and Grade
    - Unit status (Pass/Fail/Supp)

=== ":material-chart-bar: Statistics"
    **Annual Statistics**

    - Total students
    - Pass/Fail/Supp counts
    - Average by semester
    - Distribution by grade

---

## :material-calculator: Annual Calculations

=== ":material-sigma: Annual Average"
    **Calculation Method**

    ```
    Annual Average = (SEM1 Average × SEM1 Credits + SEM2 Average × SEM2 Credits) / Total Credits
    ```

    For equal credit distribution:

    ```
    Annual Average = (SEM1 Average + SEM2 Average) / 2
    ```

=== ":material-clipboard-check: Annual Status"
    **Status Determination**

    | Scenario | Annual Status |
    |----------|---------------|
    | All units passed in both semesters | PASS |
    | Outstanding supp(s) from either semester | SUPP |
    | Retake case in either semester | RETAKE |
    | Meets discontinuation criteria | DISCONTINUED |

---

## :material-account-alert: Handling Special Cases

<div class="grid cards" markdown>

-   :material-account-question: **SEM1-Only Students**

    ---

    Students who appear only in SEM1 (withdrew, deferred, or transferred out):

    - Included with SEM2 marked as "N/A"
    - Annual status: "INCOMPLETE"
    - Requires manual review

-   :material-account-plus: **SEM2-Only Students**

    ---

    Students who appear only in SEM2 (late entry, transfer in):

    - Included with SEM1 marked as "N/A"
    - Annual status: "INCOMPLETE"
    - Requires manual review

-   :material-swap-horizontal: **Different Registration Numbers**

    ---

    Students with different reg numbers between semesters (corrections):

    - Listed as separate entries initially
    - Use Update Consolidated to merge if needed

</div>

---

## :material-lightbulb-on: Best Practices

<div class="grid cards" markdown>

-   :material-check-all: **Verify Both Semesters**

    ---

    Ensure both SEM1 and SEM2 are fully verified before generating annual consolidated.

-   :material-account-check: **Review Discrepancies**

    ---

    Investigate students appearing in only one semester before finalizing.

-   :material-calendar-clock: **Generate After SEM2**

    ---

    Wait until SEM2 processing (including supps) is complete.

-   :material-backup-restore: **Keep Source Files**

    ---

    Retain both semester files even after generating annual consolidated.

</div>

---

## :material-alert-outline: Troubleshooting

??? warning "Mismatched student counts"
    **Problem:** Number of matched students is lower than expected.

    **Solutions:**

    1. Verify both files are from the same academic year
    2. Check for registration number variations between semesters
    3. Review the SEM1-only and SEM2-only lists
    4. Use Update Consolidated to correct registration numbers if needed

??? warning "Incorrect annual average"
    **Problem:** Annual average doesn't seem correct.

    **Solutions:**

    1. Verify the semester averages in source files
    2. Check that unit weights are configured correctly
    3. Review the calculation method (weighted vs. simple average)
    4. Recalculate manually to verify

??? warning "Wrong annual status"
    **Problem:** A student's annual status doesn't match expectations.

    **Solutions:**

    1. Review both semester case decisions
    2. Check for outstanding supp results
    3. Verify IGS unit markings
    4. Review the case decision rules

---

## :material-arrow-right: Related Tools

<div class="grid cards" markdown>

-   :material-file-document-edit: **Senate Documents**

    ---

    Generate senate documents from annual results

    [:octicons-arrow-right-24: Senate Documents](generate-senate-documents.md)

-   :material-filter-variant: **Extract Cases**

    ---

    Extract students by annual status

    [:octicons-arrow-right-24: Extract Cases](extract-cases.md)

</div>
