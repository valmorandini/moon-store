import { useState, useEffect, createContext }  from 'react';
import { getFirestore } from '../firebase/client';
import firebase from 'firebase/app';
import Swal from 'sweetalert2';
import '@firebase/firestore';

export const CartContext = createContext();

export const CartComponentContext = ({children}) => {
    const [products, setProducts] = useState([])
    const [productsCategory, setProductsCategory] = useState([])
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
                setProductsCategory([])
                const RESPONSE = await COLLECTION.where('category', '==', category).get()
                setProductsCategory(RESPONSE.docs.map(element => {
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
        }
        getData();
    }, [category])

    useEffect(() => {
        if (productID !== undefined){
            setItem()
            const aux= products.find(element => element.id === productID)
            setItem(aux);
        }
    }, [productID])

    const createOrder = (name, email, phone) => {
        const newOrder = { buyer: { name: name, email: email, phone: phone}, items: cart, total: total, date: firebase.firestore.Timestamp.fromDate(new Date()), estado: 'generada' }
        const db = getFirestore();
        db.collection('orders').add(newOrder).then(({id}) => {
            Swal.fire({
                title: 'Orden confirmada!',
                text: `Número de orden: ${id}`,
                footer: '♥ Gracias por la compra! ♥',
                icon: 'success', 
                confirmButtonText: 'Ok' 
              }).then(function() {
                window.location = "/";
            })
        });
        const batch = db.batch();
        const COLLECTION = db.collection("productos");
        cart.forEach((obj) =>{
            batch.update(COLLECTION.doc(obj.product.id), { stock: obj.product.stock - obj.quantity});
        });
        batch.commit().then(() => {
            clear();
        });
    }

    const updateTotal = (obj) => {
        let aux = 0;
        let size = 0
        obj.forEach((element) => {
            aux += element.quantity * element.product.price;
            size += element.quantity 
        });
        setTotal(aux);
        setQuantityCart(size);
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
        } else {
            setCart([...cart, {product: item, quantity:counter}]);
        }
    };

    useEffect(() => {
        updateTotal(cart)
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


    return (<CartContext.Provider value={{
        products, 
        category, 
        cart, 
        quantityCart, 
        total, 
        item,
        productsCategory, 
        createOrder, 
        setCart, 
        setProductID, 
        setCategory, 
        addItem, 
        clear, 
        removeItem
        }}>
        {children}
    </CartContext.Provider>
    );
};