# DEEPS: Departmental Exams Processing Spreadsheet-based System

**DEEPS** (Departmental Exams Processing Spreadsheet-based System) is an initiative by **[SiliconWit](https://siliconwit.com)** to provide low-income educational institutions with an affordable, transparent exam processing solution. A small maintenance fee applies.

## About This Project

DEEPS is designed to bridge the gap between expensive proprietary exam management systems and the practical needs of resource-constrained educational institutions. By leveraging Excel spreadsheets (`.xlsx`) as the primary data format, DEEPS offers unique advantages:

### Why Spreadsheet-Based?

Unlike traditional database-driven systems that require specialized technical expertise, DEEPS uses Excel files as its "database." This design choice provides several critical benefits:

- **Accessibility**: Excel is familiar to educators worldwide - no database administrators needed
- **Transparency**: Results stored in open `.xlsx` format can be viewed and verified by anyone with Excel, LibreOffice, or Google Sheets
- **Collaborative Moderation**: Departments and schools can review, discuss, and moderate results directly in spreadsheets without database complexity
- **Open Data Format**: Facilitates transparent academic processes where stakeholders can inspect raw data using standard spreadsheet software
- **Affordability**: No database licensing costs or specialized infrastructure requirements
- **Portability**: Results can be easily shared, archived, and accessed across different platforms and institutions

While Python-based database systems offer technical sophistication, DEEPS prioritizes **institutional accessibility** and **democratic data ownership** - enabling low-resource schools to maintain professional exam processing without vendor lock-in or hidden costs.

## Key Features

### Flexibility
DEEPS provides educators with the flexibility to process data and exams according to their preferences. It empowers users to handle data as securely as they see fit and adapt the software to their specific needs.

### Data Privacy
DEEPS and SiliconWit do not store, collect, or transmit any student data. All data remains on your local machine, ensuring complete privacy and control. You are solely responsible for data security and access controls.

### Scalability
The software is highly scalable and capable of efficiently managing a large number of students and their results. This scalability makes it suitable for educational institutions of various sizes.

### Recommendation Engine
DEEPS includes a powerful recommendation engine, enabling educators to gain valuable insights from exam data. This engine assists in identifying student status and areas for improvement based on exam results and predefined rules.

### Spreadsheet-Centric Design
By using Excel files as the data layer, DEEPS eliminates the need for complex database infrastructure while enabling transparent, collaborative examination processes that can be reviewed and moderated by all academic stakeholders. 

## Latest Updates (v1.0.3)

### Major Changes - Modern GUI & Packaging Ready! 🎉
- **PySide6 GUI**: Complete modern graphical interface replacing CLI
- **Briefcase-Ready Structure**: Restructured for cross-platform packaging (Linux, Windows, macOS)
- **Interactive Dialogs**: GUI prompts for mixed years and out-of-semester units
- **Real-time Progress**: Live processing logs, statistics, and results tabs
- **State Management**: Fresh processing on every run - no cached data mixing
- **Success Dialog**: Convenient "Open Output Folder" button after completion
- **Professional Styling**: Color-coded UI matching Excel processing colors

### Previous Features (v1.0.0)
- **Python Configuration System**: Python config for easier packaging
- **Professional Document Layout**: University logos in PDFs and Excel
- **Digital Signatures**: Approval signatures with chair signature and dates
- **Automatic Data Normalization**: Registration numbers auto-normalized
- **Enhanced Validation**: Improved blank cell detection and coloring
- **Better File Organization**: Outputs organized by semester/year
- **Clean Presentation**: Left-aligned data and clean gridlines

### Input Requirements
- Excel files (`.xlsx`) named with unit codes (e.g., `EYZ 4101.xlsx`)
- Files must contain keywords: `REG. NO.` and `INTERNAL EXAMINER MARKS /100`
- Include keyword `summary` or `summary of results` in each score sheet
- Remove lock files before processing: `find . -type f -name '.~lock.*.xlsx#' -delete`

### Processing Workflow

1. **Click "Browse"** and select the folder containing your Excel exam files
2. **Click "Start Processing"**
3. **Respond to interactive dialogs** (if any):
   - Mixed year units detection
   - Out-of-semester units confirmation
4. **Wait for completion** - progress shown in real-time
5. **Click "Open Output Folder"** in the success dialog to view results

### Output Files
Outputs are automatically organized by semester and year:
```
src/deeps/resources/data/outputs/
└── [Semester-Year]/
    └── [Year.Semester_identifier]/
        ├── YR[X]_[S]_consolidated.xlsx
        └── YR[X]_[S]_processing_report.txt
```

## Configuration Guide

### Essential Settings in `config.py`

**Institution Details:**
```python
UNIVERSITY_NAME = "Your University Name"
SCHOOL_OF = "Your School Name"
DEPARTMENT_OF = "Your Department Name"
COURSE_NAME = "Your Course Name"
ACADEMIC_YEAR = "2024/2025"
```

**Signature Dates:**
```python
DEPT_CHAIR_SIGNATURE_DATE = "24th November 2025"  # Auto-generated
SCHOOL_DEAN_SIGNATURE_DATE = ""  # Set when needed
SENATE_CHAIR_SIGNATURE_DATE = ""  # Set when needed
```

**Grading System:**
```python
PASS_MARK = 40
GRADE_THRESHOLDS = {
    "A": 70,
    "B": 60,
    "C": 50,
    "D": 40,
    "E": 0,
}
```

**Registration Number Patterns:**
```python
COURSE_PATTERNS = {
    "E155": r"^E155-01-\d+/\d{4}$",  # Computer Engineering
    # Add more patterns for other courses
}
```

## Troubleshooting

### Common Issues

**"REG. NO." cell not found:**
- Ensure your Excel files have the exact keyword "REG. NO." or "REG_NO"
- Check that the header row is not merged incorrectly

**"INTERNAL EXAMINER MARKS /100" cell not found:**
- Verify the marks column header matches the expected format
- The system accepts variations like "INT. EXAMINER MARKS /100"

**Mixed year units warning:**
- The system will detect if units are from different years
- Choose to continue with the most common year or process all together

**File format errors:**
- Only `.xlsx` files are supported
- Ensure filenames match unit codes exactly
- Remove any lock files: `find . -type f -name '.~lock.*.xlsx#' -delete`


## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License and Disclaimer

**License**: This software is proprietary. Source code is provided for review and customization purposes only, with student data protection in mind. A small maintenance fee applies for ongoing support and updates.

**Disclaimer**: You are fully responsible for:
- Ensuring all input data (Excel files) are correct, complete, and properly formatted before processing
- Verifying that all generated outputs meet your institution's academic policies and requirements
- Validating results accuracy and completeness before any official use or submission
- Cross-checking processed data against source materials to confirm correctness

DEEPS is provided as-is. SiliconWit assumes no liability for any errors, omissions, data loss, or inaccuracies in inputs or generated results. Always perform thorough reviews and validation before official use.

## Support

For technical issues, questions, or contributions:
- **Technical Support**: Contact Dr. Sam at [sam@siliconwit.com](mailto:sam@siliconwit.com)
- **GitHub Issues**: Visit the [GitHub repository](https://github.com/SiliconWit/deeps)
- **Website**: [https://siliconwit.com](https://siliconwit.com)
