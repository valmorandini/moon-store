import './styles.scss';
import { CartContext } from '../../context/CartContext';
import { useContext } from 'react';

export const CartWidget = () => {
    const quantityCart = useContext(CartContext)

    return (
        <>
            <a  href="#">
                <img className="cartLogo" src="../../../images/cart.png" alt="" />
                <p>{quantityCart}</p>
            </a>
        </>
    )
}