  const filterItems = (items, searchTerm, fieldsToSearch = [], filters = {}) => {
  return items.filter((item) => {
    const matchesSearch = fieldsToSearch.some((field) =>
      item[field]?.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )

    const matchesFilters = Object.entries(filters).every(([key, value]) =>
      value === "" || item[key] === value
    )

    return matchesSearch && matchesFilters
  })
}

export default filterItems