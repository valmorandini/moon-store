import './styles.scss'
import { ItemList } from '../../components/ItemList'
import { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom'
import { CartContext } from '../../context/CartContext';



export const ItemListContainer = () => {
    const { products, productsCategory, setCategory } = useContext(CartContext)
    const { categoryName } = useParams();

    useEffect(() => {
        if (categoryName !== undefined){
            setCategory(categoryName);
        } 
    }, [categoryName])

    return (
        <div className="container-fluid">
            {!categoryName?
                <>
                <div className="titlecontainer" >
                    <h1 className="titlep">Todos los productos</h1> 
                </div>
                <div className="container">
                    {products.length > 0 ? <ItemList productos={products}/>
                    :(
                        <div className="spinner-border" role="status">
                            <span className="sr-only"></span>
                        </div>
                    )}
                </div>
                </> :
                <>
                <div className="titlecontainer" >
                    <h1 className="titlep">{categoryName}</h1> 
                </div>
                <div className="container">
                    {productsCategory.length > 0 ? <ItemList productos={productsCategory}/>
                    :(
                        <div className="spinner-border" role="status">
                            <span className="sr-only"></span>
                        </div>
                    )}
                </div>
                </>} 
        </div>
    )
}


