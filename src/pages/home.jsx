import Header from '../components/header.jsx'
import Footer from '../components/footer.jsx'

function Home() {
    return (
        <div>
            <Header />
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