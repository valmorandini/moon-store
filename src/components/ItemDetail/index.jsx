import React, {useState, useContext} from 'react';
import './styles.scss';
import { ItemCount } from '../ItemCount';
import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { CartContext } from '../../context/CartContext';


export const ItemDetail = (item) => {
    const [random, setRandom] = useState(null)
    const {addItem} = useContext(CartContext)

    const onAdd = (item, counter) => {
        addItem(item, counter);
        setRandom(counter)
    }
    return (
        <div className="dContainer">
            <div>
                <img className="imgDetail" src={item.props.img} alt="..." />
            </div>
            <div className="detalle">
                <h5 className="titulo">{item.props.title}</h5>
                <div >
                    <p className="precio">Precio: ${item.props.price}</p>
                    {!random ? <ItemCount stock={item.props.stock} item={item.props} onAdd={onAdd}/>  : 
                    <>
                    <Link to="/"> <Button className="buttonsContainer__add"  variant="primary">Seguir comprando</Button></Link>
                    <Link to="/cart"> <Button className="buttonsContainer__add"  variant="primary">Terminar Compra</Button></Link>
                    </> }  
                </div>
            </div>
        </div>
    )
}