import { useCart } from "../data/context/CartContext.jsx"; 
import CartItemCard from "./CartItemCard"

function Cart() {

  const { cartItems } = useCart();
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
          {/* Aca tendria que hacer el map del carrito */}
          {
            cartItems.map((item) => (
            <CartItemCard key={item.id} cantidad={item.quantity} {...item} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Cart
