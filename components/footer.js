export default function Footer() {
  return (
    <footer id="kontak" className="w-full bg-slate-950 border-t border-slate-800 px-6 py-8 text-center text-slate-400 text-sm">
      <div className="max-w-4xl mx-auto space-y-3">
        <p>dibuat untuk mendokumentasikan perjalanan masa smk.</p>
        <div className="flex justify-center gap-4 text-xs text-slate-400">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-blue-400">github</a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-blue-400">linkedin</a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-blue-400">instagram</a>
        </div>
        <p className="text-xs text-slate-500 pt-2">
          © {new Date().getFullYear()} [nama kamu]. hak cipta dilindungi.
        </p>
      </div>
    </footer>
  );
}