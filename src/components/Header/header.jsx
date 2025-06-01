import { useEffect, useState } from 'react';
import './header.css';
import { useNavigate } from 'react-router-dom';

const HeaderPre = () => {
  const [busqueda, setBusqueda] = useState('');

  const manejarBusqueda = (e) => {
    if (e.key === 'Enter') {
      // Puedes hacer una búsqueda aquí o redirigir
      console.log('Buscar:', busqueda);
    }
  };

  const navigate = useNavigate();
  const irCarrito = () => {
  navigate('/cart');  
  };

  const irLogin = () => {
    navigate('/login');
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
          <button onClick={irCarrito} className="btn-secundario">🛒 Carrito</button>
          <button onClick={irLogin} className="btn-secundario">👤 Usuario</button>

        </div>
      </header>
    </>
  );
};

const Header = () => {
   const navigate = useNavigate();
  return (
    <div className="landing-container">
      <HeaderPre />
      <nav className="menu">
        <ul>
          <li onClick={() => navigate('/Categorias')}>Categorías</li>
          <li>Productos</li>
          <li>Nosotros</li>
          <li className="ofertas">⭐ OFERTAS</li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;