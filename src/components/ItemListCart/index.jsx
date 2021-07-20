import './styles.scss';
import { ItemCart } from '../ItemCart';

export const ItemListCart = ({items}) => {
    console.log(items)
    return (
        <>
        <div class="row mb-4">
            {items.map(({product, quantity}) => 
                <ItemCart product={product} qty={quantity}></ItemCart>
            )}
            
        </div>
        <hr class="mb-4"/>
        </>
    )
}