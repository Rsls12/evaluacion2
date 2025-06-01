import { useState, useRef, useEffect } from "react"
import "./productForm.css"
import NewCate from "../../Categorias/NuevaCategoria/NewCate.jsx"

function ProductForm({
  mode = "add", // "add" o "edit"
  initialData = null,
  onSubmit,
  onCancel,
}) {
  const [mostrarModalCategoria, setMostrarModalCategoria] = useState(false)

  const [formData, setFormData] = useState({
    name: "",
    presentation: "",
    category: "",
    description: "",
    stock: "",
    image: null,
    status: "Activo",
  })

  const [imagePreview, setImagePreview] = useState(null)
  const fileInputRef = useRef()

  const categories = [
    "Frutas y verduras",
    "Lácteos y huevos",
    "Carnes, aves y pescados",
    "Panadería",
    "Bebidas",
    "Cuidado personal",
    "Limpieza",
  ]

  useEffect(() => {
    if (mode === "edit" && initialData) {
      setFormData({
        name: initialData.name || "",
        presentation: initialData.presentation || "",
        category: initialData.category || "",
        description: initialData.description || "",
        stock: initialData.stock || "",
        image: initialData.image || null,
        status: initialData.status || "Activo",
      })

      if (initialData.imageUrl) {
        setImagePreview(initialData.imageUrl)
      }
    }
  }, [mode, initialData])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleImageUpload = (e) => {
    const file = e.target.files[0]
    if (!file) return
    setFormData({ ...formData, image: file })
    const previewURL = URL.createObjectURL(file)
    setImagePreview(previewURL)
  }

  const handleDragOver = (e) => {
    e.preventDefault()
    e.currentTarget.classList.add("dragover")
  }

  const handleDragLeave = (e) => {
    e.currentTarget.classList.remove("dragover")
  }

  const handleDrop = (e) => {
    e.preventDefault()
    e.currentTarget.classList.remove("dragover")
    const file = e.dataTransfer.files[0]
    if (!file) return
    setFormData({ ...formData, image: file })
    const previewURL = URL.createObjectURL(file)
    setImagePreview(previewURL)
  }

  const handleSelectImage = () => {
    fileInputRef.current.click()
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (onSubmit) {
      onSubmit(formData)
    } else {
      console.log(`${mode === "add" ? "Crear" : "Editar"} producto:`, formData)
      alert(`Producto ${mode === "add" ? "creado" : "editado"} con éxito!`)

      if (mode === "add") {
        setFormData({
          name: "",
          presentation: "",
          category: "",
          description: "",
          stock: "",
          image: null,
          status: "Activo",
        })
        setImagePreview(null)
      }
    }
  }

  const handleAddCategory = () => {
    setMostrarModalCategoria(true) // 🔥 Muestra la modal emergente
  }

  const title = mode === "add" ? "Agregar un producto" : "Editar"
  const buttonText = mode === "add" ? "+ Crear producto" : "✏️ Editar producto"

  return (
    <div className="product-form-container">
      <div className="form-header">
        <h1>{title}</h1>
        {mode === "edit" && (
          <div className="status-indicator">
            <span className={`status-badge ${formData.status.toLowerCase()}`}>● {formData.status}</span>
          </div>
        )}
      </div>

      <div className="product-form-wrapper">
        <form onSubmit={handleSubmit} className="product-form">
          <div className="form-grid">
            <div className="form-left">
              <div className="form-group">
                <label htmlFor="name">Nombre del producto</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Nombre del producto"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="presentation">Presentación</label>
                <input
                  type="text"
                  id="presentation"
                  name="presentation"
                  placeholder="Presentación"
                  value={formData.presentation}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="category">Categoría</label>
                <div className="category-container">
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="" disabled>
                      Seleccione la categoría del producto
                    </option>
                    {categories.map((category, index) => (
                      <option key={index} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                  <button
                    type="button"
                    className="add-category-btn"
                    onClick={handleAddCategory}
                  >
                    +
                  </button>

                  <NewCate
                    isOpen={mostrarModalCategoria}
                    onClose={() => setMostrarModalCategoria(false)}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="description">Descripción</label>
                <textarea
                  id="description"
                  name="description"
                  placeholder="Descripción del producto..."
                  value={formData.description}
                  onChange={handleInputChange}
                  rows="5"
                  required
                ></textarea>
              </div>
            </div>

            <div className="form-right">
              <div className="form-group">
                <label>Imagen {mode === "edit" ? "- Cambiar" : ""}</label>
                <div
                  className="image-upload-area"
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                >
                  {imagePreview ? (
                    <img src={imagePreview} alt="Vista previa" className="image-preview" />
                  ) : (
                    <>
                      <div className="image-placeholder">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="64"
                          height="64"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#aaaaaa"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                          <circle cx="8.5" cy="8.5" r="1.5"></circle>
                          <polyline points="21 15 16 10 5 21"></polyline>
                        </svg>
                      </div>
                      <p>Arrastra la imagen a esta zona</p>
                      <p>o</p>
                    </>
                  )}
                  <input
                    type="file"
                    ref={fileInputRef}
                    style={{ display: "none" }}
                    onChange={handleImageUpload}
                    accept="image/*"
                  />
                  <button type="button" className="select-image-btn" onClick={handleSelectImage}>
                    {mode === "edit" ? "Cambiar imagen" : "Seleccionar imagen"}
                  </button>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="stock">Stock</label>
                <input
                  type="number"
                  id="stock"
                  name="stock"
                  placeholder="Stock"
                  value={formData.stock}
                  onChange={handleInputChange}
                  min="0"
                  required
                />
              </div>

              {mode === "edit" && (
                <div className="form-group">
                  <label htmlFor="status">Estado</label>
                  <select id="status" name="status" value={formData.status} onChange={handleInputChange}>
                    <option value="Activo">Activo</option>
                    <option value="Inactivo">Inactivo</option>
                  </select>
                </div>
              )}
            </div>
          </div>

          <div className="form-actions">
            {mode === "edit" && onCancel && (
              <button type="button" className="cancel-btn" onClick={onCancel}>
                Cancelar
              </button>
            )}
            <button type="submit" className="submit-btn">
              {buttonText}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ProductForm
