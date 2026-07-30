
export function Footer() {
  return (
    <footer className="py-12 bg-slate-950 border-t border-slate-900 text-center text-sm text-slate-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        <p className="font-bold text-slate-400 tracking-wider">CÓDIGO DIVINO</p>
        <p>© {new Date().getFullYear()} @vemquetemjeito - Todos los derechos reservados.</p>
        <p className="max-w-md mx-auto text-xs text-slate-600">
          Este sitio no está afiliado a Facebook ni a ninguna entidad de Meta. Una vez que sales de Facebook, la responsabilidad no es de ellos sino de nuestro sitio web.
        </p>
      </div>
    </footer>
  );
}