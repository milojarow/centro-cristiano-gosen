import React from 'react';
export function HeartMessage() {
  return <section className="py-20 bg-stone-100">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h2 className="text-3xl font-bold mb-8 text-stone-800">
          Un Mensaje Para Tu Corazón
        </h2>
        <div className="bg-white p-8 md:p-12 rounded-lg shadow-md border border-stone-200">
          <h3 className="text-2xl font-semibold mb-6 text-amber-700">
            No necesitas ser perfecto para venir a Dios
          </h3>
          <p className="text-lg mb-6 text-stone-700">
            Todos sentimos un vacío en nuestro interior que solo el poder de
            Dios puede llenar. En medio de las dificultades, dudas y luchas
            diarias, Él te espera con brazos abiertos.
          </p>
          <p className="text-lg mb-8 text-stone-700">
            Centro Cristiano Gosén es un lugar para personas imperfectas
            buscando restauración. Aquí no juzgamos tu pasado, celebramos tu
            futuro en Cristo.
          </p>
          <div className="italic text-xl mb-6 border-l-4 border-amber-500 pl-4 text-left">
            "Venid a mí todos los que estáis trabajados y cargados, y yo os haré
            descansar."
            <span className="block mt-2 text-amber-700 font-medium">
              Mateo 11:28
            </span>
          </div>
          <a href="#contacto" className="inline-block bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-md font-medium transition-colors">
            Comienza Tu Camino Hoy
          </a>
        </div>
      </div>
    </section>;
}