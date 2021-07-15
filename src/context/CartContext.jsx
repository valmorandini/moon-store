import { useState, useEffect, createContext }  from 'react';

export const CartContext = createContext();

export const CartComponentContext = ({children}) => {
    const [cart, setCart] = useState([])
    const [quantityCart, setQuantityCart] = useState(0)
    const [total, setTotal] = useState(0)


    const updateTotal = (obj) => {
        let aux = 0;
        obj.forEach((element) => {
            aux += element.quantity * element.product.price;
        });
        setTotal(aux);
    }

    const getItem = (id) =>{
        return cart.find((p) => p.product.id === id);
    }
    
    const isInCart = (id)=> {
        return id ? undefined : getItem(id) !== undefined;
    }

    const addItem = (item, counter) => {
        if(isInCart(item.id)){
            const newCart = cart.map((cartElement) => {
                if(cartElement.id === item.id) {
                    return {...cartElement, quantity: cartElement.quantity + counter };
                } else return cartElement;
            });
            setCart(newCart);
        } else {
            setCart([...cart, {product: item, quantity:counter}]);
        }
        updateTotal(cart)
    };
    
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

     useEffect(() => {
        const localCart = localStorage.getItem("cart");
        if (!localCart) localStorage.setItem("cart", JSON.stringify([]));
        else {
          setCart(JSON.parse(localCart));
        }
     }, []);

    useEffect(() => {
        localStorage.setItem("cart",  JSON.stringify(cart));
      }, [cart]);

    console.log(cart)
    console.log(quantityCart)

    return (<CartContext.Provider value={{cart, quantityCart, total, setCart, addItem, clear, removeItem}}>
        {children}
    </CartContext.Provider>
    );
}



