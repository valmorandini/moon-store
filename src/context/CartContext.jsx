import { useState, useEffect, createContext }  from 'react';
import { getFirestore } from '../firebase/client';


export const CartContext = createContext();

export const CartComponentContext = ({children}) => {
    const [products, setProducts] = useState([])
    const [category, setCategory] = useState()
    const [cart, setCart] = useState([])
    const [quantityCart, setQuantityCart] = useState(0)
    const [total, setTotal] = useState(0)
    const [productID, setProductID] = useState()
    const [item, setItem] = useState()

    useEffect(() => {
        async function getData(){
            const DB = getFirestore();
            const COLLECTION = DB.collection("productos");
            if(category !== undefined){
                setProducts([])
                const RESPONSE = await COLLECTION.where('category', '==', category).get()
                setProducts(RESPONSE.docs.map(element => {
                return { id: element.id, ...element.data()}
            }));
            }
            if(category === undefined){
                setProducts([])
                const RESPONSE = await COLLECTION.get()
                setProducts(RESPONSE.docs.map(element => {
                return { id: element.id, ...element.data()}
            }));
            }
            if (productID !== undefined){
                setItem()
                const RESPONSE = await COLLECTION.doc(productID).get()
                setItem(RESPONSE.data());
            }

        }
        getData();
    }, [category, productID])


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
        return id ? getItem(id) !== undefined : undefined;
    }

    const addItem = (item, counter, ban) => {
        if(isInCart(item.id)){
            const newCart = cart.map((cartElement) => {
                if(cartElement.product.id === item.id) {
                    if(ban){
                        return {...cartElement, quantity: counter };
                    }else{
                    console.log(cartElement.quantity+counter)
                    return {...cartElement, quantity: cartElement.quantity + counter };
                }
                } else return cartElement;
            });
            setCart(newCart);
            updateTotal(cart)
        } else {
            setCart([...cart, {product: item, quantity:counter}]);
            updateTotal(cart)
        }
    };
    
    useEffect(() => {
        setQuantityCart(cart.length)
    }, [cart])

    const clear = () => {
        setCart([]);
    }

    const removeItem = (id) => {
        let aux = cart.filter((element) => {
            return element.product.id !== id 
        });
        setCart(aux);
        updateTotal(cart);
    }

    useEffect(() => {
        const localCart = localStorage.getItem("cart");
        if (!localCart) localStorage.setItem("cart", JSON.stringify([]));
        else {
            updateTotal(JSON.parse(localCart));
            setCart(JSON.parse(localCart));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("cart",  JSON.stringify(cart));
    }, [cart, total]);


    return (<CartContext.Provider value={{products, category, cart, quantityCart, total, item, setCart, setProductID, setCategory, addItem, clear, removeItem}}>
        {children}
    </CartContext.Provider>
    );
};