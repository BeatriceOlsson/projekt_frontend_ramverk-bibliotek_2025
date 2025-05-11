

export function useHandelProductAmount (cart ,setCart) {

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
    //Vet inte om den behövs då det är osäckert på om jag använder den
    const removeCart = (id) => {
        setCart(prevCart =>
            prevCart.map (p => p.id ===id ? {...p, amount: p.amount - 1}: p )
            .filter(p => p.amount > 0)
        );
    };

    const clearItem = (id) => {
        setCart(prevCart => prevCart.filter( p => p.id !== id));
    };

    const getAmount = ( id) => {
        return cart.find( p => p.id === id) ?.amount || 0;
    };

    const clearCart = () => {
        setCart([]);
    };

    const getTotalAmount = () => {
        return cart.reduce(( total, item ) => total + item.amount, 0);
    };



    return{
        cart, addToCart, removeCart, clearItem, getAmount, clearCart, getTotalAmount,
    };
};