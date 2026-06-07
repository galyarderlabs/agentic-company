## Pemeliharaan Perusahaan dan Kesehatan Operasional

Membangun agentic company hanya 20% dari pekerjaan. Sisa 80% adalah mengoperasikannya. Setup bukan garis akhir; perusahaan berisi agen AI akan membusuk diam-diam dan cepat tanpa review yang disiplin.

Di software tradisional, kode deterministik. Ia berjalan dengan cara yang sama sampai Anda mengubahnya. Di agentic company, perilaku drift. LLM diperbarui, system context makin penuh, struktur API berubah, dan memori menjadi stale. Tanpa jadwal maintenance yang rapi, agen mulai halusinasi, menduplikasi kerja, atau gagal diam-diam karena session cookie kedaluwarsa.

Maintenance adalah cara sistem tetap menjadi perusahaan yang disiplin dan dimiliki, bukan turun menjadi tumpukan otomasi mahal yang tidak terkendali.

### Fisika Kerusakan Agen

Jika dibiarkan tanpa maintenance, agentic company akan mengalami:
- **Session Rot**: auth token kedaluwarsa, browser cookie hilang, dan koneksi MCP gagal. Agen akan tetap percaya diri merencanakan task yang tidak lagi bisa mereka eksekusi.
- **Context Bloat**: agen menumpuk memori tidak relevan dan instruksi lama, memperlambat eksekusi dan menaikkan biaya token.
- **Skill Drift**: skill prosedural yang diajarkan bulan lalu gagal karena syntax CLI tool berubah.
- **Cost Creep**: scheduled agent menjalankan loop untuk task bernilai rendah dan pelan-pelan menguras budget API.

Untuk mencegah ini, Anda harus membuat ritme operasional.

### Pulse Harian

Daily Pulse butuh 5 menit. Tujuannya hanya membuka blocker eksekusi, menangkap failure mendesak, dan mengotorisasi kerja tertunda. Jangan debug arsitektur saat daily pulse; cukup pastikan sistem tetap menyala.

**Daftar Periksa Harian:**
- [ ] **Service Health**: apakah runtime inti dan provider LLM online? Apakah gateway Discord/CLI merespons?
- [ ] **Pending Approvals**: bersihkan Airlock. Review dan approve/reject decision gate untuk action finansial, destruktif, atau publik.
- [ ] **Failed Jobs**: cek ledger untuk crash keras. Apakah agen gagal parse dokumen? Apakah eksekusi tool timeout?
- [ ] **Session Alerts**: apakah ada akun milik agen yang logout atau ditandai sistem anti-bot?
- [ ] **Spend Check**: apakah spend API dan wallet kemarin masih dalam batas operasi normal?

### Tinjauan Mingguan

Weekly Review butuh 30-60 menit. Tujuannya quality control, koreksi arah, dan optimasi sistem. Anda bergeser dari operator menjadi manager.

**Daftar Periksa Mingguan:**
- [ ] **Stale Tasks**: apakah ada issue yang berhari-hari diam di “In Progress”? Lepaskan, assign ulang, atau hapus.
- [ ] **Output Quality QA**: spot-check kerja agen. Apakah `content-agent` terdengar terlalu robotik minggu ini? Apakah `research-agent` melewatkan data jelas? Beri feedback.
- [ ] **Memory Pruning**: koreksi asumsi palsu yang dibuat agen. Update file konteks kanonis jika strategi perusahaan berubah.
- [ ] **Skill Patching**: cari tool failure yang berulang. Update file Markdown `.skill` spesifik agar agen belajar syntax baru atau workaround.
- [ ] **Documentation Sync**: apakah docs internal masih cocok dengan realitas operasi perusahaan? Jika tidak, update.

### Audit Akses Bulanan

Monthly Audit fokus pada keamanan, penurunan risiko, dan hygiene finansial. Agen cepat sekali menumpuk permission. Anda harus agresif memangkasnya.

**Daftar Periksa Bulanan:**
- [ ] **Access Pruning**: akun mana yang masih benar-benar butuh akses agen? Revoke OAuth grant dan hapus API key yang tidak dipakai 30 hari.
- [ ] **Credential Rotation**: rotate password dan access token untuk infrastruktur kritis.
- [ ] **Financial Limits**: apakah limit kartu perusahaan atau crypto wallet masih sesuai kebutuhan bisnis? Turunkan jika workload agen berkurang.
- [ ] **Recovery Paths**: pastikan disaster recovery code dan seed phrase tersimpan aman secara offline, dan proses recovery dipahami tetapi tidak terekspos ke agen.

### Tinjauan Strategi Kuartalan

Setiap kuartal, mundur dari implementasi teknis dan nilai perusahaan sebagai pemilik bisnis.

**Quarterly Questions:**
- Apakah setup perusahaan ini masih melayani saya, atau saya yang melayani setup?
- Apakah ada agen yang mendapat terlalu banyak power atau otonomi tanpa proof gate yang cukup?
- Apakah klaim publik kita tentang otomasi AI benar, atau masih mengandalkan intervensi manusia ala “wizard of oz” di belakang layar?
- Agen mana yang harus dimatikan, digabung, atau di-upgrade?
- Workflow ad-hoc mana yang sudah cukup sering dijalankan sehingga perlu dikodifikasi menjadi skill prosedural yang ketat dan reusable?

### Decommissioning

Agentic company yang matang menghapus apa yang tidak lagi layak dipertahankan. Cara tercepat merusak sistem adalah menimbun konfigurasi lama.

Tegaslah saat decommissioning:
- **Unused Agents**: jika agen tidak dipanggil selama sebulan, hapus konfigurasinya.
- **Duplicate Skills**: gabungkan instruksi yang overlap menjadi satu playbook kanonis.
- **Stale Cron Jobs**: matikan scheduled task yang menghasilkan laporan yang tidak Anda baca lagi.
- **Dead Accounts**: tutup akun SaaS pihak ketiga yang tidak lagi aktif dipakai agen.

Agentic company adalah mesin hidup. Ia butuh fuel berupa modal/token, arah berupa strategi, dan maintenance berupa audit. Abaikan salah satunya, dan perusahaan mati.

### Maintenance Lanjutan dan Fleet Health

Agentic maintenance bukan sekadar patch server; ini soal mengelola drift kognitif, degradasi konteks, dan desinkronisasi API. 1-Man Army yang mengoperasikan fleet 50 agen akan tenggelam dalam operational debt jika maintenance butuh intervensi manual. Sistem harus self-healing, predictable, dan measurable.

#### Taksonomi Kegagalan dalam Agentic Maintenance

Berbeda dari software deterministik, agen gagal secara probabilistik seiring waktu. Mengenali mode gagal ini adalah langkah pertama maintenance fleet.
1. **Cognitive Drift:** dalam hitungan minggu, context window agen dipenuhi edge case, exception, dan aturan sementara, sehingga perilaku inti menyimpang dari mandate awal. *Mitigasi: hard context reset.*
2. **Memory Fragmentation:** vector database menumpuk embedding yang saling bertentangan, misalnya policy Januari konflik dengan memo Maret. Agen mulai mengarang protokol. *Mitigasi: chronological pruning dan vector decay.*
3. **API Deprecation Blindness:** vendor eksternal mengubah payload API. Kode deterministik langsung rusak; LLM bisa diam-diam mengarang field yang hilang dan merusak data downstream. *Mitigasi: validasi schema ketat untuk semua input.*

#### Operating Loop: Self-Healing Cycle

Maintenance rutin harus diotomasi lewat operating loop yang kaku.
* **The Daily Prune:** pukul 00:00 UTC, `agent-janitor` mengosongkan scratchpad jangka pendek. Pikiran ephemeral dihapus; hanya output Ledger yang tervalidasi bertahan.
* **The Weekly Re-Alignment:** setiap Minggu, agen dipaksa membaca ulang file kanonis `BRAND.md` dan `AGENTS.md` untuk menimpa drift perilaku yang terkumpul selama minggu itu.
* **The Monthly API Audit:** `agent-qa` menjalankan test suite terhadap semua API eksternal seperti Stripe, GitHub, dan AWS memakai dummy data untuk memastikan schema belum bergeser.

#### Evidence Contract: Fleet Health Snapshot

Action maintenance harus dicatat ke ledger. Jika memori agen dihapus, operator perlu tahu persis kapan dan kenapa.

#### Contoh Record: Health Snapshot Schema
```json
{
  "maintenance_id": "maint_epoch_449",
  "target_agent": "agent-copywriter",
  "action": "context_window_reset",
  "metrics_before": {
    "token_count": 128450,
    "response_latency_ms": 4200,
    "hallucination_rate_pct": 2.4
  },
  "metrics_after": {
    "token_count": 4500,
    "response_latency_ms": 1100,
    "hallucination_rate_pct": 0.1
  },
  "operator_notified": false,
  "timestamp": "2026-05-23T06:25:00Z"
}
```

#### Tingkat Kematangan Fleet Maintenance

* **Level 1 (Reactive):** operator melihat agen bertingkah aneh, lalu manual mematikan proses dan restart.
* **Level 2 (Scheduled):** cron job rutin restart agen dan clear cache, tanpa melihat health aktual.
* **Level 3 (Telemetry-Driven):** agen mengirim health metrics seperti latency, token usage, dan retry rate. Alert menyala saat threshold lewat.
* **Level 4 (Predictive Self-Healing):** overseer agent mendeteksi cognitive drift lewat analisis output dan hot-swap agen yang menurun dengan instance segar tanpa menjatuhkan request.
* **Level 5 (Evolutionary):** sistem otomatis patch prompt template sendiri berdasarkan failure log, terus mengoptimalkan performa fleet tanpa intervensi manusia.

#### Red-Team Checks untuk Maintenance

* **The Amnesia Test:** paksa hard reset pada agen di tengah task. Apakah ia bisa recover state dari Ledger immutable, atau task gagal permanen?
* **The Data Rot Drill:** inject garbage data secara manual ke vector database. Ukur berapa lama hygiene loop sistem mengidentifikasi dan mengarantina embedding yang rusak.

#### Batas Peran dalam Operasi Maintenance

Maintenance tidak boleh jadi bebas untuk semua. Membiarkan generalist agent menghapus memorinya sendiri atau mengubah konfigurasi API sendiri menciptakan instabilitas besar. Arsitektur harus menegakkan batas peran maintenance yang ketat:
* **The Worker (mis. `agent-sales`):** boleh melaporkan kebingungan atau degradasi konteks, tapi tidak boleh mengubah system prompt sendiri atau membersihkan vector space sendiri.
* **The Janitor (`agent-janitor`):** berwenang melakukan action rutin non-destruktif seperti mengarsipkan konteks lama atau clear scratchpad. Ia berjalan ketat berdasarkan jadwal cron.
* **The Surgeon (`agent-core-ops`):** satu-satunya agen yang berwenang hot-swap model, rewrite instruksi inti, atau mengubah routing topology. Agen ini bekerja ketat di bawah Human-in-the-Loop (HITL) Proof Gate.

#### Matriks Policy untuk Deprecation dan Upgrade

Saat foundation model dasar, misalnya GPT-4 ke GPT-5, atau versi API besar berubah, fleet harus di-upgrade secara sistematis. 1-Man Army bergantung pada matriks policy yang jelas untuk menangani deprecation:
| Upgrade Type | Testing Requirement | Rollout Strategy | Rollback Trigger |
| :--- | :--- | :--- | :--- |
| **Minor API Schema Change** | 100 synthetic events | Immediate Fleet Push | 5% failure rate dalam 1 jam |
| **Foundation Model Swap** | 500 shadow events | Canary, 1 agen dulu | Latency > 5000ms |
| **Vector DB Migration** | Full snapshot validation | Hard cutover saat weekend | Missing retrieval > 1% |

Dengan mengikuti batas dan matriks ini, maintenance fleet tidak berubah menjadi pekerjaan penuh waktu, sehingga leverage ekstrem agentic company tetap terjaga.
