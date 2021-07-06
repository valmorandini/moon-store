import React from 'react';
import './styles.scss'
import { ItemCount } from '../ItemCount'

export const ItemDetail = (props) => {
    
    return (
        <div className="dContainer">
            <div>
                <img src={props.producto.pictures[0].url} alt="..." />
            </div>
            <div className="detalle">
                <h5 className="titulo">{props.producto.title}</h5>
                <div >
                    <p className="precio">Precio: ${props.producto.price}</p>
                    <ItemCount stock={props.producto.available_quantity}/> 
                </div>
            </div>
        </div>
    )
}