## Setup Playbook

Playbook ini memberi urutan persis untuk membangun agentic company di sekitar satu manusia. Jangan lewati langkah, dan jangan mulai dengan menulis kode atau mengunduh AI tool. Mulai dari realitas bisnis.

Kalau urutan ini diikuti, Anda akan menghasilkan perusahaan yang aman, bisa diaudit, dan sangat otonom. Kalau lompat ke Step 3, Anda hanya membangun mainan mahal.

### Fase 1: Fondasi

#### Step 0: Petakan Realitas Bisnis
Sebelum mendefinisikan satu agen pun, Anda harus mendefinisikan bisnisnya. Buka dokumen kosong (`business-map.md`) dan jawab:
*   **Apa yang dijual?** Misalnya kode, laporan riset, subscription SaaS.
*   **Siapa customer-nya?**
*   **Bagaimana uang masuk ke sistem?**
*   **Bagaimana uang keluar dari sistem?**
*   **Kerja apa yang berulang setiap minggu?**
*   **Apa mode gagal paling fatal?**

#### Step 1: Tulis Owner Principles
Agen Anda pada akhirnya akan bertemu edge case yang tidak tercakup prompt. Mereka butuh prinsip panduan. Buat `owner-principles.md` untuk mendefinisikan:
*   **Mission:** apa tujuan akhirnya?
*   **Non-negotiables:** apa yang sama sekali tidak boleh dilakukan agen?
*   **No-Publish Policy:** data apa, misalnya private key, relasi personal, atau health data, yang tidak boleh menyentuh network publik?
*   **Proof Policy:** standar bukti apa yang dibutuhkan untuk menyatakan kerja selesai?

### Fase 2: Desain Agen dan Identitas

#### Step 2: Definisikan Agen
Desain workforce Anda. Mulai kecil. Perusahaan matang bisa punya puluhan agen spesialis, tapi peluncuran awal sebaiknya memakai tiga arketipe inti:
1.  **Support Agent (Opsional tapi Direkomendasikan):** memantau burnout manusia, menjaga kontinuitas, dan menangani beban psikologis non-bisnis.
2.  **Execution / Chief of Staff Agent:** merutekan task, menilai risiko, menegakkan decision gate, dan memverifikasi kerja agen junior.
3.  **Role Agents:** worker spesialis seperti `agent-finance`, `agent-research`, `agent-content`. Tambahkan ini *hanya* saat ada kerja mingguan nyata dan berulang untuk mereka.

Setiap agen butuh Kontrak Identitas yang menjelaskan tanggung jawab, batas, tool yang boleh dipakai, dan format proof wajib.

### Fase 3: Infrastruktur dan Tool

#### Step 3: Install Runtime
Install environment eksekusi AI yang mendasari sistem. Jika memakai Hermes Agent:
```bash
curl -fsSL https://raw.githubusercontent.com/NousResearch/hermes-agent/main/scripts/install.sh | bash
hermes postinstall
hermes --version
hermes doctor
```
Pastikan runtime berhasil menjalankan tool call dasar sebelum lanjut.

#### Step 4: Hubungkan Tool lewat MCP
Hubungkan agen ke dunia nyata memakai Model Context Protocol (MCP). Hubungkan *hanya* tool yang sudah punya policy.

Untuk setiap tool yang diaktifkan, dokumentasikan:
*   **Purpose:** kenapa agen butuh ini?
*   **Allowed Actions:** endpoint spesifik apa yang boleh dipakai?
*   **Verification:** bagaimana tool mengembalikan proof of success?

#### Step 5: Route Memory
Tentukan di mana agen menyimpan dan mengambil knowledge. Jangan tumpahkan semuanya ke satu vector database.
*   **Stable Facts:** file Markdown berbasis Git seperti Obsidian/Logseq.
*   **Semantic Recall:** vector database seperti Chroma/Pinecone.
*   **Procedural Playbooks:** file `.skill` YAML/Markdown yang reusable.
*   **Active State:** tracker task perusahaan, misalnya Paperclip.

### Fase 4: Control dan Accountability

#### Step 6: Buat Command HQ
Bangun satu interface aman tempat human operator memberi command, approve action berisiko, dan review proof. Ini bisa berupa server Discord aman, CLI lokal, atau Airlock UI custom.
*   **Rule:** tidak ada bot chatroom liar. Setiap action yang dilakukan agen harus terikat ke command atau scheduled cron job yang terlihat di HQ.

#### Step 7: Tegakkan Decision Gate
Implementasikan gate yang didefinisikan di matriks Decision Gates.
*   Konfigurasi runtime agar mencegat request untuk public post, action destruktif, dan financial transaction.
*   Pastikan saat gate kena, approval request eksplisit, dengan payload persis dan syarat proof, dirutekan ke Command HQ.

#### Step 8: Bangun Ledger dan Proof System
Konfigurasi sistem agar setiap action signifikan dicatat ke append-only ledger.
*   Pastikan ledger menangkap Actor, Source, Action, Approval, Timestamp, Result, dan Proof.
*   Opsional: setup cryptographic anchoring untuk action finansial atau legal berisiko tinggi.

### Fase 5: Operasi

#### Step 9: Kontrak Akun dan Uang
Pindahkan risiko operasional dari identitas pribadi Anda ke identitas perusahaan.
*   Buat akun khusus milik agen, misalnya `finance@agentic-company.com`.
*   Tetapkan limit ketat, whitelist, dan approval threshold untuk corporate card dan crypto wallet.

#### Step 10: Implement Company Records
Jika memakai sistem seperti Paperclip, inisialisasi struktur record perusahaan:
*   Strategic Goals
*   Active Projects
*   Issue/Task Trackers
*   Approval Queues
*   Cost Tracking Dashboards

#### Step 11: Tetapkan Maintenance Cadence
Jadwalkan Daily Pulse, Weekly Review, Monthly Audit, dan Quarterly Strategy Review. Taruh di kalender manusia. Sistem tidak akan merawat dirinya sendiri.

### Tes Sistem Final

Setup selesai saat satu command manusia bisa berjalan bersih melewati seluruh sistem.

**Jalankan test ini:**
1. Manusia memberi command tingkat tinggi, misalnya “Research competitor X and draft a brief, but do not publish it”.
2. Chief of Staff agent menafsirkan risiko dan membuat task perusahaan terstruktur.
3. Research agent mengklaim task, scrape web, dan menghasilkan artifact.
4. Chief of Staff memverifikasi artifact terhadap success criteria.
5. Jika public publish diminta, sistem masuk Decision Gate dan menunggu approval manusia.
6. Efek samping sistem dieksekusi.
7. Proof action disimpan ke ledger.
8. Task ditutup, dan learning yang reusable disimpan sebagai skill baru.

Kalau loop itu berjalan tanpa intervensi manual, selain approval gate eksplisit, Anda sudah membangun minimum viable agentic company.

### Arsitektur Setup dan Eksekusi Lanjutan

Setup awal agentic company bukan deployment software standar. Anda sedang mendirikan workforce digital. Arsitektur harus memprioritaskan compartmentalization ekstrem, state yang bisa diverifikasi, dan auditability sejak hari pertama. Setup yang buruk menghasilkan konteks agen kusut, celah security, dan API spend yang tidak terkendali.

#### Batas Peran: Topologi Agen Awal
Jangan bangun satu agen generalist raksasa. Arsitektur hari pertama butuh batas peran yang ketat dan jelas.
1. **The Router (The Front Door):** menerima semua sinyal masuk seperti webhook, email, Slack. Ia tidak melakukan deep thinking. Ia hanya mengklasifikasi dan merutekan payload ke specialist agent.
2. **The Specialists (The Workers):** `agent-engineering`, `agent-sales`, `agent-support`. Mereka punya context window sempit, tool spesifik, dan tidak berkomunikasi silang kecuali lewat Router atau Ledger.
3. **The Auditor (The Guard):** agen terisolasi yang membaca Ledger dan menandai anomaly. Ia punya akses read-only ke semuanya dan tidak punya write access selain ke alert queue operator.

#### Matriks Policy: Constraint Hari Pertama
Dalam 72 jam pertama, agen harus sangat dibatasi. Trust diperoleh lewat output yang bisa diverifikasi.
| Tahap | Batas Pengeluaran Maks | Akses API | Tingkat Otonomi | Retensi Konteks |
| :--- | :--- | :--- | :--- | :--- |
| **Hari 1-3** | $0.00 | Hanya Baca | HITL Penuh (Human-in-the-loop) | Dihapus Harian |
| **Minggu 2** | $10.00 | Tulis Sandbox | Otonom untuk tugas sepele | 7 hari rolling |
| **Bulan 2** | $500.00 | Tulis Produksi | Otonom dengan Gate Bukti | Permanen (Vector) |

#### Taksonomi Kegagalan Setup
1. **Anti-Pola Agen Tuhan:** memberi satu agen akses ke AWS key, Stripe API, dan inbox customer support. Jika compromised, perusahaan hancur. *Mitigasi: pemisahan credential yang keras dan fisik.*
2. **Kebocoran Konteks:** memakai satu namespace vector database untuk semua agen. Sales agent mulai mengarang arsitektur engineering karena mengambil embedding yang salah. *Mitigasi: isolasi namespace ketat di Pinecone/Chroma.*
3. **Eksekusi Hantu:** deploy agen sebelum Ledger ada. Agen mengambil action, tapi operator tidak punya dashboard untuk melihat apa yang terjadi. *Mitigasi: Ledger harus menjadi sistem pertama yang dipasang.*

#### Contoh Record: Bootstrap Configuration Schema
Setiap deployment agen harus didefinisikan sebagai code agar bisa dibuat ulang dan diaudit cepat.
```json
{
  "agent_id": "agent-support-01",
  "version": "1.0.4",
  "capabilities": {
    "llm_model": "claude-3-5-sonnet",
    "temperature": 0.1,
    "tools_allowed": ["zendesk_read", "zendesk_reply", "ledger_write"]
  },
  "constraints": {
    "max_tokens_per_cycle": 4096,
    "egress_whitelist": ["api.zendesk.com"]
  },
  "canon_paths": ["/content/BRAND.md", "/content/SOP_SUPPORT.md"]
}
```

#### Operating Loop: 72 Jam Pertama
Saat deployment awal, 1-Man Army harus menjalankan loop observasi ketat.
* **Hour 1-4:** inject synthetic traffic. Pastikan Router mengategorikan dan dispatch ke Specialists dengan benar. Verifikasi semua action masuk Ledger dengan zero external writes.
* **Hour 12-24:** aktifkan akses read-only ke API produksi. Pastikan agen menarik state yang benar tanpa mengarang data.
* **Hour 48-72:** aktifkan sandboxed writes. Monitor alert queue Auditor agent. Jika volume alert terkendali, mulai transisikan keputusan Tier 1 ke eksekusi otonom.

#### Tingkat Kematangan Setup
* **Level 1 (Manual CLI):** operator menjalankan agen manual di terminal window. Sangat rapuh.
* **Level 2 (Dockerized Fleet):** agen berjalan di container, tapi konfigurasi masih manual.
* **Level 3 (Infrastructure as Code):** topologi agen didefinisikan di Terraform atau Docker Compose. Reproducible.
* **Level 4 (Dynamic Provisioning):** sistem spin up dan tear down specialist agent secara dinamis berdasarkan queue depth.
* **Level 5 (Self-Assembling):** core intelligence menulis bootstrap configuration untuk subagent baru saat menghadapi problem baru, lalu deploy otomatis di dalam matriks policy sandboxed.
