

export function useHandelProductAmount (cart ,setCart) {

    //Adderar prudukt till cart oavset om det redan fins, kollar om det fins i lagret.
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


    return{
        cart, addToCart, removeCart, clearItem, clearCart,
    };
};