import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { IconButton, Badge } from "@mui/material";
import { Link } from 'react-router-dom';
import { useCart } from "../data/context/CartContext.jsx"; // Importar el contexto

const CartWidget = () => {
  const { getTotalItems } = useCart();

  return (
    <>
      <Link to={'carrito'}>
      <IconButton
        size="large"
        style={{color: "#f7f7f7"}}
      >
        <Badge badgeContent={getTotalItems()} color="error">
          <ShoppingCartIcon fontSize="large" color="red"/>
        </Badge>
      </IconButton>
      </Link>
    </>
  );
};

export default CartWidget;
