# ✏️ Update Consolidated

Edit and recalculate existing consolidated results files.

---

## :material-file-edit: Overview

The **Update Consolidated** tool allows you to make corrections to an already-processed consolidated results file. It automatically recalculates grades, classifications, and case decisions when you modify marks.

!!! info "When to Use This Tool"
    Use this tool when you need to:

    - Correct data entry errors in marks
    - Add missing students to the consolidated file
    - Update marks after supplementary exams
    - Recalculate grades after manual adjustments

---

## :material-navigation: Accessing the Tool

**Tools → Update Consolidated...**

---

## :material-clipboard-list-outline: Step-by-Step Guide

### :material-numeric-1-circle: Open the Dialog

Click **Tools → Update Consolidated...** to open the editor dialog.

### :material-numeric-2-circle: Select Consolidated File

Choose the consolidated results file to edit:

1. Click **Browse**
2. Navigate to `outputs/verified_results/{academic_year}/{year}/{semester}/`
3. Select the consolidated file (e.g., `2024_2025_YR3_SEM1_consolidated_verified.xlsx`)
4. The file loads with student data displayed in a table

### :material-numeric-3-circle: Make Edits

You can edit the following fields:

| Field | Editable | Auto-Recalculated |
|-------|----------|-------------------|
| **Registration Number** | Yes | - |
| **Student Name** | Yes | - |
| **CAT Marks** | Yes | Grade, Total |
| **Exam Marks** | Yes | Grade, Total |
| **Lab Marks** | Yes | Grade, Total |
| **Total** | No | Auto-calculated |
| **Grade** | No | Auto-calculated |
| **Case Decision** | No | Auto-calculated |

!!! tip "Editing Cells"
    - Double-click a cell to edit
    - Press `Enter` to confirm changes
    - Press `Escape` to cancel editing
    - Changes are highlighted in yellow until saved

### :material-numeric-4-circle: Review Changes

Before saving, review all changes:

1. Modified cells are highlighted
2. Recalculated fields show new values
3. Case decisions update automatically

### :material-numeric-5-circle: Save

1. Click **Save and Recalculate**
2. All calculations are refreshed
3. Changes are saved to the file
4. A backup of the original is created automatically

---

## :material-calculator: Automatic Recalculations

When you modify marks, the following are automatically recalculated:

=== ":material-sigma: Totals"
    **Total marks** are recalculated based on:

    - CAT marks (typically 30%)
    - Exam marks (typically 70%)
    - Lab marks (if applicable)

    The weightings are determined by the unit assessment configuration.

=== ":material-alpha-a-box: Grades"
    **Grades** are assigned based on the grading scale:

    | Total | Grade |
    |-------|-------|
    | 70-100 | A |
    | 60-69 | B |
    | 50-59 | C |
    | 40-49 | D |
    | 0-39 | E |

=== ":material-clipboard-check: Case Decisions"
    **Case decisions** are determined by the case decision engine:

    - **PASS** - All units passed (40+)
    - **SUPP** - One or more supplementary exams needed
    - **RETAKE** - Requires course retake
    - **SPECIAL** - Requires manual review

---

## :material-account-plus: Adding Students

To add a missing student:

1. Click **Add Student** button
2. Enter the student's registration number
3. Enter the student's name
4. The student is added with empty marks
5. Fill in the marks for each unit
6. Save to recalculate

!!! warning "Registration Number Format"
    Ensure the registration number follows the correct format (e.g., `E022-01-1234/2024`). The system will normalize common variations automatically.

---

## :material-delete: Removing Students

To remove a student:

1. Select the student row
2. Click **Remove Student**
3. Confirm the removal
4. Save changes

!!! danger "Caution"
    Removed students cannot be easily recovered. Consider creating a backup before removing students.

---

## :material-lightbulb-on: Best Practices

<div class="grid cards" markdown>

-   :material-backup-restore: **Backup First**

    ---

    The tool creates automatic backups, but you can also manually copy the file before making major changes.

-   :material-note-edit: **Document Changes**

    ---

    Keep a record of what changes you made and why (e.g., "Corrected EMT3101 exam mark for E022-01-1234/2024").

-   :material-check-all: **Verify After Saving**

    ---

    After saving, review the recalculated results to ensure they are correct.

-   :material-clock-time-four: **Process Promptly**

    ---

    Make corrections as soon as you identify errors to avoid confusion.

</div>

---

## :material-alert-outline: Troubleshooting

??? warning "Changes not saving"
    **Problem:** Clicking Save doesn't appear to save changes.

    **Solutions:**

    1. Ensure the file is not open in another program (Excel)
    2. Check that you have write permissions to the folder
    3. Look for error messages in the log
    4. Try saving to a different location

??? warning "Grades not recalculating"
    **Problem:** After changing marks, grades remain the same.

    **Solutions:**

    1. Use **Save and Recalculate** (not just Save)
    2. Check that the total marks fall within a different grade boundary
    3. Verify the unit assessment configuration is correct

??? warning "Case decision seems wrong"
    **Problem:** The case decision doesn't match expected outcome.

    **Solutions:**

    1. Review the case decision rules in **View → Case Decision Rules**
    2. Check all unit results for the student
    3. Verify IGS (retake) units are correctly marked
    4. Contact support if the logic appears incorrect

---

## :material-arrow-right: Related Tools

<div class="grid cards" markdown>

-   :material-filter-variant: **Extract Cases**

    ---

    Extract students by case type (Pass, Supp, Retake, etc.)

    [:octicons-arrow-right-24: Extract Cases](extract-cases.md)

-   :material-file-document-edit: **Generate Senate Documents**

    ---

    Create official senate documents from consolidated results

    [:octicons-arrow-right-24: Senate Documents](generate-senate-documents.md)

</div>
