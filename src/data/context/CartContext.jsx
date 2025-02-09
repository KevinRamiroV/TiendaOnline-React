import { createContext, useState, useContext } from "react";
import PropTypes from 'prop-types';

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const clearCart = ()=>{
    setCartItems([]);
  }
  
  const addToCart = (product, quantity) => {
    const existingProduct = cartItems.find((item) => item.id === product.id);
    if (existingProduct) {
      setCartItems((prevCart) =>
        prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      );
    } else {
      setCartItems((prevCart) => [...prevCart, { ...product, quantity }]);
  };};
  const handleItemCartQuantity = (product, quantity) => {
    const existingProduct = cartItems.find((item) => item.id === product.id);
    if (existingProduct) {
      setCartItems((prevCart) =>
        prevCart.map((item) => {
            if (item.id === product.id) {
              const newQuantity = item.quantity + quantity;
              if (newQuantity <= 0) {
                return null; // Marca el producto para eliminación
              }
              return{ ...item, quantity: newQuantity }; // Actualiza la cantidad si es mayor a 0
            }return item;// Otros productos permanecen iguales
          }).filter(Boolean) // Elimina productos marcados como `null`
      );
    } else {
      console.log("El producto no está en el carrito.");
    }
  };

  const getTotalItems = () =>cartItems.reduce((total, item) => total + item.quantity, 0);
  CartProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };
  return (
    <CartContext.Provider value={{ cartItems, addToCart, handleItemCartQuantity, getTotalItems, clearCart }}>
      {children}
    </CartContext.Provider>
  );
  
};
