## Apa yang Halaman Ini Putuskan

Halaman ini memisahkan agentic software yang berguna dari agentic company yang benar-benar dimiliki dan dikendalikan.

Pembedaan ini penting karena kategori yang salah bikin ekspektasi salah. Aplikasi dengan agen AI di dalamnya bisa sangat berguna. Tapi kalau aplikasi itu yang memegang memori, akun, log, dan riwayat tugas, berarti Anda sedang menyewa kapabilitas. Anda belum membangun agentic company milik Anda sendiri.

Di akhir halaman ini, Anda harus bisa memberi label yang jujur pada setup Anda:

```text
asisten -> agen berguna -> tim agen -> agentic company
```

Jangan overclaim. Tujuannya bukan terdengar maju. Tujuannya tahu apa yang benar-benar Anda kuasai.

## Perbedaan Sederhana

agentic SaaS adalah produk yang Anda pakai. Agentic company adalah bentuk operasi yang Anda miliki dan kelola.

agentic SaaS bisa membantu menulis, riset, coding, otomasi tiket, ringkasan call, atau pengelolaan tugas di dalam produk vendor. Itu berguna. Bisa menghemat banyak waktu. Bisa juga menjadi langkah awal yang tepat.

Tapi biasanya ada batas: agen hidup di aplikasi vendor, bertindak lewat login Anda, menyimpan memori di sistem vendor, dan berhenti bekerja saat akses dicabut.

Agentic company nyata butuh agen yang terikat ke realitas bisnis:

- pelanggan;
- uang;
- akun;
- persetujuan;
- catatan;
- kerja berulang;
- aturan risiko;
- tinjauan manusia;
- tanggung jawab legal dan finansial.

Kalau bagian-bagian itu belum ada, Anda mungkin punya alat yang kuat. Tapi Anda belum punya pola perusahaan yang diajarkan panduan ini.

## Matriks Kategori

Gunakan matriks ini sebelum memilih alat atau menulis profil agen.

| Pertanyaan | Jawaban agentic SaaS | Jawaban agentic company |
|---|---|---|
| Siapa yang memiliki memori agen? | Biasanya aplikasi vendor yang menyimpannya. | Anda menentukan di mana memori hidup dan untuk apa tiap jenis memori dipakai. |
| Siapa yang memiliki akses akun? | Seringnya manusia memberi akses OAuth yang luas. | Akun dibatasi berdasarkan peran: milik pengguna, milik agen, atau milik perusahaan. |
| Apa yang terjadi saat login dicabut? | Agen sering hilang bersama koneksi aplikasi. | Kerja berhenti dengan aman, catatan tetap ada, dan jalur pemulihan jelas. |
| Apakah agen bisa menggunakan uang atau wallet? | Biasanya tidak, atau hanya lewat aksi manual manusia. | Hanya dalam anggaran, batas, dan aturan persetujuan yang tertulis. |
| Apakah agen bisa membuktikan kerja selesai? | Anda mendapat status tugas atau log aplikasi. | Anda mendapat catatan bukti yang terkait langsung dengan aksi. |
| Apakah agen bisa bekerja bersama? | Hanya dalam desain produk vendor. | Handoff ditentukan lewat paket, tujuan, aturan balasan, dan verifikasi. |
| Siapa yang menanggung tanggung jawab legal? | Tetap manusia atau pemilik akun perusahaan. | Tetap manusia atau pemilik perusahaan; panduan ini membuatnya eksplisit. |

Garis paling tegas adalah kepemilikan state. Kalau catatan kerja hanya ada di layar vendor, memori perusahaan Anda masih disewa.

## Empat Tes

Jalankan tes ini pada setup Anda sekarang.

### 1. Tes Pencabutan Akses

Tanya: kalau login aplikasi utama atau token OAuth dicabut, apa yang masih tersisa?

Tanda baik:

- riwayat tugas tetap ada di tempat yang bisa Anda ekspor atau miliki;
- file sumber, catatan, persetujuan, dan ledger tetap ada;
- agen tidak terus mencoba aksi berbahaya setelah kehilangan akses;
- manusia mendapat notifikasi gagal yang jelas.

Tanda buruk:

- semua agen hilang;
- kerja tertunda tidak terlihat;
- tidak ada bukti yang bisa diekspor;
- satu-satunya pemulihan adalah login lagi ke aplikasi dan berharap semuanya aman.

Ini bukan berarti alat vendor buruk. Artinya, jangan mencampur status kerja yang disewa dengan status kerja yang Anda miliki.

### 2. Tes Perubahan State

Tanya: agen mengubah sesuatu yang nyata, atau hanya menghasilkan teks?

Teks bisa berharga, tapi perusahaan berjalan di atas perubahan state:

- invoice diterbitkan;
- balasan pelanggan dikirim setelah persetujuan;
- bug diperbaiki dan dites;
- brief sumber dikirim dengan sitasi;
- tugas dipindahkan dengan alasan;
- pembayaran dicatat;
- draf publik disetujui dan dipublikasikan;
- akses diberikan atau dicabut.

Kalau AI hanya membuat kata-kata dan manusia melakukan semua perubahan state secara manual, Anda punya bantuan, bukan kerja yang didelegasikan.

### 3. Tes Bukti

Tanya: bisakah saya memeriksa bukti tanpa percaya pada ringkasan agen?

Catatan bukti yang baik harus menjawab:

| Kolom | Contoh |
|---|---|
| Aktor | research-agent, docs-agent, finance-agent |
| Aksi | membuat brief, merekonsiliasi invoice, memperbarui panduan |
| Sumber | daftar URL, ID issue, email pelanggan, resi |
| Persetujuan | tidak wajib, diantrekan, disetujui pemilik |
| Hasil | URL akhir, diff file, baris ledger, ID resi |
| Waktu | timestamp atau entri log |

Kalau buktinya hanya “agen bilang selesai”, kerja itu belum terverifikasi.

### 4. Tes Anggaran

Tanya: apakah agen bisa memakai uang, wallet, atau memicu biaya? Apa yang menghentikannya?

Bahkan agen tanpa wallet bisa memicu biaya lewat panggilan API, komputasi, alat berbayar, iklan, kontraktor, layanan cloud, atau retry berlebihan.

Setup yang matang punya:

- batas biaya harian atau mingguan;
- aturan anggaran per agen;
- ambang persetujuan;
- alert sebelum kerusakan membesar;
- hard stop untuk loop liar;
- catatan penyebab biaya.

Kalau setup belum punya batas biaya, setup itu belum siap untuk otonomi serius.

## Realitas Saat Ini

Sebagian besar produk yang mengaku “agentic company” hari ini lebih dekat ke agentic SaaS. Mereka menaruh agen di permukaan kerja yang berguna: CRM, help desk, alat coding, alat data, workflow tool, dan aplikasi internal.

Itu bukan kegagalan. Itu tahap.

Jalur kematangannya kira-kira begini:

| Tahap | Artinya | Risiko |
|---|---|---|
| Asisten | AI menjawab pertanyaan atau membuat draf teks. | Bukti rendah, kontinuitas rendah. |
| Agen berguna | AI memakai alat untuk satu alur kerja sempit. | Akses alat bisa terlalu luas. |
| Tim agen | Beberapa agen peran berkoordinasi di bawah tinjauan manusia. | Handoff dan memori bisa drift. |
| Agentic company | Agen terhubung ke kerja bisnis, akun, catatan, anggaran, dan persetujuan. | Risiko legal, uang, dan keamanan harus diatur. |

Jangan memburu tahap terakhir demi status. Setiap tahap harus layak mendapat aksesnya.

## Apa yang Dibutuhkan Agentic Company Nyata

Agentic company nyata membutuhkan tujuh primitive serius. Halaman berikutnya membedahnya.

| Syarat | Makna sederhana | Standar minimum |
|---|---|---|
| Identitas agen | Agen penting punya nama, pekerjaan, dan cakupan akses yang stabil. | Kontrak peran ada. |
| Akses uang terkontrol | Agen hanya boleh memicu pengeluaran di dalam batas. | Aturan anggaran dan persetujuan ada. |
| Kerja nyata | Agen menyelesaikan langkah bisnis, bukan sekadar memberi saran. | Output mengubah state atau menyiapkan tinjauan. |
| Catatan terverifikasi | Kerja meninggalkan bukti yang bisa diperiksa. | Catatan bukti ada. |
| Peran spesialis | Agen tidak melebur jadi satu bot generik. | Tiap agen punya satu pekerjaan utama. |
| Tinjauan manusia | Aksi sensitif berhenti untuk pemilik. | Kelas persetujuan didefinisikan. |
| Tanggung jawab | Manusia/perusahaan tetap bertanggung jawab. | Tidak ada klaim bahwa agen menghapus liabilitas. |

Ini sebabnya panduan mulai dari realitas bisnis, bukan nama agen. Tanpa realitas bisnis, Anda tidak tahu identitas, catatan, anggaran, atau gate apa yang dibutuhkan.

## Cara Memakai SaaS Tanpa Membohongi Diri Sendiri

Anda tetap bisa memakai agentic SaaS. Jalur yang sehat adalah memperlakukannya sebagai komponen, bukan seluruh perusahaan.

Gunakan alat vendor untuk:

- eksperimen awal;
- drafting risiko rendah;
- pengumpulan riset;
- prototipe alur kerja;
- kecepatan sementara;
- tugas yang mudah diekspor dan mudah dibalik jika salah.

Jangan biarkan alat vendor menjadi satu-satunya tempat kebenaran perusahaan hidup.

Saat alur kerja SaaS terbukti berguna, ekstrak polanya:

1. Input apa yang dibutuhkan?
2. Output apa yang dihasilkan?
3. Keputusan apa yang dibuat?
4. Akses apa yang dibutuhkan?
5. Apa yang bisa salah?
6. Bukti apa yang harus ada?
7. Agen mana yang nanti memegangnya?

Ini mengubah workflow sewaan menjadi kandidat workflow perusahaan.

## Scorecard

Isi ini dengan jujur.

```text
Nama setup saat ini:
Kerja utama yang dibantu:
Siapa memiliki memori:
Siapa memiliki akun:
Apa yang terjadi kalau login vendor dicabut:
Aksi apa yang bisa terjadi tanpa persetujuan:
Uang/biaya apa yang bisa terpicu:
Bukti apa yang ada setelah kerja selesai:
Apa yang masih dikerjakan manusia secara manual:
Tahap saat ini: asisten / agen berguna / tim agen / agentic company
Primitive berikutnya yang hilang:
```

Tujuannya bukan mempermalukan tahap awal. Tujuannya berhenti berpura-pura bahwa tahap satu sudah tahap empat.

## Selesai Saat

Anda siap ke halaman berikutnya saat bisa menyatakan:

- bagian mana dari setup Anda yang masih disewa;
- catatan mana yang benar-benar Anda miliki;
- aksi mana yang menciptakan state bisnis nyata;
- biaya mana yang bisa terpicu;
- persetujuan mana yang belum ada;
- bukti apa yang ada setelah kerja selesai;
- primitive hilang mana yang menghalangi tahap berikutnya.

Lalu Anda bisa mulai dari tempat builder serius mulai: bisnis itu sendiri.
