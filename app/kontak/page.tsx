import Link from "next/link";

export default function KontakPage() {
    return (
        <main className="min-h-screen bg-slate-950 text-slate-100 px-6 py-12 md:px-20">
            <div className="max-w-4xl mx-auto">
                {/* Header Halaman */}
                <section className="mb-12 border-b border-slate-800 pb-8">
                    <span className="text-xs font-semibold tracking-widest text-blue-400 uppercase">
                        mari terhubung
                    </span>
                    <h1 className="text-3xl md:text-5xl font-extrabold text-white mt-1 mb-3">
                        kontak aku
                    </h1>
                    <p className="text-slate-400 text-base md:text-lg max-w-2xl leading-relaxed">
                        punya pertanyaan, tawaran proyek, atau mau diskusi seputar pemrograman? silakan hubungi aku melalui media sosial atau kontak di bawah ini.
                    </p>
                </section>

                {/* Grid Kartu Kontak */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Email */}
                    <div className="bg-slate-900/90 border border-slate-800 hover:border-blue-500/50 rounded-2xl p-6 transition-all duration-300">
                        <h2 className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-2">
                            email
                        </h2>
                        <p className="text-lg font-bold text-white mb-4">
                            noxxy712@gmail.com
                        </p>
                        <a
                            href="mailto:noxxy712@gmail.com"
                            className="inline-block text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20 px-4 py-2 rounded-full hover:bg-blue-500 hover:text-white transition"
                        >
                            kirim email →
                        </a>
                    </div>

                    {/* WhatsApp */}
                    <div className="bg-slate-900/90 border border-slate-800 hover:border-blue-500/50 rounded-2xl p-6 transition-all duration-300">
                        <h2 className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-2">
                            whatsapp
                        </h2>
                        <p className="text-lg font-bold text-white mb-4">
                            +62 82337231441
                        </p>
                        <a
                            href="https://wa.me/6281234567890"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20 px-4 py-2 rounded-full hover:bg-blue-500 hover:text-white transition"
                        >
                            chat whatsapp →
                        </a>
                    </div>

                    {/* GitHub */}
                    <div className="bg-slate-900/90 border border-slate-800 hover:border-blue-500/50 rounded-2xl p-6 transition-all duration-300">
                        <h2 className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-2">
                            github
                        </h2>
                        <p className="text-lg font-bold text-white mb-4">
                            https://github.com/reyhansyahkamil34rpl-beep
                        </p>
                        <a
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20 px-4 py-2 rounded-full hover:bg-blue-500 hover:text-white transition"
                        >
                            lihat repositori →
                        </a>
                    </div>

                    {/* LinkedIn / Instagram */}
                    <div className="bg-slate-900/90 border border-slate-800 hover:border-blue-500/50 rounded-2xl p-6 transition-all duration-300">
                        <h2 className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-2">
                            instagram
                        </h2>
                        <p className="text-lg font-bold text-white mb-4">
                            @alok_projamsut
                        </p>
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20 px-4 py-2 rounded-full hover:bg-blue-500 hover:text-white transition"
                        >
                            kunjungi profil →
                        </a>
                    </div>
                </section>
            </div>
        </main>
    );
}