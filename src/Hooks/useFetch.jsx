import { collection, getDocs } from 'firebase/firestore/lite';
import { useState, useEffect } from 'react'
import { db } from '../config/fireBaseConfig';

const useFetch = (collectionName) => {
    
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState([]);

    useEffect(()=>{
        const fetchProducts = async () => {
            try {
                const productRef = collection(db, collectionName)
                const snapshot = await getDocs(productRef)

                const productsList = snapshot.docs.map((doc, index)=>({
                    id: index,
                    ...doc.data()
                }))
                setData(productsList);
                setLoading(false);
            } catch (error) {
                console.log('Error al realizar la consulta: ' + error)
                setError(error);
                setLoading(false);
            }
        }
        fetchProducts()
    }, []);
    return { data, loading, error}
}
 


export default useFetch
