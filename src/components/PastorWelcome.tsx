import React from 'react';
export function PastorWelcome() {
  return <section id="pastor" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center max-w-5xl mx-auto">
          <div className="md:w-2/5 mb-8 md:mb-0">
            <div className="bg-stone-100 p-2 rounded-lg shadow-md">
              <img src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Pastor Aldo Hernández" className="rounded-md w-full h-auto" />
            </div>
          </div>
          <div className="md:w-3/5 md:pl-12">
            <h2 className="text-3xl font-bold mb-4 text-stone-800">
              Mensaje del Pastor
            </h2>
            <h3 className="text-xl text-amber-700 mb-6">
              Pastor Aldo Hernández
            </h3>
            <p className="text-stone-700 mb-4">
              Queridos hermanos y hermanas, es un privilegio darles la
              bienvenida a Centro Cristiano Gosén. Nuestra visión es ser un
              lugar donde cada persona pueda experimentar el poder transformador
              del Espíritu Santo y crecer en su relación con Jesucristo.
            </p>
            <p className="text-stone-700 mb-6">
              Así como Gosén fue un lugar de refugio y provisión para el pueblo
              de Israel, nuestra iglesia está dedicada a ser un santuario
              espiritual donde puedas encontrar paz, propósito y la presencia de
              Dios en medio de los desafíos de la vida.
            </p>
            <p className="text-stone-700 mb-6">
              Te invito a unirte a nuestra familia de fe. No importa de dónde
              vengas o cuál sea tu historia, aquí hay un lugar para ti.
            </p>
            <p className="italic font-medium text-amber-800">
              "Porque donde están dos o tres congregados en mi nombre, allí
              estoy yo en medio de ellos." - Mateo 18:20
            </p>
          </div>
        </div>
      </div>
    </section>;
}