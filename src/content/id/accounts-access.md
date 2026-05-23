## Apa yang Halaman Ini Putuskan

Halaman ini menentukan siapa yang memiliki setiap akun dan bagian mana yang boleh disentuh agen.

Agen hanya bisa melakukan kerja nyata kalau mereka punya akses ke permukaan kerja nyata: email, kode, papan tugas, kalender, akun sosial, wallet, alat cloud, dan dokumen perusahaan. Akses memberi leverage. Akses juga memperbesar radius dampak.

Di akhir halaman ini, Anda seharusnya punya Access Registry: kategori akun, pemilik, izin agen, kebijakan lokasi kredensial, aturan persetujuan, dan jalur pencabutan akses.

## Kategori Akun

Gunakan tiga kategori.

| Kategori | Makna | Akses agen |
|---|---|---|
| Milik pengguna | akun personal milik manusia. | secara default tidak boleh disentuh agen. |
| Milik perusahaan | akun bisnis yang dipakai perusahaan. | akses dibatasi sesuai peran. |
| Milik agen | akun yang dibuat untuk peran agen tertentu. | agen boleh beroperasi di dalam aturan tertulis. |

Contoh:

| Permukaan | Kategori yang disarankan |
|---|---|
| email personal utama | milik pengguna. |
| email domain perusahaan | milik perusahaan. |
| inbox support | milik agen atau milik perusahaan dengan akses peran. |
| organisasi GitHub | milik perusahaan. |
| machine user GitHub | milik agen. |
| akun brand publik di sosial media | milik perusahaan, wajib lewat tinjauan. |
| akun bot | milik agen. |
| rekening bank | milik perusahaan, manusia saja atau read-only untuk agen. |
| wallet | milik perusahaan atau wallet khusus agen dengan batas ketat. |

Jangan biarkan kenyamanan menentukan akses. Risiko yang harus menentukan akses.

## Kontrak Akses

Sebelum memberi akses, tulis kontrak ini.

```text
Kontrak Akses

1. Akun/permukaan:
2. Kategori: milik pengguna / milik perusahaan / milik agen
3. Pemilik manusia:
4. Agen yang diizinkan:
5. Tujuan:
6. Izin: baca / draf / tulis / admin
7. Aksi yang diizinkan:
8. Aksi yang dilarang:
9. Persetujuan wajib untuk:
10. Kebijakan penyimpanan kredensial:
11. Kebijakan sesi/cookie:
12. Kebijakan MFA / recovery:
13. Jalur pencabutan akses:
14. Ritme tinjauan:
15. Bukti wajib setelah dipakai:
```

Kalau jalur pencabutan akses belum jelas, jangan beri akses.

## Level Izin

Gunakan level sederhana.

| Izin | Makna | Contoh |
|---|---|---|
| tidak ada | agen tidak boleh menyentuhnya. | email personal. |
| baca | agen boleh memeriksa data yang diizinkan. | export billing read-only. |
| draf | agen boleh menyiapkan, tapi tidak mengirim. | draf email, draf post sosial. |
| tulis | agen boleh mengubah state risiko rendah. | menambah komentar tugas, mengedit draf docs. |
| admin | agen bisa mengubah izin atau billing. | hampir selalu manusia saja. |

Agen tidak boleh punya admin secara default. Admin bukan produktivitas. Admin adalah eksposur.

## Registry Kredensial

Registry kredensial adalah peta, bukan tempat menaruh rahasia.

Bentuk registry yang aman untuk publik:

```text
Entri Registry Kredensial

Akun:
Kategori:
Dipakai oleh:
Tipe kredensial:
Disimpan di: private vault / env var / managed secret / session store
Nilai rahasia: JANGAN PERNAH DI FILE INI
Cakupan:
Dibuat:
Kedaluwarsa/tanggal tinjauan:
Jalur pencabutan akses:
Terakhir diverifikasi:
Pemilik:
```

Registry memberi tahu apa yang ada dan bagaimana mencabutnya. Registry tidak berisi nilai rahasia.

## Aturan Sesi dan Cookie

Sesi browser adalah kredensial. Perlakukan seperti kredensial.

Aturan:

- pisahkan sesi browser agen dari sesi browser personal;
- jangan pernah mem-publish atau commit cookie;
- jangan taruh panduan ekstraksi cookie mentah di docs publik;
- rotasi sesi jika log mengeksposnya;
- gunakan akun khusus agen jika memungkinkan;
- verifikasi status kepemilikan sebelum bertindak di sebuah platform;
- aksi publik tetap wajib ditinjau.

Kalau file sesi membuat agen bisa bertindak sebagai seseorang, file itu adalah material kredensial sensitif.

## Akses Uang dan Wallet

Akses uang butuh aturan lebih ketat daripada akses akun biasa.

| Permukaan uang | Izin default untuk agen |
|---|---|
| rekening bank | tidak ada atau export read-only. |
| laporan accounting | baca. |
| payment processor | baca atau draf refund, wajib lewat tinjauan. |
| virtual card | limit kecil, whitelist vendor. |
| wallet | wallet kecil terisi dana atau policy wallet saja. |
| payroll/pajak/pembayaran legal | tinjauan manusia. |

Pengeluaran agen harus selalu punya:

- batas jumlah;
- batas waktu;
- whitelist vendor/address jika memungkinkan;
- ambang persetujuan;
- catatan ledger;
- jalur pencabutan darurat.

## Drill Pencabutan Akses

Untuk setiap agen aktif, jalankan drill ini.

```text
Drill Pencabutan Akses

Agen:
Akun/alat yang bisa diakses:
Jalur pencabutan tercepat:
Target waktu pencabutan:
Apa yang tetap berjalan setelah akses dicabut:
Apa yang rusak setelah akses dicabut:
Bukti bahwa pencabutan berhasil:
Tanggal tinjauan kredensial berikutnya:
```

Kalau akses tidak bisa dicabut cepat, akses itu terlalu luas.

## Template Access Registry

```text
Access Registry

1. Akun milik pengguna yang tidak pernah disentuh agen:
2. Akun milik perusahaan dengan akses agen terbatas:
3. Akun milik agen:
4. Permukaan finansial:
5. Permukaan sosial/publik:
6. Permukaan developer/cloud:
7. Kebijakan penyimpanan kredensial:
8. Kebijakan sesi:
9. Kebijakan MFA/recovery:
10. Gate persetujuan:
11. Jadwal drill pencabutan akses:
12. Sweep akun orphaned/zombie:
```

## Mode Kegagalan

| Kegagalan | Gejala | Perbaikan |
|---|---|---|
| god token | satu token memberi terlalu banyak akses. | token dibatasi per agen/pekerjaan. |
| personal-account bleed | agen bertindak lewat identitas personal manusia. | gunakan akun milik agen atau milik perusahaan. |
| akun zombie | agen yang sudah pensiun masih punya akses. | sweep akses terjadwal. |
| kebocoran sesi | cookie atau token muncul di log atau repo. | redact, rotasi, isolasi sesi. |
| jebakan recovery | manusia kehilangan akses ke MFA/recovery. | rencana recovery offline dan tes berkala. |

## Selesai Saat

Akun dan akses siap saat:

- setiap akun punya kategori;
- setiap izin agen punya tujuan;
- rahasia tidak disimpan di docs publik atau prompt;
- sesi diperlakukan sebagai kredensial;
- akses uang punya batas keras;
- akun publik punya gate tinjauan;
- jalur pencabutan akses jelas;
- kredensial orphaned ditinjau berkala.
