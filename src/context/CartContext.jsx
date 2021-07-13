import {useState, useEffect, createContext} from 'react';

export const CartContext = createContext();

export const CartComponentContext = ({children}) => {
    const [cart, setCart] = useState([])
    const [quantityCart, setQuantityCart] = useState(0)

    const isInCart = (id) => {
        let ban = cart.product.id.includes(id)
        return ban
    }

    const addItem = (item, counter) => {
        if(isInCart(item.id)){
            for (var i in cart) {
                if(cart[i].product.id === item.id){
                    if(cart[i].quantity += counter > cart[i].product.available_quantity){
                        alert('Stock insuficiente')
                    } else {
                        cart[i].quantity += counter;
                    }
                }
            }
        }else{
            setCart([...cart, {product: item, quantity:counter}])
        }
            }
    console.log(cart);

    useEffect(() => {
        setQuantityCart(cart.length)
    }, [cart])

    const clear = () => {
        setCart([]);
    }

    const removeItem = (id) => {
        let aux = cart.filter((element) => {
            return cart.product.id !== id 
        });
        setCart(aux);
    }

    return <CartContext.Provider value={{cart, quantityCart, setCart, addItem, clear, removeItem}}>
        {children}
    </CartContext.Provider>
}