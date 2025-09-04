import React from 'react';
export function Hero() {
  return <section id="inicio" className="bg-gradient-to-r from-amber-700 to-amber-900 text-white py-20 md:py-32">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Bienvenido al Centro Cristiano Gosén
        </h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
          Así como Gosén fue una tierra de nuevos comienzos, prosperidad y
          protección divina, nuestra iglesia es un lugar donde puedes comenzar
          de nuevo, encontrar restauración y comenzar un nuevo camino
          espiritual.
        </p>
        <p className="text-lg md:text-xl italic max-w-2xl mx-auto mb-10">
          "Y habitarás en la tierra de Gosén... y allí te sustentaré"
          <span className="block text-amber-300 mt-1">
            Génesis 45:10, 47:27
          </span>
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="#servicios" className="bg-white text-amber-800 hover:bg-amber-100 px-8 py-3 rounded-md font-medium transition-colors">
            Nuestros Servicios
          </a>
          <a href="#contacto" className="bg-transparent border-2 border-white hover:bg-white hover:text-amber-800 px-8 py-3 rounded-md font-medium transition-colors">
            Contáctanos
          </a>
        </div>
      </div>
    </section>;
}