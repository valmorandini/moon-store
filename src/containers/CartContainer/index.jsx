import './styles.scss';
import { CartContext } from '../../context/CartContext';
import { useContext } from 'react';
import { ItemListCart } from '../../components/ItemListCart';
import  Button from "react-bootstrap/Button";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

export const CartContainer = () => {
    const {quantityCart, total, cart, clear} = useContext(CartContext)
    
    return (
        <>
        <div className="container cartContainer">
            <section>
                <div className="row">
                    <div className="col-lg-8">
                        <div className="mb-3">
                            <div className="pt-4 wish-list">
                                {cart.length === 0? 
                                <>
                                <h5 className="mb-4"><FontAwesomeIcon icon={faExclamationCircle}/> El carrito esta vacío</h5>
                                <Link className="item-link" to={`/`}><Button className="buttonsContainer__add"  variant="primary">Ir a comprar</Button></Link>
                                </>
                                :<> 
                                    <h5 className="mb-4">Carrito (<span>{quantityCart}</span> items)</h5>
                                    <ItemListCart items={cart}></ItemListCart>
                                    <Button className="buttonsContainer__add" onClick={clear} variant="primary"><FontAwesomeIcon icon={faTrashAlt}/> Vaciar carrito</Button> 
                                    <Link to="/"> <Button className="buttonsContainer__add"  variant="primary">Seguir comprando</Button></Link>
                                    </>}
                            </div>
                        </div>
                        
                    </div>
                    <div v className="col-lg-4">
                        <div className="mb-3">
                            <div className="pt-4">
                                <h5 className="mb-3">Total de la compra</h5>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                        Subtotal
                                        <span>${total}</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                                        Envio
                                        <span>Gratis</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                                        <div>
                                            <strong>Total</strong>
                                            
                                        </div>
                                        <span><strong>${total}</strong></span>
                                    </li>
                                </ul>
                                {cart.length === 0?
                                    <>
                                    <p className="mb-4">Carrito vacio</p> 
                                    </>
                                    :
                                    <Link to="/checkout"> <Button className="buttonsContainer__add"  variant="primary">Terminar compra</Button></Link>
                                }
                            </div>
                        </div>
                    
                    </div>
                </div>
            </section>
        </div>
        </>
    )
}