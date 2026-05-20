# Encrypting Exam Documents with SiliconWit Seal

A secure guide for encrypting sensitive exam materials (scoresheets, question papers, answer keys) before emailing them to the examinations office.

We recommend the SiliconWit team's own desktop app, **SiliconWit Seal**, for everything in this guide. Seal is purpose-built for the workflow described here. If you already use Kleopatra, GPG Suite, Thunderbird, or the `gpg` command line, those still work too. They all read and write the same standard OpenPGP files.

---

## :material-rocket-launch: Recommended: SiliconWit Seal

!!! tip "The short version"
    1. Install **SiliconWit Seal** from the [releases page](https://github.com/SiliconWit/siwit-seal-releases/releases).
    2. The app walks you through setup the first time you open it. It generates your key, prompts you to save a backup, and is ready to use in under five minutes.
    3. To encrypt, drag your exam files onto the **Send** tab, pick the recipient, and click **Encrypt and Save**.
    4. To decrypt, drag the `.gpg` or `.pgp` file onto the **Receive** tab and type your passphrase.
    5. Full documentation lives at [siliconwit.github.io/siwit-seal-releases](https://siliconwit.github.io/siwit-seal-releases/).

[:material-book-open-variant: Full Seal documentation](https://siliconwit.github.io/siwit-seal-releases/){ .md-button .md-button--primary }
[:material-rocket-launch: Quick start](https://siliconwit.github.io/siwit-seal-releases/quickstart/){ .md-button }
[:material-compass: Tour of every tab](https://siliconwit.github.io/siwit-seal-releases/using/){ .md-button }
[:material-file-pdf-box: Install slides (PDF)](https://siliconwit.github.io/siwit-seal-releases/assets/install.pdf){ .md-button }

### :material-checkbox-marked-circle-outline: Why we recommend Seal for DEEPS workflows

<div class="grid cards" markdown>

-   :material-drag-variant: **Drag and drop**

    ---

    Drop a folder of scoresheets onto the Send tab. Seal zips, encrypts, and saves the bundle. No command line. No Kleopatra panels.

-   :material-account-key: **Auto encrypt to yourself**

    ---

    On by default. You can always re-open the bundles you sent, which is the single most common reason senders get stuck with classic GPG.

-   :material-key-chain-variant: **GnuPG is bundled**

    ---

    Nothing else to install on Windows, macOS, or Linux. No separate Gpg4win or GPG Suite step.

-   :material-folder-key: **Backups built into onboarding**

    ---

    The first-run wizard refuses to let you start encrypting real files until you have saved both your private-key backup and your revocation certificate.

-   :material-file-key-outline: **Standard OpenPGP output**

    ---

    Files are RFC 4880 with no custom metadata. Recipients can open them with Kleopatra, GPG Suite, Thunderbird, Mailvelope, or any other OpenPGP tool. They do not need Seal.

-   :material-account-multiple: **Multiple accounts**

    ---

    Keep a personal key and a departmental key on the same machine and switch between them per send.

</div>

---

## :material-lock-question: What is OpenPGP?

!!! info "OpenPGP in 30 seconds"
    OpenPGP is the encryption standard that lets you lock a file using the recipient's **public** key. Only the recipient can unlock the file, using their matching **private** key, which never leaves their computer.

    Think of it like a padlock and key. The recipient hands out padlocks (their public key) so anyone can lock a box for them. Only the recipient holds the key that opens those padlocks.

**Core capabilities:**

:material-shield-lock: **Encrypt files.** Make content unreadable to everyone except the intended recipient.

:material-shield-check: **Sign files.** Prove the file really came from you, and detect tampering in transit.

:material-key-chain: **Key pairs.** You encrypt with the recipient's public key. They decrypt with their matching private key.

### :material-help-circle-outline: Naming, demystified

<div class="grid" markdown>

!!! example "PGP"
    **Pretty Good Privacy**

    The original commercial software from 1991. The name persists as shorthand for "OpenPGP" in everyday usage.

!!! example "OpenPGP"
    **The standard (RFC 4880)**

    The open protocol that defines how the encryption actually works. Anyone can implement it.

!!! example "GnuPG / GPG"
    **The reference implementation**

    Free, open source, and bundled inside SiliconWit Seal. Also available as a command-line tool and inside Kleopatra, GPG Suite, Thunderbird.

</div>

!!! tip "Why this matters"
    All OpenPGP tools speak the same language. A file encrypted with **Seal** on Linux can be opened with **Kleopatra** on Windows or **GPG Suite** on Mac. You and your recipient do not have to use the same tool.

---

## :material-key-chain: How public and private keys work

!!! abstract "The two-key system"
    Think of public and private keys like a mailbox:

    - **Public key.** The mailbox slot. Anyone can drop mail in.
    - **Private key.** The mailbox key. Only you can pick the mail up.

```
        YOU                                EXAM OFFICE
         ↓                                     ↓

    🔑 Get their           📦 Encrypt with        📧 Email           🔓 They decrypt
    public key      →      their public key   →   .gpg file   →     with private key

                           exam.zip → exam.zip.gpg → [Email] → exam.zip
```

!!! danger "You cannot decrypt files you encrypted to someone else"
    Once you encrypt a file with the recipient's public key, only their private key can decrypt it. Not even you can open it again. This is intentional security.

    **With SiliconWit Seal this trap is removed by default.** The Send tab automatically encrypts a second copy to your own key as well, so you can always re-open what you sent. This option is labelled **Also encrypt to me (so I can open it later)** on the Send page.

    If you use a different tool, keep a copy of the **original** files until the recipient confirms receipt.

### :material-account-multiple: Sender vs recipient

<div class="grid cards" markdown>

-   :material-account-edit: **YOU (Sender, the lecturer / coordinator)**

    ---

    **Your keys:**

    - :material-key-variant: Private key (kept secret, never shared)
    - :material-lock-open: Public key (shared freely)

    **Your actions:**

    1. Get the recipient's public key, once.
    2. Encrypt using THEIR public key.
    3. Send the encrypted bundle by email.
    4. Keep originals (or rely on Seal's auto-encrypt-to-self).

-   :material-account-school: **EXAM OFFICE (Recipient)**

    ---

    **Their keys:**

    - :material-key-variant: Private key (they keep secret)
    - :material-lock-open: Public key (they publish to you)

    **Their actions:**

    1. Publish their public key to senders.
    2. Decrypt incoming bundles with their private key.
    3. Verify your signature (if you signed).
    4. Extract and process the exam materials.

</div>

---

## :material-arrow-right-bold: The workflow at a glance

!!! success "End-to-end process"
    ```
    📄 Exam files       🗜️ ZIP archive      🔐 Encrypt          📧 Email           🔓 Recipient
    (PDF, DOCX)    →   (auto in Seal)   →   (.zip.pgp)      →   Send securely   →  Decrypts
        ↓
    Organize in
    one folder
    ```

**The seven steps, mapped to SiliconWit Seal:**

| Step | Action | Where it happens in Seal |
|:----:|--------|--------------------------|
| **1** | Organize exam files (PDF, DOCX) in one folder | Outside the app, in your file manager |
| **2** | Add files | Send tab. Drag onto the drop zone, or click **Browse files...** / **Add folder...** |
| **3** | Pick the recipient | Send tab. Quick-pick dropdown, or the multi-select list |
| **4** | Encrypt | Send tab. Click **Encrypt and Save** |
| **5** | Locate output | `Documents/SILICONWIT-SEAL/Sent/<name>.zip.pgp`, plus a copy of your public key in the same folder |
| **6** | Email both files | Your email client. Attach the `.zip.pgp` bundle and your `.asc` public key |
| **7** | Recipient decrypts | Their OpenPGP tool, using their private key |

!!! tip "Auto-zip and auto-wrap"
    You do not need to zip the folder yourself. Seal does it. If you drop a set of loose files (no folder around them), Seal wraps them in a single folder named after the bundle, so the recipient unzips into one tidy folder instead of files scattered into wherever they extracted.

---

## :material-download: Install SiliconWit Seal

Three flavours of installer, one set of features. Full instructions, expected SmartScreen warnings, and the printable install slides are on the official docs.

[:material-book-open-variant: Install instructions](https://siliconwit.github.io/siwit-seal-releases/install/){ .md-button .md-button--primary }

=== ":fontawesome-brands-windows: Windows"

    **Tested on Windows 10 (1909+) and Windows 11.**

    1. Download `siwit-seal-<version>-win-x64.msi` from the [Releases page](https://github.com/SiliconWit/siwit-seal-releases/releases) or the [Google Drive mirror](https://drive.google.com/file/d/1_sCuSeqJO8JbBs8dWMn0VtlgerIXMrI3/view?usp=sharing) (byte identical).
    2. Double-click the `.msi`. Follow the installer prompts.
    3. Launch **SiliconWit Seal** from the Start menu.

    See the [Windows install notes](https://siliconwit.github.io/siwit-seal-releases/install/windows/) for the SmartScreen and UAC warnings that are normal on a brand-new open-source signing identity.

=== ":fontawesome-brands-ubuntu: Linux"

    **Tested on Ubuntu 22.04+, Debian 12+, Linux Mint 21+.**

    ```bash
    sudo apt install ./siwit-seal_<version>_amd64.deb
    ```

    The leading `./` is required so apt resolves dependencies. See the [Linux install notes](https://siliconwit.github.io/siwit-seal-releases/install/linux/).

=== ":fontawesome-brands-apple: macOS"

    **Coming soon. Apple Silicon and Intel, macOS 12+.**

    Watch the [Releases page](https://github.com/SiliconWit/siwit-seal-releases/releases) for the `.dmg`. Meanwhile, macOS users can fall back to GPG Suite (see the section at the bottom of this page).

---

## :material-key-plus: First-time setup in Seal

The first time you open Seal, the **First-time setup** wizard runs automatically. Six steps shown down the left:

| Step | What you do | Why it matters |
|:----:|-------------|----------------|
| 1 | **Welcome** | Visual explanation of public vs. private keys |
| 2 | **Your identity** | Real name and email get embedded in your public key |
| 3 | **Your passphrase** | Protects your private key. There is no recovery if lost |
| 4 | **Generate keys** | Creates a 4096-bit RSA key pair locally (up to a minute) |
| 5 | **Back up your keys** | Saves your **private-key backup** and **revocation certificate** to disk |
| 6 | **You're ready** | Shows your fingerprint so contacts can verify your key |

!!! danger "Save the backup and the revocation certificate before you encrypt real exams"
    If you lose the passphrase and the backup, the files encrypted to you cannot be opened by anyone, including you. If your laptop is stolen, the revocation certificate is your only way to publicly invalidate the lost key.

    Save both to a place only you can reach: a USB stick locked in a drawer, an institutional password manager, or an encrypted cloud folder.

For the full step-by-step walkthrough with screenshots and explanations, see the [Seal Quick Start](https://siliconwit.github.io/siwit-seal-releases/quickstart/#1-first-run-create-your-key).

---

## :material-file-lock: Encrypting a scoresheet bundle

The most common DEEPS scenario: you have a folder of scoresheets and you need to send them to the examinations office.

!!! example "End-to-end with Seal"
    1. Open Seal.
    2. Click **↑ Send** in the left sidebar (this is the first tab).
    3. In **Files to send**, click **Add folder...** and pick your scoresheet folder. Or drag the folder onto the drop area.
    4. In **Recipients**, pick the examinations office contact. If they are not in your address book yet, click **Add a contact** and paste their public key first.
    5. Leave **Also encrypt to me (so I can open it later)** checked. Leave **Sign with my key** off unless your recipient specifically asks for a signature.
    6. Click **Encrypt and Save**. Pick a location, or accept the default (`Documents/SILICONWIT-SEAL/Sent/`).
    7. Seal writes two files in that folder:
        - `<your-folder-name>.zip.pgp` (the encrypted bundle).
        - `<your-name>-<short-fp>-public.asc` (a copy of your public key).
    8. Email both as attachments. The recipient uses your public key to add you as a future contact and (if you signed) to verify the signature.

!!! tip "Verify the recipient first"
    Before encrypting anything truly sensitive, confirm the recipient's fingerprint over a **trusted channel** (in person or by phone). Read the 40-character fingerprint, four characters at a time. Seal groups the fingerprint in fours on the Contacts page for exactly this reason. Once verified, click **Mark verified** and the contact gets a checkmark badge in the recipients list.

---

## :material-lock-open: Decrypting a bundle you received

This is the reverse direction: someone has emailed you a `.gpg` or `.pgp` file.

!!! example "End-to-end with Seal"
    1. Save the attachment to your computer.
    2. Open Seal.
    3. Click **↓ Receive** in the left sidebar.
    4. Drag the encrypted file onto the drop area, or click **Browse...** and pick it.
    5. Click **Decrypt**. Type your passphrase.
    6. Seal extracts the contents into `Documents/SILICONWIT-SEAL/Received/<bundle-name>/`. If you have decrypted the same bundle before, the new copy lands in `<bundle-name> (2)`, then `(3)`, so nothing is overwritten.
    7. Double-click any row in the list to open the file, or click **Open folder** to reveal the folder in your file manager.

!!! info "Signature verification, automatically"
    If the sender signed the bundle and you already have their public key in **Contacts**, Seal verifies the signature and tells you who signed it. If the sender is not in your contacts yet, the file still decrypts; Seal just notes that it could not verify the signature.

---

## :material-backup-restore: Backup and recovery

!!! warning "If you lose your private key, you lose your encrypted data"
    Treat your private-key backup and revocation certificate the same way you treat your most important credentials.

**What Seal saves automatically (under `Documents/SILICONWIT-SEAL/`):**

| Folder | What is in it |
|--------|---------------|
| `Sent/` | Encrypted bundles you have sealed |
| `Received/` | Decrypted contents, one subfolder per bundle |
| `Backups/` | Your private-key backup files (`.asc`) |
| `Revocations/` | Your revocation certificates (`.asc`) |
| `Public keys/` | Your exported public keys (`.asc`) |

**To re-export from inside Seal:**

1. Open **⚿ My Keys**.
2. The red **Private Key** card has **Re-export private-key backup** and **Re-export revocation certificate** buttons.
3. The blue **Public Key** card has **Copy public key to clipboard** and **Save public key as file**.

**To restore on a new computer:**

1. Install Seal on the new machine.
2. When the first-run wizard appears, close it.
3. Copy your saved backup `.asc` into the keyring directory:
    - Linux: `~/.local/share/Seal/gnupg/`
    - Windows: `%APPDATA%\Seal\gnupg\`
    - macOS: `~/Library/Application Support/Seal/gnupg/`
4. Reopen Seal. Your identity is now active.

Backup and restore in the regular GPG sense (using `gpg --export-secret-keys` / `gpg --import`) also works. The on-disk format is standard OpenPGP.

---

## :material-tools: Falling back to Kleopatra, GPG Suite, or the command line

If you cannot install Seal (locked-down corporate machine, IT policy, or just personal preference), the same workflow runs in the classic OpenPGP tools. Output is interchangeable. A bundle made with Seal opens in Kleopatra, and vice versa.

=== ":fontawesome-brands-windows: Kleopatra (Gpg4win)"

    1. Install [Gpg4win](https://www.gpg4win.org/) with **GnuPG** and **Kleopatra** selected.
    2. **Kleopatra**, then **New Key Pair**. Enter your name and email. Choose RSA 4096. Set a strong passphrase.
    3. **Export** your public key (right-click the key, **Export...**) and email it to the examinations office once.
    4. **Import** their public key the same way.
    5. To encrypt a folder:
        1. Compress it to a `.zip` in File Explorer first (right-click, **Send to**, **Compressed (zipped) folder**).
        2. In Kleopatra, **File**, then **Sign/Encrypt Files...**, pick the `.zip`, choose **Encrypt for others**, select the recipient, save the `.gpg`.
    6. To decrypt, open Kleopatra, **File**, then **Decrypt/Verify Files...**, pick the `.gpg`, enter your passphrase.

    !!! warning "No auto-encrypt-to-self in Kleopatra by default"
        Always add **yourself** as a second recipient when encrypting, or you will not be able to open the bundle you just sent.

=== ":fontawesome-brands-apple: GPG Suite (macOS)"

    1. Install [GPG Suite](https://gpgtools.org/) from gpgtools.org, or `brew install gnupg` for the command line.
    2. Open **GPG Keychain**, then **New**, then create a 4096-bit RSA key with a strong passphrase.
    3. Export your public key, import theirs (drag-drop both work).
    4. Encrypt: right-click the `.zip` in Finder, **Services**, then **OpenPGP: Encrypt File**. Select the recipient. Tick **Add to recipients** for yourself.
    5. Decrypt: double-click the `.gpg` file. GPG Keychain prompts for your passphrase.

=== ":material-console: Command line (Linux, macOS, WSL)"

    Most distributions ship `gpg` already. If not, `sudo apt install gnupg` or `brew install gnupg`.

    **Generate a key (one time):**

    ```bash
    gpg --full-generate-key
    # Choose RSA, 4096 bits, set a strong passphrase
    ```

    **Export your public key to send to the examinations office:**

    ```bash
    gpg --armor --export your@email.example > my-public-key.asc
    ```

    **Import their public key:**

    ```bash
    gpg --import exam-office-public.asc
    ```

    **Zip and encrypt to BOTH the recipient AND yourself:**

    ```bash
    zip -r scoresheets.zip scoresheets/
    gpg --output scoresheets.zip.gpg \
        --encrypt \
        --recipient exam-office@example.edu \
        --recipient your@email.example \
        scoresheets.zip
    ```

    !!! warning "The second `--recipient` is what lets you open the bundle later"
        Without it, you cannot decrypt your own outgoing file. This is the most common CLI mistake.

    **Decrypt a bundle:**

    ```bash
    gpg --output scoresheets.zip --decrypt scoresheets.zip.gpg
    unzip scoresheets.zip
    ```

---

## :material-shield-check: Security checklist

A short list, applicable whether you use Seal or any other OpenPGP tool.

- [x] Generate keys at **4096-bit RSA** or stronger.
- [x] Use a **passphrase of several words**. Random words from a wordlist are stronger than a short password with symbols.
- [x] **Save** your private-key backup and revocation certificate to a place only you can reach.
- [x] **Verify** the recipient's fingerprint over a trusted channel (in person, voice call) before sending sensitive material.
- [x] **Always encrypt to yourself** in addition to the recipient (Seal does this by default).
- [x] **Keep the original files** until the recipient confirms receipt, unless you are relying on auto-encrypt-to-self.
- [x] **Update Seal** when new releases ship. Bug fixes for the OpenPGP backend ride along.
- [x] **Never** email your private-key backup as an attachment. Never paste it into a chat.

---

## :material-frequently-asked-questions: Common questions

??? question "Do I have to use SiliconWit Seal?"
    No. Seal produces standard OpenPGP files. You can use Kleopatra, GPG Suite, Thunderbird, Mailvelope, or the `gpg` command line and the workflow is the same. We recommend Seal because it is purpose-built for the DEEPS workflow described on this page and removes the most common pitfalls (no auto-encrypt-to-self, no built-in zipping, no enforced backup step).

??? question "My recipient does not use Seal. Can they still open my bundles?"
    Yes. The file format is RFC 4880, the same format Kleopatra, GPG Suite, Thunderbird, and Mailvelope produce. Your recipient sees a normal `.gpg` or `.pgp` file and opens it with whatever OpenPGP tool they prefer.

??? question "What if I forget my passphrase?"
    There is no recovery. The passphrase is the only thing protecting your private key, and it never leaves your computer. If you forget it:

    1. Publish your revocation certificate (or send it to the examinations office) so contacts know to stop trusting your old key.
    2. In Seal, open **My Keys**, then **Replace this key**, and generate a fresh one with the same name and email.
    3. Email the new public key to your contacts. Old encrypted bundles cannot be recovered, but the old key cannot be misused either.

??? question "What is the difference between `.gpg` and `.pgp`?"
    Nothing. They are the same OpenPGP format with a different file extension. Some tools accept only one, some accept both. Pick the default in **Settings**, then **Default suffix** inside Seal.

??? question "Where does Seal store my keys?"
    The visible folders are under `Documents/SILICONWIT-SEAL/`. The keyring itself lives in the platform's app-data location:

    - Linux: `~/.local/share/Seal/`
    - macOS: `~/Library/Application Support/Seal/`
    - Windows: `%APPDATA%\Seal\` (or `%LOCALAPPDATA%\Seal\`)

??? question "Can I have a personal key and a departmental key on the same machine?"
    Yes. In **My Keys**, click **+ Add another account** and the wizard runs again. The dropdown at the top of My Keys, Send, and the sidebar pill all stay in sync.

??? question "Is signing recommended?"
    Off by default in Seal, and that is intentional. Some OpenPGP tools refuse to display content when they cannot verify a signature, which looks like "cannot decrypt" to the recipient. Turn signing on per-send when your recipient explicitly wants to verify the file came from you. When you do sign, Seal drops a copy of your public key next to the bundle so the recipient can attach both.

??? question "Can I report a bug?"
    Open an issue on the releases repo: <https://github.com/SiliconWit/siwit-seal-releases/issues>. Attach the diagnostics log from Seal's **Help and Support** page if the issue is technical. The log records what went wrong but never records your passphrase, private-key material, or file contents.

---

## :material-information: Additional resources

<div class="grid cards" markdown>

-   :material-book-open-variant: **SiliconWit Seal docs**

    ---

    - [Documentation home](https://siliconwit.github.io/siwit-seal-releases/)
    - [Quick start](https://siliconwit.github.io/siwit-seal-releases/quickstart/)
    - [Using Seal: tour of every tab](https://siliconwit.github.io/siwit-seal-releases/using/)
    - [Install slides (PDF)](https://siliconwit.github.io/siwit-seal-releases/assets/install.pdf)
    - [Releases and downloads](https://github.com/SiliconWit/siwit-seal-releases/releases)

-   :material-account-multiple-outline: **Other OpenPGP tools**

    ---

    - [Gpg4win (Kleopatra) for Windows](https://www.gpg4win.org/)
    - [GPG Suite for macOS](https://gpgtools.org/)
    - [Thunderbird built-in OpenPGP](https://support.mozilla.org/en-US/kb/openpgp-thunderbird-howto-and-faq)
    - [Mailvelope (in-browser)](https://www.mailvelope.com/)

-   :material-file-document-multiple: **The standard, and the spec**

    ---

    - [OpenPGP.org](https://www.openpgp.org/)
    - [RFC 4880: OpenPGP Message Format](https://tools.ietf.org/html/rfc4880)
    - [GnuPG documentation](https://gnupg.org/documentation/)

</div>

---

## :material-link: Related documentation

<div class="grid cards" markdown>

-   :material-cloud-upload: **[Cloud Backup](cloud-backup.md)**

    ---

    Set up automatic backups of your DEEPS data to Google Drive

-   :material-frequently-asked-questions: **[FAQ](../support/faq.md)**

    ---

    Frequently asked questions about DEEPS functionality and troubleshooting

-   :material-help-circle: **[Support Center](../support/contact.md)**

    ---

    Get help from the DEEPS team for technical issues and guidance

</div>

---

!!! success "You are ready to encrypt and decrypt documents"
    You can now:

    - :material-check: Install and configure SiliconWit Seal on your platform
    - :material-check: Generate, back up, and restore your key pair
    - :material-check: Add the examinations office as a contact and verify their fingerprint
    - :material-check: Encrypt a folder of scoresheets in three clicks
    - :material-check: Decrypt bundles sent back to you
    - :material-check: Fall back to Kleopatra, GPG Suite, or `gpg` when needed

    For everything else, the [full Seal documentation](https://siliconwit.github.io/siwit-seal-releases/) is the source of truth.
