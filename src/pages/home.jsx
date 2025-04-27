import Header from '../components/header.jsx'
import Footer from '../components/footer.jsx'
import ProduktFetch from '../hooks/produktFetch.jsx';

function Home() {
    return (
        <div>
            <Header />
            <ProduktFetch>
                {({products, error}) =>
                <div>
                    <p>Test av produkt data</p>
                    {error && <p>Fel: {error}</p>}

                    {products.length === 0 && !error ? (
                        <p>Laddar ....</p>
                    ): (
                        <ul>
                            {products.map((products) => (
                                <li key={products.id}>
                                    <h2>{products.title}</h2>
                                    <p>{products.price}</p>
                                </li>
                                
                            ))}
                        </ul>
                    )}
                </div>
                }
                </ProduktFetch>

                <p>Test för att se om detta är home page</p>
                <p>Det som behövs göras här är att: </p>
                <ul>
                    <li>Skappa boxar och utseändet för dem.</li>
                    <li>Hämta data från DummyJSON och organisera den.</li>
                    <li>Länka boxarna till ditaljsidan för produkterna</li>
                </ul>
            <Footer />
        </div>

    )
}

export default Home;