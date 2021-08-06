
import { ItemDetail } from '../../components/ItemDetail'
import { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom'
import { CartContext } from '../../context/CartContext';
import Button from "react-bootstrap/Button";
import {Link} from 'react-router-dom';

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
            {item ? (item.title === undefined ? <>
            <h5>Producto no entontrado</h5>
            <Link className="item-link" to={`/`}><Button className="buttonsContainer__add"  variant="primary">Volver a la página principal</Button></Link>
            </>  : 
             <ItemDetail  props={item} />
            )
            :(  
                <>
                <br/>
                <div className="spinner-border" role="status">
                    <span className="sr-only"></span>
                </div>
                </>
            )}
            </div>
        </div>
    )
}


