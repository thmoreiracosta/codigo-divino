import ebookImage from '../assets/cr2.png';
import garantiaImage from '../assets/garantiasatisfaccion.png';
import { Flame, ArrowRight, ShieldCheck, Star, CheckCircle } from 'lucide-react';

export function Pricing() {
  return (
    <section
      id="oferta"
      className="py-24 bg-gradient-to-b from-slate-950 to-slate-900 border-t border-slate-800"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-sm font-bold mb-6 animate-pulse">
          <Flame size={18} />
          <span>Oferta por tiempo limitado</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-black mb-4">
          Comienza tu viaje hoy mismo
        </h2>

        <p className="text-slate-400 text-lg mb-12 max-w-xl mx-auto">
          Obtén acceso instantáneo a todo el material digital de Código Divino y fortalece la fe de tus seres queridos.
        </p>

        <div className="bg-slate-900 border-2 border-amber-500/50 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden max-w-3xl mx-auto">

          <div className="absolute top-0 right-0 bg-amber-500 text-slate-950 font-black text-xs px-4 py-1.5 rounded-bl-xl uppercase tracking-wider">
            Acceso Inmediato
          </div>

          <div className="text-slate-400 text-sm uppercase tracking-wider font-semibold mb-8">
            Ebook Digital Completo + 5 BONOS
          </div>

          <div className="flex items-center gap-12 mb-10">

            {/* Capa */}
            <div className="w-[42%] flex justify-start">
              <img
                src={ebookImage}
                alt="Código Divino"
                className="w-full max-w-xs object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,.6)]"
              />
            </div>

            {/* Informações */}
            <div className="w-[58%] text-left">

              <div className="text-slate-400 text-sm uppercase tracking-wider font-semibold mb-3">
                Ebook Digital Completo
              </div>

              <div className="text-slate-500 line-through text-3xl mb-3">
                $19.90 USD
              </div>

              <div className="text-6xl font-black text-white leading-none">
                $6.90
              </div>

              <div className="text-3xl font-bold text-amber-400 mt-2">
                USD
              </div>

            </div>

          </div>

          {/* BONOS */}
          <div className="bg-gradient-to-r from-amber-500/10 to-yellow-500/5 border border-amber-500/30 rounded-2xl p-6 mb-8">

            <h3 className="text-xl font-black text-white mb-4">
              🎁 ¡Además recibirás <span className="text-amber-400">5 BONOS EXCLUSIVOS</span>!
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-left">

              <div className="flex items-center gap-3">
                <CheckCircle size={20} className="text-green-400 shrink-0" />
                <span className="text-slate-200">
                  <strong>BONO 1:</strong> Los 10 Mandamientos
                </span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle size={20} className="text-green-400 shrink-0" />
                <span className="text-slate-200">
                  <strong>BONO 2:</strong> Los Milagros de Jesús
                </span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle size={20} className="text-green-400 shrink-0" />
                <span className="text-slate-200">
                  <strong>BONO 3:</strong> Historias Bíblicas para Toda la Familia
                </span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle size={20} className="text-green-400 shrink-0" />
                <span className="text-slate-200">
                  <strong>BONO 4:</strong> Devocionales de Poder
                </span>
              </div>

              <div className="flex items-center gap-3 md:col-span-2">
                <CheckCircle size={20} className="text-green-400 shrink-0" />
                <span className="text-slate-200">
                  <strong>BONO 5:</strong> Manual de Interpretación Bíblica para Principiantes
                </span>
              </div>

            </div>

          </div>

          <div className="border-t border-slate-700 pt-6 mt-4 mb-8">

            <p className="text-slate-300 text-sm font-medium">
              Pago único • Acceso inmediato • Sin mensualidades
            </p>

          </div>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 mb-6">

            {/* Selo de Garantia */}
            <div className="flex-shrink-0">
              <img
                src={garantiaImage}
                alt="Garantía de Satisfacción de 7 Días"
                className="w-40 lg:w-44 object-contain drop-shadow-[0_15px_35px_rgba(0,0,0,.45)] hover:scale-105 transition-all duration-300"
              />

            </div>

            {/* Botão */}
            <a
              className="px-10 py-4 rounded-2xl font-black text-lg bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-950 hover:from-amber-400 hover:to-yellow-400 transition-all shadow-xl shadow-amber-500/20 flex items-center justify-center gap-2 group"
              href="https://pay.kiwify.com/disLgbb?region=br"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                window.fbq?.('track', 'InitiateCheckout');
              }}
            >
              <span>¡QUIERO EL CÓDIGO DIVINO!</span>
              <ArrowRight
                size={22}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>

          </div>

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