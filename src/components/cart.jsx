

export default function Cart({ cart }) {

    const priceTotal= cart.reduce((sum, item) =>
       sum + item.price * item.amount, 0 );

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
                        <img src={item.image} alt={item.title} />
                        <p>Pris: {item.price}</p>
                        <p>Antal: {item.amount}</p>
                    </div>
                ))}
                <h2>Total pris: {priceTotal}</h2>
                <button>Gå vidare för att beställa</button>
                </>
            )}
        </div>
    )
}