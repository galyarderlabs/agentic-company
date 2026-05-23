## Apa yang Diputuskan Halaman Ini

Agentic company tidak hanya butuh agen yang bekerja. Ia juga butuh model ekonomi yang masuk akal. Kalau agen menjalankan riset, docs, support, sales, finance, dan review, pertanyaan berikutnya adalah: dari mana kerja itu menghasilkan uang, biaya apa yang ia kurangi, delivery mana yang ia percepat, dan bagaimana kerja antar-agen dihitung tanpa menciptakan permainan angka palsu?

Halaman ini memetakan model bisnis yang cocok untuk perusahaan dengan agen: usage-based, subscription, outcome-based, value-based, hybrid, service-assisted, dan internal agent-to-agent work. Fokusnya bukan pricing yang terdengar canggih. Fokusnya adalah menghubungkan kerja agen ke revenue, cost, penurunan risiko, dan bukti.

Kalau model bisnis tidak terhubung ke loop kerja, agen akan sibuk. Tapi perusahaan tidak bergerak.

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
Repeated work needed: scan sumber, ranking, brief, update note.
Human review needed: rekomendasi akhir dan klaim publik.
Agent work involved: research agent, docs agent, review agent.
Cost to deliver: token AI, akses sumber, waktu editor.
Risk if wrong: rekomendasi salah, trust turun.
Proof customer can inspect: tabel sumber, matriks perbandingan, update log.
Pricing basis: subscription atau paket laporan.
```

Model bisnis muncul dari sini, bukan dari keinginan terlihat advanced.

## Matriks Pricing Model

| Model | Cocok untuk | Agen yang terlibat | Bukti yang harus ada | Risiko |
|---|---|---|---|---|
| Usage-based | unit kerja jelas dan bisa dihitung | ops, metering, billing, audit | usage event, customer ID, price rule | customer takut tagihan mengejutkan |
| Subscription | value berulang dan predictable | research, docs, support, finance | delivery log, issue log, arsip content/report | churn jika output tidak terasa |
| Outcome-based | hasil bisa diukur dan atribusi jelas | sales, growth, analytics, review | baseline, result, attribution note | dispute atribusi |
| Value-based | problem mahal dan trust tinggi | strategy, research, finance, product | decision brief, impact estimate, approval trail | butuh bukti kuat |
| Hybrid | kerja punya base + variable | support, research, implementation | base delivery + usage/result event | kompleksitas naik |
| Service-assisted | manusia masih memegang delivery final | docs, consulting, product, support | draft, review, final delivery record | margin bocor jika review berat |
| Internal chargeback | agen memakai budget antar-loop | finance, ops, audit | internal work order, budget debit | angka internal bisa palsu |

Tidak ada model yang otomatis lebih “AI”. Yang penting: customer paham apa yang dibayar, perusahaan paham biaya delivery, dan ledger bisa membuktikan unit kerjanya.

## Unit Economics untuk Kerja Agen

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

Contoh untuk laporan mingguan:

```text
Work unit: satu market brief mingguan.
Customer value: menghemat waktu riset dan menurunkan risiko memilih tool yang salah.
Agent steps: pengumpulan sumber, ranking, draft pertama, tabel sitasi.
Human steps: judgment akhir, penguatan klaim, approval publish.
Tool/API cost: search, model call, docs build.
Account or data cost: subscription sumber yang disetujui.
Review cost: waktu reviewer.
Failure/rework cost: klaim tanpa dukungan dan sumber kedaluwarsa.
Proof cost: tabel sumber dan cek halaman render.
Gross margin estimate: harga dikurangi biaya delivery.
Break-even volume: jumlah subscriber yang dibutuhkan.
Quality threshold: setiap klaim strategis punya sitasi sumber.
```

Kalau unit economics tidak mencantumkan review cost, Anda sedang menipu diri sendiri. Agen bisa mempercepat draft, tapi manusia sering tetap membayar biaya judgment.

## Usage-Based Model

Usage-based cocok ketika unit kerja bisa dihitung bersih: request, laporan, analisis, dokumen, tiket selesai, lead yang diperkaya, sumber yang dipantau, test yang dibuat, atau permintaan transaksi wallet.

Policy usage-based:

- satu usage event harus punya customer atau project;
- harga per unit harus jelas;
- unit gratis atau retry harus dipisah;
- unit gagal tidak boleh otomatis ditagih;
- cost cap harus terlihat;
- customer harus bisa membaca usage summary;
- loop agen harus mencatat usage event otomatis.

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

Red flag: agen menghasilkan banyak usage tapi output tidak dipakai customer. Itu bukan growth. Itu tagihan yang akan dibenci.

## Subscription Model

Subscription cocok jika customer membeli kontinuitas: brief mingguan, support desk, monitoring, maintenance, research stream, advisory digest, atau managed documentation.

Agen membantu subscription lewat:

- menjaga cadence;
- mengumpulkan sumber;
- membuat draft rutin;
- mendeteksi issue berulang;
- mencatat value yang sudah dikirim;
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

Subscription gagal ketika customer tidak melihat akumulasi value. Karena itu agen harus membuat renewal packet, bukan hanya deliverable.

## Outcome-Based Model

Outcome-based menarik karena terdengar selaras dengan hasil. Tapi ia berbahaya kalau atribusinya kabur.

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

Agen boleh membantu mengumpulkan data dan membuat analisis. Agen tidak boleh membuat klaim outcome final tanpa review manusia.

## Value-Based Model

Value-based cocok saat perusahaan menyelesaikan masalah mahal: audit readiness, fundraising prep, finance cleanup, product due diligence, strategic research, security review, atau decision support.

Di model ini, bukti lebih penting daripada volume. Customer membayar karena keputusan menjadi lebih jelas, risiko turun, atau waktu senior terselamatkan.

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

- Sales Agent meminta Research Agent memperkaya lead.
- Docs Agent meminta Review Agent mengecek klaim.
- Finance Agent meminta Audit Agent memverifikasi receipt.
- Support Agent meminta Product Triage Agent mengecek bug report.
- Ops Agent meminta Security Agent scan docs publik sebelum publish.

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

Agent-to-agent work tanpa record akan berubah menjadi obrolan antar-bot. Work order menjaga kerja tetap bisa diaudit.

## Internal Budgets

Untuk tahap awal, jangan mulai dengan pembayaran uang nyata antar-agen. Mulai dari internal budget points atau alokasi waktu/cost.

| Budget type | Arti | Dipakai untuk |
|---|---|---|
| Time budget | batas waktu kerja agen | mencegah loop panjang |
| Token budget | batas biaya model/API | mencegah runaway generation |
| Tool budget | batas call ke tool berbayar | data/API calls |
| Attention budget | batas review manusia | mencegah owner jadi bottleneck |
| Risk budget | batas tindakan sensitif per periode | tindakan publik, uang, kredensial |

Internal budget membantu Anda melihat loop mana yang boros. Tapi jangan jadikan angka internal sebagai kebenaran palsu. Angka itu harus terhubung ke cost atau output nyata.

## Agent-to-Agent Commerce

Agent-to-agent commerce baru masuk akal jika kerja agen melintasi batas service yang jelas, terutama pay-per-request seperti x402 atau service digital yang menagih per output.

Jika memakai x402 atau pembayaran per request, perlakukan setiap call sebagai **micropayment** dengan bukti lengkap: quote sebelum request, output artifact setelah request, invoice record untuk penagihan, dan settlement status setelah pembayaran selesai atau masuk dispute. Tanpa empat hal itu, “agen bayar agen” hanya membuat biaya samar yang susah diaudit.

Policy sebelum memakai pembayaran nyata:

- service punya price quote sebelum request;
- requester punya budget envelope;
- receiver punya output contract;
- output gagal tidak ditagih atau masuk dispute;
- retry dibatasi;
- ledger event tercatat;
- manusia bisa audit total spend;
- service baru harus approval.

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

Jika record ini terasa terlalu berat, jangan gunakan pembayaran nyata. Gunakan internal work order dulu.

## Mode Gagal Model Bisnis

| Kegagalan | Gejala | Perbaikan |
|---|---|---|
| Agent activity pricing | harga berdasar jumlah output AI, bukan value | hubungkan output ke customer outcome |
| Hidden human cost | margin terlihat bagus tapi review manusia besar | masukkan review cost ke unit economics |
| Proofless subscription | customer tidak tahu value yang sudah dikirim | buat renewal proof packet |
| Usage bill shock | customer kaget karena volume tinggi | tambah cap, forecast, dan alert |
| Outcome dispute | customer menolak atribusi | definisikan baseline dan measurement source |
| Internal fake economy | agen saling charge tapi tidak ada customer value | hubungkan work order ke business loop |
| Tool cost leak | biaya delivery naik tanpa terlihat | review cost per loop tiap minggu |
| Review bottleneck | semua tindakan menunggu owner | klasifikasikan gate dan delegasikan review secara aman |

Model bisnis harus mengurangi ketidakjelasan, bukan menambah kabut.

## Revenue Loop

Setiap model perlu revenue loop yang bisa dijalankan agen.

```text
1. Tangkap demand atau kebutuhan customer.
2. Ubah kebutuhan menjadi work unit.
3. Assign loop agen.
4. Lacak biaya delivery.
5. Buat proof artifact.
6. Kirim ke customer atau review owner.
7. Catat evidence value.
8. Bill atau renew sesuai model.
9. Review margin dan kegagalan.
```

Agen bisa membantu semua langkah, tapi klaim finansial tetap harus lewat review jika memengaruhi customer, billing, legal, atau janji publik.

## Template Desain Model

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

## Tingkat Kematangan

### Level 1: Service-Assisted

Agen membantu manusia membuat output. Pricing masih seperti service biasa. Aman untuk awal, tapi margin terbatas.

### Level 2: Offer Berulang

Loop sudah jelas. Agen memegang bagian berulang. Bukti dan cadence delivery ada. Subscription atau package mulai masuk akal.

### Level 3: Unit Kerja Terukur

Unit kerja bisa dihitung. Usage, internal budget, cost per loop, dan proof per delivery mulai stabil.

### Level 4: Agent-to-Agent Work yang Diatur

Agen bisa meminta kerja dari agen lain lewat work order, budget, bukti, dan review. Pembayaran nyata hanya terjadi kalau policy dan ledger sudah matang.

## Selesai Saat

Halaman ini selesai untuk Anda kalau setiap offer punya:

- customer problem;
- outcome yang dibeli;
- pricing model;
- work unit;
- agen yang mengerjakan;
- biaya review manusia;
- biaya tool/API;
- bukti yang dilihat customer;
- billing event;
- ledger event;
- approval gate;
- failure/dispute path;
- review margin mingguan.

Kalau tidak ada hubungan antara kerja agen dan revenue/biaya/risiko, jangan menyebutnya model bisnis. Itu baru aktivitas.
