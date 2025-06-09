import { useEffect, useState } from "react";
import { CartContext } from "./CartContext";



export function CartProvider ({ children }) {
    /*Kollar om "cart" redan har produkten i sig eller. 
    Plaserat här då al data skickas neråt och alla förändringar speglas på alla sidor*/
    const [ cart, setCart ] = useState(() => {
        const saved = localStorage.getItem('cart');
        return saved ? JSON.parse(saved) : [];
    });

    /*Fick förflyta denna kåd hitt då Vita sa ifrån*/
 const addToCart = (item, maxStock) => {
        setCart(prevCart => {
            const existing = prevCart.find(p=> p.id === item.id);
            if (existing) {
                const newAmount = existing.amount + item.amount;
                if (newAmount > maxStock) return prevCart; 
                
                return prevCart.map( p => 
                    p.id === item.id
                    ? {...p, amount: newAmount }
                    : p
                );
            }else{
                if(item.amount > maxStock) return prevCart;
                return [...prevCart, item];
            }
        });
    };
    
    //Tar bort produkten från cart med 1, når det 0 tars produkten bort.
    const removeCart = (id) => {
        setCart(prevCart =>
            prevCart.map (p => p.id ===id ? {...p, amount: p.amount - 1}: p )
            .filter(p => p.amount > 0)
        );
    };

    const clearItem = (id) => {
        setCart(prevCart => prevCart.filter( p => p.id !== id));
    };

    const clearCart = () => {
        setCart([]);
    };

    //Synkar alla ändringar i localStorage. 
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    return(
        <CartContext.Provider
        value={{ cart, setCart, addToCart, removeCart, clearCart, clearItem }}>
            { children }
        </CartContext.Provider>
     );
}