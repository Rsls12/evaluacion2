import "./carrito.css"

const Carrito = () => {
    return(
        <>
            <div class="cuerpo">
  <div id="contenedor-carrito">
    <h2>Carrito de Compras</h2>
    <div class="productos">
      <div class="itemcarrito">
        <img src="ruta-de-imagen.jpg" alt="Nombre del producto" width="50" />
        <div class="info">
          <p>Nombre del producto</p>
          <p>Cantidad: 1</p>
          <p>Subtotal: S/ 00.00</p>
        </div>
      </div>
    </div>
  </div>

  <div id="contenedor-total">
    <h2>Resumen de la compra</h2>
    <div>
      <span>Productos</span>
      <span>S/. 00.00</span>
    </div>
    <div>
      <span>Delivery</span>
      <span>GRATIS</span>
    </div>
    <div>
      <span>Descuentos</span>
      <span>- S/. 0</span>
    </div>
    <hr />
    <div>
      <span id="total">Total</span>
      <span>S/. 00.00</span>
    </div>
    <button>Continuar compra</button>
  </div>
</div>

        </>
    )
}

export default Carrito;