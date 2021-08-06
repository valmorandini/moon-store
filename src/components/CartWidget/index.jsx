import './styles.scss';
import { CartContext } from '../../context/CartContext';
import { useContext } from "react";
import { Badge } from "react-bootstrap";

const badgeStyle = {
  verticalAlign: "top",
  marginLeft: -4,
  fontSize: "65%",
  opacity: "85%",
  paddingLeft: "0.5em",
  paddingRight: "0.5em",
  paddingTop: "0.2em",
};

export const CartWidget = () => {
    const {quantityCart} = useContext(CartContext)
  
    return (
        <>
        <div className="cartWidgetContainer">
            <div>
                <a className="cartNavbar" href="/cart">
                    <img className="cartLogo" src="../../../images/cart.png" alt="" />
                    <Badge pill variant="light" style={badgeStyle}>{quantityCart}</Badge>
                </a>  
            </div> 
        </div>
        </>
    )
}