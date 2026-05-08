import { useState } from 'react'

export default function Header({ searchTerm, setSearchTerm }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4">
        {/* Top navbar */}
        <div className="flex items-center justify-between py-6">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-12 h-12 bg-haikrom-dark-blue rounded-lg flex items-center justify-center">
              <span className="text-white font-clash font-bold text-xl">H</span>
            </div>
            <span className="ml-3 text-2xl font-clash font-medium text-haikrom-dark-blue">
              Haikrom
            </span>
          </div>

          {/* Search bar - Desktop */}
          <div className="hidden md:block flex-1 max-w-md mx-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Buscar productos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-haikrom-dark-blue"
              />
              <svg className="absolute right-3 top-2.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          {/* Menu button - Mobile */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Search bar - Mobile */}
        <div className="md:hidden mb-4">
          <input
            type="text"
            placeholder="Buscar productos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-haikrom-dark-blue"
          />
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8 pb-6">
          <a href="#" className="text-gray-700 hover:text-haikrom-dark-blue font-montserrat">
            Inicio
          </a>
          <a href="#" className="text-gray-700 hover:text-haikrom-dark-blue font-montserrat">
            Productos
          </a>
          <a href="#" className="text-gray-700 hover:text-haikrom-dark-blue font-montserrat">
            Sobre Nosotros
          </a>
          <a href="#" className="text-gray-700 hover:text-haikrom-dark-blue font-montserrat">
            Contacto
          </a>
        </nav>
      </div>
    </header>
  )
}
