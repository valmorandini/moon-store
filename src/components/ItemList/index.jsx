
import { Item } from '../Item';

export const ItemList = (producto) => {
    
    return (
        <div>
            <Item title={producto.title} img={producto.img} price={producto.price}/>
        </div>
    )
}