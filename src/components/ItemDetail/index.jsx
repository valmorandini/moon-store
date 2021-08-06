import './styles.scss';
import React, {useState, useContext} from 'react';
import { ItemCount } from '../ItemCount';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faCheck } from '@fortawesome/free-solid-svg-icons';

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
                <div>
                    <h1 className="titulo">{item.props.title}</h1>
                    <h2 className="precio"> ${item.props.price}</h2>
                </div>
                    <hr className="hr-c"/>
                <div >
                    {!random ? <ItemCount stock={item.props.stock} item={item.props} onAdd={onAdd}/>  : 
                    <>
                    <h5 style={{ color: 'green' }}><FontAwesomeIcon icon={faCheck}/> Agregado al carrito</h5>
                    <Link to="/"> <Button className="buttonsContainer__add"  variant="primary">Seguir comprando</Button></Link>
                    <Link to="/cart"> <Button className="buttonsContainer__add"  variant="primary">Terminar Compra</Button></Link>
                    </> }  
                </div>
                <div>
                    <h6><FontAwesomeIcon icon={faTruck}/> Envio gratis</h6>
                </div>
            </div>
        </div>
    )
}