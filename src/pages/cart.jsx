import Header from '../components/header.jsx'
import Footer from '../components/footer.jsx'

function Cart () {
    return (
        <div>
            <Header />
            <h1>Hej detta är där användaren .....</h1>
            <p>Behöver utföra följande saker innan sidan är klar:</p>
            <ul>
                <li>Skapa grunden på hur det skall se ut.</li>
                <li>Läga till att datan som hämtas från DB visas korekt.</li>
            </ul>
            <Footer />
        </div>

    )
}

export default Cart;