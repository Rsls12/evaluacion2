import FinPage from '../components/Fin/Fin'
import { useCart } from '../context/CartContext'
import { Navigate } from 'react-router-dom'
const Fin = () => {
  const { carrito, direccion } = useCart();

  // 🚫 Si no hay dirección o carrito vacío, redirigir a /catalogo
  if (carrito.length > 0 || direccion) {
    return <FinPage />;
  } else {
    return <Navigate to="/catalogo" replace />;
  }
};

export default Fin;