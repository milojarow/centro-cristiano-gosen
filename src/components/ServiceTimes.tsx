import React from 'react';
import { CalendarIcon, ClockIcon } from 'lucide-react';
export function ServiceTimes() {
  return <section id="servicios" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-stone-800">
          Horarios de Servicios
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-amber-50 border-l-4 border-amber-600 rounded-lg p-6 shadow-md">
            <div className="flex items-center mb-4">
              <CalendarIcon className="text-amber-700 mr-3" size={28} />
              <h3 className="text-2xl font-semibold text-stone-800">
                Domingos
              </h3>
            </div>
            <div className="flex items-center mb-3">
              <ClockIcon className="text-amber-700 mr-2" size={20} />
              <p className="text-lg">11:30 AM - 1:30 PM</p>
            </div>
            <p className="text-stone-700">
              Servicio principal de adoración con sermón del Pastor explicando
              versículos bíblicos y su aplicación a la vida diaria.
            </p>
            <a href="#livestream" className="mt-4 inline-block text-amber-700 hover:text-amber-900 font-medium">
              Ver transmisión en vivo →
            </a>
          </div>
          <div className="bg-stone-50 border-l-4 border-stone-600 rounded-lg p-6 shadow-md">
            <div className="flex items-center mb-4">
              <CalendarIcon className="text-stone-700 mr-3" size={28} />
              <h3 className="text-2xl font-semibold text-stone-800">Jueves</h3>
            </div>
            <div className="flex items-center mb-3">
              <ClockIcon className="text-stone-700 mr-2" size={20} />
              <p className="text-lg">5:00 PM - 7:00 PM</p>
            </div>
            <p className="text-stone-700">
              Sesiones de estudio bíblico para profundizar en las escrituras y
              fortalecer su conocimiento de la palabra de Dios.
            </p>
            <a href="#estudios" className="mt-4 inline-block text-stone-700 hover:text-stone-900 font-medium">
              Más sobre nuestros estudios →
            </a>
          </div>
        </div>
      </div>
    </section>;
}