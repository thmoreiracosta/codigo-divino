import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export function Faq() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqList = [
    {
      q: "¿Cómo recibiré el Ebook?",
      a: "Una vez realizada la compra, recibirás de manera inmediata un correo electrónico con los datos de acceso para descargar todo el material en formato digital (PDF) compatible con cualquier dispositivo."
    },
    {
      q: "¿Es apto para niños de qué edad?",
      a: "Código Divino está diseñado con un enfoque visual sumamente atractivo que facilita la lectura conjunta entre padres e hijos desde temprana edad, adaptándose perfectamente también para jóvenes y adultos."
    },
    {
      q: "¿Qué pasa si el producto no cumple mis expectativas?",
      a: "Tienes una garantía incondicional de 7 días. Si dentro de ese periodo consideras que el material no es lo que esperabas, puedes solicitar el reembolso del 100% de tu dinero de forma rápida y sencilla."
    },
    {
      q: "¿El pago es único o mensual?",
      a: "Es un pago único. Obtienes el Ebook y todas las actualizaciones futuras sin tener que pagar ninguna suscripción mensual."
    }
  ];

  return (
    <section className="py-24 border-t border-slate-800">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black mb-4">Preguntas Frecuentes</h2>
          <p className="text-slate-400">Resolvemos tus dudas acerca del acceso y contenido de Código Divino.</p>
        </div>

        <div className="space-y-4">
          {faqList.map((faq, index) => (
            <div 
              key={index} 
              className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-[1.01] hover:shadow-lg hover:shadow-amber-500/10 hover:border-amber-500/40"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full p-6 text-left font-bold text-lg flex items-center justify-between text-white focus:outline-none"
              >
                <span>{faq.q}</span>
                <ChevronDown 
                  className={`text-amber-400 shrink-0 transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`} 
                  size={20} 
                />
              </button>
              {openFaq === index && (
                <div className="px-6 pb-6 text-slate-300 leading-relaxed border-t border-slate-800/50 pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}