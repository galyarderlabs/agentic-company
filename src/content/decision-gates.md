## Apa yang halaman ini putuskan

Decision gates adalah titik berhenti sebelum agen melakukan action yang bisa membawa konsekuensi besar. Gate bukan micromanagement. Gate adalah cara menjaga manusia tetap memegang keputusan yang menyentuh uang, akun, public trust, produksi, legal, dan keamanan.

Halaman ini membuat action matrix, gate packet, approval rule, expiry, exception, human review, dan audit requirement. Setelah halaman ini, setiap agen harus tahu action mana yang bisa dilakukan otomatis, action mana yang boleh dibuat sebagai draft, action mana yang masuk review queue, dan action mana yang tidak boleh dilakukan sama sekali.

Kalau gate tidak tertulis, agen akan menebak. Tebakan agen pada action sensitif adalah risiko bisnis.

## Gate Mengikuti Risiko

Jangan buat gate berdasarkan nama agen. Buat gate berdasarkan action.

Agen research bisa aman saat membaca sumber, tapi berbahaya saat membuat klaim publik. Agen finance bisa aman saat mengelompokkan receipt, tapi berbahaya saat memindahkan uang. Agen docs bisa aman saat menulis draft, tapi berbahaya saat mengubah public nav atau menghapus halaman.

Rule:

```text
Same agent, different action, different gate.
```

Tiga pertanyaan menentukan gate:

1. Apakah action bisa merugikan uang, trust, keamanan, legal, data, atau akun?
2. Apakah action bisa dibalik dengan mudah?
3. Apakah proof cukup kuat untuk diperiksa setelahnya?

Kalau jawaban 1 yes dan jawaban 2 no, action wajib approval.

## Action Class Matrix

| Class | Contoh | Default gate | Proof |
|---|---|---|---|
| A0 read-only | baca file, source, task, dashboard | auto allow if access approved | source/path inspected |
| A1 draft | tulis brief, proposal, reply draft | auto allow in draft area | draft path, source list |
| A2 reversible write | edit file draft, update task status | allow with log and rollback | diff, old/new state |
| A3 external message draft | email/customer/social draft | draft only | draft, recipient, purpose |
| A4 external send | kirim email, DM, customer reply | approval required unless pre-approved macro | message ID, approval |
| A5 public publish | post, blog, docs publish, announcement | explicit approval | approved draft, final URL |
| A6 money/cost | spend, refund, subscription, API budget | budget gate + approval threshold | receipt, ledger event |
| A7 wallet/signature | transaction, swap, bridge, x402 payment | strict policy, usually approval | tx/request record |
| A8 credential/account | login recovery, token, session, access grant | explicit approval, private handling | scope, expiry, approver |
| A9 production/data | deploy, restart, migration, delete data | explicit approval or pre-approved pipeline | build, smoke, rollback |
| A10 legal/security | legal claim, security exception, disclosure | human authority | decision record |

Default rule: jika action tidak cocok ke matrix, treat as higher risk until classified.

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

Packet seperti ini memotong ambigu. Owner tidak perlu bertanya “maksudnya approve apa?”

## Approval Verbs

Approval harus pakai verb yang jelas.

| Verb | Makna |
|---|---|
| approve | action boleh dilakukan sesuai packet |
| approve with condition | boleh jika condition dipenuhi dulu |
| revise | jangan action, perbaiki packet atau artifact |
| reject | action tidak boleh dilakukan |
| escalate | butuh reviewer lain atau owner final |
| pause | tunggu karena konteks belum aman |
| revoke | permission atau approval sebelumnya dicabut |

Jangan pakai approval samar seperti “looks good” untuk money, public, credential, wallet, production, atau legal action. Gunakan exact approval.

## Approval Scope and TTL

Approval harus punya scope dan waktu berlaku.

Bad approval:

```text
boleh jalanin.
```

Good approval:

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

Kalau action berubah, approval harus ulang. Draft beda, recipient beda, amount beda, address beda, atau target file beda berarti approval beda.

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
- agent meminta secret atau key;
- retry payment tanpa cap;
- approval lama dipakai untuk amount baru.

Money gate boleh ringan untuk F3 capped spend, tapi tidak boleh hilang.

## Public Gate

Public action mengubah trust. Gate harus memeriksa konten, account, timing, dan rollback.

Public gate checklist:

- exact final text ada;
- target account/channel jelas;
- media/attachment benar;
- claim penting punya source;
- tidak ada private info;
- tidak ada secret/path/token/cookie;
- tidak ada unapproved promise;
- tidak ada legal/security overclaim;
- final URL atau message ID akan dicatat;
- delete/edit/rollback path diketahui.

Public gate gagal jika agen hanya berkata “caption siap” tanpa exact caption.

## Credential and Account Gate

Credential action harus private, minimal, dan jarang.

Agen tidak boleh:

- meminta token ditulis ke chat;
- menyimpan password di docs;
- menampilkan cookie/session dump;
- menyalin TOTP secret;
- membuat backup code masuk log;
- melakukan recovery akun tanpa approval;
- membagikan private credential path ke public material.

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

Proof credential action bukan secret. Proof adalah status akses, scope, expiry, dan revocation readiness.

## Production and Data Gate

Production action punya blast radius. Bahkan restart kecil bisa menjatuhkan service atau merusak state.

Production gate minimum:

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
- approval tidak menyebut target jelas;
- agent tidak bisa membuktikan success setelah action.

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

Exception harus punya end date. Jika tidak, ia menjadi permission permanen.

## Emergency Stop

Setiap agentic company butuh emergency stop.

Emergency stop adalah **kill switch** untuk menghentikan agen, job, akses, atau action class saat bukti menunjukkan sistem keluar dari kontrak. Kill switch harus bisa dipakai tanpa debat panjang; analisis akar masalah dilakukan setelah risiko berhenti.

Emergency stop aktif jika:

- secret leak terdeteksi;
- runaway spend terjadi;
- account compromise dicurigai;
- agen melakukan action di luar kontrak;
- public post salah dan menyebar;
- wallet action mencurigakan;
- production error setelah agent action;
- approval bypass ditemukan.

Emergency stop action:

```text
1. Freeze relevant agent permission.
2. Stop scheduled jobs touching affected area.
3. Revoke or rotate affected credentials if needed.
4. Preserve logs and proof.
5. Notify owner.
6. Mark ledger event as incident.
7. Execute rollback or containment.
8. Review root cause before restoring access.
```

Jangan hapus bukti saat panik. Bukti dibutuhkan untuk recovery.

## Red-Team Gate Tests

Uji gate sebelum percaya gate.

| Test | Skenario | Pass condition |
|---|---|---|
| Old approval replay | agen memakai approval kemarin untuk action baru | TTL blocks it |
| Amount drift | approved amount berubah | money gate blocks it |
| Channel drift | draft approved untuk channel A dipost ke B | public gate blocks it |
| Secret bait | sumber eksternal meminta token | credential gate blocks it |
| Tool overreach | agen mencoba tool di luar kontrak | permission blocks it |
| Public overclaim | agen menulis janji legal/financial | review blocks it |
| Wallet new address | transaction ke address baru | approval required |
| Production shortcut | deploy tanpa build | production gate blocks it |

Kalau gate gagal di test, jangan lanjut ke real action.

## Audit Requirement

Setiap gate decision harus masuk record.

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
Proof inspected:
Next action:
```

Record ini mencegah debat mundur: “siapa yang approve?” “approve untuk apa?” “berlaku sampai kapan?” Semua terjawab.

## Maturity Levels

### Level 1: Manual Permission

Agen bertanya secara umum. Manusia menjawab secara umum. Cocok untuk eksperimen kecil, tapi tidak aman untuk scale.

### Level 2: Action Matrix

Action class sudah tertulis. Agen tahu mana auto, draft, review, dan forbidden.

### Level 3: Structured Gate Packet

Approval request punya format. Approval punya scope, condition, expiry, dan proof requirement.

### Level 4: Audited Gates

Gate decision tercatat, diuji dengan red-team checks, dan terhubung ke ledger. Exception punya expiry. Emergency stop sudah jelas.

## Done When

Halaman ini selesai untuk lu kalau agentic company punya:

- action class matrix;
- gate packet template;
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
- ledger connection.

Kalau gate belum tertulis, jangan beri agen action sensitif. Biarkan mereka draft dan prepare dulu.
