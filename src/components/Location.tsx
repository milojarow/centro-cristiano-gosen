import React from 'react';
import { MapPinIcon, PhoneIcon, ClockIcon } from 'lucide-react';
export function Location() {
  return <section id="ubicacion" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-stone-800">
          Nuestra Ubicación
        </h2>
        <div className="flex flex-col md:flex-row max-w-6xl mx-auto">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-6">
            <div className="bg-stone-100 p-2 rounded-lg shadow-md h-full">
              <div className="h-full min-h-[300px] rounded-md overflow-hidden">
                <iframe
                  title="Mapa de Centro Cristiano Gosén"
                  src="https://www.google.com/maps?q=26.401343,-99.023020&z=17&output=embed"
                  width="100%"
                  height="100%"
                  className="w-full h-[300px] md:h-full rounded-md"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
                             <a
                 href="https://www.google.com/maps/search/?api=1&query=26.401343,-99.023020"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="mt-2 inline-flex items-center text-amber-700 hover:text-amber-900 underline"
                 aria-label="Abrir ubicación en Google Maps"
               >
                 Ver en Google Maps
               </a>
            </div>
          </div>
          <div className="md:w-1/2 md:pl-6">
            <div className="bg-stone-50 p-6 rounded-lg shadow-md h-full">
              <h3 className="text-2xl font-semibold mb-6 text-stone-800">
                Información de Contacto
              </h3>
              <div className="flex items-start mb-6">
                <MapPinIcon className="text-amber-700 mr-3 mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="font-medium text-stone-800">Dirección:</p>
                  <p className="text-stone-600">
                    Hidalgo 300 B, Esq Cuarta, Centro, Miguel Alemán, 88300, Tamaulipas, México
                  </p>
                </div>
              </div>
              <div className="flex items-start mb-6">
                <PhoneIcon className="text-amber-700 mr-3 mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="font-medium text-stone-800">Teléfono:</p>
                  <a href="tel:+528979801693" aria-label="Llamar al +52 897 980 1693" className="block text-stone-600 hover:underline">+52 897 980 1693</a>
                  <a href="https://wa.me/528979801693" target="_blank" rel="noopener noreferrer" className="flex items-center mt-3 -ml-7 text-amber-700 hover:text-amber-900" aria-label="Enviar WhatsApp al +52 897 980 1693">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Contáctanos por WhatsApp
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <ClockIcon className="text-amber-700 mr-3 mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="font-medium text-stone-800">
                    Horario de Oficina:
                  </p>
                  <p className="text-stone-600">
                    Lunes a Viernes: 9:00 AM - 2:00 PM
                  </p>
                  <p className="text-stone-600">Sábado: 10:00 AM - 12:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
}