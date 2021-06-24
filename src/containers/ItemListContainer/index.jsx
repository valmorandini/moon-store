import './styles.scss'
import { ItemCount } from '../../components/ItemCount'
import { ItemList } from '../../components/ItemList'
import { useEffect, useState } from 'react';
import { Item } from '../../components/Item';


export const ItemListContainer = ({greeting}) => {

    let [productos, setProductos] = useState([]);

    async function getData() {
        const response = await fetch("https://api.mercadolibre.com/sites/MLA/search?q=zapatillas")
        const data = await response.json();
        return data.results;
    }

    useEffect(() => {
        const waitForData = async () => {
            let data = await getData('');
            let aux = data.map(element => {
                return {
                    title: element.title,
                    img: element.thumbnail,
                    price: element.price
                }
            });
            setProductos(aux);           
        }

        waitForData();
    }, [])

    if(productos.length > 0) {  
        console.log(productos);
    }

    return (
        <div>
            <h1>{greeting}</h1>
            <div className="items">
                {productos.map((element, index) => {
                        // console.log(element);
                        return (
                            <span key={index}>
                                <ItemList producto={element}/>
                            </span>
                        )
                    })}
            </div>
        </div>
    )
}


