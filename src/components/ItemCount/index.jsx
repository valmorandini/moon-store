import React, {useState} from 'react';
import {Button} from 'react-bootstrap'

export const ItemCount = ({stock}) => {
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
    const onAdd = () =>{
        console.log(`Agregaste ${counter} articulos`)
    }
    
    return (
        <div>
        {stock>0 ?
        <>
            <p>Stock: {stock}</p>
            <button onClick={restar}>-</button>
            <input type="number" value={counter}/>
            <button onClick={sumar}>+</button>
            <Button onClick={onAdd} variant="primary">Agregar al carrito</Button>
        </>
        :
        <p>Sin stock</p>
        }
        </div>
    )
}