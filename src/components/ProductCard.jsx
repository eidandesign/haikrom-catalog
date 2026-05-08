import { useState } from 'react'

export default function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false)

  const getCategoryColor = (category) => {
    switch(category) {
      case 'Pintura Arquitectonica Interior':
        return 'bg-haikrom-dark-blue'
      case 'Pintura Arquitectonica Exterior':
        return 'bg-haikrom-brown'
      case 'Primer Epoxico Rico en Zinc':
        return 'bg-gray-500'
      case 'Impermeabilizante 100% acrílico':
        return 'bg-haikrom-gray'
      case 'Pintura de Tráfico':
        return 'bg-haikrom-gold'
      default:
        return 'bg-haikrom-dark-blue'
    }
  }

  const categoryColor = getCategoryColor(product.category)

  return (
    <div
      className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:border-haikrom-red hover:shadow-lg transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Imagen del producto */}
      <div className="relative h-64 overflow-hidden bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className={`w-full h-full object-cover transition-transform duration-300 ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
        />
        
        {/* Badge de categoría */}
        <div className={`absolute top-4 right-4 ${categoryColor} text-white px-3 py-1 rounded-full text-xs font-montserrat font-semibold`}>
          {product.category.split(' ')[0]}
        </div>

        {/* Indicador de stock */}
        <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-montserrat font-semibold ${
          product.stock > 10 
            ? 'bg-green-500 text-white' 
            : product.stock > 5 
            ? 'bg-yellow-500 text-white'
            : 'bg-red-500 text-white'
        }`}>
          {product.stock} en stock
        </div>
      </div>

      {/* Contenido */}
      <div className="p-6">
        {/* Nombre */}
        <h3 className="text-lg font-clash font-semibold text-haikrom-dark-blue mb-2 line-clamp-2">
          {product.name}
        </h3>

        {/* Descripción */}
        <p className="text-sm text-gray-600 font-montserrat mb-4 line-clamp-2">
          {product.description}
        </p>

        {/* Especificaciones */}
        <div className="grid grid-cols-2 gap-3 mb-4 text-xs">
          <div className="bg-gray-50 p-2 rounded">
            <p className="text-gray-600 font-montserrat">Cobertura</p>
            <p className="font-semibold text-haikrom-dark-blue font-montserrat">{product.coverage}</p>
          </div>
          <div className="bg-gray-50 p-2 rounded">
            <p className="text-gray-600 font-montserrat">Durabilidad</p>
            <p className="font-semibold text-haikrom-dark-blue font-montserrat">{product.duration}</p>
          </div>
        </div>

        {/* Precio y botón */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
          <div>
            <p className="text-xs text-gray-600 font-montserrat">Precio</p>
            <p className="text-2xl font-clash font-bold text-haikrom-red">
              ${product.price.toLocaleString()}
            </p>
          </div>
          <button className={`px-4 py-2 rounded-lg font-montserrat font-semibold transition-all duration-300 ${
            isHovered
              ? 'bg-haikrom-red text-white'
              : 'bg-gray-100 text-haikrom-dark-blue hover:bg-haikrom-red hover:text-white'
          }`}>
            Detalles
          </button>
        </div>
      </div>
    </div>
  )
}
