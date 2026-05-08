export default function Footer() {
  return (
    <footer className="bg-haikrom-dark-blue text-white mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Empresa */}
          <div>
            <h4 className="text-lg font-clash font-semibold mb-4">Haikrom</h4>
            <p className="text-sm text-gray-300 font-montserrat">
              Soluciones de pintura de vanguardia para arquitectura contemporánea.
            </p>
          </div>

          {/* Servicios */}
          <div>
            <h4 className="text-lg font-clash font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2 text-sm font-montserrat">
              <li><a href="#" className="text-gray-300 hover:text-white transition">Pintura Industrial</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Recubrimientos</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Asesoría Técnica</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Proyectos</a></li>
            </ul>
          </div>

          {/* Recursos */}
          <div>
            <h4 className="text-lg font-clash font-semibold mb-4">Recursos</h4>
            <ul className="space-y-2 text-sm font-montserrat">
              <li><a href="#" className="text-gray-300 hover:text-white transition">Guías Técnicas</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Tendencias</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Fichas Técnicas</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Blog</a></li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-lg font-clash font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2 text-sm font-montserrat text-gray-300">
              <li>📧 info@haikrom.com</li>
              <li>📞 +52 (555) 123-4567</li>
              <li>📍 México</li>
            </ul>
          </div>
        </div>

        {/* Divisor */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Bottom footer */}
        <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-400 font-montserrat">
          <p>&copy; 2025 Haikrom. Todos los derechos reservados.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition">Política de Privacidad</a>
            <a href="#" className="hover:text-white transition">Términos de Servicio</a>
            <a href="#" className="hover:text-white transition">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
