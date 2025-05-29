import './ListaProductos.css';
import { useCart } from '../../../context/CartContext';

const ListaProductos = () => {
  const { carrito } = useCart();

  return (
    <div className="lista-pedido">
      <h3 className="titulo-resumen">Resumen de compra</h3>
      {carrito.map((item) => (
        <div className="item-pedido" key={item.id}>
          <input type="checkbox" checked readOnly className="checkbox" />
          <img src={item.imagen} alt={item.nombre} className="imagen" />
          <div className="info">
            <p className="nombre">{item.nombre}</p>
            <p className="descripcion">{item.descripcion}</p>
            <p className="llega">Llega mañana</p>
          </div>
          <div className="cantidad">Cantidad: {item.cantidad}</div>
          <div className="precio">S/ {(item.precio * item.cantidad).toFixed(2)}</div>
        </div>
      ))}
    </div>
  );
};

export default ListaProductos;