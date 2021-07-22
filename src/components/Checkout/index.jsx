import './styles.scss';
import { CartContext } from '../../context/CartContext';
import {useState, useContext} from 'react';


export const Checkout = () => {
    const { cart, createOrder, total } = useContext(CartContext);
    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ phone, setPhone ] = useState('');

    return (
        <>
        <div className="container cartContainer">
            <section>
                <div class="row">
                    <div class="col-lg-8">
                        <div class="mb-3">
                            <div class="pt-4 wish-list">

                                <h5 class="mb-4">Completar datos</h5>
                                <form>
                                    <div class="form-group">
                                        <label>Nombre</label>
                                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  onInput={(e) => {setName( e.target.value)}}/>
                                    </div>
                                    <div class="form-group">
                                        <label>Email</label>
                                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  onInput={(e) => {setEmail( e.target.value)}}/>
                                    </div>
                                    <div class="form-group">
                                        <label>Telefono</label>
                                        <input type="tel" class="form-control" id="exampleInputPassword1"  onInput={(e) => {setPhone( e.target.value)}}/>
                                    </div>
                                </form>   
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
                                <button type="button" class="btn btn-primary btn-block" onClick={() =>{createOrder(name, email, phone)}}>Confirmar compra</button>
                            </div>
                        </div>
                    
                    </div>
                </div>
            </section>
        </div>
        </>
        
    )
}