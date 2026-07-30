import { Flame, ArrowRight, ShieldCheck, Star } from 'lucide-react';

export function Pricing() {
  return (
    <section id="oferta" className="py-24 bg-gradient-to-b from-slate-950 to-slate-900 border-t border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-sm font-bold mb-6 animate-pulse">
          <Flame size={18} />
          <span>Oferta por tiempo limitado</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-black mb-4">Comienza tu viaje hoy mismo</h2>
        <p className="text-slate-400 text-lg mb-12 max-w-xl mx-auto">
          Obtén acceso instantáneo a todo el material digital de Código Divino y fortalece la fe de tus seres queridos.
        </p>

        <div className="bg-slate-900 border-2 border-amber-500/50 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden max-w-xl mx-auto">
          <div className="absolute top-0 right-0 bg-amber-500 text-slate-950 font-black text-xs px-4 py-1.5 rounded-bl-xl uppercase tracking-wider">
            Acceso Inmediato
          </div>

          <div className="text-slate-400 text-sm uppercase tracking-wider font-semibold mb-2">Ebook Digital Completo</div>
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="text-slate-500 line-through text-2xl">$47.00 USD</span>
            <span className="text-5xl sm:text-6xl font-black text-white">$17.00 <span className="text-2xl font-bold text-amber-400">USD</span></span>
          </div>

          <p className="text-slate-300 text-sm mb-8">Pago único. Sin mensualidades ni cargos ocultos.</p>

          <a 
            href="https://pay.hotmart.com/TU_LINK_DE_PAGO" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full py-5 rounded-2xl font-black text-lg bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-950 hover:from-amber-400 hover:to-yellow-400 transition-all shadow-xl shadow-amber-500/20 flex items-center justify-center gap-2 group mb-6"
          >
            <span>¡QUIERO CÓDIGO DIVINO AHORA!</span>
            <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
          </a>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-xs text-slate-400">
            <div className="flex items-center gap-1.5">
              <ShieldCheck size={16} className="text-amber-400" />
              <span>Compra 100% Segura</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Star size={16} className="text-amber-400" />
              <span>Garantía de Satisfacción de 7 Días</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}