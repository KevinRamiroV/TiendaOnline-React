import { useCart } from "../data/context/CartContext.jsx"; 
import CartItemCard from "./CartItemCard"
import { collection, addDoc } from 'firebase/firestore/lite';
import { useState, useEffect } from 'react'
import { db } from '../config/fireBaseConfig';
import { Button } from "@mui/material";

function Cart() {

  const { clearCart, cartItems } = useCart(); 
  const [confirmedPurchases, setConfirmedPurchases] = useState([]); // Estado para guardar compras confirmadas


  const uploadPurchase = async () => {
    try {
      const purchaseRef = collection(db, 'purchases')
      const purchaseItems = {items: confirmedPurchases}
      console.log(purchaseItems)
      await addDoc(purchaseRef, purchaseItems)
      console.log("Se cargo la compra a la base de datos")
    } catch (error) {
      console.log("Error al cargar la compra", error)
    }
  }

  const cartConfirm = () => {
    if (cartItems.length === 0) {
      alert("El carrito está vacío"); 
      return;
    }
    setConfirmedPurchases(prev => [...prev, cartItems]); // Guarda la compra
    clearCart(); // Limpia el carrito
    alert("Compra confirmada 🎉");
    uploadPurchase()
  };

  useEffect(()=>{
    console.log("Compras confirmadas se actualizaron", confirmedPurchases);
  }, [confirmedPurchases])
  return (
    <>
      <div className="Carrito-Home"
      style={{
        display: "grid",
        gridTemplateColumns: "1fr",
        gridTemplateRows: "0.1fr auto",
        alignItems: "center",
        justifyItems: "start",
        margin: "20px",
        height: "auto"
        
      }}>
        <h1>Carrito 🛒</h1>
        <div className="Carrito">
          {
            cartItems.map((item) => (
            <CartItemCard key={item.id} cantidad={item.quantity} {...item} />
          ))}
        </div>
      </div>
      <div className="CartConfirmButton">
          <Button variant="contained" sx={{ backgroundColor:'#6da87c' }} onClick={cartConfirm}>Confirmar</Button>
      </div>
    </>
  )
}

export default Cart
