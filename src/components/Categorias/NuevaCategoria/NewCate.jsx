import "./NuevaCat.css"

function NewCate({ visible, onClose }) {
  if (!visible) return null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Nueva categoría</h2>
        <form>
          <label>Nombre</label>
          <input type="text" placeholder="Nombre de la categoría" />

          <label>Descripción</label>
          <textarea placeholder="Descripción del producto..." />

          <button type="button" className="modal-btn">
            Crear categoría
          </button>
        </form>
      </div>
    </div>
  )
}

export default NewCate
