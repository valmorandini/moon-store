import './styles.scss';
import { CartContext } from '../../context/CartContext';
import { useContext } from 'react';
import { ItemListCart } from '../../components/ItemListCart';
import Button from "react-bootstrap/Button";
import {Link} from 'react-router-dom';

export const CartContainer = () => {
    const {quantityCart, total, cart, clear} = useContext(CartContext)
    
    return (
        <>
        <div className="container cartContainer">
            <section>
                <div class="row">
                    <div class="col-lg-8">
                        <div class="mb-3">
                            <div class="pt-4 wish-list">

                                <h5 class="mb-4">Carrito (<span>{quantityCart}</span> items)</h5>
                                {cart.length == 0? 
                                <Link className="item-link" to={`/`}>Ir a comprar</Link>
                                :<>
                                    <ItemListCart items={cart}></ItemListCart>
                                    <Button className="buttonsContainer__add" onClick={clear} variant="primary">Vaciar carrito</Button> </>}
                            </div>
                        </div>
                        
                    </div>
                    <div v class="col-lg-4">
                        <div class="mb-3">
                            <div class="pt-4">
                                <h5 class="mb-3">Total de la compra</h5>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                        Subtotal
                                        <span>${total}</span>
                                    </li>
                                    <li class="list-group-item d-flex justify-content-between align-items-center px-0">
                                        Envio
                                        <span>Gratis</span>
                                    </li>
                                    <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                                        <div>
                                            <strong>Total</strong>
                                            
                                        </div>
                                        <span><strong>${total}</strong></span>
                                    </li>
                                </ul>
                                <button type="button" class="btn btn-primary btn-block">Terminar compra</button>
                            </div>
                        </div>
                    
                    </div>
                </div>
            </section>
        </div>
        </>
    )
}