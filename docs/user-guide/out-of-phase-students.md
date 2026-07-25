# Out-of-Phase Students — Research Notes

> **Status**: Draft research notes. To be refined into proper user documentation later.
> All examples below use anonymized placeholder names and registration numbers.

A practical guide to identifying and managing students who don't follow the linear cohort progression. That is, students whose intake year doesn't align with the year of study they're currently in. These cases are common in real engineering programs and DEEPS needs a coherent way to handle them.

---

## Why this matters

In an ideal world, every student joins YR1 in year `N`, sits YR2 in year `N+1`, and graduates at the end of YR5 in year `N+4`. In practice, a substantial fraction of students deviate from this path:

- They fail enough units to repeat a year and slip into the year-below cohort.
- They take academic leave (financial, medical, personal) and return one or more years later.
- They have a few outstanding cases (SUPP / CF / RETAKE) from a previous year that need to be cleared.
- They were absent for a special exam and sit it later.
- They transferred in from another program or institution at a non-standard year.
- They were on the previous year's graduation list but had a paperwork hold (WITHHOLD) and are being re-processed in the current cycle.
- They sat YR5 once already, were marked INCOMPLETE, redid the missing units, and are now back in this cycle.

If DEEPS treats only "main cohort" students correctly, every other category becomes a manual workaround and the audit trail breaks. The goal is for **every student in the system to have a clear, machine-tracked story** regardless of how off-cycle they are.

---

## A typical graduation cycle picture

To illustrate the scale: a typical graduating year may have 100-130 students in YR5. Of those, the breakdown often looks something like this (illustrative numbers, not from any specific cycle):

| Intake | Approximate share | Status |
|---|---|---|
| Main cohort (year-on-time) | 75-85% | On normal path |
| 1 year older (joined from previous cohort) | 5-10% | Repeating Y5 with current group |
| 2 years older | 1-3% | More significant delay |
| 3+ years older | <2% | Long delay, often with custom history |

Plus a parallel pattern: some main-cohort students appear in **lower** years of study, having fallen behind their original cohort. They're not graduating in this cycle. They'll graduate in 1-3 years' time depending on how far they fell behind.

So the actual graduating pool for any cycle is roughly:

```
on-time cohort
+ joined from older cohorts (graduating with current group)
- fell-behind students (graduating later)
- lost to deregistration / discontinuation in earlier years
```

The "joined" and "fallen-behind" populations are the **out-of-phase** students that this document is about.

---

## The four shapes of out-of-phase students

After looking at real cases across DEEPS data and historical institutional records, out-of-phase students fall into four distinct shapes. The shape determines what infrastructure handles them.

### Shape 1 — Absorbed into a current group

Student joined a current group's regular exam sittings. They appear in the normal scoresheets alongside the main cohort and are processed identically. **DEEPS already handles them through normal flow.**

The only thing that distinguishes them administratively is that their reg number's intake year doesn't match the expected year for their year of study.

**Pattern**: A student with intake year `Y` appears in YR5 of academic year `Y+5` instead of `Y+4`. They sat all YR5 exams alongside the main cohort and have a clean PASS recommendation.

**Example pattern (anonymized)**:

- Student `EXXX-01-XXXX/2020` joined the 2021 cohort's YR5 exams in academic year 2025/2026, all units passed. Just needs an `RP1` qualifier subscript on the senate doc to indicate they repeated Y1 once.

**How DEEPS handles them**:

- Their YR5 marks are in the normal `inputs/{ay}/YR5/SEM1/scoresheets/*.xlsx` and `SEM2/scoresheets/*.xlsx`
- Annual consolidation rolls them up like everyone else
- Cohort detection in `graduation_consolidation.detect_graduating_cohorts` identifies the main cohort year and classifies them as out-of-cohort
- The `qualifier_engine` (in `src/deeps/modules/qualifier_engine.py`) computes their qualifier code from intake-year-vs-cohort-year delta, optionally augmented by student matters records

**What's needed**: Just the qualifier subscript. Populate `student_qualifiers.json` with their canonical cohort and let the engine derive the right RP/RA/etc. code.

### Shape 2 — Has 1-2 outstanding units, sitting them as cases with a current group

Student has a small number of outstanding units (typically 1-3) from a previous year. They're not redoing the whole year. They sit the case scoresheet alongside whichever current group is sitting that unit.

**Pattern**: A student is in YR5 with a recommendation like `SUPP 1 UNIT` or `CF 2 UNITS`. They need to sit a small number of additional exams. The exams can be merged with whichever group is currently doing supps or carry-forwards for those units.

**Example pattern (anonymized)**:

- Student `EXXX-01-XXXX/2019` is in YR5 2025/2026 with `SUPP 1 UNIT`. They need to sit one supplementary exam, which can happen alongside whatever group is currently doing supps for that unit.

**How DEEPS handles them**:

- Existing `cases_scoresheets/` infrastructure: `inputs/{ay}/YR{X}/SEM{Y}/cases_scoresheets/{unit_code}.xlsx`
- `case_scoresheet_generator.py` creates the scoresheet template with the affected students listed
- When the marks come in, `cases_extractor.py` and `cases_regenerator.py` pick them up
- Cross-year discovery means a YR5 student's outstanding YR2 unit is correctly found in the current YR2 case scoresheet

**What's needed**: Officer needs to identify the student plus unit, then add them to the appropriate case scoresheet. The existing tooling handles the rest.

### Shape 3 — Multiple isolated cases, NOT joining any current group

Student has too many outstanding units to be folded into a single current sitting, or they're sitting custom-arranged exams that aren't tied to any regular group's schedule. The classic case is a student with their own dedicated case scoresheet.

**Pattern**: A historical exam record has a sheet containing only one student, sitting an entire set of supps that don't align with any current group's exam cycle. Often this happens when the student missed a regular supp window and had to be accommodated separately.

**Example pattern (anonymized)**:

- Student `EXXX-01-XXXX/2020` had a custom supp arrangement for YR4. Historical records show a dedicated sheet just for them with their YR4 supp marks. They have since cleared those cases and are now in the current graduation pool with PASS.

**How DEEPS handles them**:

- The `cases_scoresheets/` infrastructure handles single-student cases identically. A case scoresheet can have just one student.
- The case scoresheet generator (Tools > Generate Case Scoresheets) can produce single-student files.

**What's needed**: No new infrastructure. Officer creates a normal case scoresheet, lists only the student(s) involved, and the rest of the pipeline treats it identically to a multi-student case sheet.

### Shape 4 — Entirely separate pipeline (the rarest)

Student has an entire year's worth of units to sit and isn't joining any current group at all. They're sitting their own complete exam arrangement, possibly across multiple semesters. There's no group to fold them into because their situation is unique.

**Pattern**: Two or three students from a very old cohort (say, intake `Y-7`) sit YR2 together, years after their original cohort had moved on. They form a micro-group that has its own scoresheets and its own consolidation cycle.

**Example pattern (anonymized)**:

- Two students, `EXXX-01-XXXX/2017` and `EXXX-01-XXXX/2017`, sat their own YR2 exams together in a custom arrangement, several years after their original cohort had moved on.

**How DEEPS handles them**:

- This shape **doesn't fit cleanly** into the current input structure, which assumes scoresheets contain multiple students from a single regular group.
- **Workaround (works today)**: Treat them as a regular semester. Create normal scoresheets under `inputs/{ay}/YR{X}/SEM{Y}/scoresheets/` containing just the few off-cycle students. Run normal consolidation. The output annual file will only have these students. Slightly wasteful (mostly-empty files) but functionally correct.
- **Future feature (proposed)**: A dedicated "Individual Student Pipeline" with folder shape `inputs/{ay}/individual_students/{reg_no}/scoresheets/...`, processed by a small custom workflow that merges results back into the relevant year's annual file. Worth building if Shape 4 cases become common, otherwise the workaround suffices.

---

## Real-world causes that produce out-of-phase students

This catalogue maps academic-life events to the shape they tend to produce and the qualifier code DEEPS would assign. All references are to engineering rules from the configured rules file (e.g., `engineering_rules_and_regulations_2019.json`) where applicable.

| Cause | Shape | Qualifier code | Notes |
|---|---|---|---|
| **Repeat year** (failed ≥50% of units, or year average <40%) | 1 | `RP{n}` | ENG.16(a,c). Most common cause. Student joins the year-below cohort and progresses linearly from there. |
| **Repeat unit** on academic grounds (not full year repeat) | 2 | `RPU{n}` | ENG.16(b). Student stays with cohort but redoes specific units. |
| **Disciplinary repeat year** | 1 | `RP{n}D` | Non-academic repeat. Same shape as RP, different cause. |
| **Carry Forward** (failed SUPP but ≤2 total failed) | 1 or 2 | `RP{n}C` | ENG.14. Student proceeds with reduced load. |
| **Academic leave** (financial, medical, personal) | 1 (when returning) | `RA{n}` or `RA{n}S2` | Returns after one or more years out. May join the year-below cohort. |
| **Re-admission after appeal** | 1 | `RA{n}` | After appealing discontinuation/deregistration. |
| **Special exam** | varies | none usually | ENG.18. Student missed an exam due to legitimate reason and sits it later in the SUPP period. Doesn't shift cohort. May produce Shape 2 if multiple. |
| **Mid entry** (admitted at a higher year level with prior credits) | 1 | `M2` or `M3` | Student joins at YR2 or YR3 directly. |
| **Transfer in from another university** | 1 | `TF2`, `TF3`, `TF2S2`, `TF3S2` | Similar to mid entry but from a different institution. |
| **Withhold** (administrative hold for fees, clearance, etc.) | various | none. affects status not cohort | Academic completion is fine, but the certificate is held back. Students may appear in multiple consecutive graduation cycles until cleared. |
| **Discontinuation** (5 attempts on same unit, or fail ≥50% after repeat) | n/a | n/a | ENG.22. Student leaves the program. Not a graduation candidate. |
| **Deregistration** | n/a | n/a | Administrative removal. Distinct from discontinuation but similar effect. |
| **Withdrawal** | n/a | n/a | Voluntary exit. |
| **Deferral** | varies | n/a | Postponed exam or year. |
| **Death (DECEASED)** | n/a | n/a | Recorded for transparency. |

The qualifier codes available in `student_qualifiers.json` cover the recurring patterns. New codes should be added to that file rather than invented ad-hoc, and the `qualifier_engine` validates against the JSON whitelist (so unknown codes produce a warning rather than silently appearing).

---

## What DEEPS already handles correctly

After recent improvements:

1. **Normal flow processing**. Out-of-phase students who join a current group are processed identically to main cohort members.

2. **Cross-year case scoresheet discovery**. A YR5 student's outstanding YR2 case unit is correctly found in the current YR2 case scoresheet. The merge logic prefers the best score across multiple matching files for the same year.

3. **Reg number normalization**. The `reg_no_normalizer` is called at every read site, so typos (Unicode hyphens, extra spaces, O/0 confusion) get fixed transparently. Without this, a typo would cause silent matching failures.

4. **Cohort detection**. `graduation_consolidation.detect_graduating_cohorts` identifies the main cohort year and surfaces non-main-cohort students in the award list. Non-cohort students appear in the right place; what they lack is the qualifier subscript on the senate doc.

5. **Qualifier engine**. `qualifier_engine.py` derives qualifier codes from a combination of student matters records and academic timeline analysis (looking at when the student appears in YR1, YR2, etc. annual files and detecting gaps that indicate academic leave or repeated years). It validates produced codes against the JSON whitelist.

6. **Attachment processing pipeline**. Raw attachment files are read from `inputs/{ay}/YR{max}/GRADUATION/attachment/`, normalized, validated, and written as DEEPS-formatted xlsx to `outputs/.../GRADUATION/ATTACHMENT/`. Eliminates the typo-vs-strict-regex bug class for attachment data specifically.

---

## What's still missing

Three concrete gaps:

### 1. A single source of truth for cohort metadata

Right now, the canonical "which cohort does student X actually belong to?" answer lives in:

- The reg number's `/{intake_year}` suffix (correct only for students who never repeated)
- Manual officer knowledge
- The qualifier engine's heuristic derivation (works in many cases but not all)

What's needed: a **cohort registry** where every out-of-phase student has an explicit entry stating their canonical cohort, current sub-cohort, status, and any notes. Two storage options being considered:

- **Extend `student_qualifiers.json`** with per-student entries (single source, already wired into the engine, already tracked in private repo, build cleanup paths already wipe it from public builds)
- **Separate `cohort_registry.xlsx`** under inputs (more officer-friendly to edit but needs a parser)

### 2. A "Cohort Hygiene Report" tool

A new menu item that automates the annual survey:

- Survey YR1-YR5 of the configured graduation year for non-main-cohort students
- Survey for main-cohort students who have fallen into lower years
- Optionally cross-reference against a configured "historical CMS" file path
- Categorize students into the four shapes
- Output: a structured XLSX report with sheets per shape, plus action recommendations
- Optional: write/update the cohort registry from findings

### 3. A "Generate Cases for Out-of-Phase Students" workflow

After the hygiene tool identifies students needing case scoresheets, this would:

- Read the cohort registry (or hygiene report output)
- For each student with outstanding units, look up which current group is sitting that unit
- Add the student to the appropriate `cases_scoresheets/` file
- Reuse `case_scoresheet_generator.py` infrastructure (single-student case sheets work today)
- Log everything for audit

---

## Recommended workflow for handling out-of-phase students (current state)

Until the dedicated tools are built, the recommended manual workflow is:

### Step 1. Survey at the start of each graduation cycle

Open the year's annual files for YR1-YR5 and look at the intake-year breakdown. The expected mapping for an academic year `{Y}/{Y+1}` is:

| Year of study | Expected intake year |
|---|---|
| YR1 | `Y` |
| YR2 | `Y-1` |
| YR3 | `Y-2` |
| YR4 | `Y-3` |
| YR5 | `Y-4` |

Anyone whose intake year is **older** than expected for their year of study has fallen behind their original cohort and is now in a sub-cohort. Anyone whose intake year is **newer** is mid-entry / transfer (rare).

### Step 2. Categorize each out-of-phase student

For each anomaly, ask:

1. **What's their final recommendation in the current annual file?**
   - `PASS` → Shape 1 already handled, just needs qualifier subscript
   - `SUPP` / `INC` / `RETAKE` / `CF` → Shape 2, needs case scoresheet entry
   - `DEREGISTRATION` / `WITHHOLD` → not graduating this cycle, document why
   - `REPEAT YEAR` → not graduating this cycle, will join the lower year-group

2. **Are they in the cohort registry?** If yes, we know their story. If not, this is an investigation prompt.

3. **What does the historical record say?** If you have access to historical institutional records, cross-reference. Note that **summary sheets in historical records may contain incorrect values** — prefer the year-specific progression sheets when reconstructing a student's history.

### Step 3. Update the cohort registry

For each student you've classified, add or confirm their entry in `student_qualifiers.json` (or whichever storage we settle on). At minimum:

- Reg number (anonymized when documenting)
- Canonical cohort year (year they originally joined YR1)
- Current sub-cohort (if joined another group)
- Qualifier code (RP1, RA2, etc.)
- Brief reason note

### Step 4. Generate case scoresheets if needed

For Shape 2 students (1-2 outstanding units), use Tools > Generate Case Scoresheets to add them to the relevant unit's case file. The existing tooling handles single-student case sheets fine.

### Step 5. Run graduation processing

Once the registry is up to date and case scoresheets are filed, run Tools > Prepare Graduation Consolidated. The award list should now correctly:

- Include Shape 1 students with proper qualifier subscripts
- Include Shape 2 students whose cases have cleared
- Exclude students with `WITHHOLD` / `DEREGISTRATION` / `REPEAT` (they stay in cases sheet)
- Not double-count students who appear in multiple sheets

### Step 6. Manual review of the cases sheet

The students remaining in `AWARD LIST CASES` should each have a clear documented reason. This sheet is not a list of failures. It's a list of "not yet graduating" with reasons. Officer decides what to do with each:

- `ACAD LEAVE` → wait for them to return
- `WITHHOLD` → resolve the paperwork hold then re-run
- `DEREGISTRATION` → confirm no appeal pending
- `INC` / `SUPP` / `CF` → ensure case scoresheets are filed and supps are scheduled

---

## Edge cases and gotchas

### Gotcha 1. Reg number typos in source files

Historical records and externally-sourced files may use Unicode hyphens (U+2010) for some students, while DEEPS uses ASCII hyphens (U+002D) by default. A naive substring match between the two will fail. **Always normalize before comparing** — `reg_no_normalizer.normalize_reg_no` handles this and several other typo classes (extra spaces, O vs zero, mixed case, etc.).

### Gotcha 2. Unit reference tables look like student rows

Annual consolidated files have a unit reference table at the bottom (Unit Code → Unit Name lookup). A naive iterator that reads "all rows after the header until end of sheet" will mis-read these as students. **Always stop at the SUMMARY / STATISTICS marker** — that's the canonical end-of-data marker DEEPS uses across all consolidated files.

### Gotcha 3. Summary / award list sheets in external files may be wrong

Summary sheets in historical institutional records (provisional graduating lists, all-CMS sheets, final award lists) can contain stale or incorrect values. **Prefer the year-specific progression sheets** when reconstructing a student's history. The progression sheets are the actual exam records and are reliable.

### Gotcha 4. Same student, multiple progression sheets per year

A student might appear in `YR3_MAIN`, `YR3_SUPP`, and `YR3_SACF` in the same academic year. They're not duplicates — they're different exam types. When reconstructing history, capture all of them and label by exam type.

### Gotcha 5. A student's "current year of study" depends on the file you read

The same student might appear in YR4 of `{Y}/{Y+1}` AND YR5 of `{Y+1}/{Y+2}`. That's a normal one-year progression, not a duplication. Use the academic year + year of study together as the key when tracking progression, not the year of study alone.

### Gotcha 6. Old students may have a different syllabus

Students from very old cohorts may be enrolled in units that have since been renamed, restructured, or removed. The cohort hygiene tool should detect syllabus drift and warn the officer if old students are listed against units that don't appear in the current syllabus configuration.

### Gotcha 7. Old graduates being re-processed

Some students who appear in current YR5 may have been on a previous year's graduation list with `WITHHOLD` or `INCOMPLETE` status. They're being re-processed because their hold has been resolved. This isn't a bug. It's the supplementary graduation cycle. The cohort registry should track "first appearance on graduation list" so the audit trail is clear.

---

## Future feature ideas

### Cohort Hygiene Report (high priority)

A new menu item under Tools that runs the survey + classification + cross-reference described in this document automatically. Output: structured XLSX report. See the "What's still missing" section above for details.

### Individual Student Pipeline (low priority. only if Shape 4 becomes common)

A new folder convention `inputs/{ay}/individual_students/{reg_no}/` with a custom processor that handles students sitting their own complete exam arrangements. Currently the workaround (using a normal scoresheet with one student) works fine.

### Cross-Cycle Carry-Over Tracking

A persistent record across graduation cycles of which students appeared in cycle N with `WITHHOLD` / `INCOMPLETE` and what was eventually resolved. Helps the senate review committee see "this student has been pending for 3 cycles, what's going on?" and make informed decisions.

### Cohort History Visualization

A GUI panel that shows a single student's full timeline as a horizontal bar chart: each year of study they appeared in, color-coded by status (PASS / FAIL / SUPP / ACAD LEAVE / WITHHOLD / etc.). Makes it instantly visible whether a student is on the main path or has a complex history. Useful during officer-student consultations.

### Auto-Suggest Qualifier Codes

When the cohort registry is being populated, the qualifier engine could analyze the student's annual files (years they appear, gaps, repeats) and the student matters records, and auto-suggest the most likely qualifier code(s) for officer confirmation. The engine already has the building blocks (`build_student_timelines`, `_analyze_timeline`, `suggest_qualifier`); it just needs a UI surface.

### Historical Records Auto-Import

A one-time importer that reads an old institutional records file (multi-sheet xlsx with historical progression data) and populates DEEPS' database with the missing historical records, so DEEPS has full progression context for old students. This would eliminate the "missing data" gotcha for cycles where DEEPS only has recent years' records.

---

## File locations referenced in this document

- DEEPS cases regenerator: `src/deeps/modules/cases/regenerator.py`
- Reg number normalizer: `src/deeps/modules/reg_no_normalizer.py`
- Qualifier engine: `src/deeps/modules/qualifier_engine.py`
- Qualifier definitions: `src/deeps/resources/data/rules/student_qualifiers.json`
- Graduation consolidation: `src/deeps/modules/graduation_consolidation.py`
- Attachment processor: `src/deeps/modules/attachment_processor.py`
- Annual consolidation: `src/deeps/modules/annual_consolidation.py`

---

## Open questions (to resolve before building tools)

1. **Where does the cohort registry live?** Extending `student_qualifiers.json` or a separate XLSX? Trade-off is officer-editability vs single-source-of-truth.

2. **Should `Cohort Hygiene Report` write to the registry automatically, or always require officer confirmation?** The conservative approach is to make the tool produce a "draft registry" that the officer reviews and merges manually.

3. **How does DEEPS know the "expected intake year" per year of study for a given academic year?** Currently this is implicit. Should be made explicit in a small lookup helper that's used by both the cohort detection and the hygiene report.

4. **For students with ambiguous WITHHOLD status (paperwork vs academic), how does DEEPS distinguish?** Currently it's a single recommendation string. Maybe split into status (PASS / INC / ...) and a separate hold flag (NONE / PAYMENT_HOLD / CLEARANCE_HOLD / ...).

5. **Should the cohort registry support multi-year status histories?** E.g., "this student was WITHHOLD in cycle X, resolved in cycle Y". Or is that overkill for now?

6. **How does an old student get added to a current group's case scoresheet without polluting that group's processing report?** The case scoresheet generator probably needs to label out-of-phase additions visibly so the report distinguishes "regular cohort cases" from "absorbed out-of-phase students".

---

## Glossary

- **Main cohort**: The primary intake year for a given graduating class. For an academic year `{Y}/{Y+1}` graduation, the main cohort is the `/{Y-4}` intake.
- **Sub-cohort**: A group of out-of-phase students who have joined a current group.
- **Out-of-phase**: Any student whose intake year doesn't match the expected year for their current year of study.
- **Carry-over**: A student who was on a previous graduation list (typically with WITHHOLD or INCOMPLETE status) and is being re-processed in a later cycle.
- **Sub-cohort drift**: The gradual mixing of intake years across years of study as students repeat, take leave, etc. Drift is normal; the goal is to track it, not prevent it.
- **Cohort registry**: A future structured record of every out-of-phase student's canonical cohort, current sub-cohort, status, and notes. Single source of truth for cohort metadata.
- **Cohort hygiene**: The process of ensuring every student in the system has a clear cohort assignment and status, with no orphaned or ambiguous records.
- **Shape**: One of four categories of out-of-phase students based on how they need to be processed (1 = absorbed into group, 2 = case scoresheet, 3 = isolated cases, 4 = full custom pipeline).
