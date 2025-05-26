// src/home/js/busqueda.js

export function filtrarProductos(productos, filtro, categoria, orden) {
  let resultados = productos.filter(p =>
    (p.nombre.toLowerCase().includes(filtro.toLowerCase()) ||
     p.marca.toLowerCase().includes(filtro.toLowerCase())) &&
    (categoria === '' || p.categoria === categoria)
  );

  if (orden === 'precio') resultados.sort((a, b) => a.precio - b.precio);
 if (orden === 'nombre') resultados.sort((a, b) => a.nombre.localeCompare(b.nombre));

  return resultados;
}


export function ordenarProductos(productos, orden) {
  const copia = [...productos];
  if (orden === 'precio') {
    copia.sort((a, b) => a.precio - b.precio);
  }
  if (orden === 'nombre') {
    copia.sort((a, b) => a.nombre.localeCompare(b.nombre));
  }
  return copia;
}
