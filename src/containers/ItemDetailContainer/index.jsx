
import { ItemDetail } from '../../components/ItemDetail'
import { useEffect, useState } from 'react';



export const ItemDetailContainer = ({greeting}) => {

    let [producto, setProducto] = useState([]);

    async function getData() {
        const response = await fetch("https://api.mercadolibre.com/sites/MLA/search?q=zapatillas")
        const data = await response.json();
        return data.results;
    }

    useEffect(() => {
        const waitForData = async () => {
            let data = await getData('');
            console.log(data);           
            let aux = data.map(element => {
                return {
                    title: element.title,
                    img: element.thumbnail,
                    price: element.price,
                }
            });
            setProducto(aux[0]);           
        }

        waitForData();
    }, [])


    return (
        <div>
            <div>
                <ItemDetail  producto={producto} />
            </div>
        </div>
    )
}


