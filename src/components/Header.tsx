import React, { useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return <header className="bg-stone-800 text-white sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <img src="/IMG_20250904_085233.jpg" alt="Logo IPUM" className="h-14 w-14 rounded-full mr-3" />
          <div>
            <h1 className="text-xl font-bold">Centro Cristiano Gosén</h1>
            <p className="text-xs text-stone-300">
              IPUM - Todo el evangelio para todo México
            </p>
          </div>
        </div>
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li>
              <a href="#inicio" className="hover:text-amber-300 transition-colors">
                Inicio
              </a>
            </li>
            <li>
              <a href="#servicios" className="hover:text-amber-300 transition-colors">
                Servicios
              </a>
            </li>
            <li>
              <a href="#pastor" className="hover:text-amber-300 transition-colors">
                Pastor
              </a>
            </li>
            <li>
              <a href="#ministerios" className="hover:text-amber-300 transition-colors">
                Ministerios
              </a>
            </li>
            <li>
              <a href="#eventos" className="hover:text-amber-300 transition-colors">
                Eventos
              </a>
            </li>
            <li>
              <a href="#testimonios" className="hover:text-amber-300 transition-colors">
                Testimonios
              </a>
            </li>
            <li>
              <a href="#contacto" className="hover:text-amber-300 transition-colors">
                Contacto
              </a>
            </li>
          </ul>
        </nav>
        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={toggleMenu}>
          {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>
      {/* Mobile Navigation */}
      {isMenuOpen && <nav className="md:hidden bg-stone-700">
          <ul className="flex flex-col py-2">
            <li>
              <a href="#inicio" className="block px-4 py-2 hover:bg-stone-600" onClick={toggleMenu}>
                Inicio
              </a>
            </li>
            <li>
              <a href="#servicios" className="block px-4 py-2 hover:bg-stone-600" onClick={toggleMenu}>
                Servicios
              </a>
            </li>
            <li>
              <a href="#pastor" className="block px-4 py-2 hover:bg-stone-600" onClick={toggleMenu}>
                Pastor
              </a>
            </li>
            <li>
              <a href="#ministerios" className="block px-4 py-2 hover:bg-stone-600" onClick={toggleMenu}>
                Ministerios
              </a>
            </li>
            <li>
              <a href="#eventos" className="block px-4 py-2 hover:bg-stone-600" onClick={toggleMenu}>
                Eventos
              </a>
            </li>
            <li>
              <a href="#testimonios" className="block px-4 py-2 hover:bg-stone-600" onClick={toggleMenu}>
                Testimonios
              </a>
            </li>
            <li>
              <a href="#contacto" className="block px-4 py-2 hover:bg-stone-600" onClick={toggleMenu}>
                Contacto
              </a>
            </li>
          </ul>
        </nav>}
    </header>;
}