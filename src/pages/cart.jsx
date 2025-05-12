import { Link } from "react-router-dom";

export default function Cart({ cart, removeCart }) {

    const priceTotal= cart.reduce((sum, item) =>
       sum + item.price * item.amount, 0 );

    const handelRemove = (id) => {
        removeCart(id);
    };

    return (
        <div>
            <h1>Kundvagn:</h1>
            { cart.length === 0 ? (
                <p>Kundvagnen är tom.</p>
            ) : (
                <>
                {cart.map((item, index) =>(
                    <div key={index}>
                        <h3>{item.title}</h3>
                        <img src={item.image} alt={item.title} height='200px' />
                        <p>Pris: {item.price}</p>
                        <p>Antal: {item.amount}</p>
                        <button onClick={() => handelRemove(item.id)}>Ta bort</button>
                    </div>
                ))}
                <h2>Total pris: {parseFloat(priceTotal).toFixed(2)}</h2>
                <Link to="/cart/cart/chekoute">
                    <button>Gå vidare för att beställa</button>
                </Link>
                </>
            )}
        </div>
    )
}