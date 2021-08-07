import './styles.scss';
import { ItemCart } from '../ItemCart';

export const ItemListCart = ({items}) => {
  
    return (
        <>
        <div className="row mb-4">
            {items.map(({product, quantity}) => 
                    <ItemCart key={product} product={product} qty={quantity}></ItemCart> 
            )}
        </div>
        </>
    )
}