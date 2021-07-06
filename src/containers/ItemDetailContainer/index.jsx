
import { ItemDetail } from '../../components/ItemDetail'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'



export const ItemDetailContainer = () => {
    const {id} = useParams()
    let [producto, setProducto] = useState();
    let [loading, setLoading] = useState(true);
    
    async function getData() {
        const response = await fetch(`https://api.mercadolibre.com/items/${id}`)
        const data = await response.json();
        return data;    
    }
    
    useEffect(() => {
            const waitForData = async () => {
                let data = await getData('');
                setProducto(data);
                setLoading(false);           
            }
    
            waitForData();
        }, [])

    if (loading) return <h1>Cargando..</h1>

    return (
        <div>
            <div>
                <ItemDetail  producto={producto} />
            </div>
        </div>
    )
}


