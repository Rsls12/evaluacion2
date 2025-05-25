import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';

import './index.css'
import App from './home/app.jsx'; 
import Cart from './routes/Cart.jsx';
import Checkout from './routes/Checkout.jsx';
import Fin from './routes/Fin.jsx';
import Resultados from './resultados.jsx';// ✅ Asegúrate que la ruta y nombre estén correctos

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "cart",
    element: <Cart />
  },
  {
    path: "form",
    element: <Checkout />
  },
  {
    path: "end",
    element: <Fin />
  },
  {
    path: "resultados",  // ✅ Esta es la nueva ruta para los resultados
    element: <Resultados />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
