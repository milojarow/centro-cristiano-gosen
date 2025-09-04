import React from 'react';
export function Testimonies() {
  return <section id="testimonios" className="py-16 bg-stone-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-stone-800">
          Testimonios
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-amber-200 rounded-full flex items-center justify-center text-amber-700 font-bold text-xl mr-3">
                M
              </div>
              <div>
                <h3 className="font-semibold text-stone-800">María González</h3>
                <p className="text-sm text-stone-500">Miembro desde 2018</p>
              </div>
            </div>
            <p className="text-stone-700 italic">
              "Llegué a Centro Cristiano Gosén en un momento muy difícil de mi
              vida. Encontré una familia que me recibió con los brazos abiertos
              y me mostró el amor de Cristo. Hoy mi vida está completamente
              transformada."
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-amber-200 rounded-full flex items-center justify-center text-amber-700 font-bold text-xl mr-3">
                J
              </div>
              <div>
                <h3 className="font-semibold text-stone-800">Juan Pérez</h3>
                <p className="text-sm text-stone-500">Miembro desde 2020</p>
              </div>
            </div>
            <p className="text-stone-700 italic">
              "Los estudios bíblicos de los jueves han transformado mi
              entendimiento de la Palabra de Dios. Ahora puedo aplicar las
              escrituras a mi vida diaria y he experimentado un crecimiento
              espiritual increíble."
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-amber-200 rounded-full flex items-center justify-center text-amber-700 font-bold text-xl mr-3">
                L
              </div>
              <div>
                <h3 className="font-semibold text-stone-800">Laura Ramírez</h3>
                <p className="text-sm text-stone-500">Miembro desde 2019</p>
              </div>
            </div>
            <p className="text-stone-700 italic">
              "Mi hijo ha florecido en el ministerio de niños. Los maestros son
              dedicados y amorosos, y él ahora conoce historias bíblicas y
              versículos que comparte con entusiasmo en casa. ¡Estamos muy
              agradecidos!"
            </p>
          </div>
        </div>
        <div className="text-center mt-10">
          <a href="#compartir" className="inline-block bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-md font-medium transition-colors">
            Comparte Tu Testimonio
          </a>
        </div>
      </div>
    </section>;
}