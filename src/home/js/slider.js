// src/home/js/slider.js
export function activarSlider() {
  const caja = document.getElementById("caja-productos");
  const btnIzq = document.getElementById("izquierda");
  const btnDer = document.getElementById("derecha");

  if (!caja || !btnIzq || !btnDer) return;

  btnIzq.addEventListener("click", () => {
    caja.scrollBy({ left: -200 });
  });

  btnDer.addEventListener("click", () => {
    caja.scrollBy({ left: 200 });
  });
}
