# 📁 Create Academic Folder

Create standardized folder structures for new semesters, annual, or graduation periods.

---

## :material-folder-plus: Overview

The **Create Academic Folder** tool generates the complete folder structure needed for exam processing. It ensures consistency across all academic periods and creates both input and output directories automatically.

!!! info "When to Use This Tool"
    Use this tool at the **beginning of each semester** or academic period to set up the required folder structure before collecting scoresheets from lecturers.

---

## :material-navigation: Accessing the Tool

**Tools → Create Academic Folder...**

Or use the keyboard shortcut: `Ctrl+Shift+N`

---

## :material-format-list-bulleted: Folder Types

The tool supports three folder types for different academic needs:

=== ":material-calendar-month: Semester (SEM1/SEM2)"
    **Regular semester folders** for normal exam processing.

    Creates the complete structure for collecting and processing semester scoresheets:

    ```
    inputs/{academic_year}/YR{n}/SEM{n}/
    ├── scoresheets/          # Place lecturer scoresheets here
    ├── student_matters/      # For special cases (deferrals, medical, etc.)
    └── templates/            # Scoresheet templates for lecturers

    outputs/verified_results/{academic_year}/YR{n}/SEM{n}/
    outputs/.raw/{academic_year}/YR{n}/SEM{n}/
    ```

=== ":material-calendar-star: Annual (ANNUAL)"
    **Annual consolidated folders** for combining both semesters.

    Used after processing both SEM1 and SEM2 to generate annual results:

    ```
    inputs/{academic_year}/YR{n}/ANNUAL/

    outputs/verified_results/{academic_year}/YR{n}/ANNUAL/
    outputs/.raw/{academic_year}/YR{n}/ANNUAL/
    ```

=== ":material-school: Graduation (GRADUATION)"
    **Graduation folders** for final year students only.

    Used to prepare graduation lists and transcripts:

    ```
    inputs/{academic_year}/YR{max}/GRADUATION/

    outputs/verified_results/{academic_year}/YR{max}/GRADUATION/
    outputs/.raw/{academic_year}/YR{max}/GRADUATION/
    ```

    !!! note "Final Year Only"
        Graduation folders are only available for the maximum year of study (e.g., YR5 for a 5-year program).

---

## :material-clipboard-list-outline: Step-by-Step Guide

### :material-numeric-1-circle: Open the Dialog

1. Click **Tools → Create Academic Folder...**
2. The dialog opens with current academic year pre-filled

### :material-numeric-2-circle: Select Academic Year

Choose the academic year for the new folder:

| Field | Example | Description |
|-------|---------|-------------|
| **Academic Year** | 2024-2025 | The academic year in YYYY-YYYY format |

!!! tip "Academic Year Format"
    Always use the format `YYYY-YYYY` (e.g., `2024-2025`). The first year is when the academic year starts (typically August/September).

### :material-numeric-3-circle: Select Year of Study

Choose which year of study (YR1, YR2, etc.):

| Year | Students |
|------|----------|
| YR1 | First-year students |
| YR2 | Second-year students |
| YR3 | Third-year students |
| YR4 | Fourth-year students |
| YR5 | Fifth-year students (final year) |

### :material-numeric-4-circle: Select Folder Type

Choose the type of folder to create:

- **SEM1** - First semester
- **SEM2** - Second semester
- **ANNUAL** - Annual consolidated (after both semesters)
- **GRADUATION** - Graduation folder (final year only)

### :material-numeric-5-circle: Create the Folder

1. Click **Create Folder**
2. The tool creates all necessary directories
3. A success message shows the created paths
4. Optionally click **Open Folder** to view in file manager

---

## :material-folder-multiple: What Gets Created

When you create a semester folder, the following structure is generated:

```
📁 inputs/
└── 📁 2024-2025/
    └── 📁 YR3/
        └── 📁 SEM1/
            ├── 📁 scoresheets/     ← Place Excel files here
            ├── 📁 student_matters/ ← Special cases
            └── 📁 templates/       ← Blank templates

📁 outputs/
├── 📁 verified_results/
│   └── 📁 2024-2025/
│       └── 📁 YR3/
│           └── 📁 SEM1/            ← Processed results go here
└── 📁 .raw/
    └── 📁 2024-2025/
        └── 📁 YR3/
            └── 📁 SEM1/            ← Auto-generated copies
```

---

## :material-lightbulb-on: Best Practices

<div class="grid cards" markdown>

-   :material-check-circle: **Create folders early**

    ---

    Create the folder structure at the start of the semester, before collecting scoresheets from lecturers.

-   :material-check-circle: **Use consistent naming**

    ---

    Always use the tool to ensure folder names match the expected pattern for processing.

-   :material-check-circle: **One semester at a time**

    ---

    Process SEM1 completely before creating and processing SEM2 folders.

-   :material-alert-circle: **Don't rename folders**

    ---

    Avoid manually renaming folders after creation. DEEPS expects specific folder naming patterns.

</div>

---

## :material-frequently-asked-questions: Common Questions

??? question "What if the folder already exists?"
    The tool will warn you if the folder already exists. You can choose to:

    - **Skip** - Don't create anything
    - **Open existing** - Open the existing folder

??? question "Can I create folders for multiple years at once?"
    No, create folders one at a time. This ensures proper organization and prevents accidental data mixing.

??? question "Where are the folders created?"
    Folders are created in the data directory configured in Settings. By default:

    - **Linux/Mac:** `~/.local/share/deeps/data/`
    - **Windows:** `%APPDATA%\deeps\data\`

??? question "What's the difference between verified_results and .raw?"
    - **verified_results/** - The working directory where you edit and verify results
    - **.raw/** - Auto-generated backup copy that should not be modified

---

## :material-arrow-right: Next Steps

<div class="grid cards" markdown>

-   :material-file-excel: **Collect Scoresheets**

    ---

    Distribute templates to lecturers and collect completed scoresheets

    [:octicons-arrow-right-24: Folder Structure](../folder-structure.md)

-   :material-cog: **Process Scoresheets**

    ---

    Run Step 1 processing on collected scoresheets

    [:octicons-arrow-right-24: Processing Guide](../processing-scoresheets.md)

</div>
