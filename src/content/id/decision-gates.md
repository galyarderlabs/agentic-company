## Apa yang Diputuskan Halaman Ini

Decision gate adalah titik berhenti sebelum agen melakukan action yang bisa membawa konsekuensi besar. Gate bukan micromanagement. Gate adalah cara menjaga manusia tetap memegang keputusan yang menyentuh uang, akun, public trust, produksi, legal, dan keamanan.

Halaman ini membuat action matrix, gate packet, approval rule, expiry, exception, human review, dan audit requirement. Setelah halaman ini, setiap agen harus tahu action mana yang bisa dilakukan otomatis, action mana yang hanya boleh dibuat sebagai draft, action mana yang masuk review queue, dan action mana yang tidak boleh dilakukan sama sekali.

Kalau gate tidak tertulis, agen akan menebak. Tebakan agen pada action sensitif adalah risiko bisnis.

## Gate Mengikuti Risiko

Jangan buat gate berdasarkan nama agen. Buat gate berdasarkan action.

Research agent bisa aman saat membaca sumber, tapi berbahaya saat membuat klaim publik. Finance agent bisa aman saat mengelompokkan receipt, tapi berbahaya saat memindahkan uang. Docs agent bisa aman saat menulis draft, tapi berbahaya saat mengubah public nav atau menghapus halaman.

Rule:

```text
Same agent, different action, different gate.
```

Tiga pertanyaan menentukan gate:

1. Apakah action bisa merugikan uang, trust, keamanan, legal, data, atau akun?
2. Apakah action bisa dibalik dengan mudah?
3. Apakah proof cukup kuat untuk diperiksa setelahnya?

Kalau jawaban pertama ya dan jawaban kedua tidak, action wajib approval.

## Action Class Matrix

| Class | Contoh | Default gate | Proof |
|---|---|---|---|
| A0 read-only | baca file, source, task, dashboard | auto allow jika akses disetujui | source/path yang diperiksa |
| A1 draft | tulis brief, proposal, reply draft | auto allow di area draft | path draft, daftar sumber |
| A2 reversible write | edit file draft, update status task | allow dengan log dan rollback | diff, state lama/baru |
| A3 external message draft | draft email/customer/social | draft only | draft, recipient, purpose |
| A4 external send | kirim email, DM, reply customer | approval required kecuali macro pre-approved | message ID, approval |
| A5 public publish | post, blog, publish docs, announcement | explicit approval | draft disetujui, URL final |
| A6 money/cost | spend, refund, subscription, budget API | budget gate + approval threshold | receipt, ledger event |
| A7 wallet/signature | transaction, swap, bridge, x402 payment | strict policy, biasanya approval | catatan tx/request |
| A8 credential/account | recovery login, token, session, access grant | explicit approval, penanganan privat | scope, expiry, approver |
| A9 production/data | deploy, restart, migration, delete data | explicit approval atau pipeline pre-approved | build, smoke, rollback |
| A10 legal/security | klaim legal, security exception, disclosure | otoritas manusia | decision record |

Default rule: jika action tidak cocok ke matrix, perlakukan sebagai risiko lebih tinggi sampai diklasifikasikan.

## Gate Packet

Setiap action yang butuh approval harus datang sebagai packet, bukan chat kabur.

```text
Gate request
Requested by:
Action class:
Action summary:
Target object:
Reason:
Source instruction:
Expected benefit:
Worst plausible downside:
Reversibility:
Approval needed from:
Deadline:
Proof already collected:
Proof after action:
Rollback path:
Exact action if approved:
```

Contoh:

```text
Requested by: Docs Agent
Action class: A5 public publish
Action summary: publish updated security guide.
Target object: /docs/security/
Reason: public guide currently too thin.
Source instruction: task rewrite-batch15-20.
Expected benefit: higher-quality public docs.
Worst plausible downside: unsafe example or broken page renders.
Reversibility: revert file and redeploy.
Approval needed from: owner.
Proof already collected: diff, forbidden-term scan, build output, rendered page check.
Proof after action: live URL and screenshot.
Rollback path: revert commit or restore previous file.
Exact action if approved: deploy docs site with updated page.
```

Packet seperti ini memotong ambiguitas. Owner tidak perlu bertanya “maksudnya approve apa?”

## Approval Verbs

Approval harus memakai verb yang jelas.

| Verb | Arti |
|---|---|
| approve | action boleh dilakukan sesuai packet |
| approve with condition | boleh jika condition dipenuhi dulu |
| revise | jangan lakukan action, perbaiki packet atau artifact |
| reject | action tidak boleh dilakukan |
| escalate | butuh reviewer lain atau owner final |
| pause | tunggu karena konteks belum aman |
| revoke | permission atau approval sebelumnya dicabut |

Jangan pakai approval samar seperti “looks good” untuk money, public, credential, wallet, production, atau legal action. Gunakan approval yang persis.

## Approval Scope dan TTL

Approval harus punya scope dan masa berlaku.

Approval yang buruk:

```text
boleh jalanin.
```

Approval yang baik:

```text
Approved for Docs Agent to publish the exact draft at /docs/security/ after build passes and forbidden-term scan is clean. Valid for this draft only until 2026-05-24 18:00.
```

TTL mencegah approval lama dipakai ulang untuk action baru.

Approval record:

```text
Approver:
Approved actor:
Approved action:
Object:
Conditions:
Expires:
Revocation path:
Proof required after execution:
```

Kalau action berubah, approval harus diulang. Draft beda, recipient beda, amount beda, address beda, atau target file beda berarti approval beda.

## Money Gate

Money gate punya standar lebih ketat karena kerugian bisa langsung terjadi.

Money gate packet:

```text
Amount:
Currency or asset:
Vendor/recipient:
Purpose:
Budget envelope:
Current spend in period:
Approval threshold:
Payment method or network:
Refund/reversal possibility:
Ledger category:
Proof after action:
```

Auto-deny jika:

- vendor tidak dikenal;
- wallet address baru;
- amount tidak jelas;
- budget envelope tidak ada;
- purpose tidak terkait business loop;
- agen meminta secret atau key;
- retry payment tanpa cap;
- approval lama dipakai untuk amount baru.

Money gate boleh ringan untuk F3 capped spend, tapi tidak boleh hilang.

## Public Gate

Public action mengubah trust. Gate harus memeriksa konten, akun, timing, dan rollback.

Checklist public gate:

- exact final text ada;
- target account/channel jelas;
- media/attachment benar;
- klaim penting punya source;
- tidak ada private info;
- tidak ada secret/path/token/cookie;
- tidak ada unapproved promise;
- tidak ada legal/security overclaim;
- final URL atau message ID akan dicatat;
- path delete/edit/rollback diketahui.

Public gate gagal jika agen hanya berkata “caption siap” tanpa exact caption.

## Credential dan Account Gate

Credential action harus privat, minimal, dan jarang.

Agen tidak boleh:

- meminta token ditulis ke chat;
- menyimpan password di docs;
- menampilkan cookie/session dump;
- menyalin TOTP secret;
- membuat backup code masuk log;
- melakukan recovery akun tanpa approval;
- membagikan path credential privat ke material publik.

Credential gate packet:

```text
Account:
Access requested:
Reason:
Duration:
Storage location category:
Who can read:
Rotation needed:
Revocation path:
Proof of success:
What must not be logged:
```

Proof credential action bukan secret. Proof adalah status akses, scope, expiry, dan kesiapan revocation.

## Production dan Data Gate

Production action punya blast radius. Bahkan restart kecil bisa menjatuhkan service atau merusak state.

Minimum production gate:

```text
Change:
Reason:
Affected service/data:
Build/check result:
Backup or rollback:
Maintenance window if needed:
Health check:
Owner approval:
Post-action verification:
```

Auto-deny jika:

- tidak ada rollback;
- tidak ada health check;
- schema/data migration belum dites;
- destructive action tidak punya backup;
- approval tidak menyebut target yang jelas;
- agen tidak bisa membuktikan success setelah action.

## Exception Policy

Exception boleh ada, tapi harus tertulis. “Khusus kali ini” tanpa record adalah lubang policy.

Exception record:

```text
Exception name:
Action class:
Why exception exists:
Who approved:
Allowed actor:
Allowed scope:
Start:
End:
Extra proof required:
Review date:
Revocation trigger:
```

Exception harus punya end date. Jika tidak, ia berubah menjadi permission permanen.

## Emergency Stop

Setiap agentic company butuh emergency stop.

Emergency stop adalah **kill switch** untuk menghentikan agen, job, akses, atau action class saat bukti menunjukkan sistem keluar dari kontrak. Kill switch harus bisa dipakai tanpa debat panjang; analisis akar masalah dilakukan setelah risiko berhenti.

Emergency stop aktif jika:

- secret leak terdeteksi;
- runaway spend terjadi;
- account compromise dicurigai;
- agen melakukan action di luar kontrak;
- post publik salah dan menyebar;
- wallet action mencurigakan;
- production error setelah agent action;
- approval bypass ditemukan.

Emergency stop action:

```text
1. Freeze permission agen yang relevan.
2. Stop scheduled job yang menyentuh area terdampak.
3. Revoke atau rotate credential terdampak jika perlu.
4. Preserve log dan bukti.
5. Notify owner.
6. Mark ledger event as incident.
7. Execute rollback atau containment.
8. Review root cause before restoring access.
```

Jangan hapus bukti saat panik. Bukti dibutuhkan untuk recovery.

## Red-Team Gate Tests

Uji gate sebelum mempercayai gate.

| Test | Skenario | Pass condition |
|---|---|---|
| Old approval replay | agen memakai approval kemarin untuk action baru | TTL memblokirnya |
| Amount drift | amount yang disetujui berubah | money gate memblokirnya |
| Channel drift | draft approved untuk channel A dipost ke B | public gate memblokirnya |
| Secret bait | sumber eksternal meminta token | credential gate memblokirnya |
| Tool overreach | agen mencoba tool di luar kontrak | permission memblokirnya |
| Public overclaim | agen menulis janji legal/financial | review memblokirnya |
| Wallet new address | transaction ke address baru | approval required |
| Production shortcut | deploy tanpa build | production gate memblokirnya |

Kalau gate gagal di test, jangan lanjut ke real action.

## Audit Requirement

Setiap keputusan gate harus masuk catatan.

```text
Gate decision record
Request ID:
Actor:
Action class:
Approver:
Decision: approve/revise/reject/pause/revoke
Conditions:
Expires:
Reason:
Proof checked:
Next action:
```

Catatan ini mencegah debat mundur: “siapa yang approve?” “approve untuk apa?” “berlaku sampai kapan?” Semuanya terjawab.

## Tingkat Kematangan

### Level 1: Permission Manual

Agen bertanya secara umum. Manusia menjawab secara umum. Cocok untuk eksperimen kecil, tapi tidak aman untuk scale.

### Level 2: Action Matrix

Class action sudah tertulis. Agen tahu mana auto, draft, review, dan dilarang.

### Level 3: Gate Packet Terstruktur

Permintaan approval punya format. Approval punya scope, condition, expiry, dan proof requirement.

### Level 4: Gate yang Diaudit

Keputusan gate tercatat, diuji dengan red-team check, dan terhubung ke ledger. Exception punya expiry. Emergency stop jelas.

## Selesai Saat

Halaman ini selesai untuk Anda kalau agentic company punya:

- action class matrix;
- template gate packet;
- approval verbs;
- approval scope dan TTL;
- money gate;
- public gate;
- credential gate;
- production/data gate;
- exception policy;
- emergency stop;
- gate decision record;
- red-team gate tests;
- koneksi ledger.

Kalau gate belum tertulis, jangan beri agen action sensitif. Biarkan mereka membuat draft dan menyiapkan bukti dulu.
