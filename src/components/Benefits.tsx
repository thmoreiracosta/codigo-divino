import React from 'react';
import { BookOpen, Users, Heart } from 'lucide-react';

export function Benefits() {
  return (
    <section className="py-24 bg-slate-900/50 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-black mb-4">¿Por qué <span className="text-amber-400">Código Divino</span> es diferente?</h2>
          <p className="text-slate-400 text-lg">Diseñado específicamente para conectar a las nuevas generaciones y a los hogares con las verdades bíblicas de forma visual y dinámica.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl hover:border-amber-500/50 transition-colors">
            <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center text-amber-400 mb-6">
              <BookOpen size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Bosquejos Visuales</h3>
            <p className="text-slate-400 leading-relaxed">
              Facilita la retención y comprensión de las historias sagradas mediante estructuras visuales limpias y organizadas.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl hover:border-amber-500/50 transition-colors">
            <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center text-amber-400 mb-6">
              <Users size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Para Toda la Familia</h3>
            <p className="text-slate-400 leading-relaxed">
              Un puente perfecto para el estudio devocional en casa, uniendo a padres e hijos en el aprendizaje de la fe.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl hover:border-amber-500/50 transition-colors">
            <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center text-amber-400 mb-6">
              <Heart size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Aplicación Práctica</h3>
            <p className="text-slate-400 leading-relaxed">
              No solo cuenta la historia, sino que conecta los principios bíblicos con los desafíos de la vida cotidiana actual.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}