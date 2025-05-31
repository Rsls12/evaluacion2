
import { useState, useEffect } from 'react'
const TablaCategorias = ({ categories, onEdit, onDelete }) => {
  return (
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
          {categories.length > 0 ? (
            categories.map((category, index) => (
              <tr key={category.id} className={index % 2 === 0 ? '' : 'row-alternate'}>
                <td className="category-name">{category.name}</td>
                <td className="category-description">{category.description}</td>
                <td className="category-actions">
                  <div className="action-buttons">
                    <button onClick={() => onEdit(category.id)} className="edit-button">
                      ✏️
                    </button>
                    <button onClick={() => onDelete(category.id)} className="delete-button">
                      🗑️
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
  );
};

export default TablaCategorias;
