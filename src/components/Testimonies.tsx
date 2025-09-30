import React from 'react';
/*
  DEV NOTE: Estos versículos (RVR1960) son placeholders temporales para evitar falsos testimonios en producción. Planeamos reemplazarlos con testimonios reales de hermanos de la congregación en cuanto los recopilemos.
*/
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
                S
              </div>
              <div>
                <h3 className="font-semibold text-stone-800">Salmo 34:8</h3>
                <p className="text-sm text-stone-500">Reina-Valera 1960</p>
              </div>
            </div>
            <p className="text-stone-700 italic">
              "Gustad, y ved que es bueno Jehová; Dichoso el hombre que confía en él."
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-amber-200 rounded-full flex items-center justify-center text-amber-700 font-bold text-xl mr-3">
                J
              </div>
              <div>
                <h3 className="font-semibold text-stone-800">Jeremías 29:11</h3>
                <p className="text-sm text-stone-500">Reina-Valera 1960</p>
              </div>
            </div>
            <p className="text-stone-700 italic">
              "Porque yo sé los pensamientos que tengo acerca de vosotros, dice Jehová, pensamientos de paz, y no de mal, para daros el fin que esperáis."
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-amber-200 rounded-full flex items-center justify-center text-amber-700 font-bold text-xl mr-3">
                M
              </div>
              <div>
                <h3 className="font-semibold text-stone-800">Mateo 11:28</h3>
                <p className="text-sm text-stone-500">Reina-Valera 1960</p>
              </div>
            </div>
            <p className="text-stone-700 italic">
              "Venid a mí todos los que estáis trabajados y cargados, y yo os haré descansar."
            </p>
          </div>
        </div>
        <div className="text-center mt-10">
          <a href="#contacto" onClick={(e) => { e.preventDefault(); const section = document.getElementById('contacto'); section?.scrollIntoView({ behavior: 'smooth', block: 'start' }); setTimeout(() => { const message = document.getElementById('message') as HTMLElement | null; if (message) { try { (message as any).focus?.(); } catch {} message.classList.remove('field-nudge'); void (message as any).offsetWidth; message.classList.add('field-nudge'); } }, 400); }} className="inline-block bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-md font-medium transition-colors">
            Comparte Tu Testimonio
          </a>
        </div>
      </div>
    </section>;
}