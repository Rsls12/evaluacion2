import ProductForm from "../ProductsForm/productForm.jsx"

function AddProduct() {
  const handleSubmit = (formData) => {
    console.log("Crear producto:", formData)
    // Aquí iría la lógica para crear el producto
    alert("Producto creado con éxito!")
  }

  return <ProductForm mode="add" onSubmit={handleSubmit} />
}

export default AddProduct
