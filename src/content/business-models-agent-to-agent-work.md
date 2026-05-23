## Apa yang halaman ini putuskan

Agentic company tidak hanya butuh agen yang bekerja. Ia juga butuh model ekonomi yang masuk akal. Kalau agen melakukan research, docs, support, sales, finance, dan review, pertanyaan berikutnya adalah: kerja itu menghasilkan uang dari mana, mengurangi biaya apa, mempercepat delivery mana, dan bagaimana agen-to-agen work dihitung tanpa menciptakan permainan angka palsu?

Halaman ini memetakan model bisnis yang cocok untuk perusahaan dengan agen: usage, subscription, outcome, value-based, hybrid, service-assisted, dan internal agent-to-agent work. Fokusnya bukan mencari pricing yang terdengar canggih. Fokusnya adalah menghubungkan kerja agen ke revenue, cost, risk reduction, dan proof.

Jika model bisnis tidak terhubung ke loop kerja, agen akan sibuk. Tapi perusahaan tidak bergerak.

## Jangan Mulai dari Pricing

Pricing adalah keputusan akhir dari value, cost, risiko, dan delivery. Jangan mulai dari “berapa harganya”. Mulai dari pertanyaan ini:

```text
Customer problem:
Business outcome:
Repeated work needed:
Human review needed:
Agent work involved:
Cost to deliver:
Risk if wrong:
Proof customer can inspect:
Pricing basis:
```

Kalau agent work tidak bisa dijelaskan dalam format itu, pricing hanya tebakan.

Contoh:

```text
Customer problem: founder tidak sempat memantau tool AI baru.
Business outcome: keputusan tool lebih cepat dan lebih aman.
Repeated work needed: source scan, ranking, brief, update note.
Human review needed: final recommendation and public claims.
Agent work involved: research agent, docs agent, review agent.
Cost to deliver: AI tokens, source access, editor time.
Risk if wrong: rekomendasi salah, trust turun.
Proof customer can inspect: source table, comparison matrix, update log.
Pricing basis: subscription or report package.
```

Model bisnis muncul dari sini, bukan dari rasa ingin terlihat advanced.

## Pricing Model Matrix

| Model | Cocok untuk | Agen yang terlibat | Proof yang harus ada | Risiko |
|---|---|---|---|---|
| Usage-based | work unit jelas dan bisa dihitung | ops, metering, billing, audit | usage event, customer ID, price rule | customer takut bill surprise |
| Subscription | value berulang dan predictable | research, docs, support, finance | delivery log, issue log, content/report archive | churn jika output tidak terasa |
| Outcome-based | hasil bisa diukur dan atribusi jelas | sales, growth, analytics, review | baseline, result, attribution note | dispute attribution |
| Value-based | problem mahal dan trust tinggi | strategy, research, finance, product | decision brief, impact estimate, approval trail | butuh proof kuat |
| Hybrid | work punya base + variable | support, research, implementation | base delivery + usage/result event | complexity naik |
| Service-assisted | manusia masih memegang delivery final | docs, consulting, product, support | draft, review, final delivery record | margin bocor jika review berat |
| Internal chargeback | agen memakai budget antar loop | finance, ops, audit | internal work order, budget debit | angka internal bisa palsu |

Tidak ada model yang otomatis lebih “AI”. Yang penting: pelanggan memahami apa yang dibayar, perusahaan memahami biaya delivery, dan ledger bisa membuktikan work unit.

## Unit Economics for Agent Work

Setiap model butuh unit economics. Jangan hitung “biaya AI” sebagai satu angka besar. Pecah per loop.

```text
Work unit:
Customer value:
Agent steps:
Human steps:
Tool/API cost:
Account or data cost:
Review cost:
Failure/rework cost:
Proof cost:
Gross margin estimate:
Break-even volume:
Quality threshold:
```

Contoh untuk report mingguan:

```text
Work unit: one weekly market brief.
Customer value: saves research time and reduces tool selection risk.
Agent steps: source collection, ranking, first draft, citation table.
Human steps: final judgment, claim tightening, publish approval.
Tool/API cost: search, model calls, docs build.
Account or data cost: approved source subscriptions.
Review cost: reviewer time.
Failure/rework cost: unsupported claims and outdated sources.
Proof cost: source table and rendered page check.
Gross margin estimate: price minus delivery cost.
Break-even volume: number of subscribers needed.
Quality threshold: every strategic claim cites source.
```

Kalau unit economics tidak mencantumkan review cost, lu sedang menipu diri sendiri. Agen bisa mempercepat draft, tapi manusia sering tetap membayar biaya judgment.

## Usage-Based Model

Usage-based cocok ketika unit kerja bisa dihitung bersih: request, report, analysis, document, resolved ticket, enriched lead, monitored source, generated test, or wallet transaction request.

Policy usage-based:

- satu event usage harus punya customer atau project;
- harga per unit harus jelas;
- free/retry unit harus dipisah;
- failed unit tidak boleh otomatis ditagih;
- cost cap harus terlihat;
- customer harus bisa membaca usage summary;
- agent loop harus mencatat usage event otomatis.

Usage event:

```text
Usage event
Customer:
Work unit:
Agent:
Input summary:
Output artifact:
Price rule:
Billable: yes/no
Reason if not billable:
Proof:
Timestamp:
```

Red flag: agen menghasilkan banyak usage tapi output tidak dipakai pelanggan. Itu bukan growth. Itu tagihan yang akan dibenci.

## Subscription Model

Subscription cocok jika pelanggan membeli continuity: weekly brief, support desk, monitoring, maintenance, research stream, advisory digest, or managed documentation.

Agen membantu subscription lewat:

- menjaga cadence;
- mengumpulkan sumber;
- membuat draft rutin;
- mendeteksi issue berulang;
- mencatat delivered value;
- mengingat preference customer;
- menyiapkan renewal proof.

Subscription proof:

```text
Subscription proof packet
Period:
Customer:
Deliverables promised:
Deliverables shipped:
Open issues:
Agent work completed:
Human review completed:
Proof links:
Customer-visible outcome:
Renewal risk:
```

Subscription gagal ketika pelanggan tidak melihat akumulasi value. Karena itu agen harus membuat renewal packet, bukan cuma deliverable.

## Outcome-Based Model

Outcome-based menarik karena terdengar selaras dengan hasil. Tapi ia berbahaya kalau atribusi kabur.

Gunakan outcome-based hanya jika:

- outcome bisa diukur;
- baseline jelas;
- periode jelas;
- pihak yang memengaruhi outcome jelas;
- external factor dicatat;
- dispute path ada;
- payment rule tertulis.

Outcome record:

```text
Outcome agreement
Customer:
Baseline:
Target outcome:
Measurement source:
Start date:
End date:
Excluded factors:
Agent contribution:
Human contribution:
Approval points:
Payment rule:
Dispute rule:
Proof required:
```

Agen boleh membantu mengumpulkan data dan membuat analysis. Agen tidak boleh membuat klaim outcome final tanpa review manusia.

## Value-Based Model

Value-based cocok saat perusahaan menyelesaikan masalah mahal: audit readiness, fundraising prep, finance cleanup, product due diligence, strategic research, security review, or decision support.

Di model ini, proof lebih penting daripada volume. Pelanggan membayar karena keputusan menjadi lebih jelas, risiko turun, atau waktu senior terselamatkan.

Value-based packet:

```text
Decision supported:
Cost of wrong decision:
Evidence collected:
Alternatives compared:
Risk map:
Recommendation:
Confidence level:
Human reviewer:
Customer decision:
Proof archive:
```

Jangan menjual “AI output”. Jual keputusan yang lebih cepat, lebih terbukti, dan lebih rendah risiko.

## Agent-to-Agent Work

Agent-to-agent work berarti satu agen meminta pekerjaan dari agen lain. Ini bisa internal, bukan selalu transaksi uang sungguhan.

Contoh:

- Sales Agent meminta Research Agent enrich lead.
- Docs Agent meminta Review Agent cek klaim.
- Finance Agent meminta Audit Agent verifikasi receipt.
- Support Agent meminta Product Triage Agent cek bug report.
- Ops Agent meminta Security Agent scan public docs sebelum publish.

Handoff ini harus tercatat sebagai work order.

```text
Internal work order
Requesting agent:
Receiving agent:
Business loop:
Purpose:
Input artifact:
Requested output:
Deadline:
Budget impact:
Approval needed:
Proof required:
Return path:
```

Agent-to-agent work tanpa record akan berubah menjadi obrolan antar bot. Work order menjaga kerja tetap bisa diaudit.

## Internal Budgets

Untuk tahap awal, jangan mulai dengan payment antar agen pakai uang nyata. Mulai dari internal budget points atau time/cost allocation.

| Budget type | Makna | Gunakan untuk |
|---|---|---|
| Time budget | batas waktu kerja agen | mencegah loop panjang |
| Token budget | batas model/API cost | mencegah runaway generation |
| Tool budget | batas call ke tool berbayar | data/API calls |
| Attention budget | batas review manusia | mencegah owner jadi bottleneck |
| Risk budget | batas action sensitif per periode | public, money, credential action |

Internal budget membantu lu melihat loop mana yang boros. Tapi jangan jadikan angka internal sebagai truth palsu. Angka itu harus terhubung ke cost atau output nyata.

## Agent-to-Agent Commerce

Agent-to-agent commerce baru masuk akal jika agent work melintasi service boundaries yang jelas, terutama pay-per-request seperti x402 atau service digital yang menagih per output.

Jika memakai x402 atau payment per request, perlakukan setiap call sebagai **micropayment** dengan bukti lengkap: quote sebelum request, output artifact setelah request, invoice record untuk penagihan, dan settlement status setelah pembayaran selesai atau masuk dispute. Tanpa empat hal itu, “agen bayar agen” hanya membuat biaya samar yang susah diaudit.

Policy sebelum memakai payment nyata:

- service punya price quote sebelum request;
- requester punya envelope;
- receiver punya output contract;
- failed output tidak ditagih atau masuk dispute;
- retry dibatasi;
- ledger event tercatat;
- manusia bisa audit total spend;
- new service harus approval.

Commerce record:

```text
Requester:
Service or receiving agent:
Work unit:
Price quote:
Invoice reference:
Budget envelope:
Approval status:
Output artifact:
Quality check:
Payment reference:
Settlement status:
Ledger event:
Dispute state:
```

Jika record ini terasa terlalu berat, jangan gunakan payment nyata. Gunakan internal work order dulu.

## Business Model Failure Modes

| Failure | Gejala | Perbaikan |
|---|---|---|
| Agent activity pricing | harga berdasar jumlah output AI, bukan value | map output ke customer outcome |
| Hidden human cost | margin terlihat bagus tapi review manusia besar | include review cost in unit economics |
| Proofless subscription | customer tidak tahu value yang sudah dikirim | create renewal proof packet |
| Usage bill shock | customer kaget karena volume tinggi | add cap, forecast, and alert |
| Outcome dispute | pelanggan menolak atribusi | define baseline and measurement source |
| Internal fake economy | agen saling charge tapi tidak ada customer value | connect work order to business loop |
| Tool cost leak | delivery cost naik tanpa terlihat | cost per loop review weekly |
| Review bottleneck | semua action menunggu owner | classify gates and delegate review safely |

Model bisnis harus menurunkan ketidakjelasan, bukan menambah kabut.

## Revenue Loop

Setiap model perlu revenue loop yang bisa dijalankan agen.

```text
1. Capture demand or customer need.
2. Convert need into work unit.
3. Assign agent loop.
4. Track cost to deliver.
5. Produce proof artifact.
6. Deliver to customer or owner review.
7. Record value evidence.
8. Bill or renew according to model.
9. Review margin and failure.
```

Agen bisa membantu semua langkah, tapi financial claim tetap harus lewat review jika berpengaruh ke customer, billing, legal, atau public promise.

## Template Model Design

```text
Business Model Card

Offer:
Customer:
Problem:
Outcome:
Pricing model:
Work unit:
Agent loops involved:
Human review involved:
Cost drivers:
Proof customer sees:
Billing event:
Ledger event:
Approval gate:
Failure/dispute path:
Renewal or repeat trigger:
Metrics to review weekly:
```

Isi satu card untuk setiap offer. Jangan mencampur subscription, usage, dan outcome dalam satu kalimat marketing tanpa policy di belakangnya.

## Maturity Levels

### Level 1: Assisted Service

Agen membantu manusia membuat output. Pricing masih service biasa. Aman untuk awal, tapi margin terbatas.

### Level 2: Repeatable Offer

Loop sudah jelas. Agen memegang bagian berulang. Proof dan delivery cadence ada. Subscription atau package mulai masuk akal.

### Level 3: Measured Work Unit

Unit work bisa dihitung. Usage, internal budget, cost per loop, dan proof per delivery mulai stabil.

### Level 4: Governed Agent-to-Agent Work

Agen bisa meminta kerja dari agen lain lewat work order, budget, proof, dan review. Payment nyata hanya terjadi jika policy dan ledger sudah matang.

## Done When

Halaman ini selesai untuk lu kalau setiap offer punya:

- customer problem;
- outcome yang dibeli;
- model pricing;
- work unit;
- agen yang mengerjakan;
- human review cost;
- tool/API cost;
- proof customer sees;
- billing event;
- ledger event;
- approval gate;
- failure/dispute path;
- weekly margin review.

Kalau tidak ada hubungan antara agent work dan revenue/cost/risk, jangan menyebutnya business model. Itu baru aktivitas.
