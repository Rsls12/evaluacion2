import ListaProductos from './ListaProductos/ListaProductos';
import ResumenFinal from '../Cart/ResumenCompra/ResumenCompra';
import DireccionEnvio from './DireccionEnvio/DireccionEnvio';
import { useCart } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';
import "./Fin.css"


const Fin = () => {
  const { vaciarCarrito, limpiarDireccion } = useCart();
  const navigate = useNavigate();

  const volverInicio = () => {
    vaciarCarrito();        // 🔁 limpia productos
    limpiarDireccion();     // 🧼 limpia datos de envío
    navigate('/catalogo');  
  };

  return (
    <div className="fin-container">
      <h2>Orden completada :)</h2>
      <p>Gracias por tu compra</p>

      <div className="fin-flex">
        <ListaProductos />
        <div className="fin-derecha">
          <ResumenFinal />
          <DireccionEnvio />
        </div>
      </div>

      <div>
        <button onClick={volverInicio}>
          Volver al inicio
        </button>
      </div>
    </div>
  );
};

export default Fin;
