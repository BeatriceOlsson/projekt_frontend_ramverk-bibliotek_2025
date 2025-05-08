import { useParams } from "react-router-dom"
import useProduktFetch from "../hooks/produktFetch";


export default function ProductDitailpage () {
    const { id } = useParams();
    const { products, error} = useProduktFetch();

    if (error) return <p>Fel uppstog: {error}</p>;

    const product = products.find(p => p.id === parseInt(id));

    if (!product) return <p>Loading...</p>;

    return (
        <div>
        <h1>{product.title}</h1>
        <img src={product.images[0]} alt={product.title} style={{maxWidth: '300px'}}/>
        <h3>Pris: {product.price} kr</h3>
        <p>{product.description}</p>
        <p>Betyg: {product.rating}</p>

        <h4>Recensioner:</h4>
        {product.reviews && product.reviews.length > 0 ? (
            product.reviews.map((reviews, index) => (
            <div key={index}>
                <h5>{reviews.reviewerName}</h5>
                <p>{reviews.rating}</p>
                <p>{reviews.comment}</p>
                <p>{new Date(reviews.date).toLocaleDateString()}</p>
            </div>
            ))) : (
                <p>Inga resensioner fins för denna produckt.</p>
            )}
        </div>
    )
}