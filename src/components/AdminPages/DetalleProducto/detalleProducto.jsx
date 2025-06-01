import ProductForm from "../ProductsForm/productForm.jsx"

function EditProduct() {
  // Datos del producto a editar (normalmente vendrían de una API o props)
  const productData = {
    name: "Uvas",
    presentation: "500g",
    category: "Frutas y verduras",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    stock: "24",
    status: "Activo",
    imageUrl: "https://media.istockphoto.com/id/803721418/es/foto/uva-uva-oscuro-uvas-con-hojas-aisladas-con-trazado-de-recorte-profundidad-de-campo.jpg?s=612x612&w=0&k=20&c=KzDmSehsvUbOCDBXeU_REfP3etlYmNu1CuxBdzLC9q4=", // En un caso real sería una URL de imagen
  }

  const handleSubmit = (formData) => {
    console.log("Editar producto:", formData)
    // Aquí iría la lógica para actualizar el producto
    alert("Producto editado con éxito!")
  }

  const handleCancel = () => {
    console.log("Cancelar edición")
    // Aquí iría la lógica para cancelar (ej: navegar hacia atrás)
  }

  return <ProductForm mode="edit" initialData={productData} onSubmit={handleSubmit} onCancel={handleCancel} />
}

export default EditProduct
