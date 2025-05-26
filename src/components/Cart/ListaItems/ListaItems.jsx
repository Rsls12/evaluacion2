import "./ListaItems.css"

import Item from "../Items/Items"
import { useCart } from '../../../context/CartContext';

const ListaItems = () => {
  const { carrito } = useCart();

  if (carrito.length === 0) {
    return <p>Tu carrito está vacío.</p>;
  }

  return (
    <div className="lista-items">
      {carrito.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
};

export default ListaItems;
