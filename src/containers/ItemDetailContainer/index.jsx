
import { ItemDetail } from '../../components/ItemDetail'
import { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom'
import { CartContext } from '../../context/CartContext';



export const ItemDetailContainer = () => {
    const { item, setProductID } = useContext(CartContext);
    const { id } = useParams();
    
    useEffect(() => {
        if (id !== undefined){
            setProductID(id);
        } 
    }, [id])
    
    return (
        <div>
            <div>
            {item ? <ItemDetail  props={item} />
            :(  
                <>
                <br/>
                <div class="spinner-border" role="status">
                    <span class="sr-only"></span>
                </div>
                </>
            )}
            </div>
        </div>
    )
}


