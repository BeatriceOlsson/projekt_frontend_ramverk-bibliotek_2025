import { useEffect, useState } from "react";

const useProduktFetch = () => {
    const [products, setProduct] = useState([]);
    const [category, setCategory] =useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('https://dummyjson.com/products');
                
                if(!response.ok) {
                    throw new Error('Respons from network error '+ response.statusText);
                }
                const data = await response.json();
                console.log('Data', data);
                setProduct(data.products);

                const categoryList = [...new Set(data.products.map(Product => Product.category))];
                setCategory(categoryList);

            } catch (err) {
                setError(err.message);
                console.error('Error statur '+ err);
            }
        }
        fetchData();
    }, []);
    
    return {products, error, category}
}

export default useProduktFetch;