import { useState } from "react"
import  Header  from "../../components/Header/header.jsx";
import "./ListaCategorias.css"

// Iconos como componentes SVG
const SearchIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="11" cy="11" r="8"></circle>
    <path d="m21 21-4.35-4.35"></path>
  </svg>
)

const EditIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
  </svg>
)

const DeleteIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="3 6 5 6 21 6"></polyline>
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
    <line x1="10" y1="11" x2="10" y2="17"></line>
    <line x1="14" y1="11" x2="14" y2="17"></line>
  </svg>
)

const ChevronLeftIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="15 18 9 12 15 6"></polyline>
  </svg>
)

const ChevronRightIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="9 18 15 12 9 6"></polyline>
  </svg>
)

function Categorias() {
  const [searchTerm, setSearchTerm] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 7

  // Lista extensa de categorías para probar la paginación (100 categorías)
  const allCategories = [
    {
      id: 1,
      name: "Frutas y verduras",
      description:
        "Productos frescos del campo, frutas de temporada y verduras orgánicas para una alimentación saludable y nutritiva.",
    },
    {
      id: 2,
      name: "Carnes, aves y pescados",
      description:
        "Carnes frescas de res, cerdo, pollo, pescados y mariscos de la mejor calidad para tus comidas principales.",
    },
    {
      id: 3,
      name: "Abarrotes",
      description:
        "Productos básicos para la despensa: arroz, frijoles, aceites, condimentos y alimentos no perecederos esenciales.",
    },
    {
      id: 4,
      name: "Panadería",
      description:
        "Pan fresco del día, pasteles, galletas, bollería y productos horneados artesanales de la mejor calidad.",
    },
    {
      id: 5,
      name: "Congelados",
      description:
        "Alimentos congelados, helados, verduras congeladas y comidas preparadas para mayor comodidad en tu hogar.",
    },
    {
      id: 6,
      name: "Juguetes",
      description:
        "Juguetes educativos, de entretenimiento y desarrollo para niños de todas las edades y gustos diversos.",
    },
    {
      id: 7,
      name: "Ropa",
      description:
        "Vestimenta para toda la familia, ropa casual, formal y accesorios de moda para todas las ocasiones.",
    },
    {
      id: 8,
      name: "Lácteos",
      description:
        "Leche, quesos, yogures, mantequilla y productos lácteos frescos de alta calidad y sabor excepcional.",
    },
    {
      id: 9,
      name: "Bebidas",
      description:
        "Refrescos, jugos naturales, agua, bebidas energéticas y alcohólicas para toda ocasión y momento del día.",
    },
    {
      id: 10,
      name: "Limpieza",
      description: "Productos de limpieza para el hogar, detergentes, desinfectantes y artículos de higiene doméstica.",
    },
    {
      id: 11,
      name: "Cuidado personal",
      description:
        "Productos de higiene personal, cosméticos, cuidado de la piel y artículos de belleza para tu bienestar.",
    },
    {
      id: 12,
      name: "Electrónicos",
      description: "Dispositivos electrónicos, accesorios tecnológicos y gadgets para el hogar y oficina moderna.",
    },
    {
      id: 13,
      name: "Hogar y jardín",
      description: "Artículos para decoración del hogar, herramientas de jardín y productos para el cuidado exterior.",
    },
    {
      id: 14,
      name: "Deportes",
      description:
        "Equipamiento deportivo, ropa deportiva y accesorios para actividades físicas y recreativas diversas.",
    },
    {
      id: 15,
      name: "Libros y revistas",
      description:
        "Literatura, libros educativos, revistas, cómics y material de lectura variado para todas las edades.",
    },
    {
      id: 16,
      name: "Mascotas",
      description:
        "Alimentos para mascotas, juguetes, accesorios y productos de cuidado animal para tus compañeros fieles.",
    },
    {
      id: 17,
      name: "Automóvil",
      description: "Accesorios para vehículos, productos de mantenimiento y herramientas automotrices especializadas.",
    },
    {
      id: 18,
      name: "Oficina",
      description:
        "Artículos de papelería, material de oficina, equipos y suministros para trabajo y estudio productivo.",
    },
    {
      id: 19,
      name: "Farmacia",
      description: "Medicamentos básicos, vitaminas, suplementos y productos de primeros auxilios para tu salud.",
    },
    {
      id: 20,
      name: "Bebé",
      description:
        "Productos para bebés, pañales, alimentos infantiles, juguetes y accesorios de cuidado especializado.",
    },
    {
      id: 21,
      name: "Cereales",
      description: "Cereales para desayuno, avena, granola y productos nutritivos para comenzar el día con energía.",
    },
    {
      id: 22,
      name: "Snacks",
      description: "Botanas, dulces, chocolates, frutos secos y aperitivos para cualquier momento del día o antojo.",
    },
    {
      id: 23,
      name: "Condimentos",
      description: "Especias, salsas, aderezos, vinagres y condimentos para realzar el sabor de tus comidas favoritas.",
    },
    {
      id: 24,
      name: "Conservas",
      description: "Alimentos enlatados, conservas caseras, mermeladas y productos de larga duración para tu despensa.",
    },
    {
      id: 25,
      name: "Pasta",
      description: "Variedad de pastas, fideos, espaguetis y productos de trigo para comidas completas y deliciosas.",
    },
    {
      id: 26,
      name: "Aceites",
      description: "Aceites de cocina, aceite de oliva, aceites especiales y grasas para cocinar con el mejor sabor.",
    },
    {
      id: 27,
      name: "Harinas",
      description:
        "Harinas de diferentes tipos, levadura, ingredientes para repostería y panadería casera tradicional.",
    },
    {
      id: 28,
      name: "Té y café",
      description: "Variedades de té, café molido, café en grano y bebidas calientes aromáticas para disfrutar.",
    },
    {
      id: 29,
      name: "Vinos y licores",
      description:
        "Selección de vinos, licores, cervezas y bebidas alcohólicas para ocasiones especiales y celebraciones.",
    },
    {
      id: 30,
      name: "Productos orgánicos",
      description:
        "Alimentos orgánicos certificados, productos naturales y opciones saludables para un estilo de vida mejor.",
    },
    {
      id: 31,
      name: "Comida internacional",
      description: "Ingredientes y productos de cocinas internacionales, sabores exóticos y especialidades del mundo.",
    },
    {
      id: 32,
      name: "Postres",
      description:
        "Ingredientes para postres, mezclas preparadas, decoraciones y dulces especiales para ocasiones únicas.",
    },
    {
      id: 33,
      name: "Herramientas",
      description: "Herramientas básicas para el hogar, equipos de reparación y utensilios de trabajo especializados.",
    },
    {
      id: 34,
      name: "Jardinería",
      description: "Semillas, plantas, fertilizantes, macetas y todo lo necesario para tu jardín y espacios verdes.",
    },
    {
      id: 35,
      name: "Decoración",
      description: "Artículos decorativos, adornos, cuadros y elementos para embellecer tu hogar con estilo único.",
    },
    {
      id: 36,
      name: "Cocina",
      description:
        "Utensilios de cocina, ollas, sartenes, electrodomésticos menores y accesorios culinarios profesionales.",
    },
    {
      id: 37,
      name: "Baño",
      description:
        "Accesorios para baño, toallas, cortinas, productos de organización y decoración para tu espacio personal.",
    },
    {
      id: 38,
      name: "Dormitorio",
      description: "Ropa de cama, almohadas, cobijas y accesorios para un descanso confortable y reparador.",
    },
    {
      id: 39,
      name: "Iluminación",
      description: "Lámparas, focos, velas, sistemas de iluminación y accesorios eléctricos para ambientar tu hogar.",
    },
    {
      id: 40,
      name: "Seguridad",
      description: "Productos de seguridad para el hogar, alarmas, candados y sistemas de protección confiables.",
    },
    {
      id: 41,
      name: "Temporada",
      description:
        "Productos estacionales, decoraciones navideñas, artículos de temporada y ocasiones especiales del año.",
    },
    {
      id: 42,
      name: "Fitness",
      description: "Equipos de ejercicio, suplementos deportivos, accesorios de gimnasio y bienestar físico integral.",
    },
    {
      id: 43,
      name: "Música",
      description:
        "Instrumentos musicales, accesorios de audio, CDs y productos relacionados con música y entretenimiento.",
    },
    {
      id: 44,
      name: "Arte y manualidades",
      description: "Materiales de arte, pinturas, pinceles, papel y suministros para proyectos creativos y artísticos.",
    },
    {
      id: 45,
      name: "Camping",
      description: "Equipos para acampar, artículos de supervivencia, mochilas y accesorios de aventura al aire libre.",
    },
    {
      id: 46,
      name: "Playa",
      description:
        "Artículos para la playa, protectores solares, toallas, juguetes acuáticos y sombrillas para el verano.",
    },
    {
      id: 47,
      name: "Escolar",
      description: "Útiles escolares, mochilas, cuadernos, material educativo y suministros estudiantiles de calidad.",
    },
    {
      id: 48,
      name: "Fiesta",
      description: "Artículos para fiestas, decoraciones, globos, piñatas y suministros para celebraciones memorables.",
    },
    {
      id: 49,
      name: "Salud",
      description: "Productos naturales para la salud, suplementos vitamínicos y artículos de bienestar integral.",
    },
    {
      id: 50,
      name: "Tecnología",
      description: "Accesorios tecnológicos, cables, cargadores, fundas y gadgets modernos para dispositivos actuales.",
    },
    {
      id: 51,
      name: "Fotografía",
      description: "Equipos de fotografía, cámaras, accesorios y productos para capturar momentos especiales.",
    },
    {
      id: 52,
      name: "Videojuegos",
      description: "Consolas, videojuegos, accesorios gaming y entretenimiento digital para todas las edades.",
    },
    {
      id: 53,
      name: "Películas",
      description: "DVDs, Blu-rays, películas clásicas y modernas para entretenimiento familiar en casa.",
    },
    {
      id: 54,
      name: "Instrumentos",
      description: "Instrumentos musicales profesionales, accesorios y equipos para músicos de todos los niveles.",
    },
    {
      id: 55,
      name: "Coleccionables",
      description: "Artículos de colección, figuras, cartas y objetos especiales para coleccionistas apasionados.",
    },
    {
      id: 56,
      name: "Antigüedades",
      description: "Objetos antiguos, artículos vintage y piezas históricas con valor sentimental y cultural.",
    },
    {
      id: 57,
      name: "Joyería",
      description: "Joyas, relojes, accesorios elegantes y piezas de bisutería para ocasiones especiales.",
    },
    {
      id: 58,
      name: "Perfumería",
      description: "Perfumes, fragancias, colonias y productos aromáticos para realzar tu presencia personal.",
    },
    {
      id: 59,
      name: "Relojes",
      description: "Relojes de pulsera, relojes de pared, cronómetros y accesorios de medición temporal.",
    },
    {
      id: 60,
      name: "Gafas",
      description: "Gafas de sol, lentes graduados, accesorios ópticos y productos para el cuidado visual.",
    },
    {
      id: 61,
      name: "Calzado",
      description: "Zapatos, botas, sandalias y calzado especializado para todas las actividades y ocasiones.",
    },
    {
      id: 62,
      name: "Bolsos",
      description: "Bolsos, carteras, mochilas y accesorios de moda para llevar tus pertenencias con estilo.",
    },
    {
      id: 63,
      name: "Sombreros",
      description: "Sombreros, gorras, boinas y accesorios para la cabeza que complementan tu look personal.",
    },
    {
      id: 64,
      name: "Cinturones",
      description: "Cinturones de cuero, tela y materiales diversos para completar tu vestimenta con elegancia.",
    },
    {
      id: 65,
      name: "Corbatas",
      description: "Corbatas, pajaritas, pañuelos y accesorios formales para ocasiones elegantes y profesionales.",
    },
    {
      id: 66,
      name: "Ropa interior",
      description: "Ropa interior cómoda y de calidad para hombres, mujeres y niños de todas las edades.",
    },
    {
      id: 67,
      name: "Pijamas",
      description: "Pijamas, camisones, ropa de dormir cómoda para un descanso placentero y reparador.",
    },
    {
      id: 68,
      name: "Trajes de baño",
      description: "Trajes de baño, bikinis, bañadores y ropa acuática para disfrutar del agua y el sol.",
    },
    {
      id: 69,
      name: "Ropa deportiva",
      description: "Ropa especializada para deportes, actividades físicas y entrenamientos de alto rendimiento.",
    },
    {
      id: 70,
      name: "Uniformes",
      description: "Uniformes escolares, laborales y profesionales para diferentes actividades y sectores.",
    },
    {
      id: 71,
      name: "Disfraces",
      description: "Disfraces, máscaras, accesorios de caracterización para fiestas temáticas y celebraciones.",
    },
    {
      id: 72,
      name: "Textiles",
      description: "Telas, hilos, materiales textiles y suministros para costura y confección artesanal.",
    },
    {
      id: 73,
      name: "Bordados",
      description: "Materiales de bordado, hilos especiales, bastidores y accesorios para trabajos decorativos.",
    },
    {
      id: 74,
      name: "Tejidos",
      description: "Lanas, agujas de tejer, patrones y materiales para crear prendas tejidas a mano.",
    },
    {
      id: 75,
      name: "Cuero",
      description: "Productos de cuero, artículos artesanales y accesorios de piel de alta calidad.",
    },
    {
      id: 76,
      name: "Madera",
      description: "Productos de madera, artesanías, muebles pequeños y objetos decorativos naturales.",
    },
    {
      id: 77,
      name: "Metal",
      description: "Objetos metálicos, herramientas, accesorios y productos de metal para diversos usos.",
    },
    {
      id: 78,
      name: "Vidrio",
      description: "Productos de vidrio, cristalería, objetos decorativos y utensilios transparentes elegantes.",
    },
    {
      id: 79,
      name: "Cerámica",
      description: "Objetos de cerámica, vajillas, macetas y artículos decorativos de barro y porcelana.",
    },
    {
      id: 80,
      name: "Plástico",
      description: "Productos plásticos, contenedores, organizadores y artículos prácticos para el hogar.",
    },
    {
      id: 81,
      name: "Papel",
      description: "Productos de papel, papelería especializada, materiales de escritura y oficina.",
    },
    {
      id: 82,
      name: "Cartón",
      description: "Productos de cartón, cajas, organizadores y materiales de embalaje resistentes.",
    },
    {
      id: 83,
      name: "Tela",
      description: "Variedad de telas, materiales textiles y suministros para proyectos de costura.",
    },
    {
      id: 84,
      name: "Hilo",
      description: "Hilos de coser, bordado, tejido y materiales para trabajos textiles especializados.",
    },
    {
      id: 85,
      name: "Botones",
      description: "Botones decorativos, funcionales, cierres y accesorios para prendas y proyectos.",
    },
    {
      id: 86,
      name: "Cremalleras",
      description: "Cremalleras, cierres, velcros y sistemas de cierre para ropa y accesorios.",
    },
    {
      id: 87,
      name: "Elásticos",
      description: "Elásticos, gomas, bandas y materiales flexibles para costura y manualidades.",
    },
    {
      id: 88,
      name: "Encajes",
      description: "Encajes, puntillas, adornos delicados y materiales decorativos para prendas elegantes.",
    },
    {
      id: 89,
      name: "Cintas",
      description: "Cintas decorativas, listones, lazos y materiales para envolver y decorar.",
    },
    {
      id: 90,
      name: "Flores",
      description: "Flores naturales, artificiales, arreglos florales y productos de floristería.",
    },
    {
      id: 91,
      name: "Plantas",
      description: "Plantas de interior, exterior, suculentas y vegetación para decorar espacios.",
    },
    {
      id: 92,
      name: "Semillas",
      description: "Semillas de flores, hortalizas, hierbas y plantas para cultivar tu propio jardín.",
    },
    {
      id: 93,
      name: "Fertilizantes",
      description: "Fertilizantes, abonos, nutrientes y productos para el cuidado y crecimiento de plantas.",
    },
    {
      id: 94,
      name: "Macetas",
      description: "Macetas, jardineras, contenedores y recipientes para plantas de todos los tamaños.",
    },
    {
      id: 95,
      name: "Tierra",
      description: "Tierra para plantas, sustratos, compost y materiales de cultivo especializados.",
    },
    {
      id: 96,
      name: "Regaderas",
      description: "Regaderas, sistemas de riego, mangueras y equipos para el cuidado del jardín.",
    },
    {
      id: 97,
      name: "Podadoras",
      description: "Herramientas de poda, tijeras, sierras y equipos para el mantenimiento de plantas.",
    },
    {
      id: 98,
      name: "Insecticidas",
      description: "Productos para control de plagas, insecticidas naturales y químicos para jardín.",
    },
    {
      id: 99,
      name: "Decoración jardín",
      description: "Elementos decorativos para jardín, estatuas, fuentes y ornamentos exteriores.",
    },
    {
      id: 100,
      name: "Mobiliario jardín",
      description: "Muebles de jardín, mesas, sillas y mobiliario para espacios exteriores.",
    },
  ]

  // Filtrar categorías basado en el término de búsqueda
  const filteredCategories = allCategories.filter(
    (category) =>
      category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      category.description.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  // Calcular paginación
  const totalPages = Math.ceil(filteredCategories.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentCategories = filteredCategories.slice(startIndex, endIndex)

  // Funciones de manejo
  const handleEdit = (id) => {
    console.log("Editar categoría:", id)
    alert(`Editar categoría con ID: ${id}`)
  }

  const handleDelete = (id) => {
    console.log("Eliminar categoría:", id)
    if (confirm("¿Estás seguro de que quieres eliminar esta categoría?")) {
      alert(`Categoría con ID ${id} eliminada`)
    }
  }

  const handleAddCategory = () => {
    console.log("Agregar nueva categoría")
    alert("Abrir formulario para agregar nueva categoría")
  }

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page)
      console.log(`Navegando a la página ${page}`)
    }
  }

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value)
    setCurrentPage(1) // Resetear a la primera página cuando se busca
  }

  // Generar números de página para mostrar
  const renderPaginationNumbers = () => {
    const pages = []
    const maxVisiblePages = 5

    if (totalPages <= maxVisiblePages) {
      // Mostrar todas las páginas si son pocas
      for (let i = 1; i <= totalPages; i++) {
        pages.push(
          <button
            key={i}
            onClick={() => goToPage(i)}
            className={`pagination-number ${currentPage === i ? "pagination-number-active" : ""}`}
          >
            {i}
          </button>,
        )
      }
    } else {
      // Lógica más compleja para muchas páginas
      if (currentPage <= 3) {
        // Mostrar primeras páginas
        for (let i = 1; i <= 4; i++) {
          pages.push(
            <button
              key={i}
              onClick={() => goToPage(i)}
              className={`pagination-number ${currentPage === i ? "pagination-number-active" : ""}`}
            >
              {i}
            </button>,
          )
        }
        pages.push(
          <span key="ellipsis1" className="pagination-ellipsis">
            ...
          </span>,
        )
        pages.push(
          <button key={totalPages} onClick={() => goToPage(totalPages)} className="pagination-number">
            {totalPages}
          </button>,
        )
      } else if (currentPage >= totalPages - 2) {
        // Mostrar últimas páginas
        pages.push(
          <button key={1} onClick={() => goToPage(1)} className="pagination-number">
            1
          </button>,
        )
        pages.push(
          <span key="ellipsis2" className="pagination-ellipsis">
            ...
          </span>,
        )
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(
            <button
              key={i}
              onClick={() => goToPage(i)}
              className={`pagination-number ${currentPage === i ? "pagination-number-active" : ""}`}
            >
              {i}
            </button>,
          )
        }
      } else {
        // Mostrar páginas del medio
        pages.push(
          <button key={1} onClick={() => goToPage(1)} className="pagination-number">
            1
          </button>,
        )
        pages.push(
          <span key="ellipsis3" className="pagination-ellipsis">
            ...
          </span>,
        )
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(
            <button
              key={i}
              onClick={() => goToPage(i)}
              className={`pagination-number ${currentPage === i ? "pagination-number-active" : ""}`}
            >
              {i}
            </button>,
          )
        }
        pages.push(
          <span key="ellipsis4" className="pagination-ellipsis">
            ...
          </span>,
        )
        pages.push(
          <button key={totalPages} onClick={() => goToPage(totalPages)} className="pagination-number">
            {totalPages}
          </button>,
        )
      }
    }

    return pages
  }

  return (
    <>
    <div className="app-container">
      {/* Main Content */}
      <main className="main-content">
        <div className="content-card">
          {/* Header */}
          <div className="card-header">
            <h2 className="card-title">Listado de categorías</h2>
          </div>

          {/* Search and Add Button */}
          <div className="card-actions">
            <div className="category-search-container">
              <input
                type="text"
                placeholder="Buscar un producto..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="category-search-input"
              />
              <span className="category-search-icon">
                <SearchIcon />
              </span>
            </div>
            <button onClick={handleAddCategory} className="add-category-button">
              <span>➕</span>
              <span>Agregar categoría</span>
            </button>
          </div>

          {/* Table */}
          <div className="table-container">
            <table className="categories-table">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Descripción</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {currentCategories.length > 0 ? (
                  currentCategories.map((category, index) => (
                    <tr key={category.id} className={index % 2 === 0 ? "" : "row-alternate"}>
                      <td className="category-name">{category.name}</td>
                      <td className="category-description">{category.description}</td>
                      <td className="category-actions">
                        <div className="action-buttons">
                          <button onClick={() => handleEdit(category.id)} className="edit-button">
                            <EditIcon />
                          </button>
                          <button onClick={() => handleDelete(category.id)} className="delete-button">
                            <DeleteIcon />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="3" className="no-results">
                      No se encontraron categorías que coincidan con la búsqueda.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="pagination-container">
              <div className="pagination">
                <button
                  onClick={() => goToPage(currentPage - 1)}
                  className="pagination-arrow"
                  disabled={currentPage === 1}
                >
                  <ChevronLeftIcon />
                </button>

                <div className="pagination-numbers">{renderPaginationNumbers()}</div>

                <button
                  onClick={() => goToPage(currentPage + 1)}
                  className="pagination-arrow"
                  disabled={currentPage === totalPages}
                >
                  <ChevronRightIcon />
                </button>
              </div>

              <div className="pagination-info">
                Página {currentPage} de {totalPages} | Mostrando {startIndex + 1}-
                {Math.min(endIndex, filteredCategories.length)} de {filteredCategories.length} categorías
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
    </>
  )
}

export default Categorias
