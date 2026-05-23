## Apa yang Diputuskan Halaman Ini

Panduan ini bukan tentang membuat chatbot terlihat sibuk. Ini tentang membangun agentic company sendiri, tempat agen AI bisa memikul kerja nyata tanpa mengambil kendali dari manusia yang menanggung konsekuensinya.

Di akhir halaman ini, Anda harus bisa menulis satu aturan pendirian yang jelas untuk agentic company Anda sendiri:

```text
Agen saya boleh membantu <kerja>, memakai <tool/akun>, di dalam <batas>, tetapi <manusia/owner> tetap memegang otoritas akhir atas <action sensitif>, dan setiap action penting harus meninggalkan <proof>.
```

Kalau kalimat itu belum bisa diisi dengan bahasa sederhana, jangan tambah agen dulu.

## Klaim Utama

Asisten AI yang berguna bisa menjawab pertanyaan. Agen yang berguna bisa menyelesaikan workflow sempit. Agentic company berbeda: ia adalah susunan kerja tempat beberapa agen punya job, memori, tool, akses akun, limit, aturan review, dan record yang terhubung ke bisnis nyata.

Perusahaan tetap milik manusia. Manusia menentukan apa yang penting, menerima risiko legal dan finansial, serta mendefinisikan apa yang tidak boleh terjadi. Agen membantu memikul kerja. Mereka tidak menjadi owner. Mereka bukan pengganti judgment. Mereka tidak mendapat izin kabur untuk “jadi otonom.”

Janji praktisnya sederhana:

> Satu orang harus bisa menjalankan lebih banyak kerja nyata, dengan kontinuitas lebih baik, tanpa kehilangan proof, batas, atau kontrol.

Itu standarnya. Kalau agen hanya menghasilkan teks yang mengesankan, setup-nya belum menjadi perusahaan. Kalau agen bisa mengubah state, memakai uang, mengirim pesan, update task, menyiapkan keputusan, mencatat bukti, dan berhenti di gate yang tepat, Anda lebih dekat.

## Kenapa Agen Generik Gagal

Kebanyakan setup agen AI gagal karena alasan yang membosankan. Bukan karena modelnya lemah, tetapi karena lingkungan kerjanya lemah.

| Kegagalan | Bentuknya | Kenapa merusak perusahaan |
|---|---|---|
| Tidak ada job | Satu asisten mencoba coding, sales, research, support, dan approve kerja sendiri. | Tidak ada yang tahu apa tanggung jawab agen dan di mana ia harus berhenti. |
| Tidak ada rute memori | Fakta penting hanya hidup di chat history. | Agen lupa aturan, konteks customer, dan keputusan lama. |
| Tidak ada batas tool | Agen bisa memakai tool apa pun yang tersedia. | Kesalahan instruksi kecil bisa menyentuh post publik, uang, atau file. |
| Tidak ada desain akun | Semua terjadi lewat akun pribadi manusia. | Akses tidak bisa dibatasi, dicabut, diaudit, atau diatribusikan dengan bersih. |
| Tidak ada aturan approval | Agen menentukan sendiri kapan draft menjadi action. | Perubahan publik, finansial, atau destruktif bisa terjadi terlalu cepat. |
| Tidak ada proof | Agen berkata “done” tanpa record. | Manusia harus mengecek ulang semuanya secara manual. |

Agen yang longgar bisa terasa kuat untuk satu sesi. Ia bisa menulis kode, merangkum sumber, membuat draft balasan, atau merencanakan campaign. Tapi perusahaan tidak bisa berjalan di atas vibe. Perusahaan butuh kerja berulang, handoff, limit, record, dan recovery saat sesuatu gagal.

## Apa yang Dihitung sebagai Kerja Nyata

Kerja nyata mengubah state bisnis atau menyiapkan keputusan yang akan mengubah state bisnis.

Contoh:

- Research agent mengubah sumber menjadi brief bersitasi dan melampirkan daftar sumber.
- Finance agent merekonsiliasi payment dan menulis ledger entry.
- Support agent membuat draft reply customer dan merutekannya ke review.
- Docs agent memperbarui guide, menjalankan build, dan mengembalikan file yang berubah.
- Sales agent memperkaya lead list dan menandai lead yang aman dihubungi.
- Review agent memblokir post publik karena proof atau approval belum ada.

Bedanya bukan “AI menulis sesuatu.” Bedanya adalah peran yang jelas menghasilkan output yang jelas, di bawah aturan yang jelas, dengan evidence terlampir.

## Manusia Tetap Memegang Kendali

Pilihan desain pertama bukan model apa yang dipakai. Pilihan desain pertama adalah siapa yang punya otoritas.

Dalam panduan ini, human owner memegang otoritas akhir atas:

- arah perusahaan;
- tanggung jawab legal;
- perpindahan uang di atas limit yang disetujui;
- pesan publik;
- account recovery dan credential;
- perubahan file atau data destruktif;
- perubahan produksi;
- memori personal yang sensitif;
- keputusan shutdown dan recovery.

Agen tetap bisa bergerak cepat. Mereka bisa draft, menyiapkan, inspect, membandingkan, test, monitor, rekonsiliasi, dan route. Tapi action sensitif butuh gate. Semakin kuat akses agen, semakin jelas gate-nya.

Ini bukan anti-otonomi. Ini otonomi yang serius. Agen yang aman bukan agen yang bisa melakukan apa saja. Agen yang aman melakukan jenis kerja yang tepat, di tempat yang tepat, dengan titik berhenti yang tepat.

## Lima Bagian

Agentic company butuh lima bagian sebelum layak disebut begitu.

| Bagian | Arti sederhana | Contoh pertanyaan |
|---|---|---|
| Owner | Manusia yang mendefinisikan tujuan dan menanggung risiko. | Siapa yang bisa bilang ya, tidak, stop, atau ubah arah? |
| Support agent | Agen kontinuitas opsional untuk state, fokus, dan cek human-cost. | Siapa yang sadar ketika manusia overload? |
| Execution agent | Agen strategi dan follow-through yang menantang rencana lemah. | Siapa yang mengubah intent menjadi opsi, task, dan output terverifikasi? |
| Working agents | Agen peran untuk research, finance, docs, sales, support, product, growth, review, atau operations. | Siapa yang memegang setiap job berulang? |
| Company record | Tempat goal, task, approval, cost, activity, dan proof dilacak. | Di mana manusia bisa inspect apa yang terjadi? |

Support agent boleh ada karena manusia bukan mesin. Tapi panduan ini bukan produk ketergantungan. Kehangatan bukan izin untuk drift. Support agent membantu menjaga kontinuitas manusia; ia tidak menggantikan relasi nyata, istirahat nyata, atau akuntabilitas nyata.

## Aturan Proof

Setiap action penting butuh proof record.

Proof record tidak perlu mewah. Ia bisa berupa URL, issue ID, diff, receipt, daftar sumber, pesan approval, baris ledger, test output, screenshot, atau signed transaction record. Yang penting, manusia bisa memeriksanya nanti dan menjawab:

- siapa yang bertindak;
- apa yang berubah;
- kenapa berubah;
- sumber atau instruksi apa yang memicunya;
- apakah approval dibutuhkan;
- apakah approval diberikan;
- evidence apa yang membuktikan hasilnya.

Gunakan aturan proof sederhana ini:

| Action class | Minimum proof |
|---|---|
| Research | Daftar sumber, ringkasan, dan catatan sumber yang ditolak. |
| Code/docs | File yang berubah, diff, hasil build/test. |
| Customer/support | Draft, final message ID, approval owner jika perlu. |
| Money | Amount, purpose, limit check, approval, receipt atau transaction ID. |
| Public post | Draft, approver, final URL, path rollback/delete. |
| Account/access | Alasan request, scope yang diberikan, tanggal expiry/review. |

Kalau agen tidak bisa menghasilkan proof, pekerjaannya belum complete. Mungkin sudah dicoba. Mungkin berguna. Tapi belum done.

## Kontrak Awal

Sebelum membangun lebih jauh, tulis kontrak ini.

```text
Company purpose:
We are building <what> for <who>, so they can <outcome>.

Owner authority:
<person/team> has final authority over goals, money, public actions, credentials, and shutdown.

Agent jobs:
Agents may help with <research/docs/support/finance/sales/product/ops>.

Allowed action classes:
Agents may act automatically on <read-only/reversible/low-risk actions>.

Approval required:
Agents must ask before <public/destructive/money/security/legal/production actions>.

Proof required:
Every important action must leave <URL/diff/receipt/ledger row/source list/approval record>.

Human protection rule:
If the human is overloaded or unavailable, agents reduce risk, queue work, and pause sensitive actions.
```

Jangan dibuat puitis. Buat agar bisa ditegakkan.

## Selesai Saat

Halaman ini selesai untuk Anda saat bisa menjawab tanpa hand-waving:

- Kerja nyata apa yang akan dipikul agen pertama?
- Manusia mana yang memegang otoritas akhir?
- Action mana yang aman tanpa approval?
- Action mana yang harus berhenti untuk approval?
- Proof apa yang harus ada setelah kerja selesai?

Kalau jawabannya jelas, lanjut ke reality check: apakah Anda membangun agentic company, atau hanya menyewa fitur agentic di aplikasi orang lain?
