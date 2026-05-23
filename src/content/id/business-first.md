## Apa yang Diputuskan Halaman Ini

Jangan mulai dengan menamai agen. Mulai dengan menjelaskan bisnisnya.

Agentic company tidak lahir hanya karena Anda membuka task board lalu mengarang peran seperti “Research Agent,” “Marketing Agent,” dan “Finance Agent.” Label itu kosong sampai terhubung ke pelanggan, uang, delivery, risiko, dan bukti.

Di akhir halaman ini, Anda harus punya Peta Realitas Bisnis: dokumen pendek yang menjawab apa yang perusahaan jual, siapa yang membayar, bagaimana kerja dikirim, apa yang berulang, apa yang bisa salah, bagian mana yang boleh ditangani agen, dan catatan apa yang membuktikan kerja itu benar terjadi.

Kalau peta bisnisnya kabur, agen tidak akan memperbaikinya. Agen hanya akan mengotomasi kebingungan.

## Aturan

Mulai dari realitas bisnis:

```text
Apa yang dijual?
Siapa yang membayar?
Apa yang harus dikirim?
Apa yang berulang?
Apa yang bisa salah?
Siapa yang menyetujui?
Catatan apa yang membuktikan kerja selesai?
```

Baru setelah itu desain agennya.

Aturan ini mencegah kesalahan paling umum: membangun kumpulan agen tanpa target komersial. Perusahaan bukan kumpulan asisten yang sibuk. Perusahaan adalah mesin nilai: menjanjikan sesuatu, mengirimkannya, menerima pembayaran, mengelola risiko, menyimpan catatan, lalu memperbaiki siklus berikutnya.

Agen baru boleh ditugaskan setelah bentuk kerjanya terlihat.

## Peta Realitas Bisnis

Buat satu tabel sebelum menulis profil agen apa pun.

| Field | Pertanyaan | Contoh jawaban |
|---|---|---|
| Offer | Apa yang kita jual atau sediakan? | Brief pasar teknis mingguan untuk founder. |
| Customer | Siapa yang membayar atau mendapat manfaat? | Solo founder yang butuh intel tool dengan cepat. |
| Payment path | Bagaimana uang masuk? | Subscription, invoice, sponsorship, atau penjualan produk. |
| Cost path | Bagaimana uang keluar? | Token AI, hosting, tool data, kontraktor, iklan. |
| Delivery | Apa yang harus sampai ke customer? | Laporan terbit, balasan support, fitur shipped, konsultasi. |
| Repeat work | Apa yang terjadi setiap hari atau minggu? | Scan sumber, draft, review, publish, support, rekonsiliasi. |
| Sensitive moves | Apa yang bisa menimbulkan kerusakan? | Post publik, refund, iklan berbayar, penghapusan, email klien. |
| Approval | Siapa yang harus menyetujui langkah sensitif? | Owner, reviewer, finance agent plus owner, atau tim manusia. |
| Proof | Catatan apa yang membuktikan pekerjaan selesai? | URL, receipt, issue ID, daftar sumber, file diff, baris ledger. |

Kalau ada baris kosong, jangan sembunyikan di balik otomasi. Tandai sebagai keputusan bisnis yang masih harus dibuat.

## Cashflow Sebelum Task Flow

Task board memberi tahu siapa mengerjakan apa. Cashflow memberi tahu apakah kerja itu penting.

Sebelum bertanya “agen mana yang harus mengerjakan ini?”, tanya dulu:

- Apakah kerja ini membantu revenue masuk, risiko turun, biaya terkendali, atau delivery membaik?
- Kalau kerja ini berhenti tujuh hari, apakah perusahaan akan merasakannya?
- Kalau agen mengerjakannya dengan buruk, kerusakan apa yang terjadi?
- Kalau agen mengerjakannya dengan baik, hal terukur apa yang membaik?

Di titik ini banyak proyek agen mati. Mereka mengotomasi aktivitas yang kelihatan sibuk, bukan tekanan bisnis yang nyata.

Contoh:

| Otomasi yang menggoda | Pertanyaan bisnis yang lebih baik |
|---|---|
| “Buat content agent.” | Content mana yang mendorong lead, trust, atau edukasi produk? |
| “Buat research agent.” | Keputusan mana yang jadi lebih cepat atau aman karena riset lebih baik? |
| “Buat finance agent.” | Catatan uang mana yang harus benar setiap minggu? |
| “Buat support agent.” | Kasus support mana yang berulang, rendah risiko, dan mudah diverifikasi? |
| “Buat coding agent.” | Perubahan produk mana yang cukup kecil untuk didelegasikan dengan aman? |

Pertanyaan bisnis menentukan bentuk agen.

## Petakan Kerja Menjadi Loop

Loop adalah kerja berulang yang punya awal, tengah, akhir, dan bukti.

Tulis setiap loop seperti ini:

```text
Nama loop:
Trigger:
Input:
Langkah:
Titik keputusan:
Bagian aman untuk agen:
Bagian review manusia:
Output:
Catatan bukti:
Respons saat gagal:
```

Contoh:

```text
Nama loop: brief pasar mingguan
Trigger: setiap Senin 08:00
Input: sumber tersimpan, RSS feed, halaman kompetitor, catatan produk
Langkah: kumpulkan sumber, urutkan relevansi, draft brief, cek klaim, publish draft
Titik keputusan: kredibilitas sumber, kekuatan klaim, persetujuan publish
Bagian aman untuk agen: pengumpulan sumber, dedupe, draft pertama, tabel sitasi
Bagian review manusia: positioning akhir, judul publik, sponsor mention
Output: artikel yang disetujui dan draft sosial
Catatan bukti: daftar sumber, file markdown yang berubah, hasil build, URL final
Respons saat gagal: antrekan ke manusia jika kualitas sumber lemah atau build gagal
```

Begitu loop ditulis, desain agen jadi jelas. Anda tidak butuh “Research Agent” yang kabur. Anda butuh pengumpul sumber, peringkas, reviewer, atau publisher, tergantung loop-nya.

## Klasifikasikan Setiap Langkah

Setiap langkah di loop harus masuk ke salah satu dari empat kelas.

| Kelas | Arti | Aturan untuk agen |
|---|---|---|
| Read | Melihat sumber atau state. | Biasanya aman selama aturan data privat dipatuhi. |
| Draft | Membuat proposal, ringkasan, rencana, atau perubahan file. | Aman jika jelas ditandai sebagai draft. |
| Reversible write | Mengubah sesuatu yang bisa di-rollback. | Hanya boleh dengan log dan jalur rollback. |
| Sensitive action | Langkah publik, destruktif, uang, kredensial, legal, atau produksi. | Harus berhenti untuk approval kecuali ada pengecualian tertulis. |

Klasifikasi ini lebih penting daripada “kepribadian” agen. Ini yang menentukan letak otonomi.

## Pilih Workflow Pertama

Workflow pertama sebaiknya membosankan.

Jangan mulai dari hal paling berisiko, seperti mengirim sales email, deploy kode produksi, trading crypto, atau membalas pelanggan marah. Mulai dari tugas berulang yang berguna, terbatas, dan mudah diverifikasi.

Workflow pertama yang baik:

- mengumpulkan sumber dan membuat brief bersitasi;
- mengubah catatan meeting menjadi task;
- scan docs untuk broken link;
- merekonsiliasi set kecil expense;
- membuat draft status mingguan;
- triage pesan masuk ke kategori;
- membandingkan halaman kompetitor dan membuat change log.

Workflow pertama yang buruk:

- mengirim pesan publik tanpa review;
- memindahkan uang;
- menghapus atau migrasi data produksi;
- bernegosiasi dengan customer;
- membuat janji legal;
- memulihkan akun;
- membeli tool atau service secara otomatis.

Workflow pertama yang membosankan memberi bukti tanpa menciptakan blast radius.

## Tetapkan Agen Setelah Loop Jelas

Setelah loop ditulis, tetapkan peran berdasarkan tanggung jawab.

| Kebutuhan loop | Agen yang mungkin | Level akses | Bukti wajib |
|---|---|---|---|
| Pengumpulan sumber | Research agent | Web dan catatan read-only | Daftar sumber dan catatan relevansi. |
| Pembuatan draft | Docs atau content agent | Tulis file ke area draft | File yang berubah dan ringkasan. |
| Cek klaim | Review agent | Sumber dan draft read-only | Catatan pass/fail dengan sitasi. |
| Publishing | Distribution agent | Akses akun publik | Approval manusia dan URL final. |
| Pelacakan biaya | Finance agent | Billing export read-only | Baris ledger dan flag anomali. |

Profil agen datang terakhir karena ia respons terhadap kerja, bukan dekorasi.

## Definisikan Bukti Sebelum Delegasi

Sebelum agen menyentuh workflow, definisikan arti “selesai.”

Pernyataan selesai yang lemah:

```text
Agen membuat laporan.
```

Pernyataan selesai yang kuat:

```text
Agen membuat laporan markdown dengan minimal lima sumber tersitasi, menandai klaim yang belum pasti, menyimpan file di folder draft, menjalankan docs build, lalu mengembalikan path file dan hasil build untuk review manusia.
```

Pernyataan selesai yang baik mencakup:

- format output;
- lokasi;
- syarat sumber;
- aturan kualitas;
- perintah atau cek verifikasi;
- jalur approval jika dibutuhkan;
- perilaku saat gagal.

Tanpa definisi selesai, manusia menjadi sistem kualitas tersembunyi.

## Risiko Sebelum Kecepatan

Setiap loop bisnis butuh satu baris risiko.

Tanya:

| Pertanyaan risiko | Kenapa penting |
|---|---|
| Kesalahan terburuk yang masuk akal apa? | Menentukan gate. |
| Apakah tindakan ini bisa dibalik? | Menentukan level otonomi. |
| Siapa yang rugi kalau salah? | Membuka biaya manusia dan eksposur legal. |
| Seberapa cepat error menyebar? | Post publik dan uang butuh gate lebih ketat. |
| Bagaimana kita mendeteksi kegagalan? | Membentuk kebutuhan monitoring dan bukti. |

Kecepatan berguna hanya setelah jalur gagalnya jelas. Agen yang bergerak cepat melewati risiko yang belum dipahami bukan leverage. Itu exposure.

## Artefak Peta Realitas Bisnis Pertama

Salin ini dan isi sebelum membangun agen.

```text
Business Reality Map

1. Offer:
2. Customer:
3. Kenapa mereka membayar:
4. Payment path:
5. Biaya utama:
6. Kerja berulang mingguan:
7. Workflow pertama untuk didelegasikan:
8. Kenapa workflow ini penting:
9. Langkah aman untuk agen:
10. Langkah review manusia:
11. Sensitive action yang dilarang untuk sekarang:
12. Catatan bukti wajib:
13. Respons saat gagal:
14. Metrik sukses:
15. Ritme review:
```

Jaga tetap pendek. Kalau petanya membesar, mungkin Anda sedang menyembunyikan pikiran yang belum jelas di dalam dokumen.

## Contoh: Produk Riset Kecil

```text
Offer: brief mingguan berbayar tentang AI tooling.
Customer: solo founder dan technical creator.
Kenapa mereka membayar: menghemat waktu riset dan menyaring hype.
Payment path: subscription bulanan.
Biaya utama: token AI, hosting, newsletter tool, sumber berbayar sesekali.
Kerja berulang mingguan: scan sumber, ranking, draft, review, publish, ringkasan sosial.
Workflow pertama untuk didelegasikan: scan sumber dan ranking relevansi.
Kenapa workflow ini penting: menghemat waktu tanpa memberi agen kuasa publik.
Langkah aman untuk agen: kumpulkan link, hapus duplikat, ranking relevansi, ringkas klaim.
Langkah review manusia: tesis akhir, keputusan publish, sponsor mention.
Sensitive action yang dilarang untuk sekarang: posting publik, perubahan billing, menghapus sumber.
Catatan bukti wajib: tabel sumber, daftar sumber yang ditolak, path file draft.
Respons saat gagal: jika sumber kredibel kurang dari sepuluh, pause dan tanya manusia.
Metrik sukses: draft brief mingguan siap Selasa 10:00 dengan daftar sumber.
Ritme review: mingguan.
```

Ini cukup untuk membuat agen pertama secara bertanggung jawab. Bukan karena agennya punya nama keren, tapi karena kerjanya dibatasi.

## Selesai Saat

Anda siap mendesain agen saat bisa menjawab:

- apa yang perusahaan jual atau sediakan;
- siapa yang membayar atau mendapat manfaat;
- dari mana uang masuk dan ke mana uang keluar;
- kerja apa yang berulang;
- workflow mana yang akan didelegasikan pertama;
- langkah mana yang read, draft, reversible write, atau sensitive action;
- catatan bukti apa yang wajib ada;
- apa yang terjadi saat agen gagal;
- siapa yang meninjau hasilnya.

Kalau jawabannya belum jelas, jangan tambah agen. Perbaiki peta bisnis dulu. Halaman berikutnya mengubah peta bisnis ini menjadi tujuh syarat untuk agentic company yang nyata.
