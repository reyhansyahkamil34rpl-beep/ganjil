import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full bg-slate-900/80 backdrop-blur-md border-b border-slate-800 sticky top-0 z-50 px-6 py-4">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-lg font-bold text-blue-400">
          portofolio.smk
        </Link>
        <div className="flex gap-6 text-sm text-slate-300">
          <Link href="/" className="hover:text-blue-400 transition">
            beranda
          </Link>
          <Link href="pengalaman" className="hover:text-blue-400 transition">
            pengalaman
          </Link>
          <Link href="kontak" className="hover:text-blue-400 transition">
            kontak
          </Link>
        </div>
      </div>
    </nav>
  );
}