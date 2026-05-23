## Apa yang Diputuskan Halaman Ini

Halaman ini menjelaskan posisi Hermes Agent di dalam build.

Hermes Agent adalah engine teknis yang memberi agen tool, profile, hook memori, delegasi, scheduled work, dan delivery channel. Halaman ini bukan pengganti dokumentasi resmi Hermes Agent; halaman ini menjelaskan peran Hermes di dalam operating stack ini.

Di akhir halaman ini, Anda harus punya Hermes Setup Plan: profile, secret, tool, approval gate, scheduled job, dan proof check.

## Apa Peran Hermes Agent di Sini

Hermes Agent dipakai untuk mengubah kontrak agen tertulis menjadi agen yang bekerja.

Dalam panduan ini, Hermes membantu dengan:

- identitas agen berbasis profile;
- akses tool;
- koneksi MCP;
- kerja file dan terminal;
- loading memori dan skill;
- background job;
- delegasi ke subagent;
- delivery lewat channel chat atau email;
- verifikasi sebelum completion.

Pertahankan nama aslinya: Hermes Agent. Ini bagian teknis nyata dari setup. Perlakukan credential, file akun lokal, token dump, cookie, dan isi profile mentah sebagai aset operasional dengan akses terkontrol.

## Prinsip Setup

Pisahkan empat hal:

| Bagian | Artinya | Contoh |
|---|---|---|
| Profile | Identitas agen dan aturan perilakunya. | `docs-agent`, `finance-agent`, `support-agent`. |
| Config | Setting non-secret. | tool aktif, nama model provider, gateway setting. |
| Secrets | Key dan credential. | disimpan di `.env` atau vault privat, tidak pernah di docs. |
| State | Memori, task, log, record. | note, issue Paperclip, baris ledger, output build. |

Kalau semuanya tercampur, Anda tidak bisa review, restore, atau rotate akses dengan aman.

## Langkah 1: Definisikan Profile

Mulai dengan satu atau dua profile. Jangan membuat sepuluh agen di hari pertama.

Profile awal yang baik:

- support agent untuk kontinuitas dan cek human-cost;
- execution agent untuk routing, challenge, dan verifikasi;
- docs atau research agent untuk kerja berguna yang rendah risiko.

Setiap profile harus mengarah kembali ke Agent Responsibility Contract dari halaman sebelumnya.

Checklist profile:

```text
Profile name:
Primary job:
Allowed tool groups:
Memory sources:
Approval gates:
No-publish rules:
Proof format:
Shutdown rule:
```

Profile bukan tempat untuk secret. Profile adalah tempat untuk aturan.

## Langkah 2: Pisahkan Config dari Secret

Setup yang aman memisahkan setting biasa dari material sensitif.

Config boleh mencakup:

- tool group yang aktif;
- pilihan model provider;
- nama profile;
- delivery channel;
- scheduling rule;
- definisi MCP server tanpa nilai secret.

Secret mencakup:

- API key;
- bot token;
- OAuth token;
- cookie;
- password;
- TOTP secret;
- wallet key;
- material recovery akun privat.

Secret harus disimpan di luar config yang dilacak dan di-rotate saat terekspos. Contoh publik harus memakai placeholder, bukan nilai live.

Contoh publik yang buruk:

```text
DISCORD_TOKEN=real_token_here
```

Contoh publik yang baik:

```text
DISCORD_TOKEN=<store privately; do not commit>
```

## Langkah 3: Beri Tool Pelan-Pelan

Tool adalah capability. Tambahkan karena kebutuhan, bukan karena antusiasme.

| Akses tool | Pemakaian awal yang aman | Risiko |
|---|---|---|
| File read | inspect docs dan catatan sumber. | paparan file privat jika path terlalu luas. |
| File write | edit draft docs atau note. | menimpa file penting. |
| Terminal | menjalankan build dan check. | command shell destruktif. |
| Browser | inspect halaman publik. | kebocoran sesi, action akun tidak sengaja. |
| Google/Notion/Linear | bekerja dengan surface bisnis. | write eksternal atau paparan data privat. |
| Paperclip | membuat task, approval, activity record. | state perusahaan salah jika disalahgunakan. |
| MCP tools | terhubung ke service khusus. | permission drift antar-agen. |

Mulai dengan read-only jika memungkinkan. Tambahkan akses write hanya saat proof dan rollback path sudah jelas.

## Langkah 4: Hubungkan MCP dengan Sengaja

MCP adalah salah satu cara agar agen memakai tool eksternal secara terkontrol.

Setup plan publik harus menjawab:

```text
Which MCP server is connected?
Which agent may use it?
Which actions are read-only?
Which actions can write?
Which writes require human review?
What proof does the tool return?
How is access revoked?
```

Contoh:

```text
MCP tool: Paperclip
Allowed agent: execution-agent
Allowed actions: list issues, create issue drafts, comment with evidence
Requires approval: closing strategic issues, approving external sends
Proof: issue ID, comment URL or activity record
Revocation: remove tool from profile and rotate token if needed
```

Jangan beri setiap profile semua tool. Akses tool harus mengikuti kontrak peran.

## Langkah 5: Tambahkan Scheduled Work dengan Hati-Hati

Scheduled work membuat perusahaan terasa hidup. Ia juga menciptakan risiko karena berjalan saat manusia tidak mengawasi.

Scheduled job yang aman:

- daily source scan;
- weekly docs link check;
- cost summary;
- stale task report;
- memory health check;
- service status check.

Scheduled job yang berbahaya:

- public posting;
- payment;
- credential change;
- cleanup destruktif;
- production deploy;
- balasan customer tanpa review.

Kontrak scheduled job:

```text
Job name:
Agent/profile:
Schedule:
Input source:
Allowed actions:
Forbidden actions:
Cost limit:
Output destination:
Failure alert:
Proof record:
```

Kalau job tidak bisa melaporkan kegagalan, ia tidak boleh berjalan tanpa pengawasan.

## Langkah 6: Bangun Approval Gate

Hermes bisa menyiapkan kerja, tapi action sensitif butuh hard stop.

Payload approval harus mencakup:

- tipe action;
- target;
- alasan;
- risiko;
- payload persis;
- bukti bahwa prerequisite sudah lolos;
- frasa approval;
- expiry time;
- rollback plan jika relevan.

Contoh:

```text
Approval request
Action: publish docs page
Target: /docs/agent-memory/
Reason: updated memory routing guide
Risk: public content error or private leak
Prerequisite proof: build passed, private scan empty
Approve with: APPROVE publish-docs-agent-memory
Expires: 30 minutes
```

Agen tidak boleh menerima approval kabur seperti “yeah go ahead” untuk action berisiko tinggi.

## Langkah 7: Siapkan Recovery

Kalau laptop mati, perusahaan tidak boleh kehilangan otaknya.

Recovery plan yang aman untuk publik:

- docs dan template profile masuk version control;
- backup terenkripsi privat untuk secret, jika dipakai;
- export state task/ledger jika memungkinkan;
- daftar service yang dibutuhkan;
- restore checklist;
- test restore di machine atau container bersih.

Jangan publish path backup privat yang sebenarnya, nama file secret, nilai token, atau arsip sesi mentah.

## Hermes Setup Plan

Salin ini sebelum install atau konfigurasi apa pun.

```text
Hermes Setup Plan

1. First profile:
2. Profile job:
3. Allowed tools:
4. Tools denied:
5. MCP connections:
6. Secrets location policy:
7. Memory sources:
8. Approval actions:
9. Scheduled jobs:
10. Cost limit:
11. Proof record format:
12. Failure alert destination:
13. Recovery plan:
```

## Selesai Saat

Anda siap menghubungkan communication channel saat:

- setiap profile aktif punya satu job;
- secret terpisah dari config;
- akses tool cocok dengan kontrak profile;
- koneksi MCP punya aturan read/write;
- scheduled job punya batas cost dan failure;
- approval payload sudah didefinisikan;
- recovery tidak bergantung pada memori saja;
- tidak ada secret privat atau state privat persis yang muncul di docs publik.
