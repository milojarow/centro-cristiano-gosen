import React from 'react';
import { CalendarIcon, ClockIcon, MapPinIcon } from 'lucide-react';
export function Events() {
  return <section id="eventos" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-stone-800">
          Próximos Eventos
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-stone-50 rounded-lg overflow-hidden shadow-md">
            <div className="h-48 bg-amber-700 flex items-center justify-center">
              <CalendarIcon className="text-white" size={64} />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-stone-800">
                Campaña de Avivamiento
              </h3>
              <div className="flex items-center mb-2 text-stone-600">
                <CalendarIcon size={16} className="mr-2" />
                <span>15-17 de Septiembre, 2023</span>
              </div>
              <div className="flex items-center mb-2 text-stone-600">
                <ClockIcon size={16} className="mr-2" />
                <span>7:00 PM - 9:30 PM</span>
              </div>
              <div className="flex items-center mb-4 text-stone-600">
                <MapPinIcon size={16} className="mr-2" />
                <span>Centro Cristiano Gosén</span>
              </div>
              <p className="text-stone-700 mb-4">
                Tres noches de adoración, palabra y manifestación del poder de
                Dios. Invitado especial: Evangelista Roberto Méndez.
              </p>
              <button className="w-full bg-amber-600 hover:bg-amber-700 text-white py-2 rounded-md transition-colors">
                Más Información
              </button>
            </div>
          </div>
          <div className="bg-stone-50 rounded-lg overflow-hidden shadow-md">
            <div className="h-48 bg-amber-800 flex items-center justify-center">
              <CalendarIcon className="text-white" size={64} />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-stone-800">
                Retiro de Jóvenes
              </h3>
              <div className="flex items-center mb-2 text-stone-600">
                <CalendarIcon size={16} className="mr-2" />
                <span>7-9 de Octubre, 2023</span>
              </div>
              <div className="flex items-center mb-2 text-stone-600">
                <ClockIcon size={16} className="mr-2" />
                <span>Todo el fin de semana</span>
              </div>
              <div className="flex items-center mb-4 text-stone-600">
                <MapPinIcon size={16} className="mr-2" />
                <span>Campamento El Redentor</span>
              </div>
              <p className="text-stone-700 mb-4">
                Un fin de semana de comunión, crecimiento espiritual y diversión
                para jóvenes de 13 a 25 años.
              </p>
              <button className="w-full bg-amber-600 hover:bg-amber-700 text-white py-2 rounded-md transition-colors">
                Inscríbete Aquí
              </button>
            </div>
          </div>
          <div className="bg-stone-50 rounded-lg overflow-hidden shadow-md">
            <div className="h-48 bg-amber-900 flex items-center justify-center">
              <CalendarIcon className="text-white" size={64} />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-stone-800">
                Servicio de Bautismos
              </h3>
              <div className="flex items-center mb-2 text-stone-600">
                <CalendarIcon size={16} className="mr-2" />
                <span>24 de Septiembre, 2023</span>
              </div>
              <div className="flex items-center mb-2 text-stone-600">
                <ClockIcon size={16} className="mr-2" />
                <span>11:30 AM</span>
              </div>
              <div className="flex items-center mb-4 text-stone-600">
                <MapPinIcon size={16} className="mr-2" />
                <span>Centro Cristiano Gosén</span>
              </div>
              <p className="text-stone-700 mb-4">
                Celebra este paso importante en tu camino de fe. Clases
                preparatorias disponibles dos semanas antes.
              </p>
              <button className="w-full bg-amber-600 hover:bg-amber-700 text-white py-2 rounded-md transition-colors">
                Regístrate
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>;
}