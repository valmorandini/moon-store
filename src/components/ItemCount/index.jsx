import './styles.scss';
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';

export const ItemCount = ({stock, item, onAdd}) => {
    const [counter, setCounter] = useState(1)

    const sumar = () => {
        if(counter<stock){
            setCounter(counter+1)
        }
    }
    const restar = () => {
        if(counter>1){
            setCounter(counter-1)
        }
    }
    
    return (
        <div>
        {stock>0 ?
        <>
            <div className="buttonsContainer">
                <h5><b>Stock:</b> {stock}</h5>
                <div className="qty2">
                    <span onClick={restar} className="minus bg-dark">-</span>
                    <input type="number" className="count" name="qty" value={counter} readOnly/>
                    <span onClick={sumar} className="plus bg-dark">+</span>
                </div> 
                <button className="btn btnAdd" onClick={() => onAdd(item, counter)} variant="primary"><FontAwesomeIcon icon={faCartPlus}/> Agregar al carrito</button>
            </div>
        </>
        :
        <>
        <h5>Sin stock</h5>
        <Link to="/"><Button className="buttonsContainer__add"  variant="primary">Volver a la página principal</Button></Link>
        </>
        }
        </div>
    )
}