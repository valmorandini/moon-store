import React, {useState} from 'react';
import './styles.scss';
import { ItemCount } from '../ItemCount';
import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';


export const ItemDetail = (props) => {
    const [random, setRandom] = useState(null)
    
    function onAdd (counter) {
        setRandom(counter)
    }
    console.log(random)
    return (
        <div className="dContainer">
            <div>
                <img src={props.producto.pictures[0].url} alt="..." />
            </div>
            <div className="detalle">
                <h5 className="titulo">{props.producto.title}</h5>
                <div >
                    <p className="precio">Precio: ${props.producto.price}</p>
                    {!random ? <ItemCount stock={props.producto.available_quantity} onAdd={onAdd}/> : <Link to="/cart"> <Button className="buttonsContainer__add"  variant="primary">Terminar Compra</Button></Link>}  
                </div>
            </div>
        </div>
    )
}