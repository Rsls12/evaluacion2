import "./NuevaCat.css"

import { useState } from "react"

function NewCate({ isOpen, onClose }) {
  const [showMsg, setShowMsg] = useState(false)

  if (!isOpen) return null

  const handleAgregar = () => {
    setShowMsg(true)
    setTimeout(() => {
      setShowMsg(false)
      onClose()
    }, 2500) // Cierra luego de 2.5 segundos
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Nueva categoría</h2>

        <label>Nombre de la categoría</label>
        <input type="text" placeholder="Nombre de la categoría" />

        <label>Descripción</label>
        <textarea placeholder="Descripción del producto..." rows="3" />

        <div className="modal-actions">
          <button className="btn-cancelar" onClick={onClose}>Cancelar</button>
          <button className="btn-guardar" onClick={handleAgregar}>
            Agregar categoría
          </button>
        </div>

        {showMsg && <p className="msg-exito">✅ CATEGORÍA AGREGADA</p>}
      </div>
    </div>
  )
}

export default NewCate