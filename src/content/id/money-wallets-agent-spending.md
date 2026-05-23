## Apa yang Diputuskan Halaman Ini

Halaman ini membahas bagian paling berbahaya dari agentic company: uang. Bukan hanya crypto wallet. Bukan hanya transfer bank. Uang juga keluar lewat API call, compute, paid SaaS, ads, contractor, domain, hosting, subscription upgrade, refund, chargeback, paid data, dan eksperimen otomatis yang berjalan terlalu lama.

Agen yang bisa menyebabkan biaya harus diperlakukan seperti pekerja dengan kartu perusahaan yang limit-nya sempit: boleh membantu, tapi tidak boleh punya kuasa liar. Trust bukan hadiah. Trust adalah hasil dari limit, gate, proof, dan audit.

Target halaman ini: Anda bisa mendesain financial rights untuk setiap agen. Siapa boleh melihat data biaya. Siapa boleh membuat draft spend. Siapa boleh meminta payment. Siapa tidak boleh menyentuh wallet. Berapa limit per action, per hari, per minggu. Proof apa yang wajib ada. Apa yang terjadi kalau biaya aneh muncul.

Kalau aturan uang tidak tertulis, agen belum siap memegang kerja serius.

## Uang Bukan Satu Jenis Action

Kesalahan umum: menganggap “agen tidak punya wallet” berarti aman. Padahal agen bisa menghabiskan uang tanpa wallet.

| Jenis biaya | Contoh | Risiko |
|---|---|---|
| Direct payment | transfer, card charge, on-chain payment | dana hilang atau salah tujuan |
| Tool spending | token API, model call, data provider, image/video generation | runaway cost, tagihan membesar diam-diam |
| Subscription change | upgrade SaaS, tambah seat, paid addon | biaya berulang tanpa review |
| Ads spend | campaign, boosted post, paid acquisition test | burn cepat dan risiko publik |
| Contractor spend | hire freelancer, approve invoice | sengketa legal/payment |
| Refund/credit | refund customer, discount, account credit | revenue leakage |
| Wallet action | sign transaction, bridge, swap, gas fee | loss irreversible, salah chain/address |
| x402 payment | pay-per-request service call | microspend bisa menumpuk |

Semua ini financial action. Jangan batasi policy hanya pada “transfer uang”. Batasi semua action yang bisa membuat biaya.

## Financial Rights Ladder

Pakai tangga hak finansial. Jangan lompat dari no access ke full spend.

| Level | Hak agen | Cocok untuk | Gate |
|---|---|---|---|
| F0 | tidak melihat data uang | agen kreatif atau research umum | tidak ada financial action |
| F1 | read-only cost data | ops, audit, finance clerk | tidak boleh membuat spend |
| F2 | draft ledger atau spend request | finance, sales ops, vendor research | manusia approve sebelum bayar |
| F3 | spend kecil otomatis dalam cap | monitoring, microservice, approved API job | limit ketat dan ledger event otomatis |
| F4 | wallet/API spend terbatas | agen teknis khusus dengan policy kuat | allowlist, threshold, proof, alert |
| F5 | high-value financial action | hampir tidak cocok untuk agen otomatis | explicit owner approval setiap kali |

Sebagian besar agen harus berhenti di F1 atau F2. F3 hanya untuk kerja berulang, nominal kecil, dan mudah dibuktikan. F4 perlu alasan teknis kuat. F5 tetap milik manusia.

## Spending Envelope

Spending envelope adalah batas tertulis untuk biaya yang boleh dipicu agen. Envelope harus spesifik, bukan sekadar “low cost”.

```text
Agent:
Purpose:
Allowed spend type:
Allowed vendors or networks:
Per-action limit:
Daily limit:
Weekly limit:
Monthly limit:
Auto-stop threshold:
Approval threshold:
Required proof:
Ledger category:
Alert recipient:
Expiry date:
```

Contoh aman untuk tool spending:

```text
Agent: Research Monitor
Purpose: scan paid source API for weekly brief.
Allowed spend type: API requests to approved data provider.
Allowed vendors or networks: approved provider list only.
Per-action limit: small request batch.
Daily limit: fixed cap.
Weekly limit: fixed cap.
Monthly limit: fixed cap.
Auto-stop threshold: stop when daily cap reaches 80%.
Approval threshold: any new vendor or cap increase.
Required proof: request count, reason, source list, cost estimate.
Ledger category: research data.
Alert recipient: owner and ops agent.
Expiry date: review monthly.
```

Kalau envelope tidak punya expiry date, ia bisa menjadi permission permanen yang tidak pernah ditinjau.

## Wallet Policy Tanpa Hype

Agentic wallet terdengar canggih, tapi desainnya harus membosankan. Wallet adalah kuasa tanda tangan. Kuasa tanda tangan berarti risiko kehilangan dana.

Untuk Base, Solana, atau jaringan lain, policy harus menjawab:

- jaringan apa yang boleh dipakai;
- wallet mana yang digunakan untuk testing dan mana yang untuk dana nyata;
- apakah agen boleh sign sendiri atau hanya membuat unsigned request;
- address tujuan berasal dari mana;
- bagaimana address diverifikasi;
- limit per transaction;
- limit per periode;
- apa yang dilakukan jika gas fee naik;
- apakah transaction bisa dibatalkan;
- siapa yang menerima alert;
- ledger event apa yang dibuat.

Default aman:

```text
Agen tidak boleh memegang seed phrase.
Agen tidak boleh melihat private key.
Agen tidak boleh menulis secret ke chat, doc, log, atau repo.
Agen boleh membuat transaction request.
Manusia atau signing policy terpisah menentukan final signature.
```

Kalau memakai AgentKit atau tool serupa, jangan terhipnotis oleh kemudahan integrasi. AgentKit membantu agen berinteraksi dengan wallet dan network action. Itu tidak menghapus kebutuhan limit, allowlist, approval, dan ledger.

## Wallet Action Classes

| Class | Contoh | Default rule |
|---|---|---|
| W0 observe | cek balance, cek status transaction | boleh read-only jika address bukan secret |
| W1 prepare | draft payment request, estimate gas, validate recipient label | boleh tanpa signature |
| W2 small signed action | micro-payment ke allowlisted address | hanya jika cap, alert, dan ledger otomatis ada |
| W3 new recipient | payment ke address baru | manusia wajib approve |
| W4 irreversible/high value | bridge, swap besar, transfer dana utama | manusia wajib approve, biasanya manual |
| W5 key/recovery action | seed, private key, recovery phrase | tidak untuk agen |

Wallet safety bukan soal model “pintar” atau “tidak”. Ini soal hak tanda tangan. Hak tanda tangan harus kecil, sempit, dan bisa dihentikan.

## x402 dan Pay-Per-Request

x402 memungkinkan pembayaran per request untuk layanan digital. Ini bisa berguna untuk agen yang membeli data, menjalankan query, atau memakai service kecil tanpa subscription besar. Tapi pay-per-request punya risiko: setiap request terlihat kecil, totalnya bisa besar.

Policy x402 harus punya:

| Field | Rule |
|---|---|
| Service allowlist | agen hanya boleh membayar service yang sudah disetujui |
| Request purpose | setiap request punya alasan kerja |
| Price ceiling | request di atas harga tertentu ditolak |
| Batch cap | batch berhenti setelah jumlah tertentu |
| Daily cap | total harian dibatasi |
| Result proof | response atau artifact disimpan |
| Cost proof | price, request ID, service ID dicatat |
| Failure rule | retry dibatasi, no infinite loop |

Contoh request record:

```text
x402 request record
Agent:
Service:
Purpose:
Input summary:
Price quoted:
Price accepted:
Request ID:
Result artifact:
Ledger event:
Retry count:
```

Jangan izinkan agen retry payment tanpa batas. Retry adalah salah satu jalan paling cepat menuju tagihan tidak sadar.

## Budget Gate

Budget gate harus memisahkan biaya kecil, biaya sedang, dan biaya berbahaya.

| Gate | Rule |
|---|---|
| Auto deny | unknown vendor, new wallet address, secret request, unclear purpose |
| Auto allow | low-cost action inside existing envelope with proof |
| Queue review | cap near limit, unusual vendor, repeated retries, ambiguous purpose |
| Explicit approval | payment, refund, subscription change, wallet signature, ad spend |
| Emergency stop | runaway cost, suspected compromise, repeated failed charge |

Setiap financial request harus membawa lima data minimum:

1. amount atau price quote;
2. recipient/vendor/service;
3. reason;
4. budget envelope;
5. proof setelah action.

Kalau satu hilang, request tidak boleh lanjut.

## Ledger Event Wajib

Tidak ada financial action tanpa ledger event. Ledger event tidak harus berarti accounting final. Ia bisa draft, pending, approved, rejected, paid, reversed, atau failed. Yang penting event ada.

```text
Ledger event
Actor:
Action type:
Amount:
Currency or asset:
Vendor or recipient:
Purpose:
Budget envelope:
Approval status:
Approver:
Proof link:
State: draft / pending / approved / paid / failed / reversed
Timestamp:
```

Untuk on-chain action, tambahkan:

```text
Network:
Address label:
Transaction hash:
Gas estimate:
Final gas used:
Block or confirmation reference:
```

Untuk API/tool spending, tambahkan:

```text
Provider:
Request count:
Unit price if known:
Job ID:
Output artifact:
Retry count:
```

Agen boleh salah membaca. Ledger event membuat kesalahan bisa ditemukan.

## Cost Monitoring Loop

Financial control bukan hanya approval sebelum spend. Perlu loop monitoring setelah spend.

Loop harian:

```text
1. Pull cost data from approved sources.
2. Compare against envelope.
3. Flag new vendor, spike, retry loop, failed payment, and cap breach.
4. Write daily cost note.
5. Queue approval for cap change or suspicious item.
6. Freeze agent financial rights if anomaly is severe.
```

Loop mingguan:

```text
1. Reconcile ledger events with receipts and provider exports.
2. Mark unverified spend.
3. Review active envelopes.
4. Remove expired permission.
5. Summarize burn by agent and business loop.
6. Decide which spend created useful output.
```

Pertanyaan mingguan paling penting:

```text
Which agent spending created business output, and which spending was only motion?
```

Kalau biaya tidak terhubung ke output, hentikan.

## Mode Gagal

| Kegagalan | Gejala | Respons |
|---|---|---|
| Runaway retry | request gagal dan agen terus mencoba | hard retry cap, freeze spend, alert |
| Vendor drift | agen memakai vendor baru tanpa review | deny unknown vendor, require allowlist |
| Microspend bleed | transaksi kecil menumpuk | batch cap, daily cap, weekly review |
| Wallet address error | address tidak dikenali | block new recipient, manual verification |
| Gas surprise | fee lebih tinggi dari nilai transaction | max gas rule, abort threshold |
| Subscription creep | seat/addon bertambah diam-diam | monthly subscription audit |
| Refund leakage | agen terlalu mudah memberi credit | refund approval gate |
| Ledger gap | biaya ada tapi proof tidak ada | mark unverified, no further spend |
| Secret exposure | key masuk log/chat | rotate credential, incident note, revoke access |

Setiap failure harus menghasilkan perubahan policy. Kalau cuma “ingatkan agen”, failure akan balik.

## Template Financial Rights

```text
Financial Rights Card

Agent:
Business loop:
Financial level: F0/F1/F2/F3/F4/F5
Can read:
Can draft:
Can request:
Can execute automatically:
Cannot do:
Allowed vendors:
Allowed wallet/network:
Per-action cap:
Daily cap:
Weekly cap:
Approval threshold:
Auto-stop rule:
Required ledger fields:
Alert route:
Review cadence:
Expiry date:
```

Buat card ini sebelum memberi agen akses ke billing, wallet, API key, paid tool, ad account, atau payment workflow.

## Tingkat Kematangan

### Level 1: Manual Spend

Agen tidak bisa membuat biaya. Ia hanya membuat saran. Aman, tapi semua pekerjaan finansial masih manual.

### Level 2: Drafted Spend

Agen bisa membuat request, ledger draft, atau budget note. Manusia tetap melakukan payment atau approval.

### Level 3: Capped Spend

Agen boleh memicu biaya kecil di dalam envelope. Semua action mencatat ledger event. Alert dan cap aktif.

### Level 4: Audited Agent Finance

Setiap biaya terhubung ke business loop, output, approval, proof, dan review. Permission punya expiry. Cost per agent terlihat. Runaway loop punya hard stop.

## Selesai Saat

Halaman ini selesai untuk Anda kalau setiap agen yang bisa menyentuh uang punya:

- financial level;
- vendor atau network yang diizinkan;
- cap per action;
- cap harian dan mingguan;
- approval threshold;
- auto-stop rule;
- syarat ledger event;
- syarat proof;
- alert route;
- expiry date;
- review cadence;
- aturan untuk wallet, AgentKit, x402, API spending, subscription, dan refund.

Kalau belum ada, jangan beri agen financial access. Mulai dari draft request dan ledger dulu.
