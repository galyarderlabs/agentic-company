## Apa yang Diputuskan Halaman Ini

Agentic company tidak boleh berjalan di atas kalimat “agent said done”. Setiap pekerjaan penting harus meninggalkan record yang bisa diperiksa tanpa mempercayai ringkasan agen.

Halaman ini mendesain ledger, audit trail, dan proof. Ledger di sini bukan hanya buku uang. Ledger adalah catatan perubahan state penting: siapa bertindak, atas instruksi apa, memakai sumber apa, apakah approval dibutuhkan, apakah approval diberikan, apa yang berubah, dan bukti apa yang membuktikan hasilnya.

Jika agen bisa menulis file, mengirim pesan, membuat draft invoice, memakai tool berbayar, memanggil MCP server, mengubah task, atau meminta wallet action, maka agen harus meninggalkan proof.

Target halaman ini: Anda bisa membuat evidence contract untuk setiap action class, lalu memeriksa kerja agen dari record, bukan dari vibe.

## Ledger Bukan Ringkasan

Ringkasan menjawab “apa kata agen terjadi”. Ledger event menjawab “apa yang benar-benar tercatat terjadi”.

Ringkasan lemah:

```text
Docs updated and build passed.
```

Ledger event kuat:

```text
Actor: docs-agent
Action: updated public guide page
Source instruction: issue AC-17
Files changed: src/content/security.md
Approval required: no for draft, yes for publish
Verification: npm run build exit 0
Proof: diff link, build log, rendered page screenshot
State: draft ready for review
Timestamp: 2026-05-23T09:15:00Z
```

Perbedaan ini penting. Ringkasan bisa halusinasi. Ledger event memaksa agen menunjukkan jejak.

## Anatomi Ledger Event

Gunakan field ini sebagai dasar.

| Field | Arti | Wajib untuk |
|---|---|---|
| Event ID | identifier unik | semua event penting |
| Actor | agen/manusia/tool yang bertindak | semua event |
| Role | kontrak kerja actor | agent action |
| Source instruction | task, message, issue, schedule, approval request | semua event |
| Action class | read, draft, write, public, money, credential, production | semua event |
| Object touched | file, account, customer, wallet, task, doc, service | semua event |
| Before state | state sebelum perubahan jika tersedia | write/action event |
| After state | state setelah perubahan | write/action event |
| Approval required | yes/no dan alasan | sensitive action |
| Approval record | approver, timestamp, condition | approved action |
| Proof artifact | URL, diff, receipt, source table, tx hash, screenshot, test log | semua completion claim |
| Verification result | pass/fail, command/check, output summary | code/docs/tool action |
| Risk note | exposure atau rollback | sensitive action |
| State | draft, pending, approved, executed, failed, reversed | semua event |

Tidak semua field wajib untuk semua hal. Tapi jangan pernah hilangkan actor, action, source, proof, state, dan time.

## Event Type

| Event type | Kapan dipakai | Minimum proof |
|---|---|---|
| Research event | sumber dikumpulkan atau klaim dianalisis | source list, confidence note |
| Docs event | dokumen dibuat atau diubah | changed files, diff, build/check result |
| Code event | patch, test, review, deploy request | diff, test output, review note |
| Support event | pesan customer diproses | case ID, draft/final message, approval |
| Sales event | lead/enrichment/outreach | lead row, reason, draft approval |
| Finance event | biaya, receipt, ledger, budget | amount, receipt, category, approval |
| Wallet event | on-chain request atau transaction | network, address label, tx hash if executed |
| Account event | access granted/revoked/session changed | scope, reason, expiry, approver |
| Public event | post, page, announcement | draft, approval, final URL, rollback path |
| Security event | incident, secret exposure, suspicious action | evidence, containment, rotation status |

Event type memudahkan audit. Kalau semuanya masuk “task complete”, record jadi kabur.

## Audit Trail

Audit trail adalah urutan event yang menjelaskan cerita kerja dari awal sampai akhir.

Contoh audit trail untuk public post:

```text
1. Content Agent creates draft.
2. Review Agent checks claims and forbidden terms.
3. Owner approves exact caption.
4. Publishing Agent posts using approved account.
5. Publishing Agent records final URL and screenshot.
6. Ops Agent checks post visible and correct.
7. Ledger event closes as executed.
```

Kalau ada langkah yang hilang, audit trail tidak boleh disebut clean.

Audit trail harus bisa menjawab:

- siapa yang mulai;
- siapa yang mengubah;
- siapa yang review;
- siapa yang approve;
- sumber apa yang dipakai;
- apa yang berubah;
- bukti final apa yang ada;
- bagaimana rollback jika salah.

## Evidence Contract

Evidence contract mendefinisikan proof sebelum kerja dimulai.

```text
Action class:
Actor allowed:
Input required:
Approval required:
Proof required before work:
Proof required after work:
Verification check:
Record destination:
Retention period:
Failure state:
Rollback path:
```

Contoh untuk docs update:

```text
Action class: reversible write
Actor allowed: docs-agent
Input required: issue or owner instruction
Approval required: no for draft, yes for publish
Proof required before work: source page and target file
Proof required after work: changed files, diff, build result, rendered check
Verification check: docs build exits 0 and page renders headings correctly
Record destination: task record and docs ledger
Retention period: keep with release notes
Failure state: blocked with build log
Rollback path: revert file diff
```

Contoh untuk money action:

```text
Action class: money
Actor allowed: finance-agent can draft, owner approves execution
Input required: vendor, amount, purpose, receipt or quote
Approval required: yes above envelope
Proof required before work: budget check and approver
Proof required after work: receipt, transaction reference, ledger row
Verification check: amount and vendor match approval
Record destination: finance ledger
Retention period: accounting retention policy
Failure state: pending or disputed
Rollback path: refund/reversal if possible, incident note if not
```

## Standar Proof Artifact

Tidak semua proof sama kuatnya.

| Proof | Kekuatan | Catatan |
|---|---|---|
| Agent summary | lemah | hanya narasi, bukan bukti |
| Source list | sedang | kuat untuk research, lemah untuk execution |
| Diff | kuat | menunjukkan file berubah |
| Test/build output | kuat | membuktikan check tertentu, bukan semua kualitas |
| Receipt | kuat | membuktikan transaksi, perlu cocok dengan ledger |
| Final URL | kuat | membuktikan publikasi terlihat saat dicek |
| Screenshot | sedang | bagus untuk visual, bisa stale |
| Message ID | kuat | bagus untuk support/Discord/email |
| Transaction hash | kuat | bagus untuk on-chain execution, tetap perlu address label |
| Signature/hash anchor | kuat untuk integrity | membuktikan record tidak berubah setelah titik tertentu |

Proof harus cocok dengan action. Screenshot tidak membuktikan biaya benar. Build pass tidak membuktikan klaim marketing benar. Receipt tidak membuktikan spend berguna.

## Optional Cryptographic Anchoring

Cryptographic anchoring berguna jika record perlu dibuktikan tidak diubah setelah waktu tertentu. Ini bisa dilakukan dengan hash, signature, atau anchor on-chain. Tapi jangan gunakan anchoring sebagai dekorasi.

Gunakan anchoring jika:

- record bernilai legal, finansial, atau compliance;
- proof perlu dibagikan ke pihak luar;
- banyak agen bisa menulis record;
- ada risiko sengketa;
- event bernilai tinggi dan sulit diulang.

Jangan gunakan anchoring jika:

- record masih draft dan sering berubah;
- data berisi material privat yang tidak boleh bocor;
- tim belum bisa menjaga key management;
- biaya dan kompleksitas lebih tinggi daripada manfaat;
- anchoring dipakai hanya agar terlihat canggih.

Template hash record:

```text
Record ID:
Record file:
Hash algorithm:
Hash value:
Signed by:
Signature reference:
Anchor location if any:
Timestamp:
Redaction status:
```

Jangan anchor data sensitif mentah. Anchor hash dari record yang sudah disimpan aman, bukan token, private path, secret, atau personal transcript.

## State Machine

Ledger event harus punya state. Tanpa state, sulit membedakan draft, pending, dan executed.

```text
draft -> queued -> approved -> executed -> verified -> closed
       -> rejected
       -> blocked
       -> failed
       -> reversed
```

Rule:

- draft berarti agen sedang menyusun artifact;
- queued berarti menunggu reviewer atau owner;
- approved berarti boleh lanjut sesuai condition;
- executed berarti action sudah terjadi;
- verified berarti proof final sudah dicek;
- closed berarti tidak ada next action;
- blocked berarti gate atau data kurang;
- failed berarti action gagal;
- reversed berarti action dibalik atau dikoreksi.

Completion claim hanya boleh setelah state verified atau closed, tergantung action. Untuk public, money, credential, dan production action, executed saja belum cukup.

## Reconciliation Loop

Audit bukan kegiatan tahunan. Audit adalah loop.

Loop harian:

```text
1. Collect new events.
2. Check missing actor, source, proof, or state.
3. Flag sensitive events without approval.
4. Flag completed tasks without proof.
5. Queue correction.
```

Loop mingguan:

```text
1. Sample events from each agent.
2. Match tasks to proofs.
3. Match financial events to receipts.
4. Match public events to visible URLs.
5. Review failed and reversed events.
6. Update policy if failure repeats.
```

Loop bulanan:

```text
1. Review high-risk action classes.
2. Remove stale access.
3. Summarize cost per agent and loop.
4. Archive closed records.
5. Test recovery from one missing tool or account.
```

Audit loop membuat agentic company tidak bergantung pada ingatan chat.

## Red-Team Checks

Uji ledger dengan skenario buruk.

| Test | Pertanyaan | Pass condition |
|---|---|---|
| Agent said done | Apakah manusia bisa membuktikan tanpa percaya agen? | proof artifact ada |
| Missing source | Klaim penting tanpa URL atau file asal? | event blocked |
| Approval bypass | Sensitive action tanpa approval? | gate catches it |
| Proof mismatch | Receipt amount beda dari ledger? | anomaly flagged |
| Public error | Final URL berbeda dari draft approved? | event marked failed/revised |
| Wallet ambiguity | Address tidak punya label? | transaction blocked |
| Log leak | Record berisi secret atau private path? | redaction catches it |
| Replay attack | Old approval dipakai untuk action baru? | approval TTL blocks it |

Jika test gagal, jangan poles wording. Perbaiki event schema, gate, atau tool permission.

## Tingkat Kematangan

### Level 1: Task Notes

Pekerjaan punya catatan, tapi belum punya event schema. Masih bisa dipakai untuk kerja kecil, tapi audit berat.

### Level 2: Proof Required

Setiap completion claim butuh URL, diff, receipt, source list, atau check output. Ini level minimum untuk working agents.

### Level 3: Structured Ledger

Event punya actor, source, action class, approval, state, proof, dan timestamp. Audit trail bisa dibaca lintas agen.

### Level 4: Verifiable Record

High-value record bisa di-hash atau signed. Approval punya TTL. Sensitive actions punya trail yang sulit diubah. Record bisa dibagikan secara terbatas tanpa private leakage.

## Selesai Saat

Halaman ini selesai untuk Anda kalau setiap action penting punya:

- ledger event schema;
- actor;
- source instruction;
- action class;
- object touched;
- approval rule;
- proof artifact;
- verification check;
- state machine;
- audit trail;
- reconciliation loop;
- redaction rule;
- optional hash/signature policy untuk record bernilai tinggi.

Kalau agen tidak bisa menunjukkan bukti, statusnya bukan selesai. Statusnya: dicoba.
