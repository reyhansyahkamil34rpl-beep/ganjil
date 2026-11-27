export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900 text-slate-100 px-6 py-12 md:px-20">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto text-center my-12">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 text-blue-400">
          halo, Aku Rehan
        </h1>
        <p className="text-lg md:text-xl text-slate-300">
          Pelajar <span className="text-blue-300 font-semibold">RPL</span> dari smk TELKOM MALANG.
        </p>
      </section>

      {/* Pengalaman SMK*/}
      <section className="max-w-4xl mx-auto my-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 border-b border-slate-700 pb-3 text-blue-400">
          pengalaman masa smk
        </h2>

        <div className="space-y-6">
          {/* Card Pengalaman 1 */}
          <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-400">
              praktek membuat web
            </span>
            <h3 className="text-xl font-bold mt-1">web developer</h3>
            <p className="text-sm text-slate-400 mb-3">januarix</p>
            <p className="text-slate-300 text-sm leading-relaxed">
              belajar mengembangkan aplikasi web secara tim, membuat antarmuka pengguna, dan mempelajari workflow kerja industri software house.
            </p>
          </div>

          {/* Card Pengalaman 2 */}
          <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-400">
              proyek akhir / uji kompetensi (ukk)
            </span>
            <h3 className="text-xl font-bold mt-1">aplikasi sistem informasi sekolah</h3>
            <p className="text-sm text-slate-400 mb-3">semester 1</p>
            <p className="text-slate-300 text-sm leading-relaxed">
              membangun aplikasi manajemen data siswa dan nilai menggunakan framework modern dari perancangan database hingga tahap pengujian.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}