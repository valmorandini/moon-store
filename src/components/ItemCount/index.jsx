import React, {useState, useContext} from 'react';
import {Button} from 'react-bootstrap'
import './styles.scss'

export const ItemCount = ({stock, item, onAdd}) => {
    const [counter, setCounter] = useState(1)
    console.log(item)
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
            <p>Stock: {stock}</p>
            <div className="buttonsContainer">
                <div className="buttonsContainer__count">
                    <button onClick={restar}>-</button>
                    <input type="number" value={counter}/>
                    <button onClick={sumar}>+</button>
                </div>
                <Button className="buttonsContainer__add" onClick={() => onAdd(item, counter)} variant="primary">Agregar al carrito</Button>
            </div>
        </>
        :
        <p>Sin stock</p>
        }
        </div>
    )
}