import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './app.css';
import { activarSlider } from './js/slider'; // Asegúrate que está en src/home/js/slider.js

function App() {
  useEffect(() => {
    activarSlider();
  }, []);

const [busqueda, setBusqueda] = useState('');
  const navigate = useNavigate();

  const manejarBusqueda = (e) => {
    if (e.key === 'Enter') {
      navigate(`/resultados?query=${encodeURIComponent(busqueda)}`);
    }
  };
  

  return (
    <div className="landing-container">

      {/* Encabezado */}
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

      {/* Menú */}
      <nav className="menu">
        <ul>
          <li>Categorías</li>
          <li>Productos</li>
          <li>Nosotros</li>
          <li className="ofertas">⭐ OFERTAS</li>
        </ul>
      </nav>

      {/* Banner */}
      <section className="banner">
        <img src="/img/banner.png" alt="Publicidad" />
      </section>

      {/* Categorías */}
      <section className="categorias">
        <h2>Explora las categorías</h2>
        <div className="categoria-items">
          <div className="categoria">
            <div className="circle"><img src="/img/platano.png" alt="Frutas" /></div>
            <p>Frutas y verduras</p>
          </div>
          <div className="categoria">
            <div className="circle"><img src="/img/pollo.png" alt="Carnes" /></div>
            <p>Carnes, aves y pescado</p>
          </div>
          <div className="categoria">
            <div className="circle"><img src="/img/arroz.png" alt="Abarrotes" /></div>
            <p>Abarrotes</p>
          </div>
          <div className="categoria">
            <div className="circle"><img src="/img/clorox.png" alt="Limpieza" /></div>
            <p>Limpieza</p>
          </div>
        </div>
      </section>




     <div className="caja-slider">
  <button id="izquierda" className="boton-slider">◀</button>

  <section className="mas-vendidos">
    <h2>Lo más vendido</h2>

 
    <div id="caja-productos" className="scroll-horizontal">
      <div className="producto">
        <img src="/img/polloo.png" alt="Pollo entero fresco" />
        <h4>Pollo Entero</h4>
        <p className="categoria">Carnes, aves y pescado</p>
        <p className="precio">S/9.40 X KG</p>
        <button className="agregar-btn">AGREGAR</button>
      </div>

      <div className="producto">
        <img src="/img/zanahoria.png" alt="Zanahoria" />
        <h4>Zanahoria</h4>
        <p className="categoria">Frutas y verduras</p>
        <p className="precio">S/2.50</p>
        <button className="agregar-btn">AGREGAR</button>
      </div>

      <div className="producto">
        <img src="/img/azucar.png" alt="Zanahoria" />
        <h4>Azucar</h4>
        <p className="categoria">Frutas y verduras</p>
        <p className="precio">S/2.50</p>
        <button className="agregar-btn">AGREGAR</button>
      </div>

      <div className="producto">
        <img src="/img/avena.png" alt="Zanahoria" />
        <h4>Avena</h4>
        <p className="categoria">Frutas y verduras</p>
        <p className="precio">S/2.50</p>
        <button className="agregar-btn">AGREGAR</button>
      </div>

      <div className="producto">
        <img src="/img/cafe.png" alt="Zanahoria" />
        <h4>Cafe</h4>
        <p className="categoria">Frutas y verduras</p>
        <p className="precio">S/2.50</p>
        <button className="agregar-btn">AGREGAR</button>
      </div>

      <div className="producto">
        <img src="/img/polloo.png" alt="Pollo congelado" />
        <h4>Pollo</h4>
        <p className="categoria">Carnes, aves y pescado</p>
        <p className="precio">S/8.50</p>
        <button className="agregar-btn">AGREGAR</button>
      </div>

      <div className="producto">
        <img src="/img/clorox.png" alt="Cloro Clorox" />
        <h4>Clorox</h4>
        <p className="categoria">Limpieza</p>
        <p className="precio">S/2.30</p>
        <button className="agregar-btn">AGREGAR</button>
      </div>

      <div className="producto">
        <img src="/img/avena.png" alt="Avena instantánea" />
        <h4>Avena</h4>
        <p className="categoria">Abarrotes</p>
        <p className="precio">S/2.90</p>
        <button className="agregar-btn">AGREGAR</button>
      </div>

     

    </div>
  </section>

  <button id="derecha" className="boton-slider">▶</button>
</div>

<br>
</br>


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

export default App;
