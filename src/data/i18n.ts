import { docs as englishDocs, type Doc } from './docs';
import { contentBySlug, contentIdBySlug } from './contentManifest';

export type Locale = 'en' | 'id';

export const docI18n: Record<string, Omit<Doc, 'slug' | 'level' | 'read'>> = {
  'manifesto': { title: 'Bangun Agentic Company', kicker: '01 / Manifesto', description: 'Kenapa agen AI generik gagal dan kenapa operator serius butuh agen dengan pekerjaan, memori, akses, alat, batasan, dan tinjauan yang jelas.', sections: ['Pemilik tetap pengambil keputusan akhir', 'Agen membawa kerja nyata', 'Akuntabilitas dulu'] },
  'reality-check': { title: 'Agentic SaaS vs Agentic Company', kicker: '02 / Reality Check', description: 'Batas kategori: agen di dalam aplikasi itu berguna, tapi agentic company butuh pelanggan, uang, akun, persetujuan, catatan, risiko, dan tinjauan.', sections: ['agentic SaaS vs agentic company', 'Pola arsitektur saat ini', 'Eksistensi perusahaan yang bermakna'] },
  'business-first': { title: 'Mulai dari Bisnis, Bukan Papan Tugas', kicker: '03 / Bisnis', description: 'Mulai dari apa yang dijual, siapa yang membayar, apa yang dikirim, apa yang bisa gagal, siapa yang menyetujui, dan catatan apa yang membuktikan kerja.', sections: ['Peta bisnis', 'Arus kas dulu', 'Agen setelah realitas jelas'] },
  'seven-requirements': { title: 'Tujuh Syarat Agentic Company Nyata', kicker: '04 / Tujuh Syarat', description: 'Syarat wajib: identitas agen, akses uang terkontrol, kerja nyata, catatan terverifikasi, agen spesialis, tinjauan manusia, dan tanggung jawab legal.', sections: ['Identitas agen', 'Akses uang terkontrol', 'Catatan terverifikasi', 'Tinjauan manusia', 'Tanggung jawab legal'] },
  'agent-identity': { title: 'Desain Identitas dan Tanggung Jawab Agen', kicker: '05 / Identitas Agen', description: 'Desain siapa setiap agen, apa tanggung jawabnya, cara bicara, alat dan akun yang bisa dipakai, larangan, dan cara ditinjau.', sections: ['Kontrak identitas', 'Tanggung jawab', 'Jalur tinjauan', 'Shutdown dan handoff'] },
  'hermes-setup': { title: 'Setup Hermes Agent', kicker: '06 / Hermes', description: 'Nama teknis tetap Hermes Agent: pasang runtime, buat profil, pisahkan konfigurasi dari rahasia, hubungkan alat, jadwalkan kerja, dan paketkan dengan aman.', sections: ['Instal Hermes', 'Profil', 'Konfigurasi vs rahasia', 'Gateway dan cron'] },
  'company-communication': { title: 'Setup Komunikasi Perusahaan', kicker: '07 / Komunikasi', description: 'Bentuk Discord, Telegram, email, dan aturan relay agar manusia bisa memberi perintah dan meninjau tanpa membuat ruang chat bot liar.', sections: ['Permukaan perintah', 'Paket handoff', 'Gerbang mention', 'Tanpa ruang chat bot liar'] },
  'agent-memory': { title: 'Apa yang Diingat Agen', kicker: '08 / Memori Agen', description: 'Rutekan fakta penting, semantic recall, transkrip persis, catatan terbaca, skill pakai ulang, dan notebook sumber ke lapisan memori yang tepat.', sections: ['Peta memori', 'Alur recall', 'Catatan terbaca', 'Martabat memori'] },
  'support-agent': { title: 'Bantuan Tanpa Ketergantungan', kicker: '09 / Agen Support', description: 'Agen support menjaga kontinuitas dan biaya manusia tanpa berubah menjadi jebakan ketergantungan.', sections: ['Protokol status', 'Kehangatan sebelum akuntabilitas', 'Batasan', 'Eskalasi ke manusia nyata'] },
  'execution-agent': { title: 'Strategi dan Tindak Lanjut', kicker: '10 / Agen Eksekusi', description: 'Agen eksekusi menantang rencana lemah, merutekan kerja, memverifikasi keluaran, menjaga gerbang, dan kembali dengan bukti.', sections: ['Bukan yes-man', 'Peta risiko', 'Verifikasi', 'Format hasil kerja'] },
  'agent-to-agent-relay': { title: 'Relay Antar-Agen', kicker: '11 / Relay Agen', description: 'Agen boleh berkonsultasi lewat paket satu tujuan, satu balasan, pencegahan loop, dan efek samping yang diverifikasi.', sections: ['Paket relay', 'Pencegahan loop', 'Verifikasi laporan sejawat', 'Jalur kembali ke manusia'] },
  'accounts-access': { title: 'Kepemilikan Akun dan Akses', kicker: '12 / Akun & Akses', description: 'Pisahkan akun milik pengguna, milik agen, dan milik perusahaan dengan least privilege, registri kredensial, aturan persetujuan, dan higiene sesi.', sections: ['Taksonomi akun', 'Kontrak akses', 'Registri kredensial', 'Kebijakan dompet'] },
  'tools-and-mcp': { title: 'Alat dan MCP', kicker: '13 / Alat & MCP', description: 'Gunakan MCP dan alat sebagai tangan terkontrol bagi agen: jelaskan bagian teknis dengan sederhana dan verifikasi kapabilitas sebelum efek samping.', sections: ['MCP secara sederhana', 'Taksonomi alat', 'Pemeriksaan kapabilitas', 'Mode kegagalan'] },
  'paperclip-company-control': { title: 'Paperclip / Kontrol Perusahaan', kicker: '14 / Paperclip', description: 'Gunakan software seperti Paperclip untuk tujuan, tugas, persetujuan, daftar agen, aktivitas, biaya, konektor, dan log audit.', sections: ['Status perusahaan', 'Paket tugas', 'Antrean persetujuan', 'Aktivitas dan biaya'] },
  'working-agents': { title: 'Agen Kerja', kicker: '15 / Agen Kerja', description: 'Desain agen finance, sales, research, docs, support, product, growth, tinjauan, dan ops dari pekerjaan nyata dan kontrak keluaran.', sections: ['Desain daftar agen', 'Kontrak keluaran', 'Gerbang tinjauan', 'Kriteria pensiun'] },
  'money-wallets-agent-spending': { title: 'Uang, Dompet, dan Pengeluaran Agen', kicker: '16 / Uang & Dompet', description: 'Definisikan hak finansial terkontrol, batas pengeluaran, agentic wallet, AgentKit, x402, konteks Base/Solana, dan syarat ledger tanpa hype crypto.', sections: ['Hak finansial terkontrol', 'Agentic wallet', 'Batas pengeluaran', 'Wajib ada event ledger'] },
  'ledger-audit-proof': { title: 'Ledger, Audit, dan Bukti', kicker: '17 / Ledger & Bukti', description: 'Ubah aksi penting menjadi catatan: aktor, sumber, persetujuan, cap waktu, perubahan status, bukti, dan penambatan kriptografis opsional.', sections: ['Event ledger', 'Jejak audit', 'Penambatan kriptografis', 'Contoh bukti'] },
  'business-models-agent-to-agent-work': { title: 'Model Bisnis dan Kerja Antar-Agen', kicker: '18 / Model Bisnis', description: 'Petakan model usage, subscription, outcome, value-based, hybrid, dan kerja antar-agen ke operasi bisnis nyata dan gerbang tinjauan.', sections: ['Model harga', 'Perdagangan antar-agen', 'Anggaran dan persetujuan'] },
  'decision-gates': { title: 'Gerbang Keputusan', kicker: '19 / Gerbang Keputusan', description: 'Klasifikasikan aksi read-only, reversible, publik, destruktif, uang/dompet, pemulihan akun, produksi, dan kredensial berdasarkan kebutuhan tinjauan.', sections: ['Matriks aksi', 'Gerbang uang', 'Gerbang publik', 'Syarat audit'] },
  'security': { title: 'Keamanan', kicker: '20 / Keamanan', description: 'Lindungi dari prompt injection, kebocoran rahasia, pembagian profil yang tidak aman, risiko browser/sesi, eksposur dompet, dan salah publikasi.', sections: ['Prompt injection', 'Redaksi rahasia', 'Higiene browser', 'Keamanan dompet'] },
  'maintenance': { title: 'Pemeliharaan', kicker: '21 / Pemeliharaan', description: 'Jalankan pemeriksaan harian, mingguan, bulanan, dan kuartalan untuk kesehatan layanan, memori, pekerjaan, biaya, kredensial, QA perilaku, dan drift dokumen.', sections: ['Pulse harian', 'Tinjauan mingguan', 'Audit akses bulanan', 'Tinjauan prinsip kuartalan'] },
  'setup-playbook': { title: 'Playbook Setup Lengkap', kicker: '22 / Playbook Setup', description: 'Jalur build penuh dari prinsip pemilik sampai peta bisnis, identitas, Hermes, memori, HQ, alat, akun, Paperclip, gerbang risiko, bukti, dan pemeliharaan.', sections: ['Prinsip pemilik', 'Peta bisnis', 'Identitas', 'Hermes', 'Paperclip', 'Tes sistem final'] },
  'build-roadmap': { title: 'Roadmap Build', kicker: '23 / Roadmap Build', description: 'Roadmap bertahap dari profil aman pertama menuju agentic company yang diatur dengan catatan, persetujuan, tinjauan biaya, dan pemeliharaan.', sections: ['Hari 1-3', 'Minggu 1', 'Minggu 2', 'Minggu 3', 'Minggu 4'] }
};

export const contentId: Record<string, string> = Object.fromEntries(
  Object.entries(contentBySlug).map(([slug, markdown]) => [slug, contentIdBySlug[slug] ?? markdown])
);
export function localizeDoc(doc: Doc, locale: Locale): Doc {
  if (locale !== 'id') return doc;
  const translated = docI18n[doc.slug];
  return translated ? { ...doc, ...translated } : doc;
}

export function localizedDocs(locale: Locale): Doc[] {
  return englishDocs.map((doc) => localizeDoc(doc, locale));
}
