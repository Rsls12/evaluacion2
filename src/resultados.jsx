import React, { useState } from 'react';
import "./resultados.css";  
import productosData from './data/Productos'
import { filtrarProductos } from "./home/js/busqueda"; 
import { useNavigate } from 'react-router-dom';
import { useCart } from './context/CartContext';

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

      {/* Header */}
      <header className="top-header">
        <div className="logo">
          Mi-Tiendita<span className="dot">•</span>
        </div>
        <input
          type="text"
          className="search"
          placeholder="Buscar un producto..."
          value={filtro}
          onChange={e => setFiltro(e.target.value)}
        />
        <div className="acciones">
          <button onClick={irCarrito} className="btn-secundario">🛒 Carrito</button>
          <button className="btn-secundario">👤 Usuario</button>
        </div>
      </header>

      {/* Menú */}
      <nav className="menu">
        <ul>
          <li>Categorías</li>
          <li>Productos</li>
          <li>Nosotros</li>
          <li className="ofertas">⭐ OFERTAS</li>
        </ul>
      </nav>

      {/* Filtro lateral y resultados */}
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
               <img src={p.imagen} alt={p.nombre} className="producto-img" />
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


          {/* Footer */}
      <footer className="footer">
        <div className="footer-section">
          <h4>Síguenos</h4>
          <div className="social-icons">
            <img src="/img/facebook.svg" alt="Facebook" />
            <img src="/img/x.svg" alt="X" />
            <img src="/img/instagram.svg" alt="Instagram" />
            <img src="/img/youtube.svg" alt="YouTube" />
          </div>
        </div>
        <div className="footer-section">
          <h4>Nosotros</h4>
          <p>Condiciones</p>
          <p>Responsabilidad social</p>
          <p>Nuestras tiendas</p>
        </div>
        <div className="footer-section">
          <h4>Atención al cliente</h4>
          <p>Atención al cliente</p>
          <p>Horario de atención</p>
          <p>Preguntas frecuentes</p>
        </div>
        <div className="footer-section">
          <h4>Políticas y condiciones</h4>
          <p>Políticas de datos personales</p>
          <p>Condición de promociones</p>
          <p>Términos y condiciones</p>
        </div>
      </footer>
    </div>



  );
}

export default Resultados;
