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
        <div className="max-w-3xl max-auto p-6 space-y-6 ">
            <h1 className="text-3xl font-bold ">{product.title}</h1>
            <div className="flex items-center">
                <img src={product.images[0]} alt={product.title} style={{maxWidth: '300px'}} 
                className="max-w-full max-h-80 object-cover rounded-lg shadow-md flex items-start gap-x-6 mr-10"/>
                <div>
                    <h3 className="text-xl mb-10">Pris: {product.price} kr</h3>
                    <p className="text-gray-700">{product.description}</p>
                    <p className="text-lg">Betyg: {product.rating}</p>
                </div>
            </div>
            
            <div className="space-x-4">
                <button className="bg-blue-500 px-4 py-2 rounded shadow hover: bg-gray-100" onClick={decreasAmount}> - </button>
                <span>{selectedAmount}</span>
                <button className="bg-blue-500 px-4 py-2 rounded shadow hover: bg-gray-100" onClick={increasAmount}> + </button>
            </div>
            <div className="space-x-4">
                <button className="bg-blue-500 px-4 py-2 rounded shadow hover: bg-gray-100" onClick={ handelAdd }>Läg till i kundvagnen!</button>
                <button className="bg-blue-500 px-4 py-2 rounded shadow hover: bg-gray-100" onClick={ handelRemove }>Ta bort</button>
            </div>

            <div className="flex justify-center">
                <h4 className="text-2xl m-6 ">Recensioner:</h4>
            </div>
            
            {product.reviews && product.reviews.length > 0 ? (
            product.reviews.map((reviews, index) => (
            <div key={index} className="border rounded p-4 shadow mb-4 flex justify-between">
                <h5 className="m-2 ml-4 mr-4">{reviews.reviewerName}</h5>
                <p className="mr-4 m-2">Betyg: {reviews.rating}</p>
                <p className="mr-4 m-2">Kommentar: {reviews.comment}</p>
                <p className="m-2 mr-4">Publiserades: {new Date(reviews.date).toLocaleDateString()}</p>
            </div>
            ))) : (
                <p>Inga resensioner fins för denna produckt.</p>
            )}
        </div>
    )
}