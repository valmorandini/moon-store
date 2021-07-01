import './styles.scss'
import { Item } from '../Item';

export const ItemList = (props) => {
    
    return (
        <div className="items">
            {props.productos.map((element, index) => {                       
                        return (
                            <span key={index}>
                                <Item title={element.title} img={element.img} price={element.price}/>
                            </span>
                        )
                    })}
        </div>
    )
}