import './styles.scss'
import { ItemList } from '../../components/ItemList'
import { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom'
import { CartContext } from '../../context/CartContext';



export const ItemListContainer = () => {
    const { products, setCategory } = useContext(CartContext)
    const { categoryName } = useParams();

    useEffect(() => {
        if (categoryName !== undefined){
            setCategory(categoryName);
        } 
    }, [categoryName])

    return (
        <div className="container-fluid">
            <div className="titlecontainer" >
                {!categoryName? <h1 className="titlep">Todos los productos</h1> : <h1 className="titlep">{categoryName}</h1>}  
            </div>
            <div className="container">
            {products.length > 0 ? <ItemList productos={products}/>
            :(
                <div class="spinner-border" role="status">
                    <span class="sr-only"></span>
                </div>
            )}
                
            </div>
        </div>
    )
}


