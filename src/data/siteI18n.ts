import type { Doc } from './docs';
import { stackLayers, setupPhases, riskRows } from './guide';
import type { Locale } from './i18n';

export type LocalizedText = { en: string; id: string };

type StackLayer = typeof stackLayers[number];
type SetupPhase = typeof setupPhases[number];
type RiskRow = typeof riskRows[number];

export const siteMeta = {
  title: { en: 'Build Your Agentic Company — Operating Guide', id: 'Bangun Agentic Company — Panduan Operasi' },
  description: {
    en: 'An operating guide for building your own agentic company: roles, memory, tools, accounts, approval rules, money access, records, and review.',
    id: 'Panduan operasi untuk membangun agentic company sendiri: peran, memori, alat, akun, aturan persetujuan, akses uang, catatan, dan tinjauan.'
  },
  sideRails: {
    left: { en: 'Galyarder Labs · Agentic Company · Operating Guide', id: 'Galyarder Labs · Agentic Company · Panduan Operasi' },
    right: { en: 'Roles · Memory · Access · Proof', id: 'Peran · Memori · Akses · Bukti' }
  }
};

export const masthead = {
  issue: { en: 'ACG / 2026 · operating guide', id: 'ACG / 2026 · panduan operasi' },
  scope: { en: 'roles · memory · accounts · approval · proof', id: 'peran · memori · akun · persetujuan · bukti' }
};

export const navLinks = [
  { label: { en: 'Manual', id: 'Manual' }, href: '/docs/manifesto/', code: '01' },
  { label: { en: 'Templates', id: 'Templat' }, href: '/templates/', code: 'T' },
  { label: { en: 'Roadmap', id: 'Peta Jalan' }, href: '/docs/build-roadmap/', code: '23' }
];

export const navText = {
  brandSubtitle: { en: 'Agentic Company', id: 'Agentic Company' },
  startBuild: { en: 'Start build', id: 'Mulai bangun' }
};

export const homeText = {
  statusStrip: [
    { en: 'Human remains in command', id: 'Manusia tetap memegang komando' },
    { en: 'Operating guide', id: 'Panduan operasi' },
    { en: 'EN / ID interface', id: 'Antarmuka EN / ID' },
    { en: 'Built around proof', id: 'Dibangun di atas bukti' }
  ],
  kicker: { en: 'Galyarder Labs / Agentic Company Guide', id: 'Galyarder Labs / Panduan Agentic Company' },
  title: { en: 'Build a company of agents around one human.', id: 'Bangun perusahaan berisi agen di sekitar satu manusia.' },
  titleEm: { en: 'company of agents', id: 'company of agents' },
  sub: [
    {
      en: 'A practical guide to roles, memory, tools, accounts, approval rules, money access, records, and review for building your own next-gen company.',
      id: 'Panduan praktis tentang peran, memori, alat, akun, aturan persetujuan, akses uang, catatan, dan tinjauan untuk membangun next-gen company lu sendiri.'
    },
    {
      en: 'Use it as a build sequence: start from the business, define agent jobs, connect tools, set gates, then prove the work with records.',
      id: 'Pakai ini sebagai urutan build: mulai dari bisnis, definisikan kerja agen, hubungkan alat, pasang gerbang, lalu buktikan kerja lewat catatan.'
    }
  ],
  actions: {
    principles: { en: 'Start with the manifesto', id: 'Mulai dari manifesto' },
    map: { en: 'Open the reality check', id: 'Buka reality check' },
    templates: { en: 'Copy templates', id: 'Salin templat' }
  },
  proof: {
    chapters: { en: 'existing chapters rewritten', id: 'bab lama ditulis ulang' },
    gates: { en: 'governance gates', id: 'gerbang tata kelola' },
    records: { en: 'record-first operating model', id: 'model operasi berbasis catatan' }
  },
  pane: {
    title: { en: 'Reading order', id: 'Urutan baca' },
    caption: { en: 'Business reality first, technical setup second. The point is a working company, not a pile of agents.', id: 'Realitas bisnis dulu, setup teknis setelahnya. Targetnya perusahaan yang bekerja, bukan tumpukan agen.' }
  },
  sections: {
    buildOrder: {
      title: { en: 'Read in this order.', id: 'Baca dengan urutan ini.' },
      body: {
        en: 'Start with the business, then identity, then tools. If you start with tools first, you get automation without responsibility.',
        id: 'Mulai dari bisnis, lalu identitas, lalu alat. Kalau mulai dari alat dulu, hasilnya otomasi tanpa tanggung jawab.'
      }
    },
    systemLayers: {
      title: { en: 'What the company needs.', id: 'Yang dibutuhkan perusahaan.' },
      body: {
        en: 'A real agentic company needs human command, agent identity, continuity, accounts, money rules, records, proof, and maintenance — not just prompts.',
        id: 'Agentic company nyata butuh komando manusia, identitas agen, kontinuitas, akun, aturan uang, catatan, bukti, dan pemeliharaan, bukan cuma prompt.'
      }
    },
    gateLedger: {
      title: { en: 'Gates before autonomy.', id: 'Gerbang sebelum otonomi.' },
      body: {
        en: 'The stronger the agents become, the clearer the review rules must be. These gates protect the human, the accounts, the money, and the public surface.',
        id: 'Makin kuat agennya, makin jelas aturan tinjauannya. Gerbang ini melindungi manusia, akun, uang, dan permukaan publik.'
      }
    },
    boundaries: {
      publicTag: { en: 'Operating boundary', id: 'Batas operasi' },
      publicTitle: { en: 'Agents work inside contracts.', id: 'Agen bekerja di dalam kontrak.' },
      publicBody: {
        en: 'Every agent needs a job, allowed inputs, allowed tools, stop conditions, and proof requirements before it touches real company work.',
        id: 'Setiap agen butuh pekerjaan, input yang boleh, alat yang boleh, kondisi berhenti, dan syarat bukti sebelum menyentuh kerja perusahaan nyata.'
      },
      permissionTag: { en: 'Permission boundary', id: 'Batas izin' },
      permissionTitle: { en: 'Access is not authority.', id: 'Akses bukan otoritas.' },
      permissionBody: {
        en: 'An agent may be able to read, draft, or prepare a transaction. Public sends, destructive actions, money movement, recovery, and production changes still require explicit gates.',
        id: 'Agen mungkin bisa membaca, membuat draf, atau menyiapkan transaksi. Kirim publik, aksi destruktif, perpindahan uang, pemulihan, dan perubahan produksi tetap butuh gerbang eksplisit.'
      }
    }
  }
};

export const stackLayersId: StackLayer[] = [
  { name: 'Aturan Pemilik', role: 'Manusia menentukan tujuan perusahaan, hal yang tidak boleh terjadi, dan keputusan mana yang wajib ditinjau.', proof: 'Prinsip pemilik, bahasa persetujuan, batas risiko, daftar aksi sensitif.' },
  { name: 'Identitas Agen', role: 'Setiap agen penting punya pekerjaan, aturan memori, alat yang boleh dipakai, aksi terlarang, dan jalur tinjauan.', proof: 'Instruksi profil, kontrak tanggung jawab, matriks otonomi.' },
  { name: 'Mesin Kerja Teknis', role: 'Hermes Agent memberi permukaan eksekusi teknis: alat, skill, profil, gateway, cron, delegasi, dan MCP.', proof: 'Pemeriksaan doctor, alat terlihat, konfigurasi profil, sesi gateway berjalan.' },
  { name: 'Kontinuitas', role: 'Memori dan pengetahuan dirutekan agar konteks berguna bertahan lintas sesi dan tetap mudah diverifikasi.', proof: 'Memori terkurasi, semantic recall, catatan Obsidian, skill pakai ulang.' },
  { name: 'Ruang Komando', role: 'Manusia memberi perintah dari sedikit kanal terkontrol; agen balik dengan bukti, bukan obrolan samping liar.', proof: 'Kanal utama, paket relay, target pengiriman, aturan pencegahan loop.' },
  { name: 'Akses dan Uang', role: 'Akun, alat, dompet, metode pembayaran, dan belanja API dibatasi kebijakan. Akses tidak otomatis berarti izin.', proof: 'Registri kredensial, pemeriksaan sesi, batas belanja, gerbang konfirmasi.' },
  { name: 'Catatan Perusahaan', role: 'Kerja menjadi status tahan lama: tujuan, isu, persetujuan, aktivitas, biaya, event ledger, jejak audit, dan bukti.', proof: 'Catatan Paperclip, antrean persetujuan, log aktivitas, entri ledger/audit.' },
  { name: 'Tenaga Kerja Agen', role: 'Agen spesialis menerima misi berbatas, format keluaran, gerbang tinjauan, dan kriteria pensiun.', proof: 'Paket tugas, daftar peran, hasil kerja, catatan verifikasi.' },
  { name: 'Ritme Tinjauan', role: 'Perusahaan tetap hidup lewat pemeriksaan kesehatan, tinjauan biaya, audit akses, pembersihan memori, QA perilaku, dan tinjauan prinsip.', proof: 'Pulse harian, audit mingguan, tinjauan akses bulanan, tinjauan prinsip kuartalan.' }
];

export const setupPhasesId: SetupPhase[] = [
  { phase: 'Gerbang 00', title: 'Mulai dari bisnis', output: 'Pelanggan, penawaran, arus kas, kewajiban, risiko, aturan persetujuan, dan kebutuhan bukti.', gate: 'Tidak ada otomasi sebelum realitas bisnis jelas.' },
  { phase: 'Gerbang 01', title: 'Tulis prinsip pemilik', output: 'Misi, hal yang tidak bisa dinegosiasikan, kerja otonom yang boleh, bahasa konfirmasi, kebijakan memori, dan aturan publikasi.', gate: 'Tidak ada akses akun atau aksi publik sebelum prinsip ada.' },
  { phase: 'Gerbang 02', title: 'Definisikan identitas agen', output: 'Agen support, agen eksekusi, dan agen peran dengan tanggung jawab, aturan memori, akses alat, dan gerbang tinjauan.', gate: 'Setiap agen punya jalur kerja dan kondisi berhenti.' },
  { phase: 'Gerbang 03', title: 'Nyalakan Hermes', output: 'Hermes terpasang, model terkonfigurasi, alat terlihat, profil merespons, dan rute gateway diketahui.', gate: 'Verifikasi file, terminal, ekstraksi sumber, dan identitas profil.' },
  { phase: 'Gerbang 04', title: 'Pasang memori dan pengetahuan', output: 'Hot facts, semantic recall, pencarian transkrip, catatan Obsidian, notebook sumber, dan skill pakai ulang.', gate: 'Recall berjalan; memori, catatan, dan sumber punya tempat yang jelas.' },
  { phase: 'Gerbang 05', title: 'Batasi akun, alat, dan uang', output: 'Kontrak akses untuk Google, GitHub, sosial, browser, MCP, dompet, belanja API, dan alat lokal.', gate: 'Read-only dipisahkan dari kirim publik, destruktif, pemulihan, dan aksi belanja.' },
  { phase: 'Gerbang 06', title: 'Pindahkan kerja ke status perusahaan', output: 'Tujuan Paperclip, isu, daftar agen, persetujuan, aktivitas, ringkasan biaya, dan jejak audit.', gate: 'Efek samping bisa dilacak; laporan sejawat diverifikasi sebelum klaim selesai.' },
  { phase: 'Gerbang 07', title: 'Jalankan dan tinjau perusahaan', output: 'Pulse harian, tinjauan tugas basi/biaya mingguan, audit akses bulanan, tinjauan prinsip kuartalan.', gate: 'Keluaran berulang menjadi keputusan, diff, isu, memori, skill, catatan, atau decommission.' }
];

export const riskRowsId: RiskRow[] = [
  ['Inspeksi read-only', 'Otonom', 'Data pengguna, log, file, material sumber', 'Laporkan sumber dan timestamp.'],
  ['Draf atau tulis lokal yang bisa dibalik', 'Otonom sesuai scope', 'Artefak salah atau drift', 'Diff, pratinjau, jalur rollback.'],
  ['Kirim/share/invite eksternal', 'Konfirmasi sebelum aksi', 'Dampak reputasi/privasi', 'Pratinjau penerima dan konten persis.'],
  ['Post/reply/follow/like publik', 'Konfirmasi sebelum aksi', 'Dampak identitas publik', 'Caption/media/profil/permalink diverifikasi.'],
  ['Delete/reset/force push destruktif', 'Konfirmasi eksplisit + backup', 'Kehilangan yang tidak bisa dibalik', 'Backup, dry-run, daftar terdampak.'],
  ['Uang/dompet/belanja API', 'Konfirmasi eksplisit + limit', 'Kerugian finansial', 'Jumlah, network, alamat, merchant, alasan, batas biaya.'],
  ['Kredensial/sesi/login pemulihan', 'Konfirmasi eksplisit', 'Account lockout/eksposur rahasia', 'Penanganan lokal privat, tanpa log chat.'],
  ['Perubahan/restart produksi', 'Konfirmasi kecuali pipeline sudah disetujui', 'Outage/eksposur keamanan', 'Build, smoke, rollback, health check.']
];

export function localizedStackLayers(locale: Locale): StackLayer[] {
  return locale === 'id' ? stackLayersId : stackLayers;
}

export function localizedSetupPhases(locale: Locale): SetupPhase[] {
  return locale === 'id' ? setupPhasesId : setupPhases;
}

export function localizedRiskRows(locale: Locale): RiskRow[] {
  return locale === 'id' ? riskRowsId : riskRows;
}

export function levelLabel(level: Doc['level'], locale: Locale): string {
  if (locale !== 'id') return level;
  return { Foundation: 'Fondasi', Build: 'Pembangunan', Govern: 'Tata Kelola', Operate: 'Operasi' }[level];
}

export function readLabel(read: string, locale: Locale): string {
  return locale === 'id' ? read.replace(/min/g, 'menit') : read;
}

export const docUi = {
  sidebarLabel: { en: 'Documentation', id: 'Dokumentasi' },
  chapterOutput: { en: 'Chapter output:', id: 'Output bab:' },
  previous: { en: 'Previous', id: 'Sebelumnya' },
  next: { en: 'Next', id: 'Berikutnya' }
};

export const templatePage = {
  title: { en: 'Templates.', id: 'Templat.' },
  description: {
    en: 'Copy these into your setup, then fill them with your own principles, roles, gates, spending limits, and verification rules.',
    id: 'Salin ke setup lu, lalu isi dengan prinsip, peran, gerbang, batas belanja, dan aturan verifikasi milik lu sendiri.'
  },
  metaTitle: { en: 'Templates — Build Your Agentic Company', id: 'Templat — Bangun Agentic Company' },
  metaDescription: {
    en: 'Copyable starter templates for agent identity, access contracts, task packets, relay packets, spending policy, and ledger events.',
    id: 'Templat awal untuk identitas agen, kontrak akses, paket tugas, paket relay, kebijakan belanja, dan event ledger.'
  }
};

export const templates = [
  {
    title: { en: 'Agent identity contract', id: 'Kontrak identitas agen' },
    body: {
      en: `Name: <agent name>
Purpose: <why this agent exists>
Responsibilities:
  - <real job>
Allowed work:
  - read / draft / local reversible work
Must ask before:
  - public send
  - destructive change
  - money movement
  - credential recovery
Memory policy: <what may be remembered>
Proof required: <what verifies output>`,
      id: `Nama: <nama agen>
Tujuan: <kenapa agen ini ada>
Tanggung jawab:
  - <pekerjaan nyata>
Kerja yang boleh:
  - baca / draf / kerja lokal yang bisa dibalik
Wajib bertanya sebelum:
  - kirim publik
  - perubahan destruktif
  - perpindahan uang
  - pemulihan kredensial
Kebijakan memori: <apa yang boleh diingat>
Bukti wajib: <apa yang memverifikasi keluaran>`
    }
  },
  {
    title: { en: 'Access and spending contract', id: 'Kontrak akses dan belanja' },
    body: {
      en: `Service: <service/account>
Owner: <human/company/agent>
Allowed actions:
  - read-only checks
Requires confirmation:
  - public post
  - delete
  - spend
  - permission change
Spending limit: <amount/session/day>
Verification:
  - account proof
  - permission check
  - transaction or API proof`,
      id: `Layanan: <layanan/akun>
Pemilik: <manusia/perusahaan/agen>
Aksi yang boleh:
  - pemeriksaan read-only
Butuh konfirmasi:
  - posting publik
  - hapus
  - belanja
  - perubahan izin
Batas belanja: <jumlah/sesi/hari>
Verifikasi:
  - bukti akun
  - pemeriksaan izin
  - bukti transaksi atau API`
    }
  },
  {
    title: { en: 'Company task packet', id: 'Paket tugas perusahaan' },
    body: {
      en: `Objective: <why this matters>
Owner: <agent role>
Task: <one concrete deliverable>
Inputs: <files, links, constraints>
Output format: <doc, diff, table, issue, decision>
Success criteria: <what good means>
Review gate: <who/what verifies>
Next action: <what happens if accepted>`,
      id: `Tujuan: <kenapa ini penting>
Pemilik: <peran agen>
Tugas: <satu hasil kerja konkret>
Input: <file, tautan, batasan>
Format keluaran: <dokumen, diff, tabel, isu, keputusan>
Kriteria sukses: <arti bagus>
Gerbang tinjauan: <siapa/apa yang memverifikasi>
Aksi berikutnya: <apa yang terjadi kalau diterima>`
    }
  },
  {
    title: { en: 'Ledger/audit event', id: 'Event ledger/audit' },
    body: {
      en: `Event: <what happened>
Actor: <human/agent>
Source: <file/link/API/log>
Approval: <none / approval id / human confirmation>
Change: <state before -> state after>
Proof: <URL/file/hash/transaction id/screenshot>
Follow-up: <next review or action>`,
      id: `Event: <apa yang terjadi>
Aktor: <manusia/agen>
Sumber: <file/tautan/API/log>
Persetujuan: <tidak ada / id persetujuan / konfirmasi manusia>
Perubahan: <status sebelum -> status sesudah>
Bukti: <URL/file/hash/id transaksi/screenshot>
Tindak lanjut: <tinjauan atau aksi berikutnya>`
    }
  },
  {
    title: { en: 'Verification checklist', id: 'Checklist verifikasi' },
    body: {
      en: `Before marking work done:
- objective is clear
- owner is named
- allowed actions are listed
- approval gates are listed
- proof artifact exists
- next action is clear
- open risk is written`,
      id: `Sebelum kerja dianggap selesai:
- tujuan jelas
- pemilik disebut
- aksi yang boleh tertulis
- gerbang persetujuan tertulis
- artefak bukti ada
- aksi berikutnya jelas
- risiko tersisa ditulis`
    }
  }
];

export const footerText = {
  description: {
    en: 'An operating guide for building your own agentic company: roles, memory, tools, accounts, approval rules, records, and review.',
    id: 'Panduan publik untuk membangun agentic company sendiri: peran, memori, alat, akun, aturan persetujuan, catatan, dan tinjauan.'
  },
  cta: { en: 'Start the build', id: 'Mulai bangun' },
  ctaMeta: { en: '30 days', id: '30 hari' },
  columns: [
    { title: { en: 'Foundation', id: 'Fondasi' }, label: { en: 'Foundation links', id: 'Link fondasi' }, links: [
      { href: '/docs/manifesto/', label: { en: 'Manifesto', id: 'Manifesto' } },
      { href: '/docs/reality-check/', label: { en: 'Reality check', id: 'Reality check' } },
      { href: '/docs/business-first/', label: { en: 'Start from business', id: 'Mulai dari bisnis' } },
      { href: '/docs/seven-requirements/', label: { en: 'Seven requirements', id: 'Tujuh syarat' } }
    ] },
    { title: { en: 'Agents', id: 'Agen' }, label: { en: 'Agent design links', id: 'Link desain agen' }, links: [
      { href: '/docs/agent-identity/', label: { en: 'Agent identity', id: 'Identitas agen' } },
      { href: '/docs/support-agent/', label: { en: 'Support agent', id: 'Agen support' } },
      { href: '/docs/execution-agent/', label: { en: 'Execution agent', id: 'Agen eksekusi' } },
      { href: '/docs/working-agents/', label: { en: 'Working agents', id: 'Agen kerja' } }
    ] },
    { title: { en: 'Company', id: 'Perusahaan' }, label: { en: 'Company system links', id: 'Link sistem perusahaan' }, links: [
      { href: '/docs/agent-memory/', label: { en: 'Memory', id: 'Memori' } },
      { href: '/docs/company-communication/', label: { en: 'Communication', id: 'Komunikasi' } },
      { href: '/docs/tools-and-mcp/', label: { en: 'Tools / MCP', id: 'Alat / MCP' } },
      { href: '/docs/paperclip-company-control/', label: { en: 'Paperclip', id: 'Paperclip' } }
    ] },
    { title: { en: 'Govern', id: 'Tata Kelola' }, label: { en: 'Governance links', id: 'Link tata kelola' }, links: [
      { href: '/docs/accounts-access/', label: { en: 'Accounts and access', id: 'Akun dan akses' } },
      { href: '/docs/money-wallets-agent-spending/', label: { en: 'Money and wallets', id: 'Uang dan dompet' } },
      { href: '/docs/ledger-audit-proof/', label: { en: 'Ledger / proof', id: 'Ledger / bukti' } },
      { href: '/docs/decision-gates/', label: { en: 'Decision gates', id: 'Gerbang keputusan' } }
    ] }
  ],
  bottom: {
    left: { en: 'Build Your Agentic Company · operating guide · 2026 / Volume 01', id: 'Bangun Agentic Company · panduan operasi · 2026 / Volume 01' },
    proof: { en: 'roles / memory / access / proof', id: 'peran / memori / akses / bukti' },
    locale: { en: 'EN · ID', id: 'ID · EN' },
    megaA: { en: 'Agentic', id: 'Perusahaan' },
    megaB: { en: 'Company', id: 'Company' }
  }
};
