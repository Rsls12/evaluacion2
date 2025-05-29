import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CartProvider from "./context/CartContext.jsx" // 👈 importa tu contexto

import './index.css';
import App from './home/app.jsx'; 
import Cart from './routes/Cart.jsx';
import Checkout from './routes/Checkout.jsx';
import Fin from './routes/Fin.jsx';
import Catalogo from './routes/Catalogo.jsx';
import Resultados from './resultados.jsx';
import Dashboardpage from './routes/Dashboard.jsx';
import Cate from './routes/ListaCate.jsx';
const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/cart', element: <Cart /> },
  { path: '/form', element: <Checkout /> },
  { path: '/end', element: <Fin /> },
  { path: '/catalogo', element: <Catalogo /> },
  { path: '/resultados', element: <Resultados /> },
  { path: '/dashboard', element: <Dashboardpage /> },
  { path: '/Categorias', element: <Cate /> },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </StrictMode>
);
