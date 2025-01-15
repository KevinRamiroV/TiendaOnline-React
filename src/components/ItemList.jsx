import ItemCard from "./ItemCard"
import PropTypes from "prop-types";


const ItemList = ({ items }) => {

  return (
    <div className="Products-Home">
     <div className="container">
        {
            items.map((item) => (
                <ItemCard key={item.id} {...item}  />
            ))}
     </div>
    </div>
  )
}

ItemList.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
            nombre: PropTypes.string.isRequired,
            descripcion: PropTypes.string,
            precio: PropTypes.number.isRequired,
            stock: PropTypes.number.isRequired,
            imagenes: PropTypes.arrayOf(PropTypes.string).isRequired,
        })
    ).isRequired,
};


export default ItemList