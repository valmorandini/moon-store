import './styles.scss';
import { CartContext } from '../../context/CartContext';
import { useContext } from 'react';
import { Row, Col } from "react-bootstrap";
import { ItemCart } from '../ItemCart';

export const ItemListCart = ({items}) => {
    console.log(items)
    return (
        <>
           
        <div class="row mb-4">
            {items.map(({product, qty}) => 
                <ItemCart product={product} qty={qty}></ItemCart>
            )}
            
        </div>
          <hr class="mb-4"/>
        </>
    )
}