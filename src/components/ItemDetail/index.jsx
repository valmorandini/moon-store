import React, {useState, useContext} from 'react';
import './styles.scss';
import { ItemCount } from '../ItemCount';
import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { CartContext } from '../../context/CartContext';


export const ItemDetail = (props) => {
    const [random, setRandom] = useState(null)
    const {addItem} = useContext(CartContext)

    const onAdd = (item, counter) => {
        addItem(item, counter);
        setRandom(counter)
    }
    return (
        <div className="dContainer">
            <div>
                <img src={props.producto.img} alt="..." />
            </div>
            <div className="detalle">
                <h5 className="titulo">{props.producto.title}</h5>
                <div >
                    <p className="precio">Precio: ${props.producto.price}</p>
                    {!random ? <ItemCount stock={props.producto.stock} item={props.producto} onAdd={onAdd}/>  : <Link to="/cart"> <Button className="buttonsContainer__add"  variant="primary">Terminar Compra</Button></Link>}  
                </div>
            </div>
        </div>
    )
}