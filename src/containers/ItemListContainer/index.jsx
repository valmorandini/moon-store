import './styles.scss'
import { ItemList } from '../../components/ItemList'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'



export const ItemListContainer = () => {
    const { categoryName } = useParams();
    let [productos, setProductos] = useState([]);

    async function getData() {
        const response = await fetch("https://api.mercadolibre.com/sites/MLA/search?q=ropaanime")
        const data = await response.json();
        return data.results;
    }

    useEffect(() => {
        const waitForData = async () => {
            let data = await getData('');          
            if (!categoryName) return setProductos(data);
            const catItems = data.filter(item => item.category_id === categoryName);
            setProductos(catItems);           
        }
        waitForData();
    }, [categoryName])


    return (
        <div>
            <div className="titlecontainer" >  
                <h1 className="titlep">Productos</h1>
            </div>
            <div>
                <ItemList productos={productos}/>
            </div>
        </div>
    )
}


