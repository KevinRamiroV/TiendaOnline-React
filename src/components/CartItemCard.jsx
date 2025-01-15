import { Card, CardContent, CardMedia, Typography, Divider, Box } from "@mui/material";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function CartItemCard({ id, nombre, precio, descripcion, cantidad, imagenes }) {
    return (
        <>
          
            <Card className="Cart-card">
              <Link to={`/productos/${id}`} className="cart-link-card">
                <CardMedia sx={{ height: "150px", width: "150px", backgroundSize: "contain", backgroundPosition: "center", margin: "auto", borderRadius: "12px" }} image={imagenes[0]} title="Ir al producto" />
              </Link>  
              <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                <Divider orientation="vertical" textAlign="center" sx={{ margin: "5px" }} />
              </Box>
              <CardContent sx={{ width: "auto", height: "100px" }}>
                <Typography variant="h5" component="div">{nombre}</Typography>
                <Typography className="text-description" variant="body2" sx={{ color: "text.secondary" }}>{descripcion}</Typography>
              </CardContent>
              <CardContent>
                <Typography variant="h6" component="div">Precio: <strong>${precio}</strong></Typography>
                <Typography sx={{ fontSize: "14px" }} variant="h6" component="div">Cantidad: {cantidad}</Typography>
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

export default CartItemCard
