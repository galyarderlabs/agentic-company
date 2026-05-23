## Apa yang Diputuskan Halaman Ini

Halaman ini menentukan cara manusia dan agen berkomunikasi tanpa mengubah perusahaan menjadi chatroom yang kacau.

Tujuannya bukan menambah jumlah pesan. Tujuannya adalah perintah yang jelas, review yang bersih, alert yang terlihat, dan catatan yang tahan lama.

Di akhir halaman ini, Anda harus punya Peta Komunikasi: di mana perintah masuk, di mana approval terjadi, ke mana alert dikirim, di mana catatan hidup, dan bagaimana agen menyerahkan kerja ke agen lain tanpa loop.

## Tiga Jenis Pesan

Setiap pesan harus masuk ke salah satu dari tiga tipe.

| Tipe | Tujuan | Contoh |
|---|---|---|
| Command | Manusia memberi tugas atau objektif. | “Rewrite docs 4-8 dengan quality bar yang sudah disetujui.” |
| Review | Agen meminta keputusan sebelum tindakan sensitif. | “Approve draft post publik ini?” |
| Audit | Agen melaporkan apa yang berubah dan di mana buktinya. | “Build passed. Changed files: X, Y. Proof: logs.” |

Kalau sebuah channel penuh pesan yang bukan command, review, atau audit, channel itu berubah menjadi noise.

Ini bukan berarti agen tidak boleh ramah. Ini berarti komunikasi perusahaan punya pekerjaan.

## Peta Channel

Jangan taruh semua jenis pesan di satu tempat.

| Surface | Paling cocok untuk | Tidak sebaiknya menyimpan |
|---|---|---|
| Terminal | kerja lokal mendalam, build, debugging, edit file. | keputusan permanen yang hanya hidup di scrollback. |
| Discord/Slack | command, alert, permintaan approval, ringkasan pendek. | source of truth jangka panjang. |
| Telegram/email | notifikasi prioritas tinggi atau delivery mobile. | log ramai bernilai rendah. |
| Paperclip/Linear/GitHub Issues | task, assignment, status approval, aktivitas. | secret privat atau konteks emosional mentah. |
| Obsidian/markdown notes | keputusan, guide, source map, protokol. | token, cookie, password, state sesi mentah. |
| Ledger/audit log | catatan tindakan, event biaya, link bukti. | chat santai atau opini tidak terstruktur. |

Chat server adalah jendela ke pekerjaan. Ia bukan database pekerjaan.

## Format Command

Command yang baik menghapus tebak-tebakan.

Gunakan bentuk ini:

```text
Command:
Target:
Scope:
Sources:
Allowed actions:
Forbidden actions:
Output:
Verification:
Deadline/priority:
```

Contoh:

```text
Command: rewrite docs 4-8
Target: src/content/seven-requirements.md sampai agent-memory.md
Scope: content only, preserve slugs
Sources: public IA note dan markdown yang ada
Allowed actions: edit source markdown dan run build
Forbidden actions: deploy, rename pages, publish externally
Output: changed files, scan results, build result
Verification: no banned terms, no private leaks, build passes
Priority: now
```

Ini lebih cepat daripada “make it better” karena agen tahu batasnya.

## Format Review

Permintaan review harus menunjukkan secara persis apa yang diminta untuk disetujui manusia.

```text
Review required
Action:
Target:
Why now:
Risk:
Payload preview:
Proof already checked:
Rollback/undo path:
Approve with:
Reject with:
Expires:
```

Contoh:

```text
Review required
Action: publish guide update
Target: docs pages 4-8
Why now: content depth pass is complete
Risk: public copy error atau private detail leak
Payload preview: lima file markdown lokal berubah
Proof already checked: build passed, scan empty
Rollback path: revert source files before deploy
Approve with: APPROVE publish-docs-4-8
Reject with: REJECT publish-docs-4-8 <reason>
Expires: today
```

Jangan pernah meminta approval buta. Pesan approval harus berisi payload atau link ke payload itu.

## Format Audit

Pesan audit harus pendek dan bisa diperiksa.

```text
Audit record
Actor:
Task:
Changed state:
Proof:
Approval:
Risk remaining:
Next action:
```

Contoh:

```text
Audit record
Actor: docs-agent
Task: rewrite agent identity page
Changed state: src/content/agent-identity.md
Proof: build passed; rendered page contains Responsibility Contract
Approval: not required, local source change only
Risk remaining: body Indonesia masih mirror English jika locale parity belum diimplementasi
Next action: propagate pattern to next docs batch
```

Audit record harus disalin ke task atau ledger, bukan hanya diposting di chat.

## Relay Antar-Agen

Agen boleh saling konsultasi, tapi tidak boleh terseret ke percakapan tanpa ujung.

Relay packet:

```text
To:
From:
Purpose:
Context:
Question/request:
Allowed actions:
Forbidden actions:
Return format:
One-reply limit:
```

Aturan:

- satu tujuan per relay;
- satu balasan kecuali manusia menyetujui loop yang lebih panjang;
- peer report tetap self-report sampai diverifikasi;
- hasil kembali ke manusia atau catatan tugas;
- agen tidak boleh menyetujui output berisiko tinggi miliknya sendiri lewat agen lain.

Relay yang baik:

```text
To: review-agent
Purpose: check whether this docs page leaks private setup details
Allowed actions: read the provided text and report risks
Forbidden actions: edit files or publish
Return format: PASS/BLOCKED with line references
One-reply limit: yes
```

## Mention Gate

Jika komunikasi terjadi lewat Discord atau Slack, aturan mention penting.

Mention gate yang aman menentukan:

- manusia mana yang boleh memberi command ke agen;
- apakah pesan bot-ke-bot diterima;
- apakah direct mention wajib;
- channel mana yang menjadi command channel;
- channel mana yang read-only log;
- bagaimana mencegah loop tidak sengaja.

Aturan aman untuk publik:

```text
Agents respond to trusted humans and approved relay packets only.
Agents ignore random channel noise.
Bot-to-bot relay requires explicit target and one-purpose packet.
```

Jangan biarkan setiap pesan di server berubah menjadi command.

## Level Alert

Tidak semua event pantas mengirim notifikasi.

| Level | Kirim ke mana | Contoh |
|---|---|---|
| Info | task record atau daily summary. | link check passed, source scan complete. |
| Warning | channel ops/review. | build failed, sumber hilang, cost spike mendekati limit. |
| Approval | approval channel dan mungkin mobile. | post publik, money action, destructive change. |
| Critical | mobile/high-priority channel. | credential exposure, runaway spend, production outage. |

Alert fatigue merusak kualitas review. Kalau semuanya ping manusia, manusia berhenti membaca.

## Template Peta Komunikasi

Salin ini.

```text
Communication Map

1. Primary command channel:
2. Approval channel:
3. Audit/task system:
4. Long-form decision notes:
5. High-priority alert path:
6. Agent-to-agent relay rule:
7. Who may command agents:
8. Which actions require review:
9. Which messages are ignored:
10. Where proof records live:
11. Loop-prevention rule:
12. Escalation rule:
```

## Selesai Saat

Setup komunikasi siap saat:

- command punya format standar;
- approval menunjukkan payload, risiko, dan bukti;
- audit record hidup di luar chat;
- alert prioritas tinggi jarang dan bermakna;
- relay antar-agen dibatasi;
- mention gate mencegah injeksi command acak;
- channel punya tugas yang berbeda;
- manusia bisa memeriksa pekerjaan tanpa membaca setiap pesan.

Setelah itu, Anda bisa menentukan apa yang harus diingat agen dan di mana memori itu berada.
