import React from 'react';
import { BookOpenIcon, UsersIcon, HeartIcon, BabyIcon } from 'lucide-react';
export function Ministries() {
  return <section id="ministerios" className="py-16 bg-stone-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-stone-800">
          Nuestros Ministerios
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
            <div className="bg-amber-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <BookOpenIcon className="text-amber-700" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-stone-800">
              Estudios Bíblicos
            </h3>
            <p className="text-stone-600">
              Profundiza en las escrituras con nuestros estudios bíblicos
              semanales. Aprende a aplicar la palabra de Dios en tu vida diaria.
            </p>
            <a href="#estudios" className="mt-4 inline-block text-amber-700 hover:text-amber-900 font-medium">
              Más información →
            </a>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
            <div className="bg-amber-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <UsersIcon className="text-amber-700" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-stone-800">
              Jóvenes
            </h3>
            <p className="text-stone-600">
              Un espacio dinámico donde los jóvenes pueden crecer
              espiritualmente, desarrollar sus talentos y formar amistades
              duraderas.
            </p>
            <a href="#jovenes" className="mt-4 inline-block text-amber-700 hover:text-amber-900 font-medium">
              Más información →
            </a>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
            <div className="bg-amber-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <BabyIcon className="text-amber-700" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-stone-800">Niños</h3>
            <p className="text-stone-600">
              Enseñamos a los niños sobre el amor de Dios a través de
              actividades divertidas, música y lecciones bíblicas adaptadas a su
              edad.
            </p>
            <a href="#ninos" className="mt-4 inline-block text-amber-700 hover:text-amber-900 font-medium">
              Más información →
            </a>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
            <div className="bg-amber-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <HeartIcon className="text-amber-700" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-stone-800">
              Bautismos
            </h3>
            <p className="text-stone-600">
              Descubre el significado del bautismo y prepárate para dar este
              importante paso en tu camino de fe.
            </p>
            <a href="#bautismos" className="mt-4 inline-block text-amber-700 hover:text-amber-900 font-medium">
              Más información →
            </a>
          </div>
        </div>
      </div>
    </section>;
}