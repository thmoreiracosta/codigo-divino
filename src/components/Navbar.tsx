
export function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-black tracking-wider bg-gradient-to-r from-amber-400 to-amber-200 bg-clip-text text-transparent">
            CÓDIGO DIVINO
          </span>
        </div>
        <a 
          href="#oferta" 
          className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-full font-bold text-sm bg-amber-500 text-slate-950 hover:bg-amber-400 transition-all shadow-lg shadow-amber-500/20"
        >
          Obtener Acceso Inmediato
        </a>
      </div>
    </header>
  );
}