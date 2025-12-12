export default function Footer() {
  return (
    <footer className="w-full bg-slate-900 text-slate-300 py-6 mt-10">
      <div className="max-w-5xl mx-auto px-6 text-center border-t border-white/10 pt-6 text-sm">
        <span>
          © {new Date().getFullYear()} TechCrunch Unofficial API — Lightweight & Free.
        </span>
        <div className="mt-2">
          Made with <span className="text-blue-400">Nebula Crud</span>
        </div>
      </div>
    </footer>
  )
}
