import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { CartProvider } from './data/context/CartContext';

createRoot(document.getElementById('root')).render(
  <> 
    <CartProvider>
      <App />
    </CartProvider>
  </>,
)
