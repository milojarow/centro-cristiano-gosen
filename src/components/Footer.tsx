import React from 'react';
import { FacebookIcon, InstagramIcon, YoutubeIcon, MapPinIcon } from 'lucide-react';
export function Footer() {
  return <footer className="bg-stone-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center mb-4">
              <img src="/logo_lfkjdasofsafjw.png" alt="Logo IPUM" className="h-12 w-12 rounded-full mr-3" />
              <div>
                <h3 className="text-xl font-bold">Centro Cristiano Gosén</h3>
                <p className="text-xs text-stone-400">
                  IPUM - Todo el evangelio para todo México
                </p>
              </div>
            </div>
            <p className="text-stone-300 max-w-md mb-4">
              Somos una comunidad de fe comprometida con llevar el mensaje de
              Jesucristo y el poder del Espíritu Santo a nuestra ciudad y más
              allá.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-amber-300 transition-colors">
                <FacebookIcon size={20} />
              </a>
              <a href="#" className="text-white hover:text-amber-300 transition-colors">
                <InstagramIcon size={20} />
              </a>
              <a href="#" className="text-white hover:text-amber-300 transition-colors">
                <YoutubeIcon size={20} />
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4 text-amber-300">
                Enlaces Rápidos
              </h4>
              <ul className="space-y-2">
                <li>
                  <a href="#inicio" className="text-stone-300 hover:text-white transition-colors">
                    Inicio
                  </a>
                </li>
                <li>
                  <a href="#servicios" className="text-stone-300 hover:text-white transition-colors">
                    Servicios
                  </a>
                </li>
                <li>
                  <a href="#pastor" className="text-stone-300 hover:text-white transition-colors">
                    Pastor
                  </a>
                </li>
                <li>
                  <a href="#ministerios" className="text-stone-300 hover:text-white transition-colors">
                    Ministerios
                  </a>
                </li>
                <li>
                  <a href="#eventos" className="text-stone-300 hover:text-white transition-colors">
                    Eventos
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-amber-300">
                Ministerios
              </h4>
              <ul className="space-y-2">
                <li>
                  <a href="#estudios" className="text-stone-300 hover:text-white transition-colors">
                    Estudios Bíblicos
                  </a>
                </li>
                <li>
                  <a href="#jovenes" className="text-stone-300 hover:text-white transition-colors">
                    Jóvenes
                  </a>
                </li>
                <li>
                  <a href="#ninos" className="text-stone-300 hover:text-white transition-colors">
                    Niños
                  </a>
                </li>
                <li>
                  <a href="#bautismos" className="text-stone-300 hover:text-white transition-colors">
                    Bautismos
                  </a>
                </li>
                <li>
                  <a href="#oracion" className="text-stone-300 hover:text-white transition-colors">
                    Peticiones de Oración
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1">
              <h4 className="text-lg font-semibold mb-4 text-amber-300">
                Ubicación
              </h4>
              <div className="flex items-start mb-2">
                <MapPinIcon className="text-amber-300 mr-2 mt-1 flex-shrink-0" size={18} />
                <p className="text-stone-300">
                  Hidalgo 300 B, Esq Cuarta, Centro
                  <br />
                  Miguel Alemán, Tamaulipas, México
                </p>
              </div>
              <div className="mt-4">
                <h4 className="text-lg font-semibold mb-2 text-amber-300">
                  Horarios de Servicio
                </h4>
                <p className="text-stone-300">Domingos: 11:30 AM - 1:30 PM</p>
                <p className="text-stone-300">Jueves: 5:00 PM - 7:00 PM</p>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-stone-700 mt-10 pt-6 text-center text-stone-400 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Centro Cristiano Gosén. Todos los
            derechos reservados.
          </p>
          <p className="mt-1">IPUM - Iglesia Pentecostal Unida de México</p>
        </div>
      </div>
    </footer>;
}