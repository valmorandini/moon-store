import './styles.scss';
import { CartContext } from '../../context/CartContext';
import {useState, useContext} from 'react';
import { CheckoutItem } from '../../components/CheckoutItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { Input } from '../../components/Input';
import Button from "react-bootstrap/Button";
import {Link} from 'react-router-dom';


export const Checkout = () => {
    const { cart, createOrder, total } = useContext(CartContext);
    const [ name, setName ] = useState({campo: '', valido: null});
    const [ email, setEmail ] = useState({campo: '', valido: null});
    const [ confirmEmail, setConfirmEmail ] = useState({campo: '', valido: null});
    const [ phone, setPhone ] = useState({campo: '', valido: null});
    const [formValido, setFormValido ] = useState(null)
    
    const expresiones = {
        nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
        correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        telefono: /^\d{7,14}$/ // 7 a 14 numeros.
    }

    const validarEmail = () =>{
        if(email.campo.length > 0) {
            if(email.campo !== confirmEmail.campo){
                setConfirmEmail((prevState) => {
                    return {...prevState, valido: 'false'}
                })
            }else{
                setConfirmEmail((prevState) => {
                    return {...prevState, valido: 'true'}
                })
            }
        }
    }

    const validarFormulario = () =>{
        if(
            name.valido === 'true' &&
            email.valido === 'true' &&
            confirmEmail.valido === 'true' &&
            phone.valido === 'true' 
        ){
            setFormValido(true)
            createOrder(name.campo, email.campo, phone.campo)
            setName({campo: '', valido: null})
            setEmail({campo: '', valido: null})
            setConfirmEmail({campo: '', valido: null})
            setPhone({campo: '', valido: null})
        }else{
            setFormValido(false)
        }
        
    }
    

    return (
        <>
        <div className="container cartContainer">
            <section>
                <div className="row">
                    <div className="col-lg-8">
                        <div className="mb-3">
                            <div className="pt-4 wish-list">

                                <h5 className="mb-4">Completar datos</h5>
                                <form>
                                    <Input 
                                        type="text" 
                                        label="Nombre" 
                                        id="name" 
                                        leyendaError="El Nombre solo puede contener letras y espacios." 
                                        expresionRegular={expresiones.nombre} 
                                        estado={name} 
                                        cambiarEstado={setName}
                                    />
                                    <Input 
                                        type="email" 
                                        label="Email" 
                                        id="email" 
                                        leyendaError="Ingresa una dirección de correo electrónico válida." 
                                        expresionRegular={expresiones.correo} 
                                        estado={email} 
                                        cambiarEstado={setEmail}
                                    />
                                    <Input 
                                        type="text" 
                                        label="Confirmar Email" 
                                        id="email2" 
                                        leyendaError="La dirección de correo electrónico no coincide."  
                                        estado={confirmEmail} 
                                        cambiarEstado={setConfirmEmail}
                                        funcion={validarEmail}
                                    />
                                    <Input 
                                        type="tel" 
                                        label="Teléfono" 
                                        id="phone" 
                                        leyendaError="Ingresa un número telefónico válido." 
                                        expresionRegular={expresiones.telefono}
                                        estado={phone} 
                                        cambiarEstado={setPhone}
                                    />
                                </form>   
                                {formValido === false &&
                                <p className="m-error">
                                    <FontAwesomeIcon icon={faExclamationCircle}/>
                                    <b> Error: </b> Por Favor rellena los datos correctamente.
                                </p>}
                            </div>
                        </div>
                        
                    </div>
                    <div v className="col-lg-4">
                        <div className="mb-3">
                            <div className="pt-4">
                            <h5>Tus productos</h5>
                                {cart.length === 0?
                                    <>
                                    <p className="mb-4">Carrito vacio</p> 
                                    </>
                                    :cart.map(({product, quantity}) => 
                                    <CheckoutItem product={product} qty={quantity}></CheckoutItem>
                                )}
                            </div>
                            <div className="pt-4">
                                <h5 className="">Total de la compra</h5>
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
                                    <Link className="item-link" to={`/`}><Button className="buttonsContainer__add"  variant="primary">Ir a comprar</Button></Link>
                                </>
                                :<>
                                    <button type="button" className="btn btn-block" onClick={validarFormulario}>Confirmar compra</button>
                                </>}
                                
                            </div>
                        </div>
                    
                    </div>
                </div>
            </section>
        </div>
        </>
        
    )
}