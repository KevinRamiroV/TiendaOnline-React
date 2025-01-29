import '../styles/styles.css';
import PropTypes from 'prop-types';
import ItemList from './ItemList';
import { useEffect, useState } from 'react';
import { CircularProgress, Box } from '@mui/material';
import useFetch from '../Hooks/useFetch';

const ItemListContainer = ({ selectedCategory }) => {
  const { data, loading, error } = useFetch('products');
  const [items, setItems] = useState([]);
  
  useEffect(() => {
    if (loading) return; // Espera a que termine de cargar
    if (data.length === 0) return; // Espera a que data tenga contenido
  
    console.log('Data obtenida:', data);
  
    const products = data;
    if (selectedCategory) {
      setItems(products.filter((product) => product.categoria === selectedCategory));
    } else {
      setItems(products);
    }
  }, [data, selectedCategory, loading]);



  return (
    <div className='items-container'>
      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}
        >
          <CircularProgress size={60} sx={{ color: '#6da87c'}}/>
        </Box>
      ) : (
        <ItemList items={items} />
      )}
    </div>
  );
};

ItemListContainer.propTypes = {
 selectedCategory: PropTypes.string.isRequired,
};

export default ItemListContainer;
