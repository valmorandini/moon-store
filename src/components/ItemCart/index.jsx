
import './styles.scss';
import { CartContext } from '../../context/CartContext';
import { useContext, useState } from 'react';
import {Button} from 'react-bootstrap'

export const ItemCart = ({product, qty}) => {
    const {removeItem} = useContext(CartContext)
    const [counter, setCounter] = useState(qty)
    const stock = product.available_quantity
    
    const remove = () =>{
      removeItem(product.id);
    }
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
    return (
        <>
        <hr class="mb-4"/>
        <div class="col-md-5 col-lg-3 col-xl-3">
              <div class="view zoom overlay z-depth-1 rounded mb-3 mb-md-0">
                <a href="#!">
                  <div class="mask">
                    <img class="img-fluid w-100"src={product.thumbnail}/>
                    <div class="mask rgba-black-slight"></div>
                  </div>
                </a>
              </div>
            </div>
            <div class="col-md-7 col-lg-9 col-xl-9">
              <div>
                <div class="d-flex justify-content-between">
                  <div>
                    <h5>{product.title}</h5>
                  </div>
                  <div>
                    
                  </div>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                  <div>
                    <Button className="buttonsContainer__add" onClick={remove} variant="primary">Eliminar item</Button>
                  </div>
                  <p class="mb-0"><span><strong id="summary">${product.price}</strong></span></p >
                </div>
              </div>
            </div> 
          
        </>
    )
}
