
import './header.modules.css'
import './dropDown.modules.css'
import { useDropdown } from '../hooks/dropdown'
import { Link } from 'react-router-dom';




export default function Header() {
    const {drop,shuldDrop}= useDropdown();

 return (
    <header>
        <menu>
            <button onClick={(shuldDrop)}>Meny</button>
            {drop && (
                <div className="menyDrop">
                    <div className="drop dropItem1">
                        <a href="/">Home</a></div>
                    <div className="drop dropItem2">
                        <a href="/cart">Cart</a></div>
                </div>
            )}
        </menu>
        <Link to='/'>
        <h1>Min e-handel</h1>
        </Link>
        <img src="/assets/mobile-shopping.png" alt="Sites icon" />
    </header>
 )   
}