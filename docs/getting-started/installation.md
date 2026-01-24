# Installation Guide

Get DEEPS running on your system in minutes.

---

## :material-information-outline: About DEEPS

!!! info "What is DEEPS?"
    **DEEPS** (Departmental Exams Processing Spreadsheet-based System) is a desktop application that processes exam scoresheets and generates consolidated results, senate documents, and academic reports.

    - **Spreadsheet-based** - Works with Excel files from lecturers
    - **Local processing** - All data stays on your computer
    - **Cross-platform** - Runs on Windows, macOS, and Linux

---

## :material-download: Download

### Current Release

Visit the releases page to download the latest version:

[:material-github: View Releases](https://github.com/SiliconWit/deeps/releases){ .md-button .md-button--primary }

### Download Options

=== ":fontawesome-brands-windows: Windows"

    **Recommended:** Download the `.exe` installer

    1. Download `DEEPS-Setup-x.x.x.exe`
    2. Run the installer
    3. Follow the installation wizard
    4. Launch DEEPS from Start Menu

=== ":fontawesome-brands-ubuntu: Linux"

    **Option 1: Run from Source (Recommended)**

    ```bash
    # Clone the repository
    git clone https://github.com/SiliconWit/deeps.git
    cd deeps

    # Create virtual environment
    python3 -m venv venv
    source venv/bin/activate

    # Install dependencies
    pip install -r requirements.txt

    # Run DEEPS
    python -m deeps
    ```

    **Option 2: AppImage**

    1. Download `DEEPS-x.x.x.AppImage`
    2. Make executable: `chmod +x DEEPS-x.x.x.AppImage`
    3. Run: `./DEEPS-x.x.x.AppImage`

=== ":fontawesome-brands-apple: macOS"

    **Run from Source:**

    ```bash
    # Clone the repository
    git clone https://github.com/SiliconWit/deeps.git
    cd deeps

    # Create virtual environment
    python3 -m venv venv
    source venv/bin/activate

    # Install dependencies
    pip install -r requirements.txt

    # Run DEEPS
    python -m deeps
    ```

---

## :material-key: License Activation

DEEPS requires a license to unlock full functionality.

!!! tip "Getting a License"
    DEEPS is donation-supported software. Support the project at [siliconwit.com/donate](https://siliconwit.com/donate) to receive activation credentials.

### Activating Your License

1. Launch DEEPS
2. Go to **License → Renew License**
3. Enter your credentials:
   - **Username**: Your registered email
   - **License Key**: The key provided after donation
4. Click **Activate**

!!! success "License Benefits"
    - Full access to all processing features
    - Senate document generation
    - Annual consolidated reports
    - Priority support

---

## :material-folder-cog: Initial Setup

After installation, configure DEEPS for your institution:

### 1. Set Data Paths

Go to **File → Settings → Paths** and configure:

| Setting | Description |
|---------|-------------|
| **University Logo** | PNG image for document headers |
| **Units JSON** | Course units and titles for your program |
| **Unit Assessments JSON** | Assessment breakdown (CATs, labs, exams) |
| **Rules JSON** | Engineering rules for senate document citations |

### 2. Configure Institution Details

Go to **File → Settings → Senate Documents** and set:

- Institution name
- School/Faculty name
- Department name
- Academic year
- Signing officials (Chair, Dean, etc.)

### 3. Create Folder Structure

Use **Tools → Create Academic Folder** to set up the standard folder structure for your first semester.

---

## :material-check-circle: Verify Installation

Test that DEEPS is working correctly:

1. **Launch DEEPS** - The main window should open
2. **Check License** - License menu shows activation status
3. **Open Settings** - File → Settings should display configuration tabs
4. **View Sample Data** - View → Course Syllabus (if configured)

!!! success "Ready to Go!"
    Once verified, proceed to the [Quick Start Guide](quick-start.md) to process your first scoresheets.

---

## :material-wrench: Troubleshooting

??? warning "Application won't start"
    **Windows:** Ensure you have Visual C++ Redistributable installed

    **Linux:** Check Python version: `python3 --version` (requires 3.8+)

    **macOS:** Allow app in System Preferences → Security & Privacy

??? warning "License activation fails"
    - Check internet connection
    - Verify credentials are entered correctly
    - Ensure no firewall blocking the connection
    - Contact support if issue persists

??? warning "Missing dependencies (Linux/macOS)"
    ```bash
    # Install system dependencies
    sudo apt install python3-pip python3-venv  # Ubuntu/Debian

    # Reinstall Python packages
    pip install --upgrade -r requirements.txt
    ```

---

## :material-arrow-right: Next Steps

<div class="grid cards" markdown>

-   :material-rocket: **Quick Start**

    ---

    Learn the basic workflow for processing scoresheets

    [:octicons-arrow-right-24: Quick Start Guide](quick-start.md)

-   :material-folder-multiple: **Folder Structure**

    ---

    Understand how DEEPS organizes your data

    [:octicons-arrow-right-24: Folder Structure](../user-guide/folder-structure.md)

</div>
