
import './styles.scss';
import { CartContext } from '../../context/CartContext';
import { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

export const ItemCart = ({product, qty}) => {
    const {removeItem, addItem} = useContext(CartContext)
    const [counter, setCounter] = useState(qty)
    const stock = product.stock
    console.log(qty)
    
    const remove = () =>{
      removeItem(product.id);
    }
    const sumar = () => {
        if(counter<stock){
          addItem(product, counter + 1, true)
          setCounter(counter+1)
            
        }
    }
    const restar = () => {
        if(counter>1){
          addItem(product, counter - 1, true)
          setCounter(counter-1)
            
        }
    } 
    
    return (
        <>
        <hr className="hr-c"/>
        <div className="col-md-5 col-lg-3 col-xl-3">
              <div className="view zoom overlay z-depth-1 rounded mb-3 mb-md-0">
                <a href={`/item/${product.id}`}>
                  <div className="mask">
                    <img className="img-cart"src={product.img} alt={product.title}/>
                    <div className="mask rgba-black-slight"></div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-7 col-lg-9 col-xl-9">
              <div>
                <div className="d-flex justify-content-between">
                  <div className="c-title">
                    <h4>{product.title}</h4>
                    <p className="mb-0"><span><strong id="summary">${product.price}</strong></span></p >
                    <p><b>Stock:</b> {product.stock}</p>
                  </div>
                  <div className="mi9">
                  <div className="p-container">
                    <p className="mb-0"><span><strong id="summary">${product.price*counter}</strong></span></p >
                    <button className="btnTrash" onClick={remove} variant="primary"><FontAwesomeIcon icon={faTrashAlt}/></button>               
                  </div>
                  <div className="qty">
                        <span onClick={restar} className="minus bg-dark">-</span>
                        <input type="number" className="count" name="qty" value={counter}/>
                        <span onClick={sumar} className="plus bg-dark">+</span>
                  </div>
                  </div>                
                </div>
                <div>
                </div>
              </div>
            </div> 
            <hr className="hr-c"/>
        </>
    )
}

