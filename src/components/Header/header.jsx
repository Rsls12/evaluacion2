import { useEffect, useState } from 'react';
import '../../home/app.css';

const HeaderPre = () => {
  const [busqueda, setBusqueda] = useState('');

  const manejarBusqueda = (e) => {
    if (e.key === 'Enter') {
      // Puedes hacer una búsqueda aquí o redirigir
      console.log('Buscar:', busqueda);
    }
  };

  return (
    <>
            <header className="top-header">
        <div className="logo">
          Mi-Tiendita<span className="dot">•</span>
        </div>
        
      {/* busqueda */}
       <input
      type="text"
      className="search"
      placeholder="Busqueda por nombre de producto, serie o marca"
      value={busqueda}
      onChange={e => setBusqueda(e.target.value)}
      onKeyDown={manejarBusqueda}
    />


        <div className="acciones">
          <button className="btn-secundario">🛒 Carrito</button>
          <button className="btn-secundario">👤 Usuario</button>
        </div>
      </header>
    </>
  );
};

const Header = () => {
  return (
    <div className="landing-container">
      <HeaderPre />
      <nav className="menu">
        <ul>
          <li>Categorías</li>
          <li>Productos</li>
          <li>Nosotros</li>
          <li className="ofertas">⭐ OFERTAS</li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;