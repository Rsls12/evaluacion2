import { StrictMode } from 'react';
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
<<<<<<< HEAD
import Cate from './routes/ListaCate.jsx';
=======
import Comp from './components/Usuarios/ListaU/Comp.jsx';
import Fijo from './components/Usuarios/Dett/Fijo.jsx';
import Orden from './components/Usuarios/Orden/Orden.jsx';

>>>>>>> 9210103 (Primer commit del proyecto evaluacion2)
const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/cart', element: <Cart /> },
  { path: '/form', element: <Checkout /> },
  { path: '/end', element: <Fin /> },
  { path: '/catalogo', element: <Catalogo /> },
  { path: '/resultados', element: <Resultados /> },
  { path: '/dashboard', element: <Dashboardpage /> },
<<<<<<< HEAD
  { path: '/Categorias', element: <Cate /> },
=======
  {path:'/usuarios',element:<Comp/>},
  {path:'/fijo',element:<Fijo/>},
  {path:'/orden',element:<Orden/>}  
>>>>>>> 9210103 (Primer commit del proyecto evaluacion2)
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </StrictMode>
);
