## Apa yang Halaman Ini Putuskan

Halaman ini mengubah agen dari asisten samar menjadi pekerjaan dengan batas yang jelas.

Jangan mulai dari kepribadian. Mulai dari tanggung jawab. Identitas agen yang serius memberi tahu sistem: apa yang dipegang agen, apa yang boleh dipakai, apa yang tidak boleh dilakukan, apa yang perlu diingat, kapan harus berhenti, dan bukti apa yang harus dikembalikan.

Di akhir halaman ini, Anda seharusnya punya satu Agent Responsibility Contract yang bisa disalin.

## Identitas Adalah Kontrak Kerja

Identitas yang lemah terdengar seperti ini:

```text
Anda adalah growth expert kelas dunia. Bersikap proaktif dan bantu founder menang.
```

Kalimat itu bisa menghasilkan teks yang energik. Tapi itu tidak menciptakan keamanan.

Identitas yang kuat terdengar seperti ini:

```text
Growth research agent mencari dan merangkum sumber publik tentang kanal distribusi.
Agen boleh membaca halaman web dan catatan perusahaan.
Agen tidak boleh posting publik, mengirim pesan, memakai uang, atau mengedit data pelanggan.
Agen mengembalikan tabel sumber, eksperimen yang direkomendasikan, catatan risiko, dan pertanyaan terbuka.
```

Bedanya ada di enforceability. Identitas kedua bisa ditinjau, dites, dan diperbaiki. Identitas pertama cuma bisa dikelola pakai vibes.

## Kontrak Tanggung Jawab

Gunakan template ini untuk setiap agen serius.

```text
Agent Responsibility Contract

1. Nama:
2. Tujuan:
3. Pemilik manusia:
4. Pekerjaan utama:
5. Non-tujuan:
6. Masukan yang diizinkan:
7. Alat yang diizinkan:
8. Akun yang diizinkan:
9. Aksi otonom yang diizinkan:
10. Aksi yang butuh persetujuan:
11. Aksi yang dilarang:
12. Kebijakan memori:
13. Kebijakan no-publish / rahasia:
14. Format output:
15. Bukti wajib:
16. Pemicu eskalasi:
17. Aturan shutdown / handoff:
18. Ritme tinjauan:
```

Jangan kosongkan “non-tujuan”. Non-tujuan mencegah agen berubah menjadi helper universal dengan akses tersembunyi.

## Cara Mengisi Kontrak

### Tujuan

Tulis alasan agen ada dalam satu kalimat.

Buruk:

```text
Bantu finance.
```

Baik:

```text
Rekonsiliasi export pembayaran mingguan terhadap ledger dan tandai mismatch untuk tinjauan manusia.
```

### Pekerjaan Utama

Pekerjaan utama harus terhubung ke loop bisnis dari halaman sebelumnya.

Kalau loop bisnisnya “scan sumber mingguan”, agen itu bukan companion riset umum. Agen itu adalah agen pengumpulan dan ranking sumber. Pekerjaannya lebih sempit daripada kecerdasannya.

### Masukan yang Diizinkan

Masukan menentukan apa yang boleh dibaca agen.

Contoh:

- sumber web publik;
- folder docs tertentu;
- export laporan pembayaran;
- tiket pelanggan dengan field sensitif yang sudah dihapus;
- issue di papan tugas;
- notebook sumber;
- file draf.

Kalau masukan berisi data privat atau data pelanggan, kontrak harus menjelaskan cara agen menanganinya.

### Alat dan Akun yang Diizinkan

Alat adalah tangan. Akun adalah pintu. Beri lebih sedikit dari yang diminta agen.

| Agen | Alat/akun yang mungkin dibutuhkan | Alat/akun yang tidak boleh dimiliki |
|---|---|---|
| Riset | web search, source reader, akses tulis ke catatan. | billing, posting sosial, deploy produksi. |
| Docs | baca/tulis file docs, command build, catatan sumber. | pembayaran, account recovery, database pelanggan. |
| Finance | export billing, draf tulis ledger, kalkulator. | sosial publik, deploy website, pesan privat. |
| Support | baca tiket, antrean draf balasan, kanal eskalasi. | refund tanpa gate, janji legal, alat kredensial. |
| Tinjauan | akses baca ke output, catatan bukti, file sumber. | otoritas aksi akhir atas pekerjaan yang ia tinjau sendiri. |

Model kuat dengan alat sempit lebih aman daripada model lemah dengan akses luas.

## Aturan Persetujuan

Setiap identitas butuh peta persetujuan yang jelas.

| Aksi | Aturan |
|---|---|
| Membaca sumber yang diizinkan | Diizinkan. |
| Membuat output lokal | Diizinkan. |
| Mengedit file draf | Diizinkan kalau bisa dibalik. |
| Menandai tugas selesai | Diizinkan hanya setelah bukti ada. |
| Menghubungi pelanggan | Wajib tinjauan. |
| Publikasi publik | Wajib tinjauan. |
| Memakai uang | Wajib aturan anggaran dan tinjauan di atas threshold. |
| Menghapus data | Wajib backup dan tinjauan. |
| Mengubah kredensial | Manusia saja. |

Jangan pakai frasa seperti “hati-hati”. Hati-hati bukan sistem izin. Tulis titik berhenti yang persis.

## Kebijakan Memori

Identitas harus mendefinisikan apa yang perlu diingat agen dan apa yang tidak boleh diingat.

Memori yang baik:

- batas pekerjaan yang stabil;
- preferensi komunikasi pengguna;
- prosedur berulang;
- keputusan sumber;
- aturan bisnis yang disetujui;
- pelajaran dari kegagalan yang jelas.

Memori yang buruk:

- rahasia mentah;
- cookie atau token;
- private key;
- progress tugas sementara;
- harga lama setelah pricing berubah;
- detail pelanggan sensitif di luar sistem yang disetujui;
- detail intim manusia yang tidak membantu pekerjaan.

Memori bukan tempat sampah. Memori adalah kumpulan kecil fakta yang mengurangi arahan ulang di masa depan.

## Format Output

Kalau format output kabur, tinjauan jadi mahal.

Contoh kontrak output untuk agen riset:

```text
Output harus mencakup:
- 5-12 sumber dengan URL dan tanggal dicek;
- ringkasan satu paragraf per sumber;
- rating confidence: tinggi / medium / rendah;
- klaim yang butuh tinjauan manusia;
- aksi berikutnya yang direkomendasikan;
- sumber yang ditolak dan alasan penolakannya.
```

Contoh kontrak output untuk agen docs:

```text
Output harus mencakup:
- path file yang berubah;
- ringkasan pendek perubahan konten;
- catatan sumber yang dipakai;
- command build/check dan hasilnya;
- ketidakpastian yang tersisa;
- konfirmasi tidak ada data privat yang masuk.
```

Semakin jelas output, semakin sedikit manusia harus babysit.

## Eskalasi dan Shutdown

Agen butuh perilaku kegagalan sebelum mereka gagal.

Pemicu eskalasi bisa mencakup:

- konflik sumber;
- masukan wajib hilang;
- alat mengembalikan error berulang;
- estimasi biaya melewati batas;
- pengguna meminta aksi terlarang;
- data privat muncul di konteks tidak aman;
- output tidak bisa diverifikasi;
- confidence agen rendah pada keputusan berdampak tinggi.

Contoh aturan shutdown:

```text
Jika tiga panggilan alat berturut-turut gagal, berhenti. Jangan mengarang hasil. Tulis catatan kegagalan berisi nama alat, error, pemulihan yang dicoba, dan aksi aman berikutnya.
```

Agen yang aman tahu kapan harus berhenti.

## Contoh Terisi: Docs Agent

```text
Agent Responsibility Contract

1. Nama: docs-agent
2. Tujuan: menjaga halaman panduan publik tetap jelas, selaras sumber, dan aman.
3. Pemilik manusia: pemilik perusahaan atau docs lead.
4. Pekerjaan utama: rewrite dan verifikasi halaman dokumentasi dari catatan sumber yang disetujui.
5. Non-tujuan: jangan mengubah kode produk, pricing, pengaturan akun, atau post publik.
6. Masukan yang diizinkan: catatan sumber, halaman markdown saat ini, metadata docs, output build.
7. Alat yang diizinkan: baca file, tulis file docs, jalankan build docs, scan konten.
8. Akun yang diizinkan: tidak ada secara default.
9. Aksi otonom yang diizinkan: edit source docs lokal dan jalankan cek lokal.
10. Aksi yang butuh persetujuan: publish, deploy, hapus halaman, rename slug.
11. Aksi yang dilarang: mengekspos path privat, rahasia, memori mentah, atau data pelanggan.
12. Kebijakan memori: ingat aturan docs yang durable dan pelajaran alignment sumber.
13. Kebijakan no-publish: jangan pernah publish token, cookie, ID privat, key wallet, memori intim, atau detail setup privat persis.
14. Format output: file yang berubah, konsep sumber yang dicakup, cek yang dijalankan, gap yang tersisa.
15. Bukti wajib: hasil build, hasil scan, cek halaman render.
16. Pemicu eskalasi: konflik sumber, build gagal, konten tidak aman terdeteksi.
17. Aturan shutdown: berhenti sebelum publish atau menghapus halaman aktif.
18. Ritme tinjauan: tinjauan setelah setiap batch konten besar.
```

## Checklist Tinjauan Kontrak

Sebelum memakai agen, cek:

- Apakah tujuan terhubung ke loop bisnis nyata?
- Apakah non-tujuannya eksplisit?
- Apakah alat dan akun minimal?
- Apakah aksi yang butuh persetujuan sudah didaftar per kelas?
- Apakah format output konkret?
- Apakah bukti wajib sebelum “selesai”?
- Apakah agen tahu kapan harus berhenti?
- Apakah ada ritme tinjauan?

Kalau kontrak tidak bisa dites, kontrak itu belum selesai.

## Selesai Saat

Anda siap masuk setup Hermes Agent saat setidaknya satu agen serius punya kontrak tertulis dengan:

- satu pekerjaan utama;
- masukan yang diizinkan;
- alat yang diizinkan;
- batas akun;
- kebijakan memori;
- gate persetujuan;
- format output;
- syarat bukti;
- aturan eskalasi dan shutdown.

Jangan membangun engine teknis di sekitar identitas yang kabur. Engine itu hanya membuat kekaburan bergerak lebih cepat.
