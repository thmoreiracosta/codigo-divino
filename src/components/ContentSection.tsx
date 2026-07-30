import { CheckCircle } from 'lucide-react';

export function ContentSection() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-amber-400 font-bold text-sm tracking-wider uppercase">Contenido de Calidad</span>
            <h2 className="text-3xl sm:text-4xl font-black mt-2 mb-6">Todo lo que necesitas para transformar tu devocional familiar</h2>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Entender la Biblia ya no tiene que ser complejo ni aburrido para los más pequeños. Con <strong className="text-white">Código Divino</strong>, cada página está pensada para captar la atención e inspirar el corazón.
            </p>
            
            <ul className="space-y-4">
              {[
                "Ilustraciones impactantes que cautivan visualmente a los niños.",
                "Explicaciones claras y directas de los pasajes más importantes.",
                "Diseño optimizado para leer en tablets, smartphones o imprimir.",
                "Estructura cronológica para entender el hilo conductor de la Biblia."
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="text-amber-400 shrink-0 mt-1" size={20} />
                  <span className="text-slate-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-tr from-slate-900 to-slate-800 p-8 sm:p-12 rounded-3xl border border-slate-700/50 shadow-2xl relative">
            <div className="absolute top-4 right-4 bg-amber-500 text-slate-950 font-black text-xs px-3 py-1 rounded-full uppercase">
              Edición Completa
            </div>
            <h3 className="text-2xl font-bold mb-6 text-white">¿Qué incluye tu descarga inmediata?</h3>
            <div className="space-y-6">
              <div className="border-b border-slate-700/50 pb-4">
                <h4 className="font-bold text-amber-300 text-lg">Ebook Principal Código Divino</h4>
                <p className="text-sm text-slate-400 mt-1">Guía completa ilustrada del Antiguo y Nuevo Testamento.</p>
              </div>
              <div className="border-b border-slate-700/50 pb-4">
                <h4 className="font-bold text-amber-300 text-lg">Bosquejos Visuales Interactivos</h4>
                <p className="text-sm text-slate-400 mt-1">Material de apoyo perfecto para clases o lectura en casa.</p>
              </div>
              <div>
                <h4 className="font-bold text-amber-300 text-lg">Actualizaciones de por vida</h4>
                <p className="text-sm text-slate-400 mt-1">Acceso a futuras expansiones y contenido adicional sin costo extra.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}