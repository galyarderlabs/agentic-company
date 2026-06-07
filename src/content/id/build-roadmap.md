## Roadmap Build

Transisi dari satu prompt asisten AI ke perusahaan multi-agen yang diatur tidak bisa selesai dalam satu sore. Kalau arsitekturnya diburu-buru, Anda akan membangun sistem yang tidak aman, mahal, dan sulit di-debug.

Urutan itu penting. Batas konseptual harus dibangun sebelum akses tool diberikan, dan state pelacakan harus ada sebelum worker dideploy.

Roadmap ini menjelaskan timeline 4 minggu yang realistis untuk membangun minimum viable agentic company.

### Hari 1-3: Fondasi

Sebelum menyentuh file konfigurasi atau memasang runtime, Anda harus menentukan aturan perusahaan.

**Deliverable:**
*   **Dokumen Prinsip Pemilik:** misi, hal yang tidak bisa ditawar, dan standar bukti.
*   **Peta Realitas Bisnis:** apa yang dijual, siapa yang membayar, dan bagaimana nilai dikirim.
*   **Kebijakan Batas Publik/Privat:** aturan eksplisit tentang data yang tidak boleh dibagikan atau diproses secara eksternal.
*   **Kontrak Identitas Agen Pertama:** peran, batasan, dan tool untuk Chief of Staff / execution agent utama.
*   **Matriks Gate Tindakan:** tabel yang menentukan tindakan mana yang boleh otonom dan mana yang butuh konfirmasi manusia.

**Gate Verifikasi:**
*   Dokumen sudah ditulis dan disimpan di knowledge base kanonis Anda, misalnya Obsidian.
*   Tidak ada secret atau API key di file teks fondasi ini.
*   Matriks Gate Tindakan sudah diuji secara verbal terhadap skenario terburuk hipotetis.

### Minggu 1: Eksekusi Teknis dan Agen Pertama

Setelah aturan jelas, pasang runtime dan pastikan layer eksekusi dasar berjalan andal.

**Deliverable:**
*   **Runtime Terpasang:** Hermes Agent atau padanannya sudah terpasang, diperbarui, dan terhubung ke provider LLM pilihan Anda.
*   **Profil Dideploy:** execution agent atau support agent pertama sudah dikonfigurasi dan merespons.
*   **Verifikasi Tool:** agen berhasil membaca file, menulis ke direktori yang ditentukan, dan menjalankan perintah terminal dasar tanpa halusinasi.
*   **Routing Memori:** sudah jelas mana lokasi catatan biasa dan mana lokasi skill prosedural yang bisa dipakai ulang.
*   **Skill Pertama Dibuat:** agen berhasil menjalankan tugas kompleks dan menyimpan prosedurnya sebagai file `.skill` yang reusable.

**Gate Verifikasi:**
*   `hermes --version` dan `hermes doctor` mengembalikan kondisi bersih.
*   Agen berhasil menjalankan perintah tes, mengubah file, dan melaporkan hasilnya.
*   Agen berhasil memanggil memori yang disimpan dari sesi sebelumnya.

### Minggu 2: Command, Control, dan Akses

Agentic company harus bisa dikendalikan dari luar terminal lokal, dan harus bisa berinteraksi dengan akun eksternal secara aman.

**Deliverable:**
*   **Command HQ:** gateway aman tersedia, misalnya server Discord yang dikunci, endpoint API berautentikasi, atau email relay, tempat Anda bisa memberi perintah jarak jauh.
*   **Taksonomi Akun:** akun khusus milik agen sudah dibuat, misalnya `ops@yourdomain.com`, bukan memakai email pribadi Anda.
*   **Registry Kredensial:** password dan token disimpan di secrets manager yang aman, lalu dirujuk agen hanya lewat environment variable atau wrapper tool yang aman.
*   **Penegakan Gate:** sistem berhasil berhenti dan meminta persetujuan manusia untuk tindakan yang ditandai Publik, Destruktif, atau Finansial di Action Matrix.

**Gate Verifikasi:**
*   Anda bisa memberi perintah lewat Discord/Email dan melihat agen mulai bekerja.
*   Saat Anda meminta agen mem-post tweet publik atau menghapus file, sistem berhenti, menampilkan payload persisnya, lalu menunggu persetujuan kriptografis atau manual dari Anda.

### Minggu 3: State Perusahaan dan Kerja Asinkron

Ini titik transisi dari “asisten” menjadi “perusahaan.” Agen harus bisa melacak pekerjaan panjang saat Anda tidur.

**Deliverable:**
*   **Sistem Pelacakan:** Paperclip atau sistem serupa terpasang untuk melacak Goal, Project, dan Issue.
*   **Roster Agen Peran:** agen sekunder, misalnya Research Agent atau Finance Agent, dideploy dengan aturan handoff internal yang ketat.
*   **Antrean Persetujuan:** dashboard atau channel terpusat mengumpulkan persetujuan tertunda antar-agen dan antara agen-manusia.
*   **Logging Aktivitas:** setiap tindakan agen ditulis ke log aktivitas terstruktur atau ledger dasar.

**Gate Verifikasi:**
*   Anda memberi perintah tingkat tinggi. Execution Agent memecahnya menjadi 3 subtugas, mencatatnya di sistem pelacakan, lalu menugaskan salah satunya ke Research Agent.
*   Research Agent menyelesaikan tugas, mengirim bukti ke issue, dan menandainya “Done.” Execution Agent meninjau dan memverifikasi hasilnya.

### Minggu 4: Governance Lanjutan dan Kesiapan Produksi

Kunci perusahaan, audit keuangan, dan siapkan operasi produksi.

**Deliverable:**
*   **Kebijakan Uang:** batas ketat untuk kartu perusahaan atau crypto wallet, ditegakkan di layer API.
*   **Template Ledger:** format standar untuk mencatat event bisnis dan finansial yang kritis.
*   **Ritme Maintenance:** jadwal kalender untuk Daily Pulse, Weekly Review, dan Monthly Audit.
*   **Review Keamanan:** scan penuh terhadap profil agen, bank memori, dan log untuk memastikan tidak ada secret bocor ke teks biasa.

**Gate Verifikasi:**
*   Agen mencoba transaksi finansial tes; sistem mencegatnya, meminta konfirmasi merchant/jumlah/network, lalu mencatat event ke ledger.
*   Pencarian `grep` untuk API key privat di direktori dokumentasi publik Anda mengembalikan nol hasil.

### Definisi Selesai

Fase build selesai, dan perusahaan sudah beroperasi penuh, saat loop persis ini berjalan mulus:

1. **Niat Manusia:** founder mengirim perintah tingkat tinggi lewat Command HQ.
2. **Interpretasi:** Execution Agent menafsirkan tujuan, menilai blast radius, lalu memecahnya menjadi tugas perusahaan yang terlacak.
3. **Eksekusi:** Role Agent mengambil tugas, menjalankan tool, dan menghasilkan artefak.
4. **Verifikasi Internal:** Execution Agent meninjau artefak terhadap kriteria sukses awal.
5. **Gate:** Jika tindakan berdampak eksternal, seperti publish publik atau memakai uang, sistem berhenti dan meminta persetujuan founder dengan bukti persis.
6. **Efek Samping:** tindakan yang disetujui dieksekusi.
7. **Bukti:** agen menangkap transaction ID, URL, atau commit hash.
8. **Catatan:** ledger diperbarui dengan audit trail lengkap.
9. **Pelajaran:** workflow baru yang ditemukan selama eksekusi diekstrak dan disimpan sebagai skill tahan lama.

Kalau loop ini gagal, atau masih butuh dorongan manual terus-menerus agar bergerak, berarti Anda masih membangun. Iterasikan policy dan tool sampai loop-nya stabil.

### Roadmap Scaling dan Arsitektur Lanjutan

Scaling agentic company berbeda secara fundamental dari scaling produk SaaS. Anda bukan hanya menaikkan traffic; Anda menaikkan throughput kognitif dan tindakan otonom. Roadmap harus memprioritaskan stabilitas, kebenaran yang bisa diverifikasi, dan pengurangan peran operator manusia dari loop eksekusi melalui proof gate yang ketat.

#### Tingkat Kematangan Agentic Scaling
Roadmap dibagi menjadi fase kematangan yang jelas. Pindah fase hanya boleh dilakukan setelah proof gate terpenuhi.
* **Fase 1: Shadow Workforce.** Agen bekerja, tetapi operator manusia masih menyalin, menempel, dan mengeksekusi tindakan akhir secara manual. *Tujuan: validasi baseline capability.*
* **Fase 2: Human-in-the-Loop (HITL) Execution.** Agen menyiapkan payload dan mengantrekan API call. Operator manusia klik “Approve.” *Tujuan: integrasi workflow dan penurunan latensi.*
* **Fase 3: Otonomi Terbatas.** Agen mengeksekusi secara otonom di dalam matriks policy yang ketat, misalnya transaksi di bawah $50. *Tujuan: menaikkan volume tanpa menaikkan risiko sebanding.*
* **Fase 4: Algorithmic Oversight.** Operator manusia keluar dari approval rutin. Overseer agent mengaudit worker agent. Manusia hanya menangani exception. *Tujuan: leverage eksponensial untuk 1-Man Army.*
* **Fase 5: Agent-to-Agent Commerce.** Fleet Anda langsung bernegosiasi, membuat kontrak, dan bertransaksi dengan fleet vendor eksternal pada kecepatan mesin. *Tujuan: integrasi ekonomi level protokol.*

#### Proof Gate untuk Naik Fase Roadmap
Anda tidak bisa naik fase hanya karena kode sudah ditulis. Proof Gate harus terpenuhi.
* **Gate masuk Fase 2 (HITL):** sistem harus menunjukkan akurasi 99% saat menyusun payload API di 500 event tes berturut-turut.
* **Gate masuk Fase 3 (Otonomi Terbatas):** Ledger harus beroperasi penuh, dan red-team “Drill Bypass” harus gagal menembus batas transaksi $50.
* **Gate masuk Fase 4 (Algorithmic Oversight):** Overseer agent harus berhasil mengidentifikasi dan mengarantina 100% “bad actions” sintetis selama shadow run 14 hari.

#### Taksonomi Kegagalan Saat Scaling
1. **Otomasi Prematur:** memberi otonomi sebelum Ledger benar-benar kuat. Hasilnya: agen liar menghabiskan budget API dalam 4 jam, dan operator tidak bisa merekonstruksi timeline event.
2. **Tool Bloat:** memberi agen akses ke 50 API tool berbeda. LLM bingung oleh kompleksitas schema dan mulai mengarang parameter. *Mitigasi: disiplin filosofi Unix, yaitu agen kecil dengan 1 sampai 3 tool yang sangat spesifik.*
3. **Konteks Frankenstein:** saat perusahaan tumbuh, prompt utama membengkak menjadi 50.000 token berisi edge case. Latensi naik dan reasoning turun. *Mitigasi: pindah dari prompt monolitik ke routing SOP modular.*

#### Matriks Policy untuk Investasi Tool
Membangun tool MCP custom untuk agen itu mahal. Operator harus memprioritaskan secara keras berdasarkan matriks yang jelas:
| Permintaan Capability | Frekuensi Eksekusi | Biaya Waktu Manusia | Keputusan ROI |
| :--- | :--- | :--- | :--- |
| **Menulis laporan SQL custom** | 1x / Bulan | 2 Jam | **TOLAK.** Operator kerjakan manual. |
| **Triage email support masuk** | 100x / Hari | 4 Jam / Hari | **SETUJUI.** Bangun tool MCP Zendesk. |
| **Negosiasi harga vendor API** | 1x / Tahun | 5 Jam | **TOLAK.** Risiko terlalu tinggi, frekuensi terlalu rendah. |

#### Contoh Catatan: Template Spesifikasi PRD
Sebelum menambah capability baru ke fleet, operator menulis Product Requirements Document (PRD) yang ketat dan bisa dibaca agen.
```markdown
# Agent Capability: Invoice Generation
**Target Agent:** `agent-finance-core`
**Required Tools:** `stripe_create_invoice`, `ledger_write_event`
**Success Criteria:**
1. Agent bisa mengekstrak line item dari kontrak bahasa natural.
2. Agent berhasil memetakan item ke schema pricing Stripe.
3. Agent menulis Stripe `invoice_id` persis ke immutable ledger.
**Failure State:** Jika Stripe API mengembalikan 400, agent TIDAK BOLEH retry lebih dari dua kali, dan HARUS eskalasi ke antrean manusia.
```

#### Operating Loop: Audit Roadmap
Setiap 90 hari, 1-Man Army menghentikan eksekusi untuk mengaudit fleet terhadap roadmap.
1. Apakah kita membangun tool yang berada di bawah ambang ROI?
2. Apakah ada agen yang diberi otonomi tanpa Proof Gate yang sesuai?
3. Apakah Ledger menangkap 100% tindakan otonom Fase 3+ secara akurat?
Jika audit gagal, semua pengembangan fitur baru dibekukan sampai baseline arsitektur aman.
