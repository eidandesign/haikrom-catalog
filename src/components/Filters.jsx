export default function Filters({
  categories,
  selectedCategory,
  setSelectedCategory,
  sortBy,
  setSortBy,
  priceRange,
  setPriceRange,
  productsCount
}) {
  const handlePriceChange = (e, index) => {
    const newRange = [...priceRange]
    newRange[index] = Number(e.target.value)
    if (newRange[0] <= newRange[1]) {
      setPriceRange(newRange)
    }
  }

  return (
    <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Categorías */}
        <div>
          <label className="block text-sm font-montserrat font-semibold text-haikrom-dark-blue mb-3">
            Categoría
          </label>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-haikrom-red"
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        {/* Ordenamiento */}
        <div>
          <label className="block text-sm font-montserrat font-semibold text-haikrom-dark-blue mb-3">
            Ordenar por
          </label>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-haikrom-red"
          >
            <option value="nombre">Nombre (A-Z)</option>
            <option value="precio-bajo">Precio (Menor a Mayor)</option>
            <option value="precio-alto">Precio (Mayor a Menor)</option>
            <option value="stock">Disponibilidad</option>
          </select>
        </div>

        {/* Rango de precio */}
        <div>
          <label className="block text-sm font-montserrat font-semibold text-haikrom-dark-blue mb-3">
            Precio Mínimo
          </label>
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-600">$</span>
            <input
              type="number"
              value={priceRange[0]}
              onChange={(e) => handlePriceChange(e, 0)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-haikrom-red"
              min="0"
              max="1500"
              step="50"
            />
          </div>
        </div>

        {/* Precio máximo */}
        <div>
          <label className="block text-sm font-montserrat font-semibold text-haikrom-dark-blue mb-3">
            Precio Máximo
          </label>
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-600">$</span>
            <input
              type="number"
              value={priceRange[1]}
              onChange={(e) => handlePriceChange(e, 1)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-haikrom-red"
              min="0"
              max="1500"
              step="50"
            />
          </div>
        </div>
      </div>

      {/* Información de resultados */}
      <div className="mt-4 text-sm text-gray-600 font-montserrat">
        <span className="font-semibold text-haikrom-dark-blue">{productsCount}</span> productos encontrados
      </div>
    </div>
  )
}
