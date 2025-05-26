import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CartProvider from "./context/CartContext.jsx" // 👈 importa tu contexto

import './index.css';
import App from './App.jsx';
import Cart from './routes/Cart.jsx';
import Checkout from './routes/Checkout.jsx';
import Fin from './routes/Fin.jsx';
import Catalogo from './routes/Catalogo.jsx';

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/cart', element: <Cart /> },
  { path: '/form', element: <Checkout /> },
  { path: '/end', element: <Fin /> },
  { path: '/catalogo', element: <Catalogo /> }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </StrictMode>
);
