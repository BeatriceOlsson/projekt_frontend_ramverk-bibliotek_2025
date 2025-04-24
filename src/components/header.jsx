import { useState } from "react"
import './header.modules.css'
import './dropDown.modules.css'




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
                    <div className="drop dropItem1">
                        <a href="/">Home</a></div>
                    <div className="drop dropItem2"><a href="/cart">Cart</a></div>
                </div>
            )}
        </menu>
        <h1>Min e-handel</h1>
        <img src="/assets/mobile-shopping.png" alt="Sites icon" />
    </header>
 )   
}