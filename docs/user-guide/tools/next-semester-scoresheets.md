# 📋 Next Semester Scoresheets

Generate empty scoresheet templates for the upcoming semester with student lists pre-filled.

---

## :material-file-table-box-outline: Overview

The **Next Semester Scoresheets** tool generates blank scoresheet templates for the next semester, pre-populated with student registration numbers and names. This saves lecturers time by eliminating manual data entry of student information.

!!! info "When to Use This Tool"
    Use this tool when you need to:

    - Prepare scoresheet templates for a new semester
    - Distribute templates to lecturers for mark entry
    - Ensure consistent student lists across all unit scoresheets

---

## :material-navigation: Accessing the Tool

**Tools → Next Semester Scoresheets...**

---

## :material-clipboard-list-outline: Step-by-Step Guide

### :material-numeric-1-circle: Open the Dialog

Click **Tools → Next Semester Scoresheets...** to open the generator dialog.

### :material-numeric-2-circle: Select Source File

Choose the current semester's consolidated file as the source for student lists:

1. Click **Browse**
2. Navigate to `outputs/verified_results/{academic_year}/{year}/{semester}/`
3. Select the consolidated file (e.g., `2024_2025_YR3_SEM1_consolidated_verified.xlsx`)
4. Student list is extracted automatically

!!! tip "Which File to Use"
    Use the **verified consolidated file** from the most recently completed semester. This ensures you have the correct student list for progression.

### :material-numeric-3-circle: Select Next Semester Units

Choose which units to generate templates for:

| Option | Description |
|--------|-------------|
| **From Syllabus** | Load units from course syllabus JSON |
| **Manual Entry** | Enter unit codes manually |
| **Previous Templates** | Copy structure from existing templates |

If using syllabus:

1. Select the **Year** (e.g., YR3)
2. Select the **Semester** (SEM1 or SEM2)
3. Units are loaded automatically from the syllabus

### :material-numeric-4-circle: Configure Template Format

Set template options:

| Option | Description | Default |
|--------|-------------|---------|
| **Include Header** | Add unit code and name header | Yes |
| **CAT Column** | Include column for CAT marks | Yes |
| **Exam Column** | Include column for Exam marks | Yes |
| **Lab Column** | Include column for Lab marks | Depends on unit |
| **Total Column** | Include auto-calculated total | Yes |
| **Row Striping** | Alternate row colors | Yes |

### :material-numeric-5-circle: Select Output Location

Choose where to save the templates:

1. Click **Browse** to select output folder
2. Default: `inputs/{academic_year}/{year}/{semester}/templates/`

### :material-numeric-6-circle: Generate

1. Click **Generate**
2. Progress bar shows template creation status
3. Success message displays the number of templates created
4. Click **Open Folder** to view the templates

---

## :material-file-document-multiple: Generated Templates

The tool creates separate Excel files for each selected unit:

```
templates/
├── EMT3201_scoresheet_template.xlsx
├── EMT3202_scoresheet_template.xlsx
├── EMT3203_scoresheet_template.xlsx
├── EMT3204_scoresheet_template.xlsx
├── EMT3205_scoresheet_template.xlsx
└── EMT3206_scoresheet_template.xlsx
```

Each template contains:

| Column | Description |
|--------|-------------|
| **S/N** | Serial number (auto-filled) |
| **Reg. No.** | Student registration number (pre-filled) |
| **Name** | Student full name (pre-filled) |
| **CAT** | Empty column for CAT marks |
| **Exam** | Empty column for Exam marks |
| **Lab** | Empty column for Lab marks (if applicable) |
| **Total** | Formula: =CAT+Exam+Lab |
| **Grade** | Formula-based grade |

---

## :material-account-filter: Student Filtering

The tool filters students based on their status:

=== ":material-check-circle: Included Students"
    Students who are included in next semester templates:

    - **PASS** - Students who passed all units
    - **SUPP** - Students with supplementary exams (after passing supps)
    - **CONDITIONAL** - Students proceeding on condition

=== ":material-close-circle: Excluded Students"
    Students who are NOT included:

    - **RETAKE** - Students repeating the current year
    - **DISCONTINUED** - Students no longer enrolled
    - **DEFERRED** - Students with deferred status

!!! note "Manual Additions"
    You can manually add students to templates if needed (e.g., transfer students, re-admitted students).

---

## :material-lightbulb-on: Best Practices

<div class="grid cards" markdown>

-   :material-check-all: **Verify Student Lists**

    ---

    Review the generated templates to ensure all expected students are included and no duplicates exist.

-   :material-file-check: **Use Verified Source**

    ---

    Always generate from the verified consolidated file, not the raw auto-generated file.

-   :material-lock: **Protect Columns**

    ---

    Consider protecting pre-filled columns (Reg. No., Name) to prevent accidental changes.

-   :material-folder-move: **Distribute Promptly**

    ---

    Send templates to lecturers at the start of the semester so they can enter marks progressively.

</div>

---

## :material-alert-outline: Troubleshooting

??? warning "Missing students in templates"
    **Problem:** Some expected students are not in the generated templates.

    **Solutions:**

    1. Check the student's status in the source consolidated file
    2. Verify students with RETAKE status are correctly excluded
    3. Add students manually if they should be included
    4. Ensure the source file is the most recent verified version

??? warning "Extra students in templates"
    **Problem:** Students who should be excluded appear in templates.

    **Solutions:**

    1. Update the source consolidated file with correct case decisions
    2. Re-generate templates from the corrected file
    3. Remove students manually from individual templates

??? warning "Unit not in syllabus"
    **Problem:** A required unit doesn't appear in the syllabus selection.

    **Solutions:**

    1. Check the syllabus JSON configuration in Settings
    2. Use **Manual Entry** to add the unit code
    3. Update the syllabus JSON file if the unit should be included

---

## :material-arrow-right: Related Tools

<div class="grid cards" markdown>

-   :material-folder-plus: **Create Academic Folder**

    ---

    Create the folder structure for the new semester

    [:octicons-arrow-right-24: Create Academic Folder](create-academic-folder.md)

-   :material-cog: **Processing Scoresheets**

    ---

    Process completed scoresheets

    [:octicons-arrow-right-24: Processing Guide](../processing-scoresheets.md)

</div>
