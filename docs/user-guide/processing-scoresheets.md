# Processing Scoresheets

Complete guide to processing exam scoresheets and generating results.

---

## :material-file-excel: Scoresheet Requirements

### Expected Format

DEEPS processes Excel files with the following structure:

```
┌─────────────┬───────────────────┬──────┬────────┬──────┬───────┐
│ REG NO      │ NAME              │ CAT  │ ASSIGN │ EXAM │ TOTAL │
├─────────────┼───────────────────┼──────┼────────┼──────┼───────┤
│ E021-01-001 │ JOHN DOE          │ 25   │ 15     │ 45   │ 85    │
│ E021-01-002 │ JANE SMITH        │ 28   │ 18     │ 52   │ 98    │
│ E021-01-003 │ BOB WILSON        │ 22   │ 12     │ 38   │ 72    │
└─────────────┴───────────────────┴──────┴────────┴──────┴───────┘
```

### Required Columns

| Column | Description | Notes |
|--------|-------------|-------|
| **Registration No** | Unique student ID | Must be in first columns |
| **Name** | Student name | Can be one or multiple columns |
| **Mark columns** | CAT, Assignment, Exam, etc. | Must match unit assessment pattern |

### Assessment Patterns

Different units may have different assessment structures:

=== "Standard (CAT + Exam)"
    | Component | Weight |
    |-----------|--------|
    | CAT | 30% |
    | Exam | 70% |

=== "With Labs"
    | Component | Weight |
    |-----------|--------|
    | CAT | 20% |
    | Labs | 20% |
    | Exam | 60% |

=== "Project-Based"
    | Component | Weight |
    |-----------|--------|
    | CAT | 15% |
    | Project | 30% |
    | Exam | 55% |

!!! info "Configuring Assessment Patterns"
    Define assessment patterns in **File → Settings → Paths → Unit Assessments JSON**

---

## :material-folder-open: Opening a Semester

### Step 1: Select Input Folder

1. Go to **File → Open Input Folder...**
2. Navigate to the semester folder:
   ```
   inputs/2024-2025/YR3/SEM1/
   ```
3. Click **Select Folder**

### Step 2: Verify Detection

DEEPS will scan and display:

- Number of scoresheet files found
- Academic year detected
- Year of study and semester
- Any configuration issues

!!! warning "Check the Detection"
    Verify DEEPS correctly identified:

    - The academic year
    - Year of study (YR1, YR2, etc.)
    - Semester (SEM1, SEM2)

    If incorrect, check your folder structure matches the expected format.

---

## :material-play: Processing Steps

### Start Processing

Click **Process Scoresheets** to begin. DEEPS will:

1. **Read files** - Load each Excel file
2. **Parse data** - Extract registration numbers and marks
3. **Validate** - Check for errors and inconsistencies
4. **Calculate** - Compute totals and grades
5. **Merge** - Combine all units into consolidated sheet
6. **Classify** - Separate pass, supplementary, and special cases
7. **Export** - Save results to output folders

### Progress Monitoring

Watch the log panel for status updates:

```
[INFO] Starting scoresheet processing...
[INFO] Found 12 scoresheet files
[INFO] Processing EMT3101.xlsx... OK (45 students)
[INFO] Processing EMT3102.xlsx... OK (45 students)
[WARN] EMT3103.xlsx: Missing marks for 2 students
[INFO] Processing complete. 45 students processed.
```

### Status Indicators

| Icon | Meaning |
|------|---------|
| :material-check-circle:{ .success } | Successfully processed |
| :material-alert:{ .warning } | Processed with warnings |
| :material-close-circle:{ .error } | Failed - needs attention |

---

## :material-file-document-multiple: Output Files

### Consolidated Results

Main output in `outputs/verified_results/[year]/[YR#]/[SEM#]/`:

| File | Contents |
|------|----------|
| `YR3_SEM1_consolidated_verified.xlsx` | All students with all unit marks |
| `YR3_SEM1_pass_list.xlsx` | Students passing all units |
| `YR3_SEM1_supp_list.xlsx` | Students with supplementary exams |
| `YR3_SEM1_special_cases.xlsx` | Cases requiring manual review |

### Consolidated Sheet Structure

```
┌─────────────┬──────────┬─────────┬─────────┬─────────┬─────────┬────────┐
│ REG NO      │ NAME     │ EMT3101 │ EMT3102 │ EMT3103 │ AVERAGE │ STATUS │
├─────────────┼──────────┼─────────┼─────────┼─────────┼─────────┼────────┤
│ E021-01-001 │ JOHN DOE │ 85      │ 72      │ 68      │ 75.0    │ PASS   │
│ E021-01-002 │ JANE S.  │ 98      │ 45      │ 82      │ 75.0    │ SUPP   │
└─────────────┴──────────┴─────────┴─────────┴─────────┴─────────┴────────┘
```

---

## :material-alert: Handling Warnings

### Common Warning Types

??? warning "Missing Marks"
    **Cause:** Student has no marks in one or more units

    **Action:**
    
    - Check if student was absent/deferred
    - Verify lecturer submitted all marks
    - Add to special cases if needed

??? warning "Duplicate Registration Number"
    **Cause:** Same reg number appears multiple times

    **Action:**
    
    - Check for typos in registration numbers
    - Verify correct student in each entry
    - Contact lecturer to clarify

??? warning "Invalid Marks"
    **Cause:** Marks outside expected range (e.g., >100 or negative)

    **Action:**
    
    - Verify with lecturer
    - Correct in source file
    - Reprocess

??? warning "Unknown Unit Code"
    **Cause:** Unit code not in configuration

    **Action:**
    
    - Add unit to Units JSON configuration
    - Or rename file to match known unit code

---

## :material-refresh: Reprocessing

### When to Reprocess

- After correcting errors in source files
- When new scoresheets are added
- After configuration changes

### How to Reprocess

1. Make corrections to source Excel files
2. Go to **File → Open Input Folder...**
3. Select the same semester folder
4. Click **Process Scoresheets**

!!! tip "Backup Before Reprocessing"
    DEEPS overwrites previous output files. Keep backups if you need to compare versions.

---

## :material-file-compare: Updating Results

### After Initial Processing

Use **Tools → Update Consolidated...** to:

- Add late submissions
- Correct individual marks
- Handle special cases

### Update Workflow

1. Go to **Tools → Update Consolidated...**
2. Select the consolidated file to update
3. Make changes in the editor
4. Click **Save and Recalculate**

---

## :material-check-all: Quality Checklist

Before generating senate documents, verify:

- [ ] All expected units are included
- [ ] Student count matches enrollment
- [ ] No unresolved warnings
- [ ] Pass/Supp/Special counts look reasonable
- [ ] Spot-check a few students manually
- [ ] All mark columns are populated

---

## :material-lightbulb: Tips and Best Practices

!!! success "Best Practices"
    - **Process early** - Don't wait until deadline
    - **Check warnings** - Address issues before finalizing
    - **Keep originals** - Never edit lecturer's original files directly
    - **Document exceptions** - Note any special cases

!!! warning "Common Mistakes"
    - Processing wrong semester folder
    - Ignoring warning messages
    - Not verifying student count
    - Mixing different year groups

---

## :material-arrow-right: Next Steps

<div class="grid cards" markdown>

-   :material-file-document: **Generate Documents**

    ---

    Create senate documents from processed results

    [:octicons-arrow-right-24: Tools Reference](tools-reference.md#generate-senate-documents)

-   :material-tools: **All Tools**

    ---

    Explore other processing tools

    [:octicons-arrow-right-24: Tools Reference](tools-reference.md)

</div>
