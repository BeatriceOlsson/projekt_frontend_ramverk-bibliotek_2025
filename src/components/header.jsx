import { useState } from "react"
import './header.modules.css'


export default function Header() {
    const [drop,setDrop]= useState(false);

    function handelClick (){
        if(drop === true){
            setDrop(false);
        }else{
            setDrop(true);
        }
    }
 return (
    <header>
        <menu>
            <button onClick={(handelClick)}>Meny</button>
            {drop && (
                <div className="menyDrop">
                    <div className="drop home">Home</div>
                    <div className="drop shopingCart">Shoping Cart</div>
                </div>
            )}
        </menu>
        <h1>Min e-handel</h1>
        <img src="/assets/mobile-shopping.png" alt="Sites icon" />
    </header>
 )   
}