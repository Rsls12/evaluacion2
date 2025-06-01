import React, { useState } from 'react';
import "./resultados.css";  
import productosData from '../data/Productos'
import { filtrarProductos } from "./js/busqueda"; 
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import Footer from "../components/Footer/Footer.jsx"; 

function Resultados() {
  const [filtro, setFiltro] = useState('');
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('');
  const [orden, setOrden] = useState('');
  const productosFiltrados = filtrarProductos(productosData, filtro, categoriaSeleccionada, orden);
  const navigate = useNavigate();
  const irCarrito = () => {
  navigate('/cart');  
  };
  const { agregarAlCarrito } = useCart();



  
  return (
    <div className="landing-container">
      




      {/* Filtro y resultados */}
      <div className="contenedor-resultados">
        <aside className="filtro-categorias">
          <h4>Categorías</h4>
          <ul>
            <li onClick={() => setCategoriaSeleccionada('')}>Todas</li>
            <li onClick={() => setCategoriaSeleccionada('Frutas')}>Frutas y verduras</li>
            <li onClick={() => setCategoriaSeleccionada('Carnes')}>Carnes, aves y pescados</li>
            <li onClick={() => setCategoriaSeleccionada('Desayunos')}>Desayunos</li>
            <li onClick={() => setCategoriaSeleccionada('Lacteos')}>Lácteos y huevos</li>
            <li onClick={() => setCategoriaSeleccionada('Queso')}>Queso y fiambres</li>
            <li onClick={() => setCategoriaSeleccionada('Abarrotes')}>Abarrotes</li>
            <li onClick={() => setCategoriaSeleccionada('Panaderia')}>Panadería</li>
            <li onClick={() => setCategoriaSeleccionada('Congelados')}>Congelados</li>
          </ul>
        </aside>

        <main className="contenido-resultados">
          <div className="barra-filtros">
            <select onChange={e => setOrden(e.target.value)}>
              <option value="">Ordenar por</option>
              <option value="nombre">Nombre</option>
              <option value="precio">Precio</option>
            </select>
          </div>

          <div className="lista-productos">
            {productosFiltrados.length > 0 ? (
              productosFiltrados.map(p => (
                <div className="producto-card" key={p.id}>
                <img
                  src={p.imagen}
                  alt={p.nombre}
                  className="producto-img"
                  onClick={() => navigate(`/producto/${p.id}`)}
                  
                />

                  <h5>{p.nombre}</h5>
                  <p>{p.categoria}</p>
                  <p>S/{p.precio.toFixed(2)}</p>
                  <p>Marca: {p.marca}</p>
                  <button onClick={() => agregarAlCarrito(p)} className="agregar-btn">Agregar</button>
                </div>
              ))
            ) : (
              <p>No se encontraron productos con esos criterios.</p>
            )}
          </div>
        </main>
      </div>

 <Footer />
    
    </div>



  );
}

export default Resultados;
