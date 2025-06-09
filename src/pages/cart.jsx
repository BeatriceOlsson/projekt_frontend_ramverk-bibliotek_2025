import { Link } from "react-router-dom";
import { useCart } from "../context/useCart";


export default function Cart() {
    const { cart, removeCart } = useCart();

    //Beräckanr totala kosnaden
    const priceTotal= cart.reduce((sum, item) =>
       sum + item.price * item.amount, 0 );

    const handelRemove = (id) => {
        removeCart(id);
    };

    return (
        <div className="max-w-4lx mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6 text-center">Kundvagn:</h1>
            { cart.length === 0 ? (
                <p className="text-center text-2xl">Kundvagnen är tom.</p>
            ) : (
                <div className="grid gap-6">
                {cart.map((item, index) =>(
                    <div key={index} className="border round-lg shadow p-4 flex gap-4 items-center">
                        <img src={item.image} alt={item.title} className="w-40 h-40 object-contain ml-4" />
                        <div className="flex flex-1 flex-col">
                            <h3 className="text-2xl font-samibold mb-2">{item.title}</h3>
                            <p className="text-xl mb-1">Pris: {item.price}</p>
                            <p className="text-xl mb-1">Antal: {item.amount}</p>
                            <button onClick={() => handelRemove(item.id)} 
                            className="bg-blue-500 px-4 py-2 w-40 self-center rounded shadow hover: bg-gray-100">Ta bort</button>
                        </div>
                    </div>
                ))}
                <h2 className="text-2xl">Total pris: {parseFloat(priceTotal).toFixed(2)}</h2>
                <Link to="/cart/cart/chekoute">
                    <button className="bg-blue-500 px-4 py-2 rounded shadow hover:bg-gray-100">Gå vidare för att beställa</button>
                </Link>
                </div>
            )}
        </div>
    )
}