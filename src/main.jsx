import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { 
  createBrowserRouter,
  RouterProvider
 } from 'react-router'

import './index.css'
import App from './App.jsx'
import Cart from './routes/Cart.jsx';
import Checkout from './routes/Checkout.jsx';
import Fin from './routes/Fin.jsx';
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
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
