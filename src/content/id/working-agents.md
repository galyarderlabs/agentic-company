## Apa yang Diputuskan Halaman Ini

Halaman ini mengubah istilah Working Agents dari daftar nama keren menjadi desain kerja yang bisa dipakai. Setelah halaman sebelumnya membahas Paperclip atau ruang perusahaan untuk mencatat goal, task, approval, activity, dan cost, halaman ini menjawab: agen apa saja yang layak dibuat, apa tugasnya, output apa yang harus mereka hasilkan, bagaimana mereka saling menyerahkan kerja, kapan manusia wajib masuk, dan kapan agen harus dipensiunkan.

Working agent bukan karakter tambahan. Working agent adalah peran kerja yang punya kontrak. Kontraknya menjelaskan pekerjaan berulang yang ia pegang, sumber yang boleh dibaca, tool yang boleh dipakai, output yang wajib ditinggalkan, proof yang harus ada, dan gate yang tidak boleh dilewati.

Kalau kontrak ini tidak ada, yang muncul bukan agentic company. Yang muncul adalah satu bot serbaguna yang kebetulan punya banyak nama. Ia mungkin terasa pintar di chat, tapi tidak bisa dipakai untuk menjalankan bisnis karena tidak ada garis tanggung jawab.

Target halaman ini sederhana: Anda bisa membuka satu dokumen roster dan langsung tahu siapa mengerjakan apa, apa bukti kerjanya, siapa yang review, dan apa yang terjadi kalau agen gagal.

## Working Agent Bukan Persona

Persona menjawab pertanyaan: agen ini terdengar seperti siapa?

Working agent menjawab pertanyaan: pekerjaan apa yang selesai karena agen ini ada?

Keduanya tidak sama. Persona bisa membantu nada komunikasi, terutama untuk support, research, atau internal briefing. Tapi persona tidak boleh menggantikan kontrak kerja. Agen yang “visionary”, “friendly”, atau “ruthless” tetap tidak berguna kalau output-nya tidak jelas.

Gunakan rule ini:

```text
Nama agen boleh punya gaya.
Kontrak agen harus punya batas kerja.
Output agen harus bisa diperiksa.
Akses agen harus bisa dicabut.
Kegagalan agen harus punya respons.
```

Contoh lemah:

```text
Growth Agent: bantu growth dan marketing.
```

Contoh yang bisa dipakai:

```text
Growth Research Agent:
Setiap Senin mengumpulkan 15 sumber pasar dari daftar sumber yang disetujui, menghapus duplikat, menilai relevansi, menulis ringkasan 1 halaman, menandai klaim lemah, dan menyerahkan source table untuk review manusia sebelum ada public post.
```

Kalimat kedua memberi trigger, sumber, output, kualitas, proof, dan gate. Itu baru role kerja.

## Mulai dari Loop, Bukan dari Nama Agen

Jangan mulai dari “saya butuh finance agent, sales agent, product agent”. Mulai dari loop bisnis yang berulang.

Loop adalah kerja yang punya trigger, input, langkah, keputusan, output, dan proof. Setelah loop terlihat, agen muncul sebagai jawaban atas bagian yang paling cocok didelegasikan.

| Loop bisnis | Bagian yang berulang | Agen yang mungkin cocok | Proof minimum |
|---|---|---|---|
| Weekly market brief | sumber, ranking, draft, review klaim | research agent, docs agent, review agent | source table, draft path, build result |
| Customer support | triage, draft reply, escalation | support triage agent, support draft agent | case ID, draft, approval record |
| Finance close | receipt intake, cek kategori, flag anomaly | finance clerk agent, audit agent | ledger row, receipt link, exception note |
| Product maintenance | issue triage, repro, proposal patch kecil | product triage agent, coding agent, QA agent | issue ID, repro note, diff, test output |
| Sales pipeline | lead enrichment, fit score, outreach draft | sales research agent, sales draft agent | lead table, fit rationale, draft approval |

Satu loop bisa butuh beberapa agen. Tapi jangan pecah terlalu cepat. Pecah hanya kalau ada alasan kerja yang nyata:

- akses yang berbeda;
- skill yang berbeda;
- risiko yang berbeda;
- review yang berbeda;
- jadwal yang berbeda;
- proof yang berbeda.

Kalau dua agen memakai sumber yang sama, membuat output yang sama, dan berhenti di gate yang sama, kemungkinan besar mereka satu agen dengan dua mode kerja, bukan dua peran.

## Roster Minimum

Roster adalah daftar working agent yang hidup sekarang. Roster bukan wishlist. Jangan masukkan agen yang belum punya loop.

Roster minimum untuk tahap awal agentic company biasanya cukup 3 sampai 7 agen aktif.

Secara fungsi, roster minimum harus punya tiga tipe kerja yang jelas:

- **Doer**: agen yang membuat output utama, misalnya research brief, support draft, ledger row, atau docs patch.
- **Checker**: agen yang memeriksa klaim, proof, gate, dan risiko sebelum output dipakai.
- **Coordinator**: agen yang menjaga antrean, deadline, handoff, stale task, dan eskalasi lintas peran.

Satu agen boleh memegang lebih dari satu tipe saat sistem masih kecil, tapi satu output penting tidak boleh dibuat dan diperiksa oleh tipe kerja yang sama tanpa review manusia.

| Agen | Kerja utama | Tidak boleh | Review manusia | Proof wajib |
|---|---|---|---|---|
| Research Agent | mengumpulkan sumber dan ringkasan keputusan | mengutip sumber tanpa URL atau membuat klaim final | klaim strategis, publikasi, keputusan besar | source table, confidence note |
| Docs Agent | mengubah draft menjadi dokumen rapi dan buildable | mengubah arah produk tanpa approval | perubahan public docs dan nav | changed files, build output |
| Finance Agent | mencatat biaya, receipt, budget, anomaly | memindahkan uang atau approve spend sendiri | payment, refund, budget change | ledger row, receipt, limit check |
| Sales Agent | enrich lead dan menulis outreach draft | mengirim email tanpa approval | outbound pertama, harga, diskon | lead row, draft, approval |
| Support Agent | triage request dan draft jawaban | menjanjikan refund, SLA, legal, atau fitur | complaint berat, public escalation | case note, draft, final message ID |
| Review Agent | memeriksa klaim, gate, proof, dan policy | approve pekerjaannya sendiri | override gate, exception | review note, pass/fail reason |
| Ops Agent | memantau job, cost, stale task, dan health | restart produksi tanpa izin | incident, credential, production action | status report, alert log |

Roster ramping lebih aman. Sedikit agen dengan kontrak kuat mengalahkan dua puluh agen yang hanya membuat noise.

## Kontrak Identitas Kerja

Setiap working agent butuh kontrak identitas kerja. Ini bukan lore. Ini dokumen operasional.

```text
Agent name:
Main job:
Business loop served:
Trigger:
Allowed inputs:
Allowed tools:
Allowed accounts:
Allowed actions:
Actions requiring approval:
Forbidden actions:
Output format:
Proof required:
Review path:
Failure behavior:
Retirement condition:
```

Contoh isi:

```text
Agent name: Finance Clerk Agent
Main job: mencatat dan mengelompokkan biaya kecil mingguan.
Business loop served: weekly finance close.
Trigger: setiap Jumat 16:00 atau saat receipt baru masuk.
Allowed inputs: receipt, invoice, billing export, approved vendor list.
Allowed tools: spreadsheet, ledger tool, read-only billing view.
Allowed accounts: company finance workspace dengan akses read-only.
Allowed actions: membuat draft ledger row, menandai anomaly, membuat finance brief.
Actions requiring approval: payment, refund, subscription upgrade, wallet action.
Forbidden actions: menyimpan secret, mengubah bank details, approve spend sendiri.
Output format: weekly finance close note + ledger draft.
Proof required: receipt link, amount, category, vendor, approver if any.
Review path: owner atau finance reviewer.
Failure behavior: stop and flag if amount, vendor, or category is uncertain.
Retirement condition: error rate tinggi dua siklus berturut-turut atau loop tidak lagi dipakai.
```

Kontrak seperti ini membuat agen bisa diperiksa tanpa menebak maksudnya.

## Output Contract

Output contract adalah definisi “done”. Kalau output contract lemah, manusia akan menjadi quality system tersembunyi.

| Jenis kerja | Output lemah | Output yang bisa dipakai |
|---|---|---|
| Research | “ini ringkasannya” | brief 1 halaman, source table, confidence per klaim, rejected sources |
| Docs | “sudah diupdate” | changed files, summary perubahan, build result, broken link scan |
| Finance | “biaya sudah dicatat” | ledger row draft, receipt link, category, budget impact, anomaly flag |
| Sales | “lead bagus” | lead profile, fit score, reason, risk note, outreach draft |
| Support | “jawaban siap” | issue summary, customer state, draft response, escalation flag |
| Product | “bug mungkin di sini” | repro steps, suspected cause, test target, patch proposal |
| Review | “aman” | pass/fail checklist, required changes, evidence inspected |

Output contract harus punya lima bagian:

1. format yang harus keluar;
2. lokasi penyimpanan atau destination;
3. bukti sumber;
4. verifikasi yang dijalankan;
5. keputusan berikutnya.

Contoh output contract untuk Research Agent:

```text
Output: decision brief.
Format: markdown.
Minimum sources: 7, with URL and date accessed.
Claim rule: setiap klaim penting diberi confidence high/medium/low.
Reject rule: minimal 2 sumber yang ditolak dan alasannya.
Verification: link opens, no duplicate source, no unsupported conclusion.
Next step: review agent checks claims before owner decision.
```

Ini membuat kerja agen tidak berhenti di teks. Ia berhenti di artifact yang bisa diinspeksi.

## Operating Loop Harian

Working agent harus masuk ke loop kerja yang sama setiap kali. Tanpa loop, hasilnya akan berubah sesuai mood prompt.

Loop dasar:

```text
1. Intake: ambil trigger dan input.
2. Scope check: pastikan kerja sesuai kontrak.
3. Risk check: klasifikasi action.
4. Work: jalankan bagian yang aman.
5. Proof: simpan bukti.
6. Review: kirim ke manusia atau review agent jika perlu.
7. State update: catat status, blocker, dan next action.
8. Stop: jangan lanjut ke gate sensitif tanpa approval.
```

Loop ini harus membosankan. Memang itu tujuannya. Agen yang bisa mengulang loop yang sama dengan proof lebih berharga daripada agen yang setiap hari menemukan cara baru untuk terlihat pintar.

## Handoff Packet

Handoff antar-agen harus pendek dan bisa diverifikasi. Jangan izinkan agen saling mengirim monolog panjang tanpa status kerja.

```text
From:
To:
Purpose:
Input attached:
Decision needed:
Allowed action:
Forbidden action:
Proof required:
Deadline:
Return path:
```

Contoh:

```text
From: Research Agent
To: Review Agent
Purpose: verify claims in market brief.
Input attached: draft path and source table.
Decision needed: pass, revise, or block.
Allowed action: inspect sources and mark unsupported claims.
Forbidden action: rewrite positioning or publish.
Proof required: review note with claim IDs.
Deadline: today 17:00.
Return path: owner review queue.
```

Handoff yang baik mengurangi agent drift. Handoff yang buruk menciptakan bot chatroom.

## Review Gate per Role

Tidak semua agen butuh gate yang sama. Gate mengikuti risiko, bukan jabatan.

| Agen | Bisa jalan otomatis | Harus stop untuk approval |
|---|---|---|
| Research | collect, dedupe, summarize, rank | final strategic claim, public quote, paid report |
| Docs | edit draft, format, fix broken links | publish, rename IA, delete page |
| Finance | categorize receipt, draft ledger row | move money, refund, upgrade plan, wallet action |
| Sales | enrich lead, draft outreach | send outbound, promise price, negotiate terms |
| Support | triage, draft reply, suggest macro | send angry reply, refund, legal/SLA promise |
| Product | repro, test, suggest patch | deploy, delete data, migrate schema |
| Review | block, request revision, flag risk | self-approve own work, override owner gate |
| Ops | monitor, report, queue restart request | production restart, credential change |

Gate bukan rem untuk memperlambat. Gate adalah titik kendali yang menjaga owner tetap memegang konsekuensi.

## Failure Taxonomy

Working agent gagal dengan pola yang bisa ditebak.

| Failure | Gejala | Respons |
|---|---|---|
| Scope creep | agen mulai mengerjakan hal di luar kontrak | stop, return to contract, revise prompt |
| Proof gap | output ada tapi sumber tidak ada | mark incomplete, request proof, no approval |
| Authority drift | agen membuat keputusan yang seharusnya manusia | revoke action class, add gate |
| Tool overreach | agen memakai tool terlalu luas | reduce permissions, split role |
| Memory contamination | agen membawa konteks pribadi ke kerja publik | quarantine memory, redact output |
| Handoff loop | dua agen saling lempar tanpa keputusan | enforce one-purpose handoff and return path |
| Quality theater | output panjang tapi tidak menyelesaikan kerja | tighten output contract and done criteria |
| Silent failure | job gagal tanpa alert | add failure notice and watchdog |

Jangan tunggu failure jadi krisis. Setiap failure yang berulang dua kali harus menjadi perubahan kontrak, bukan cuma teguran prompt.

## Tingkat Kematangan

### Level 1: Named Helper

Agen punya nama dan tugas umum, tapi belum punya output contract kuat. Ia berguna untuk brainstorming, draft, dan research ringan. Risiko masih rendah karena manusia banyak mengecek manual.

### Level 2: Contracted Worker

Agen punya trigger, input, allowed actions, proof, dan review path. Ia bisa memegang loop kecil secara berulang. Ini level minimum untuk disebut working agent.

### Level 3: Governed Worker

Agen punya budget, access scope, state tracking, failure behavior, health checks, dan retirement criteria. Ia bisa bekerja di sekitar akun dan tool nyata tanpa kehilangan kontrol manusia.

### Level 4: Audited Worker

Agen menghasilkan artifact yang bisa diaudit lintas waktu: task record, approval, ledger entry, diff, receipt, source list, test result, atau final URL. Pada level ini, manusia tidak perlu percaya ringkasan agen. Manusia bisa memeriksa bukti.

## Retirement Criteria

Agen harus bisa dipensiunkan. Kalau tidak, roster akan membusuk.

Pensiunkan atau gabungkan agen jika:

- loop bisnisnya hilang;
- output-nya duplikat dengan agen lain;
- error rate lebih tinggi daripada manfaat;
- review manusia selalu harus mengulang dari nol;
- akses yang dibutuhkan terlalu berbahaya untuk nilainya;
- biaya menjalankan agen lebih tinggi daripada hasilnya;
- agen sering melewati kontrak;
- output tidak pernah dipakai untuk keputusan atau delivery.

Agen bukan identitas sakral. Agen adalah alat kerja. Kalau tidak menghasilkan bukti, hapus atau redesign.

## Template Roster

Copy ini untuk mulai.

```text
Working Agent Roster

Company loop:
Owner:
Review cadence:

Agent 1
Name:
Job:
Loop:
Inputs:
Tools:
Accounts:
Auto actions:
Approval actions:
Forbidden actions:
Output:
Proof:
Reviewer:
Failure behavior:
Retirement condition:

Agent 2
Name:
Job:
Loop:
Inputs:
Tools:
Accounts:
Auto actions:
Approval actions:
Forbidden actions:
Output:
Proof:
Reviewer:
Failure behavior:
Retirement condition:
```

Jangan isi roster lebih dari tujuh agen di awal. Kalau daftar pertama Anda panjang, biasanya business loop belum dipahami.

## Selesai Saat

Halaman ini selesai untuk Anda kalau bisa membuat roster yang menjawab:

- agen mana yang aktif sekarang;
- business loop apa yang mereka layani;
- input apa yang boleh mereka pakai;
- tool dan akun apa yang boleh mereka sentuh;
- output apa yang wajib mereka hasilkan;
- proof apa yang membuktikan kerja selesai;
- action apa yang harus berhenti untuk approval;
- siapa reviewer-nya;
- apa respons jika agen gagal;
- kapan agen harus dipensiunkan.

Kalau jawabannya belum ada, jangan tambah agen. Perkuat kontrak kerja dulu.
