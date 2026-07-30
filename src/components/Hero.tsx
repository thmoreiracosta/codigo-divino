import { Sparkles, ArrowRight, ShieldCheck, BookOpen, CheckCircle } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative pt-20 pb-32 overflow-hidden">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs sm:text-sm font-semibold mb-6">
              <Sparkles size={16} />
              <span>Para los niños y toda la familia</span>
            </div>
            
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight mb-6">
              Descubre la historia de la Biblia <span className="bg-gradient-to-r from-amber-400 via-amber-200 to-yellow-500 bg-clip-text text-transparent">como nunca antes</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-slate-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              <strong className="text-white">¿Qué es CÓDIGO DIVINO?</strong> Es un material exclusivo que te lleva a través de toda la historia de la Biblia con bosquejos visuales, ilustraciones impactantes y explicaciones claras, diseñadas para ayudarte a entender y aplicar la Palabra de Dios.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a 
                href="#oferta" 
                className="w-full sm:w-auto px-8 py-4 rounded-full font-extrabold text-base bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-950 hover:from-amber-400 hover:to-yellow-400 transition-all shadow-xl shadow-amber-500/20 flex items-center justify-center gap-2 group"
              >
                <span>¡Quiero mi Ebook Ahora!</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <div className="flex items-center gap-2 text-slate-400 text-sm">
                <ShieldCheck size={20} className="text-amber-400" />
                <span>Garantía de 7 días</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md aspect-[3/4] bg-gradient-to-br from-amber-500/20 via-slate-900 to-slate-900 border border-amber-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl flex flex-col justify-between overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 text-amber-500/10 pointer-events-none group-hover:scale-110 transition-transform">
                <BookOpen size={200} />
              </div>
              
              <div>
                <span className="px-3 py-1 bg-amber-500 text-slate-950 text-xs font-bold rounded-md uppercase tracking-wider">
                  Ebook Exclusivo
                </span>
                <h3 className="text-3xl font-black mt-4 text-white">CÓDIGO DIVINO</h3>
              </div>

              <div className="space-y-4 my-auto">
                <div className="flex items-center gap-3 bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                  <CheckCircle className="text-amber-400 shrink-0" size={20} />
                  <span className="text-sm font-medium">Bosquejos visuales detallados</span>
                </div>
                <div className="flex items-center gap-3 bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                  <CheckCircle className="text-amber-400 shrink-0" size={20} />
                  <span className="text-sm font-medium">Ilustraciones impactantes</span>
                </div>
                <div className="flex items-center gap-3 bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                  <CheckCircle className="text-amber-400 shrink-0" size={20} />
                  <span className="text-sm font-medium">Ideal para toda la familia</span>
                </div>
              </div>

              <div className="border-t border-slate-800 pt-4 flex items-center justify-between">
                <span className="text-slate-400 text-xs">Formato Digital PDF</span>
                <span className="text-amber-400 font-bold text-sm">Acceso Inmediato</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}