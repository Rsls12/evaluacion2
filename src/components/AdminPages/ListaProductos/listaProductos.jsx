import { useState } from "react"
import "./listaProductos.css"
import Pagination from "../../Categorias/Paginacion/Pag"
import filterItems from "./filterProductos.jsx"
import { useNavigate } from 'react-router-dom';

// Generate fake product data
const generateProducts = () => {
  const products = [
    {
      id: "#8123",
      name: "Uvas",
      presentation: "0.5 kg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...",
      category: "Frutas y verduras",
      stock: 10,
      image: "🍇",
    },
    {
      id: "#4343",
      name: "Peras",
      presentation: "0.1 kg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...",
      category: "Frutas y verduras",
      stock: 23,
      image: "🍐",
    },
    {
      id: "#0223",
      name: "Manzanas Rojas",
      presentation: "0.3 kg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...",
      category: "Frutas y verduras",
      stock: 21,
      image: "🍎",
    },
    {
      id: "#4344",
      name: "Sandía",
      presentation: "1 kg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...",
      category: "Frutas y verduras",
      stock: 10,
      image: "🍉",
    },
    {
      id: "#6425",
      name: "Leche gloria",
      presentation: "6 unidades",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...",
      category: "Lácteos y huevos",
      stock: 30,
      image: "🥛",
    },
    {
      id: "#5454",
      name: "Pollo entero fresco con menudencia",
      presentation: "2.2 kg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...",
      category: "Carnes, aves y pescados",
      stock: 3,
      image: "🍗",
    },
    {
      id: "#2344",
      name: "Papaya",
      presentation: "0.8 kg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...",
      category: "Frutas y verduras",
      stock: 15,
      image: "🥭",
    },
    {
      id: "#7890",
      name: "Tomates",
      presentation: "0.5 kg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...",
      category: "Frutas y verduras",
      stock: 18,
      image: "🍅",
    },
    {
      id: "#1122",
      name: "Queso fresco",
      presentation: "500g",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...",
      category: "Lácteos y huevos",
      stock: 12,
      image: "🧀",
    },
    {
      id: "#3344",
      name: "Pescado fresco",
      presentation: "1.5 kg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...",
      category: "Carnes, aves y pescados",
      stock: 8,
      image: "🐟",
    },
    {
      id: "#5566",
      name: "Plátanos",
      presentation: "1 kg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...",
      category: "Frutas y verduras",
      stock: 25,
      image: "🍌",
    },
    {
      id: "#7788",
      name: "Yogurt natural",
      presentation: "4 unidades",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...",
      category: "Lácteos y huevos",
      stock: 20,
      image: "🥛",
    },
  ]

  return products
}

function ProductsList() {
  const [currentPage, setCurrentPage] = useState(1)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("")

  const products = generateProducts()
  const productsPerPage = 7

  const filteredProducts = filterItems(products, searchTerm, ["id", "name", "description"], { category: selectedCategory })

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage)
  const currentProducts = filteredProducts.slice((currentPage - 1) * productsPerPage, currentPage * productsPerPage)

  // Obtener las categorias no repetidas
  const categories = [...new Set(products.map((product) => product.category))]

  const handleSearch = () => {
    setCurrentPage(1) // Reset to first page when searching
  }
//Comprobar botones
  const handleEdit = (productId) => {
    console.log("Editar producto:", productId)
    navigate("/modificarProducto");
  }

  const handleDelete = (productId) => {
    console.log("Eliminar producto:", productId)
  }

  const navigate = useNavigate();

  const handleAddProduct = () => {
    console.log("Agregar nuevo producto")
    navigate('/agregarProducto');
  }

  const handleCategoriesClick = () => {
    console.log("Ver categorías")
  }

  return (
    <div className="products-container">
      <h1>Listado de productos</h1>

      {/* Search and Actions Bar */}
      <div className="search-bar">
        <div className="search-input-container">
          <input
            type="text"
            placeholder="Buscar un producto..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <button onClick={handleSearch} className="search-btn">
            🔍 Buscar
          </button>
        </div>

        <div className="action-buttons">
          <button onClick={handleCategoriesClick} className="categories-btn">
            📋 Categorías
          </button>
          <button onClick={handleAddProduct} className="add-product-btn">
            ➕ Agregar producto
          </button>
        </div>
      </div>

      {/* Category Filter */}
      <div className="category-filter">
        <select
          value={selectedCategory}
          onChange={(e) => {
            setSelectedCategory(e.target.value)
            setCurrentPage(1)
          }}
          className="category-select"
        >
          <option value="">Todas las categorías</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Products Table */}
      <div className="table-container">
        <table className="products-table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Nombre</th>
              <th>Presentación</th>
              <th>Descripción</th>
              <th>Categoría</th>
              <th>Stock</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {currentProducts.map((product) => (
              <tr key={product.id}>
                <td>
                  <span className="product-id">{product.id}</span>
                </td>
                <td>
                  <div className="product-name">
                    <span className="product-emoji">{product.image}</span>
                    <span>{product.name}</span>
                  </div>
                </td>
                <td>{product.presentation}</td>
                <td className="description-cell">{product.description}</td>
                <td>{product.category}</td>
                <td>
                  <span className="stock-number">{product.stock}</span>
                </td>
                <td>
                  <div className="actions">
                    <button onClick={() => handleEdit(product.id)} className="edit-btn" title="Editar producto">
                      ✏️
                    </button>
                    <button onClick={() => handleDelete(product.id)} className="delete-btn" title="Eliminar producto">
                      🗑️
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {filteredProducts.length === 0 && (
          <div className="no-products">
            <p>No se encontraron productos que coincidan con tu búsqueda.</p>
          </div>
        )}

        {totalPages > 1 && (
          <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
        )}
      </div>
    </div>
  )
}

export default ProductsList
