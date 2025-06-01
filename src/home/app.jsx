import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from "../components/Footer/Footer.jsx"; 
import './app.css';

function App() {
  const navigate = useNavigate();

  const irAResultados = () => {
    navigate('/resultados');
  };

  return (
    <div className="landing-container">


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

      {/* Más vendidos */}
      <section className="mas-vendidos">
        <h2>Lo más vendido</h2>

        <div className="scroll-horizontal">
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
            <img src="/img/azucar.png" alt="Azucar" />
            <h4>Azucar</h4>
            <p className="categoria">Frutas y verduras</p>
            <p className="precio">S/2.50</p>
            <button className="agregar-btn">AGREGAR</button>
          </div>
          <div className="producto">
            <img src="/img/avena.png" alt="Avena" />
            <h4>Avena</h4>
            <p className="categoria">Frutas y verduras</p>
            <p className="precio">S/2.50</p>
            <button className="agregar-btn">AGREGAR</button>
          </div>
          <div className="producto">
            <img src="/img/cafe.png" alt="Cafe" />
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

       <Footer />
      
    </div>
  );
}

export default App;