import { Children, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CartProvider from "./context/CartContext.jsx"
import './index.css';
import App from './home/app.jsx'
import Cart from './routes/Cart.jsx'
import Checkout from './routes/Checkout.jsx'
import Fin from './routes/Fin.jsx'
import Catalogo from './routes/Catalogo.jsx'
import Resultados from './resultados.jsx'
import Dashboardpage from './routes/Dashboard.jsx';
import Cate from './routes/ListaCate.jsx';
import Comp from './components/Usuarios/ListaU/Comp.jsx';
import Fijo from './components/Usuarios/Dett/Fijo.jsx';
import Orden from './components/Usuarios/Orden/Orden.jsx';
import Listilla from './components/Usuarios/Listilla/Listilla.jsx';
import RootWrapper from './components/RootWrapper.jsx';
import Login from './components/alumno3/Login.jsx';
import Register from './components/alumno3/register.jsx';
import Recover from './components/alumno3/Recover.jsx';
import DashboardAlumno3 from './components/alumno3/Dashboard.jsx';
import ProductsListF from './routes/listProducts.jsx';
import AgregarProducto from './routes/AgregarProducto.jsx';
import DetalleProducto from "./routes/DetalleProducto.jsx"

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootWrapper />,
    children: [
      { path: '/', element: <App /> },
      { path: '/cart', element: <Cart /> },
      { path: '/form', element: <Checkout /> },
      { path: '/end', element: <Fin /> },
      { path: '/catalogo', element: <Catalogo /> },
      { path: '/resultados', element: <Resultados /> },
      { path: '/dashboard', element: <Dashboardpage /> },
      { path: '/Categorias', element: <Cate /> },
      { path: '/usuarios', element: <Comp /> },
      { path: '/fijo', element: <Fijo /> },
      { path: '/orden', element: <Orden /> },
      { path: '/lista', element: <Listilla /> },
      { path: '/login', element: <Login /> },
      { path: '/register', element: <Register /> },
      { path: '/recover', element: <Recover /> },
      { path: '/dashboardalumno3', element: <DashboardAlumno3 /> },
      { path: '/listaProductos', element: <ProductsListF /> },
      { path: '/agregarProducto', element: <AgregarProducto /> },
      { path: '/modificarProducto', element: <DetalleProducto /> }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </StrictMode>
);
