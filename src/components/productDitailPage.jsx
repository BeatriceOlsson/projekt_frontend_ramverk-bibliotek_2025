import { useParams } from "react-router-dom"
import useProduktFetch from "../hooks/produktFetch";
import { useState } from "react";


export default function ProductDitailpage ({ addToCart, removeCart, }) {
    const { id } = useParams();
    const { products, error } = useProduktFetch();
    const [selectedAmount, setSelectedAmount ] = useState(1);


    if (error) return <p>Fel uppstog: {error}</p>;

    const product = products.find(p => p.id === parseInt(id));

    if (!product) return <p>Loading...</p>;

    //const amountInCart = getAmount(product.id);

    const handelAdd = () => {
        //console.log('cart: ', cart);
        //console.log('Product ID: ', product.id);

        addToCart({id: product.id,
            price: product.price,
            title: product.title,
            image: product.images[0],
            amount: selectedAmount }, product.stock );
    };

    const handelRemove = () => {
        removeCart(product.id);
    };


    const increasAmount = () => {
        if(selectedAmount < product.stock) {
            setSelectedAmount(prev => prev + 1);
    }};
    
    const decreasAmount = () => {
        setSelectedAmount(prev => Math.max(prev -1, 1));
    };


    return (
        <div>
        <h1>{product.title}</h1>
        <img src={product.images[0]} alt={product.title} style={{maxWidth: '300px'}}/>
        <h3>Pris: {product.price} kr</h3>
        <p>{product.description}</p>
        
        <button onClick={decreasAmount}> - </button>
        <span>{selectedAmount}</span>
        <button onClick={increasAmount}> + </button>
        <button onClick={ handelAdd }>Läg till i kundvagnen!</button>
        <button onClick={ handelRemove }>Ta bort</button>

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