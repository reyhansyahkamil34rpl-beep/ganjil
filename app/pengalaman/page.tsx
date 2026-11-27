export default function PengalamanPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 px-6 py-12 md:px-20">
      <div className="max-w-4xl mx-auto">
        {/* Header Halaman */}
        <section className="mb-12 border-b border-slate-800 pb-8">
          <span className="text-xs font-semibold tracking-widest text-blue-400 uppercase">
            rekam jejak
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mt-1 mb-3">
            pengalaman & proyek smk
          </h1>
          <p className="text-slate-400 text-base md:text-lg max-w-2xl leading-relaxed">
            rangkuman kegiatan, praktik kerja lapangan, dan karya yang pernah aku bangun selama menempuh pendidikan di smk.
          </p>
        </section>

        {/* Timeline List Pengalaman */}
        <section className="relative border-l border-slate-800 ml-3 md:ml-4 pl-6 md:pl-8 space-y-10">
          
          {/* Card 1: PKL */}
          <div className="relative group">
            {/* Titik Indicator Timeline */}
            <div className="absolute -left-[31px] md:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-blue-500 border-4 border-slate-950 group-hover:scale-125 transition" />
            
            <div className="bg-slate-900/90 border border-slate-800 hover:border-blue-500/50 rounded-2xl p-6 md:p-8 transition-all duration-300 shadow-xl shadow-slate-950/50">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <span className="text-xs font-semibold px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20">
                  praktik kerja lapangan (pkl)
                </span>
                <span className="text-xs md:text-sm text-slate-400 font-medium">januari - april 2023</span>
              </div>

              <h2 className="text-xl md:text-2xl font-bold text-white group-hover:text-blue-400 transition mb-1">
                frontend developer intern — pt solusi teknologi
              </h2>
              <p className="text-xs text-slate-400 mb-4">lokasi: kota tempat pkl</p>

              <ul className="space-y-2 text-slate-300 text-sm leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>membantu tim membuat tampilan website perusahaan menggunakan html, css, dan javascript.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>melakukan pembenahan tampilan (bug fixing) agar website responsif di layar ponsel.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>mempelajari alur kerja tim software house dan kolaborasi menggunakan git/github.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Card 2: UKK */}
          <div className="relative group">
            {/* Titik Indicator Timeline */}
            <div className="absolute -left-[31px] md:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-blue-500 border-4 border-slate-950 group-hover:scale-125 transition" />

            <div className="bg-slate-900/90 border border-slate-800 hover:border-blue-500/50 rounded-2xl p-6 md:p-8 transition-all duration-300 shadow-xl shadow-slate-950/50">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <span className="text-xs font-semibold px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20">
                  uji kompetensi keahlian (ukk)
                </span>
                <span className="text-xs md:text-sm text-slate-400 font-medium">februari 2024</span>
              </div>

              <h2 className="text-xl md:text-2xl font-bold text-white group-hover:text-blue-400 transition mb-1">
                aplikasi kasir & manajemen inventaris toko
              </h2>
              <p className="text-xs text-slate-400 mb-4">proyek individu</p>

              <ul className="space-y-2 text-slate-300 text-sm leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>merancang sistem basis data untuk pengelolaan barang, transaksi, dan cetak struk.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>membangun antarmuka kasir yang mudah digunakan oleh petugas toko.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>menyelesaikan pengujian program dan mempresentasikannya di hadapan penguji eksternal.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Card 3: Organisasi / Ekstrakulikuler */}
          <div className="relative group">
            {/* Titik Indicator Timeline */}
            <div className="absolute -left-[31px] md:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-blue-500 border-4 border-slate-950 group-hover:scale-125 transition" />

            <div className="bg-slate-900/90 border border-slate-800 hover:border-blue-500/50 rounded-2xl p-6 md:p-8 transition-all duration-300 shadow-xl shadow-slate-950/50">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <span className="text-xs font-semibold px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20">
                  kegiatan sekolah & ekstrakulikuler
                </span>
                <span className="text-xs md:text-sm text-slate-400 font-medium">2022 - 2023</span>
              </div>

              <h2 className="text-xl md:text-2xl font-bold text-white group-hover:text-blue-400 transition mb-1">
                anggota klub it & coding sekolah
              </h2>
              <p className="text-xs text-slate-400 mb-4">ekstrakulikuler smk</p>

              <ul className="space-y-2 text-slate-300 text-sm leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>mengikuti sesi rutin belajar pemrograman dasar bersama teman-teman antarjurusan.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>menjadi panitia teknis pada kegiatan pameran karya (tech expo) tahunan sekolah.</span>
                </li>
              </ul>
            </div>
          </div>

        </section>
      </div>
    </main>
  );
}