import './styles.scss';
import { ItemCart } from '../ItemCart';

export const ItemListCart = ({items}) => {
    console.log(items)
    return (
        <>
        <div className="row mb-4">
            {items.map(({product, quantity}) => 
                <ItemCart product={product} qty={quantity}></ItemCart>
            )}
        </div>
        </>
    )
}