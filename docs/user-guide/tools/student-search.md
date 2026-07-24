# 🔎 Student Search

Search and view individual student records across all processed semesters.

---

## :material-account-search: Overview

The **Student Search** feature allows you to quickly find and view a student's complete academic record across all processed semesters. This provides a comprehensive view of a student's progress throughout their course.

!!! info "When to Use This Feature"
    Use this feature when you need to:

    - Look up a specific student's results
    - Review academic history for advising
    - Verify student records for administrative purposes
    - Track student progress across semesters

---

## :material-navigation: Accessing the Feature

There are two ways to access Student Search:

1. **Tab Bar:** Click the **Student Search** tab at the top of the main window
2. **Menu:** **Tools → Student Search...**

---

## :material-clipboard-list-outline: How to Use

### :material-numeric-1-circle: Enter Search Query

Type a search query in the search box:

| Search By | Example | Notes |
|-----------|---------|-------|
| **Registration Number** | `E022-01-1234/2024` | Partial matches work |
| **Registration Number (partial)** | `E022-01-1234` | Finds all years |
| **Student Name** | `John Doe` | Case-insensitive |
| **Name (partial)** | `John` | Finds all matching names |

### :material-numeric-2-circle: View Results

Matching students appear in a list showing:

- Registration number
- Student name
- Number of semester records found

### :material-numeric-3-circle: Select a Student

Click on a student to view their complete record:

- **Student Information:** Registration number, name
- **Semester Results:** All processed semesters with marks
- **Unit Details:** Individual unit grades and marks
- **Academic Summary:** Overall progress and status

---

## :material-view-dashboard: Student Record View

When you select a student, the record displays in three sections:

=== ":material-account-details: Student Info"
    **Basic Information**

    - Registration Number
    - Student Name
    - Course Code
    - Current Year of Study
    - Academic Status

=== ":material-table: Semester Results"
    **Results by Semester**

    | Semester | Units | Passed | Failed | Average | Status |
    |----------|-------|--------|--------|---------|--------|
    | YR3 SEM1 | 6 | 5 | 1 | 58.3 | SUPP |
    | YR3 SEM2 | 6 | 6 | 0 | 62.1 | PASS |
    | YR3 ANNUAL | 12 | 11 | 1 | 60.2 | PASS |

    Click on a semester row to see detailed unit results.

=== ":material-book-open: Unit Details"
    **Individual Unit Marks**

    | Unit | CAT | Exam | Total | Grade |
    |------|-----|------|-------|-------|
    | EMT3101 | 25 | 48 | 73 | A |
    | EMT3102 | 18 | 35 | 53 | C |
    | EMT3103 | 22 | 15 | 37 | E |

    Includes:

    - CAT marks
    - Exam marks
    - Lab marks (if applicable)
    - Total marks
    - Grade
    - Special indicators (IGS, SUPP, etc.)

---

## :material-gavel: Academic Status Tab

This tab reports the student's standing **exactly as recorded in the
consolidated results**. It shows, for the most recent year and then for
every year on record:

- the **recommendation**, word for word as written in the workbook
- the **student matters** behind it (FINANCIAL, MEDICAL, EXAM IRREGULARITY, ...)
- the **rules** quoted in the reference column

Nothing here is recalculated. Correct the consolidated workbook, let the
database re-sync, and the tab follows.

!!! tip "Every rule is clickable"
    A reference listing several rules, such as `ENG.15(a), ENG.23(c)`,
    gives one link per rule. Click any of them to open that rule in the
    rules viewer. Where a reference lists subsections, such as
    `ENG.18(a,b,c)`, the section and each subsection are separately
    clickable.

A year sat more than once shows each sitting, with the earlier one marked
*superseded*; the later decision is the one that stands.

---

## :material-magnify: Search Tips

<div class="grid cards" markdown>

-   :material-regex: **Use Partial Numbers**

    ---

    Search `E022-01-12` to find all registration numbers starting with that pattern.

-   :material-case-sensitive-alt: **Case Doesn't Matter**

    ---

    Searching `john doe`, `John Doe`, or `JOHN DOE` all return the same results.

-   :material-slash-forward: **Year Variations**

    ---

    Search without the year suffix (`E022-01-1234`) to find all records for that student across years.

-   :material-text-search: **Name Parts**

    ---

    Search just a first or last name to find all students with that name.

</div>

---

## :material-database: How It Works

### Data Architecture

Student Search uses a **local SQLite database** as a search cache:

```
┌─────────────────────┐      Sync      ┌──────────────────┐
│   XLSX Files        │  ──────────▶   │  SQLite Cache    │
│  (Source of Truth)  │                │  (Search Index)  │
└─────────────────────┘                └──────────────────┘
         │                                      │
         │                                      │
    You edit here                         Fast searches
```

| Component | Purpose |
|-----------|---------|
| **XLSX Files** | Master data - all your exam results live here |
| **SQLite Database** | Search index - enables fast lookups across all semesters |

### How Syncing Works

- When you click **Sync Database**, DEEPS reads all consolidated XLSX files and indexes them
- If you **edit an XLSX file** (correct a mark, add a student), click Sync to update the search index
- The database is just a cache - **XLSX files remain the source of truth**
- If you delete the database, just sync again to rebuild it from your XLSX files

!!! tip "When to Sync"
    Click **Sync Database** after:

    - Processing new scoresheets
    - Editing a consolidated file
    - Renaming or moving files

### Data Sources

Student Search queries data from all processed consolidated files in:

```
outputs/verified_results/{academic_year}/YR{n}/SEM{n}/
└── 2024_2025_YR3_SEM1_consolidated_verified.xlsx
```

!!! note "Data Availability"
    Only semesters that have been processed through DEEPS will appear in search results. If a semester hasn't been processed yet, its data won't be searchable.

---

## :material-printer: Printing a Student's Status

The **Status Report...** button on the student card prints everything on
record for the selected student as one official workbook.

1. Select the student from search results
2. Click **Status Report...**
3. Check the output folder (see below), or change it
4. Tick anything extra you want:
   - **Also generate the standard annual transcripts** (off by default)
   - **PDF copies as well** (a PDF of the report, and of any transcripts)
5. Click **Generate**, then **Open Folder**

The report is saved beside the transcripts, in the ANNUAL folder of the
student's most recent year:

```
outputs/verified_results/2025-2026/YR4/ANNUAL/
    status_reports/E000-00-0000_2022_Student_Name_status_report.xlsx
    transcripts/
```

Generating it again replaces the previous copy, so a student's report is
always the current one.

The workbook carries the university letterhead and reads top to bottom:

| Section | Contents |
|---------|----------|
| **Student** | Name, registration number, intake, programme |
| **Status as recorded** | The recommendation, student matters and rules for the most recent year |
| **Record by year** | Every year: attempt, mean, recommendation, matters, reference |
| **Results by year** | Every unit sat, year by year, as the workbook records it |
| **Units not yet passed** | With the entry recorded against each, or NOT TAKEN |
| **Summary of results** | Totals, weighted mean, classification |
| **How these figures are calculated** | Which units are excluded from each year mean, the year weights, the weighted mean formula, and the grade and classification bands |
| **Approvals** | Departmental Board, School Board, Senate |

!!! info "Entries are shown as recorded"
    A mark stays a mark, an entry such as `19 C` (coursework only, no exam
    sat) stays `19 C`, and only a unit with no entry anywhere reads NOT
    TAKEN. The values are read from the annual workbooks themselves, so the
    report matches what you see on opening them. A coursework-only entry reads
    NOT PASSED in this report; on the transcript that grade cell shows an
    em dash.

!!! info "How this differs from a transcript"
    A transcript covers one year: units, grades and the mean. The status
    report adds every year at once, the reason recorded behind each
    decision, the rules quoted, each sitting of a repeated year, the units
    still outstanding, and how the weighted mean was arrived at.

!!! note "Classification"
    A classification is stated only once the final year is complete, or
    where the award list already records one. Otherwise the report says why
    there is none yet, rather than printing a running figure that could be
    mistaken for an award.

!!! note "PDF export needs LibreOffice"
    The PDF option is disabled when LibreOffice is not installed. The
    report is still produced without it.

---

## :material-alert-outline: Troubleshooting

??? warning "Student not found"
    **Problem:** Search returns no results for a known student.

    **Solutions:**

    1. Check spelling of name or registration number
    2. Try searching with partial information
    3. Verify the student's semester has been processed
    4. Check for registration number variations (see below)

??? warning "Registration number variations"
    **Problem:** Student has multiple registration number formats.

    **Common variations normalized automatically:**

    | Entered | Normalized |
    |---------|------------|
    | `E022 01-1234/2024` | `E022-01-1234/2024` |
    | `E022-1-1234/2024` | `E022-01-1234/2024` |
    | `E022-01-1234\2024` | `E022-01-1234/2024` |

    The search automatically handles these variations.

??? warning "Incomplete records"
    **Problem:** Student record is missing some semesters.

    **Solutions:**

    1. Process the missing semester(s) through Step 1
    2. Check that the student's data exists in the original scoresheets
    3. Verify the consolidated file for that semester contains the student

??? warning "Data out of sync"
    **Problem:** Search results don't reflect recent edits to XLSX files.

    **Solutions:**

    1. Click **Sync Database** to update the search index
    2. If files were renamed, sync will automatically clean up old references
    3. Wait for sync to complete before searching again

??? warning "File not found in Data Sources"
    **Problem:** Data Sources tab shows "File not found" for some entries.

    **Cause:** Files were renamed or moved since last sync.

    **Solution:** Click **Sync Database** - it will clean up orphaned entries and index the current files.

---

## :material-arrow-right: Related Features

<div class="grid cards" markdown>

-   :material-cog: **Processing Scoresheets**

    ---

    Process scoresheets to make student data searchable

    [:octicons-arrow-right-24: Processing Guide](../processing-scoresheets.md)

-   :material-folder-multiple: **Folder Structure**

    ---

    Understand where student data is stored

    [:octicons-arrow-right-24: Folder Structure](../folder-structure.md)

</div>
