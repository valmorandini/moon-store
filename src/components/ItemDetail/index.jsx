import React from 'react';
import './styles.scss'
import { ItemCount } from '../ItemCount'

export const ItemDetail = (props) => {
    
    return (
        <div className="dContainer">
            <div>
                <img src={props.producto.img} alt="..." />
            </div>
            <div className="detalle">
                <h5 className="titulo">{props.producto.title}</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui itaque amet, voluptas suscipit ducimus, iste tempora possimus laboriosam reprehenderit asperiores exercitationem porro.</p>
                <div >
                    <p className="precio">Precio: ${props.producto.price}</p>
                    <ItemCount stock={5}/> 
                </div>
            </div>
        </div>
    )
}