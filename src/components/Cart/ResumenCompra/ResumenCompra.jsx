import { useCart } from '../../../context/CartContext';
import { useNavigate } from 'react-router-dom';
import "./ResumenCompra.css"

const ResumenCompra = () => {
  const { carrito, obtenerTotal } = useCart();
  const navigate = useNavigate();


  return (
    <div className="resumen-compra">
      <h3>Resumen de la compra</h3>

      <div className="resumen-linea">
        <span>Productos</span>
        <span>S/ {obtenerTotal().toFixed(2)}</span>
      </div>

      <div className="resumen-linea">
        <span>Delivery</span>
        <span className="verde">GRATIS</span>
      </div>

      <div className="resumen-linea">
        <span>Descuentos</span>
        <span className="rojo">- S/ 0.00</span>
      </div>

      <hr />

      <div className="resumen-total">
        <strong>Total</strong>
        <strong>S/ {obtenerTotal().toFixed(2)}</strong>
      </div>


    </div>
  );
};

export default ResumenCompra;
