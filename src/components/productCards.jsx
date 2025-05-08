import { Link } from "react-router-dom";
import useProduktFetch from "../hooks/produktFetch";


export function ProductCard () {
    const {products, error} = useProduktFetch();

    
    if (error){
        return <p>Fell uppstog: {error}</p>
    }
    
    if (products.length === 0) {
        return <h2>Loading....</h2>
    }

    return (
        <div>
            {products.map((product) =>
            <li key={product.id}>
            <Link to={`/product/${product.id}`}>
                <h2>{product.title}</h2>
                <p>Betyg: {Math.round(product.rating)}</p>
                <h3>Kosnad: {product.price}</h3>
                {product.images && product.images.length > 0 ? (
                    <img src={product.images[0]} alt={product.title} width='200px' />
                ) : (<p>Bild kunde inte ladas</p>)}
            </Link>
            </li>
            )}
        </div>
    )
}