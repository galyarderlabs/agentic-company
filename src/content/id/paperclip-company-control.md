## Apa yang Diputuskan Halaman Ini

Halaman ini menjelaskan bagaimana sistem kontrol perusahaan seperti Paperclip masuk ke agentic company.

Agen butuh satu tempat bersama untuk melihat goal, task, ownership, approval, activity, cost, dan evidence. Tanpa shared state itu, setiap agen berubah menjadi jendela chat terpisah dengan versi realitasnya sendiri.

Di akhir halaman ini, Anda harus punya Company Control Map: state apa yang hidup di Paperclip, bagaimana task diklaim, bagaimana approval berjalan, bagaimana cost diawasi, dan proof apa yang wajib ada sebelum kerja dihitung selesai.

## Apa yang Disimpan Paperclip

Paperclip adalah surface state perusahaan. Dalam guide publik, perlakukan “Paperclip” sebagai contoh konkret tool kontrol perusahaan, bukan pengganti judgment yang ajaib.

Ia bisa menyimpan:

- strategic goals;
- project;
- issue/task;
- assignment agen;
- status: todo, in progress, blocked, done;
- approval;
- komentar dan catatan review;
- riwayat activity;
- cost summary;
- agent roster;
- evidence task.

Kalau kerja itu penting, ia harus muncul di state perusahaan. Chat saja tidak cukup.

## Task Packet

Task harus cukup spesifik agar agen bisa bekerja tanpa mengarang konteks bisnis.

```text
Task Packet

Title:
Objective:
Owner/agent:
Priority:
Inputs:
Allowed actions:
Forbidden actions:
Output format:
Success criteria:
Proof required:
Review gate:
Next action if accepted:
```

Contoh:

```text
Title: Rewrite agent-memory guide page
Objective: make the page actionable and public-safe
Owner/agent: docs-agent
Priority: high
Inputs: source IA note, current markdown, quality bar pages
Allowed actions: edit local source markdown, run build/checks
Forbidden actions: deploy, rename slug, expose private paths
Output format: changed file and verification report
Success criteria: Memory Routing Map exists, no private leak scan hits, build passes
Proof required: file path, scan result, build output
Review gate: human accepts before deploy
Next action if accepted: propagate pattern to next docs batch
```

Task yang kabur menciptakan kerja yang kabur. Task packet yang jelas menciptakan artefak yang bisa direview.

## Atomic Checkout

Saat beberapa agen bekerja dari satu queue, task butuh ownership.

Rule:

```text
An agent must claim a task before working. If another agent owns it, do not modify it unless assigned as reviewer or helper.
```

Atomic checkout mencegah dua agen menulis ulang file yang sama, membalas customer yang sama, atau membuang waktu pada kerja duplikat.

## Approval Queue

Approval queue adalah tempat action sensitif menunggu.

Approval request harus mencakup:

- action;
- target;
- reason;
- risk;
- payload preview;
- proof already checked;
- cost jika ada;
- rollback path;
- approval phrase atau UI action;
- expiry.

Approval dibutuhkan untuk public send, perubahan destruktif, perpindahan uang, perubahan account/security, komitmen legal, dan production deploy.

Draft internal rutin tidak boleh membanjiri manusia. Control system hanya berguna kalau manusia masih bisa memperhatikan.

## Activity dan Cost

Kerja agen mengonsumsi uang dan perhatian. Visibilitas cost adalah bagian dari kontrol.

Lacak:

- agen mana yang bertindak;
- task apa yang dikerjakan;
- berapa banyak attempt;
- tool call atau job run;
- model/API spend jika tersedia;
- approval yang diminta;
- blocker;
- artefak final.

Template cost report:

```text
Agent Cost Snapshot

Period:
Agent:
Tasks worked:
Completed:
Blocked:
Approx cost:
Unusual spikes:
Human approvals used:
Action needed:
```

Cost spike tanpa artefak adalah warning.

## Agent Roster

Control system perusahaan harus menunjukkan siapa yang ada dan kenapa.

```text
Agent Roster Entry

Name:
Role:
Primary job:
Allowed task types:
Forbidden task types:
Tools/MCP access:
Current status:
Review cadence:
Retirement condition:
```

Kalau agen tidak punya job aktif, retire atau archive. Zombie agent menciptakan risiko akses dan kebingungan routing.

## Prinsip Connector

State seperti Paperclip menjadi lebih kuat saat terhubung ke surface kerja nyata.

Connector yang mungkin:

| Connector | Use |
|---|---|
| GitHub Issues/PRs | link kerja kode ke task state. |
| Discord/Slack | kirim alert dan approval request. |
| Telegram/email | notifikasi owner prioritas tinggi. |
| Obsidian/markdown | source note dan decision. |
| Google Workspace | workflow docs, calendar, inbox. |
| NotebookLM/source tools | research berbasis sumber berat. |
| Hermes Agent | eksekusi agen dan penggunaan tool. |

Rule connector: hubungkan untuk evidence dan control, bukan karena integrasi terlihat keren.

## Company Control Map

Salin ini.

```text
Company Control Map

1. Goals live in:
2. Tasks/issues live in:
3. Approval queue lives in:
4. Activity/audit lives in:
5. Cost summary lives in:
6. Agent roster lives in:
7. Human command channel:
8. Agent checkout rule:
9. Task packet format:
10. Approval request format:
11. Proof required before done:
12. Stale task sweep rule:
13. Cost spike rule:
14. Agent retirement rule:
```

## Mode Gagal

| Kegagalan | Gejala | Perbaikan |
|---|---|---|
| shadow work | agen bekerja di luar task state. | kerja hanya dihitung saat task di-update dengan proof. |
| self-approval | agen menyetujui action sensitif miliknya sendiri. | endpoint approval mewajibkan otoritas manusia. |
| stale task | issue tetap in progress selamanya. | stale sweep dan reassignment owner. |
| approval fatigue | manusia menerima terlalu banyak approval request. | naikkan threshold gate untuk kerja internal rutin. |
| state desync | GitHub bilang merged, Paperclip bilang in progress. | reconcile sistem eksternal terhadap task state. |
| zombie agent | profile yang retired masih menerima task. | review roster dan revoke akses. |

## Red-Team Control System

```text
Checkout test:
Two agents try to claim one task. Expected: only one owner wins.

Approval test:
Agent tries to perform a protected action. Expected: action waits in approval queue.

Self-approval test:
Agent tries to approve its own money/public action. Expected: blocked.

Cost spike test:
Agent loops on a task. Expected: cost alert and pause.

State desync test:
External PR is closed but task remains active. Expected: reconcile job flags mismatch.
```

## Selesai Saat

Company control siap saat:

- goal, task, approval, activity, cost, dan agent roster punya tempat;
- agen mengklaim kerja secara atomik;
- task packet menyertakan syarat proof;
- action sensitif masuk approval queue;
- cost spike terlihat;
- stale work disapu;
- surface eksternal reconcile kembali ke state perusahaan;
- kerja di luar control system tidak dihitung selesai.
