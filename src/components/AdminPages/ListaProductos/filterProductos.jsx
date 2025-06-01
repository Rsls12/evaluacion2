  const filterItems = (items, searchTerm, fieldsToSearch = [], filters = {}) => {
  return items.filter((item) => {
    // Verifica si algún campo contiene el término de búsqueda
    const matchesSearch = fieldsToSearch.some((field) =>
      item[field]?.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )

    // Verifica si todos los filtros adicionales se cumplen
    const matchesFilters = Object.entries(filters).every(([key, value]) =>
      value === "" || item[key] === value
    )

    return matchesSearch && matchesFilters
  })
}

export default filterItems