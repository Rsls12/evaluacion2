import './PagoTarjeta.css';
import { useCart } from '../../../context/CartContext';
import { useNavigate } from 'react-router-dom';
const PagoTarjeta = ({ volver }) => {
  const { vaciarCarrito } = useCart();
  const navigate = useNavigate();
  const finalizarCompra = () => {
    navigate('/end');
  };

  return (
    <div className="form-card">
      <h4>Método de pago</h4>
      <img src="https://img.freepik.com/vector-premium/tarjetas-credito_648765-5212.jpg?w=2000" alt="Tarjeta" />
      <input placeholder="Número de tarjeta" />
      <input placeholder="Nombre" />
      <div className="form-row">
        <input placeholder="Fecha de expiración" />
        <input placeholder="CVC" />
      </div>
      <div className="btn-group">
        <button onClick={volver}>← Volver</button>
        <button onClick={finalizarCompra}>Pagar</button>
      </div>
    </div>
  );
};

export default PagoTarjeta;