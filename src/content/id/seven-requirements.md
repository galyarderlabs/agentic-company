## Apa yang Diputuskan Halaman Ini

Halaman ini mengubah ide agentic company menjadi tujuh test.

Kalau setup Anda lolos test ini, Anda punya awal dari agentic company yang governed. Kalau gagal, mungkin Anda tetap punya asisten yang berguna, tapi jangan beri mereka akses serius dulu.

Tujuh syaratnya adalah:

1. agent identity;
2. controlled money access;
3. real end-to-end work;
4. verifiable records;
5. specialized agents working together;
6. human review;
7. legal and compliance responsibility.

Gunakan ini sebagai gate sebelum menambah tool, akun, atau background job.

## Tes Tujuh Syarat

| Syarat | Pertanyaan sederhana | Standar minimum lolos |
|---|---|---|
| Agent identity | Apakah agen penting punya job, nama, dan aturan akses yang stabil? | Setiap agen serius punya role contract tertulis. |
| Controlled money access | Apakah agen bisa memicu biaya atau payment secara aman? | Budget, limit, dan approval rule ada sebelum spend. |
| Real work | Apakah agen menyelesaikan langkah bisnis, bukan hanya menyarankan? | Output mengubah state atau menyiapkan state change yang bisa direview. |
| Verifiable records | Apakah manusia bisa memeriksa apa yang terjadi nanti? | Setiap action penting meninggalkan proof record. |
| Specialized agents | Apakah job dipisah berdasarkan risiko dan skill? | Satu bot generik tidak memegang semua job. |
| Human review | Apakah action sensitif berhenti untuk owner? | Action public, destructive, money, credential, legal, dan production punya gate. |
| Responsibility | Apakah accountability tetap jelas? | Manusia/perusahaan tetap bertanggung jawab atas klaim, uang, data, dan conduct. |

Setup tidak harus sempurna di hari pertama. Tapi setup harus tahu syarat mana yang masih hilang. Gap tersembunyi akan mahal nanti.

## Syarat 1: Agent Identity

Agent identity bukan vibe. Ia adalah batas job tertulis.

Identity yang serius menjawab:

- siapa yang dilayani agen ini;
- job apa yang ia pegang;
- tool apa yang boleh dipakai;
- akun apa yang boleh disentuh;
- memori apa yang harus disimpan;
- apa yang tidak boleh disimpan atau dibocorkan;
- kapan ia harus bertanya dulu;
- proof apa yang harus dikembalikan;
- bagaimana ia dipause, direview, atau retired.

Identity lemah:

```text
You are a helpful finance assistant.
```

Identity kuat:

```text
Finance agent reconciles payment exports against the company ledger.
It may read payment reports and write draft ledger entries.
It may not send money, change pricing, contact customers, or access social accounts.
It must return a variance table, source file names, and review notes.
```

Identity mengurangi blast radius. Kalau docs agent salah, ia tidak boleh bisa menyentuh billing. Kalau research agent membaca halaman web hostile, ia tidak boleh bisa mengubah akses akun.

## Syarat 2: Controlled Money Access

Agen bisa menciptakan biaya walau tidak pernah memegang wallet. Mereka bisa memanggil API berbayar, menjalankan job panjang, meluncurkan iklan, membeli tool, memicu cloud usage, atau meminta contractor.

Money access butuh tali kendali.

| Money action | Default rule | Proof required |
|---|---|---|
| Read billing exports | Allowed for finance/review roles. | Source file and summary. |
| Estimate spend | Allowed. | Assumptions and calculation. |
| Use paid API within small budget | Allowed only if budget exists. | Job ID, cost estimate, final cost. |
| Subscribe to a tool | Human review. | Reason, price, renewal date, owner approval. |
| Pay vendor or contractor | Human review. | Invoice, amount, approval, receipt. |
| Move wallet funds | Human review plus hard limits. | Address category, amount, approval, transaction record. |

Jangan menjual “autonomous spending” sebagai kebebasan. Spending agent adalah aktor finansial yang didelegasikan dengan aturan sempit. Kalau aturannya belum tertulis, jawabannya no.

## Syarat 3: Real End-to-End Work

Agen yang melakukan kerja nyata punya input jelas, output jelas, dan state change atau review package.

Belum cukup:

```text
Here are some ideas for fixing support.
```

Lebih baik:

```text
I categorized 42 support messages, drafted 18 replies, marked 5 as high-risk, attached the source message IDs, and queued the drafts for review.
```

Kerja nyata tidak selalu berarti final action otomatis penuh. Menyiapkan package yang complete dan bisa direview adalah kerja nyata saat langkah finalnya sensitif.

Gunakan rule ini:

| Work type | Real output |
|---|---|
| Research | Cited brief, source table, confidence notes. |
| Docs | Changed markdown file, source map, build result. |
| Finance | Reconciliation table, variance notes, ledger draft. |
| Support | Categorized tickets, draft replies, escalation flags. |
| Product | Issue breakdown, acceptance criteria, risk notes. |
| Growth | Campaign draft, audience, approval payload, result record. |

Agen bernilai saat manusia mereview paket kerja yang selesai, bukan saat manusia harus menyelesaikan pikiran agen.

## Syarat 4: Verifiable Records

Setiap action penting butuh record yang bertahan di luar chat.

Record harus menjawab:

```text
Who acted?
What changed?
Why was it done?
What source was used?
Was approval required?
Who approved?
Where is the result?
How can it be checked later?
```

Record sederhana bisa seperti ini:

```text
Action record
Actor: docs-agent
Task: rewrite chapter 4
Source: public IA note + current markdown file
Approval required: no, local draft only
Changed files: src/content/seven-requirements.md
Verification: build passed, no private leak scan hits
Result: ready for human review
```

Jangan membuat pencatatan terasa mistis. Issue comment, ledger row, file diff, receipt, atau source table sudah cukup kalau manusia bisa merekonstruksi apa yang terjadi.

## Syarat 5: Specialized Agents Working Together

Satu agen raksasa akan menjadi liability yang bingung. Pisahkan kerja berdasarkan job dan risiko.

| Agent type | Owns | Must not own |
|---|---|---|
| Support | human state, continuity, inbox triage, escalation. | money movement, production changes, legal claims. |
| Execution | planning, routing, verification, decision pressure. | becoming final owner or approving its own high-risk actions. |
| Research | source collection, synthesis, citations. | public publishing or spending. |
| Finance | reconciliation, budgets, variance notes. | social media, customer promises, credential recovery. |
| Docs | guides, templates, source alignment. | billing, wallets, account security. |
| Review | checking claims, proof, safety gates. | doing the same work it reviews. |

Spesialisasi bukan birokrasi. Ini containment. Saat agen rendah risiko gagal, kegagalannya tetap kecil.

## Syarat 6: Human Review

Manusia tidak perlu approve semuanya. Itu membunuh tujuannya. Tapi manusia harus approve action yang bisa menyebabkan kerusakan nyata.

Gunakan gate map ini:

| Action class | Default autonomy |
|---|---|
| Read-only inspection | Usually allowed. |
| Drafting | Allowed. |
| Reversible local file change | Allowed with diff and rollback path. |
| Public post or email | Human review. |
| Destructive change | Human review and backup. |
| Money or wallet action | Human review and hard limit. |
| Credential or account recovery | Human only. |
| Legal, compliance, or contract claim | Human review. |

Review gate harus menunjukkan payload, risk, proof, dan exact approval phrase. Tombol “approve?” yang kabur tidak cukup untuk action serius.

## Syarat 7: Legal dan Compliance Responsibility

Agen tidak menghapus tanggung jawab. Mereka memindahkan kerja. Manusia atau perusahaan tetap menanggung konsekuensinya.

Kalau agen mengirim klaim palsu, salah menangani data customer, melanggar license, membayar vendor yang salah, atau publish pesan berbahaya, alasan “AI yang melakukan” tidak akan melindungi perusahaan.

Artinya sistem harus didesain di sekitar accountability:

- data customer tetap di tool yang disetujui;
- klaim legal butuh review;
- payment action butuh record;
- klaim publik butuh source checking;
- request deletion butuh confirmation dan proof;
- data sensitif tidak pernah masuk prompt atau template publik.

Responsibility bukan pidato moral. Ia adalah constraint desain.

## Requirement Scorecard

Salin ini ke planning note.

```text
Seven Requirement Scorecard

1. Agent identity
Current state:
Missing:
Next fix:

2. Controlled money access
Current state:
Missing:
Next fix:

3. Real end-to-end work
Current state:
Missing:
Next fix:

4. Verifiable records
Current state:
Missing:
Next fix:

5. Specialized agents
Current state:
Missing:
Next fix:

6. Human review
Current state:
Missing:
Next fix:

7. Responsibility
Current state:
Missing:
Next fix:
```

Scorecard harus menghasilkan kerja. Kalau satu syarat lemah, buat next fix sebelum memberi agen power lebih besar.

## Selesai Saat

Anda siap mendesain agent identity saat bisa menyatakan:

- agen serius mana yang butuh identity stabil;
- action mana yang bisa menciptakan cost;
- workflow mana yang menghasilkan output nyata;
- di mana proof record hidup;
- job mana yang butuh agen terpisah;
- action mana yang butuh review;
- risiko legal atau compliance mana yang tidak boleh didelegasikan sembarangan.

Kalau ada jawaban yang hilang, jangan tambah tool. Perbaiki requirement gap dulu.
