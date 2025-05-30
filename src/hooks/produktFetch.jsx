import { useEffect, useState } from "react";

const useProduktFetch = () => {
    const [products, setProduct] = useState([]);
    const [error, setError] = useState(null);

    //Hämtar data, hanterar den och retunerar data eller error
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('https://dummyjson.com/products');
                
                if(!response.ok) {
                    throw new Error('Respons from network error '+ response.statusText);
                }
                const data = await response.json();
                setProduct(data.products);

            } catch (err) {
                setError(err.message);
                console.error('Error statur '+ err);
            }
        }
        fetchData();
    }, []);
    
    return {products, error}
}

export default useProduktFetch;