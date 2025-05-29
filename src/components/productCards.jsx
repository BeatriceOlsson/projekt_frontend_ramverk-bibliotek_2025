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
        <div className="grid grid-cols-1 sm:grid-coms-2 md:grid-cols-3 gap-6 p-4">
            {products.map((product) =>
            <li key={product.id} className="border rounded-lg shadow-md p-4 flex flex-col items-center">
            <Link to={`/product/${product.id}`} className="w-full flex flex-col items-center">
                <h2 className="text xl font-semibold mb-2 text-center">{product.title}</h2>
                <p className="mb-1">Betyg: {Math.round(product.rating)}</p>
                <h3 className="mb-3 font-bold">Kosnad: {product.price}</h3>
                {product.images && product.images.length > 0 ? (
                    <img src={product.images[0]} alt={product.title} className="w-48 h-48 object-cover rounded" />
                ) : (<p>Bild kunde inte ladas</p>)}
            </Link>
            </li>
            )}
        </div>
    )
}