# Tools Reference

Complete guide to all DEEPS tools and features.

---

## :material-menu: Menu Overview

DEEPS provides tools through these menus:

| Menu | Purpose |
|------|---------|
| **File** | Open folders, settings, exit |
| **View** | View configuration files, clear log |
| **Tools** | Processing and generation tools |
| **License** | License status and activation |
| **Help** | Documentation and about |

---

## :material-folder-open: File Menu

### Open Input Folder

**File → Open Input Folder...**

Opens a semester folder for processing.

!!! example "Usage"
    1. Click **File → Open Input Folder...**
    2. Navigate to `inputs/2024-2025/YR3/SEM1/`
    3. Click **Select Folder**
    4. DEEPS scans for scoresheets in the `scoresheets/` subfolder

### Settings

**File → Settings...**

Opens the settings dialog. See [Settings Guide](settings.md) for details.

---

## :material-eye: View Menu

### Course Syllabus

**View → Course Syllabus...**

Displays the configured course units in a tree view:

```
Year 1
├── Semester 1 (6 units)
│   ├── EMT1101 - Engineering Mathematics I
│   ├── EMT1102 - Engineering Drawing
│   └── ...
└── Semester 2 (6 units)
    └── ...
```

!!! info "Configuration"
    Configure the syllabus file in **Settings → Paths → Units JSON**

### Unit Assessments

**View → Unit Assessments...**

Shows assessment breakdown for each unit:

| Unit | Pattern | CAT | Labs | Exam |
|------|---------|-----|------|------|
| EMT3101 | Standard | 30% | - | 70% |
| EMT3102 | With Labs | 20% | 20% | 60% |

!!! info "Configuration"
    Configure in **Settings → Paths → Unit Assessments JSON**

### Engineering Rules

**View → Engineering Rules...**

Displays the engineering rules and regulations used for citations in senate documents:

- ENG. 15 (d) - Retake regulations
- ENG. 13 (a) - Supplementary exam rules
- etc.

!!! info "Configuration"
    Configure in **Settings → Paths → Rules JSON**

### Raw Auto-generated Files

**View → Raw Auto-generated Files...**

Opens the `.raw` output folder containing intermediate processing files.

### Clear Log

**View → Clear Log**

Clears the log panel in the main window.

---

## :material-tools: Tools Menu

### Create Academic Folder

**Tools → Create Academic Folder...**

Creates the standard folder structure for a new semester.

!!! example "Options"
    | Option | Creates |
    |--------|---------|
    | **SEM1 / SEM2** | Regular semester folder with scoresheets/, student_matters/, templates/ |
    | **ANNUAL** | Annual consolidated folder |
    | **GRADUATION** | Graduation folder (final year only) |

**Folder Structure Created:**

```
inputs/2024-2025/YR3/SEM1/
├── scoresheets/
├── student_matters/
└── templates/

outputs/verified_results/2024-2025/YR3/SEM1/
outputs/.raw/2024-2025/YR3/SEM1/
```

---

### XLSX to PDF Converter

**Tools → XLSX to PDF Converter...**

Converts Excel files to PDF format.

!!! example "Usage"
    1. Select Excel file(s) to convert
    2. Choose output location
    3. Configure page settings (orientation, margins)
    4. Click **Convert**

**Options:**

| Setting | Description |
|---------|-------------|
| **Page orientation** | Portrait or Landscape |
| **Fit to page** | Scale to fit page width |
| **Include gridlines** | Show cell borders |

---

### Sheet Extractor

**Tools → Sheet Extractor...**

Extracts specific sheets from multi-sheet Excel files.

!!! example "Usage"
    1. Select source Excel file
    2. Choose sheets to extract
    3. Select output location
    4. Click **Extract**

**Use Cases:**

- Extract individual unit sheets from combined workbook
- Separate lecturer data by unit
- Create standalone files for each sheet

---

### Update Consolidated

**Tools → Update Consolidated...**

Modifies an existing consolidated results file.

!!! example "Usage"
    1. Select the consolidated file to update
    2. Make changes:
       - Edit individual marks
       - Add missing students
       - Correct errors
    3. Click **Save and Recalculate**

**Features:**

- Live grade recalculation
- Maintains file format
- Updates pass/supp/special classifications

---

### Extract Cases

**Tools → Extract Cases...**

Extracts specific case types from consolidated results.

!!! example "Case Types"
    | Case | Description |
    |------|-------------|
    | **Pass** | Students passing all units |
    | **Supplementary** | Students with supp exams |
    | **Retake** | Students requiring retake |
    | **Discontinued** | Students to be discontinued |
    | **Special** | Cases needing manual review |

**Output:**

Creates separate Excel files for each case type.

---

### Next Semester Scoresheets

**Tools → Next Semester Scoresheets...**

Generates empty scoresheet templates for the next semester.

!!! example "Usage"
    1. Select the current semester's consolidated file
    2. Choose units for next semester
    3. Configure template format
    4. Click **Generate**

**Generated Templates:**

```
templates/
├── EMT3201-template.xlsx
├── EMT3202-template.xlsx
└── EMT3203-template.xlsx
```

Each template includes:

- Student registration numbers
- Student names
- Empty columns for marks

---

### Generate Senate Documents

**Tools → Generate Senate Documents...**

Creates official senate documents from processed results.

!!! example "Usage"
    1. Select processed semester
    2. Configure document options:
       - Meeting details (date, venue)
       - Include pass list
       - Include supplementary list
       - Include special cases
       - Rule citations
    3. Click **Generate**

**Output:**

```
outputs/senate_documents/2024-2025/YR3/SEM1/
├── YR3_SEM1_senate_document.docx
└── YR3_SEM1_senate_document.pdf
```

**Document Sections:**

1. Header with institution logo
2. Meeting details
3. Candidates proceeding normally (pass list)
4. Supplementary examination cases
5. Special cases with rule citations
6. Signature lines for officials

---

### Generate Annual Consolidated

**Tools → Generate Annual Consolidated...**

Combines both semester results into annual summary.

!!! example "Usage"
    1. Select SEM1 consolidated file
    2. Select SEM2 consolidated file
    3. Configure annual report options
    4. Click **Generate**

**Output:**

Creates annual consolidated showing:

- Both semester results
- Annual averages
- Progression status
- Cases for academic board

---

## :material-key: License Menu

### License Status

Shows current license status:

- :material-check-circle:{ .success } **Licensed** - Full features available
- :material-alert:{ .warning } **Trial** - Limited features
- :material-close-circle:{ .error } **Expired** - Renewal required

### License Details

**License → License Details...**

Shows:

- License holder name
- Expiration date
- Licensed features
- Machine ID

### Renew License

**License → Renew License**

Opens activation dialog for entering new credentials.

---

## :material-help-circle: Help Menu

### Documentation

**Help → Documentation**

Opens this documentation website.

### About DEEPS

**Help → About DEEPS**

Shows:

- Version number
- Build date
- Credits
- Support contact

---

## :material-keyboard: Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Ctrl+O` | Open Input Folder |
| `Ctrl+,` | Open Settings |
| `Ctrl+Q` | Exit |
| `F5` | Process Scoresheets |
| `Ctrl+L` | Clear Log |

---

## :material-arrow-right: Related Pages

<div class="grid cards" markdown>

-   :material-cog: **Settings**

    ---

    Configure DEEPS for your institution

    [:octicons-arrow-right-24: Settings Guide](settings.md)

-   :material-file-excel: **Processing**

    ---

    Detailed scoresheet processing guide

    [:octicons-arrow-right-24: Processing Guide](processing-scoresheets.md)

</div>
