import "./Formulario.css"

const Formulario = () => {
    return(
        <>
        <div className="checkout-container">
  <h2>Checkout</h2>
  <div className="checkout-flex">
    <form>
      <div className="form-group">
        <label>Dirección de envío:</label>
        <input type="text" required />
      </div>

      <div className="form-group">
        <label>Método de pago:</label>
        <select>
          <option value="tarjeta">Tarjeta de crédito</option>
          <option value="qr">Código QR</option>
        </select>
      </div>

      <div className="qr-container">
        <p>Escanea el código QR para pagar:</p>
        <img src="https://via.placeholder.com/150x150.png?text=QR" alt="QR de pago" />
      </div>

      <div>
        <div className="form-group">
          <label>Número de tarjeta:</label>
          <input type="text" required />
        </div>
        <div className="form-group">
          <label>Nombre en la tarjeta:</label>
          <input type="text" required />
        </div>
        <div className="form-group">
          <label>Fecha de vencimiento:</label>
          <input type="text" placeholder="MM/AA" required className="form-group-sm" />
          <label>CVV:</label>
          <input type="text" required className="form-group-sm" />
        </div>
      </div>

      <div className="form-group">
        <label>Método de envío:</label>
        <select>
          <option value="estandar">Envío estándar (3-5 días)</option>
          <option value="express">Envío express (24h)</option>
        </select>
      </div>

      <button type="submit">Completar Orden</button>
    </form>

    <div className="resumen">
      <h3>Resumen de pedido:</h3>

      <div className="pedido-item">
        Producto 1 - 1 x S/ 00.00 = S/ 00.00
      </div>
      <div className="pedido-item">
        Producto 2 - 2 x S/ 00.00 = S/ 00.00
      </div>

      <h4>Total: S/ 00.00</h4>
    </div>
  </div>
</div>

        </>
    )
}
export default Formulario;