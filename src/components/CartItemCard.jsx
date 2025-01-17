import { Card, CardContent, CardMedia, Typography, Divider, Box, Button } from "@mui/material";
import { useCart } from "../data/context/CartContext.jsx"; 
import PropTypes from "prop-types";
import { Link } from "react-router-dom";


function CartItemCard({ id, nombre, precio, descripcion, cantidad, imagenes }) {
    const { cartItems } = useCart();
    const product = cartItems.find((item) => item.id === id);
    const decrementValue = -1;
    const IncrementValue = 1;
    
    const { handleItemCartQuantity } = useCart();
    const handleDecreaseQuantity = () =>{
        console.log(product);
        handleItemCartQuantity(product, decrementValue);
    }
    const handleIncrementQuantity = () =>{
        console.log(product);
        handleItemCartQuantity(product, IncrementValue);
    }
    if (!product) {
        return <h2>El producto no existe</h2>;
      }
    return (
        <>
            <Card className="Cart-card">
                <Link to={`/productos/${id}`} className="cart-link-card">
                    <CardMedia 
                        sx={{ 
                            height: "150px", 
                            width: "150px", 
                            backgroundSize: "contain", 
                            backgroundPosition: "center", 
                            margin: "auto", 
                            borderRadius: "12px" 
                        }} 
                        image={imagenes[0]} 
                        title="Ir al producto" 
                    />
                </Link>  
                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                    <Divider orientation="vertical" textAlign="center" sx={{ margin: "5px" }} />
                </Box>
                <CardContent sx={{ width: "auto", height: "100px" }}>
                    <Typography variant="h5" component="div">{nombre}</Typography>
                    <Typography className="text-description" variant="body2" sx={{ color: "text.secondary" }}>{descripcion}</Typography>
                </CardContent>
                <CardContent sx={{display:"flex", flexDirection:"column", alignItems:"center", marginTop:"3em"}}>
                    <Typography variant="h6" component="div">Precio: <strong>${precio}</strong></Typography>
                    <Typography sx={{ fontSize: "15px", marginTop:"1em", fontWeight:"bold" }} variant="h6" component="div">Cantidad: {cantidad}</Typography>
                </CardContent>
                <CardContent>
                    <Box sx={{ display:"flex", alignItems:"center", gap:"1em", marginTop:"3em" }}>
                        <Button 
                            variant="contained" 
                            sx={{ backgroundColor:'#6da87c' }} 
                            onClick={handleDecreaseQuantity}
                        >
                            -
                        </Button>
                        <Button 
                            variant="contained" 
                            sx={{ backgroundColor:'#6da87c' }} 
                            onClick={handleIncrementQuantity}
                        >
                            +
                        </Button>
                    </Box>
                </CardContent>
            </Card>
        </>
    );
};

CartItemCard.propTypes = {
    nombre: PropTypes.string,
    id: PropTypes.number,
    precio: PropTypes.number,
    descripcion: PropTypes.string,
    cantidad: PropTypes.number,
    imagenes: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default CartItemCard;

