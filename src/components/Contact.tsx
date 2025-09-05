import React from 'react';
import { MailIcon, PhoneIcon, MessageSquareIcon } from 'lucide-react';
export function Contact() {
  return <section id="contacto" className="py-16 bg-stone-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-stone-800">
          Contáctanos
        </h2>
        <div className="flex flex-col lg:flex-row max-w-6xl mx-auto">
          <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-8">
            <h3 className="text-2xl font-semibold mb-6 text-stone-800">
              Envíanos un Mensaje
            </h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-1">
                  Nombre Completo
                </label>
                <input type="text" id="name" className="w-full px-4 py-2 border border-stone-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-amber-500" placeholder="Tu nombre" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-1">
                  Correo Electrónico
                </label>
                <input type="email" id="email" className="w-full px-4 py-2 border border-stone-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-amber-500" placeholder="tu@email.com" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-stone-700 mb-1">
                  Teléfono (opcional)
                </label>
                <input type="tel" id="phone" className="w-full px-4 py-2 border border-stone-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-amber-500" placeholder="Tu número de teléfono" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-1">
                  Mensaje
                </label>
                <textarea id="message" rows={4} className="w-full px-4 py-2 border border-stone-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-amber-500" placeholder="¿En qué podemos ayudarte?"></textarea>
              </div>
              <div>
                <button type="submit" className="w-full bg-amber-600 hover:bg-amber-700 text-white py-2 px-4 rounded-md font-medium transition-colors">
                  Enviar Mensaje
                </button>
              </div>
            </form>
          </div>
          <div className="lg:w-1/2 lg:pl-8">
            <h3 className="text-2xl font-semibold mb-6 text-stone-800">
              Peticiones de Oración
            </h3>
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <p className="text-stone-700 mb-4">
                Nos encantaría orar por ti. Comparte tus peticiones de oración
                con nosotros y nuestro equipo de intercesión estará orando por
                tus necesidades.
              </p>
              <form className="space-y-4">
                <div>
                  <label htmlFor="prayer-name" className="block text-sm font-medium text-stone-700 mb-1">
                    Nombre (opcional)
                  </label>
                  <input type="text" id="prayer-name" className="w-full px-4 py-2 border border-stone-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-amber-500" placeholder="Tu nombre" />
                </div>
                <div>
                  <label htmlFor="prayer-request" className="block text-sm font-medium text-stone-700 mb-1">
                    Petición de Oración
                  </label>
                  <textarea id="prayer-request" rows={4} className="w-full px-4 py-2 border border-stone-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-amber-500" placeholder="Comparte tu petición de oración"></textarea>
                </div>
                <div>
                  <button type="submit" className="w-full bg-stone-600 hover:bg-stone-700 text-white py-2 px-4 rounded-md font-medium transition-colors">
                    Enviar Petición
                  </button>
                </div>
              </form>
            </div>
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
              <h4 className="text-lg font-semibold mb-4 text-stone-800">
                También puedes contactarnos por:
              </h4>
              <div className="space-y-4">
                <div className="flex items-center">
                  <PhoneIcon className="text-amber-700 mr-3" size={20} />
                  <a href="tel:+528979801693" aria-label="Llamar al +52 897 980 1693" className="text-stone-700 hover:underline">+52 897 980 1693</a>
                </div>
                <div className="flex items-center">
                  <MailIcon className="text-amber-700 mr-3" size={20} />
                  <span className="text-stone-700">
                    contacto@centrocristianogosen.org
                  </span>
                </div>
                <div className="flex items-center">
                  <MessageSquareIcon className="text-amber-700 mr-3" size={20} />
                  <a href="https://wa.me/528979801693" target="_blank" rel="noopener noreferrer" className="text-stone-700 hover:underline" aria-label="Enviar WhatsApp al +52 897 980 1693">
                    WhatsApp: +52 897 980 1693
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
}