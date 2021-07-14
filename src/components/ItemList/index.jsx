import './styles.scss'
import { Item } from '../Item';

export const ItemList = (props) => {
    
    return (
        <div className="items container">
            {props.productos.map((element, index) => {                       
                        return (
                            <span key={index}>
                                <Item title={element.title} img={element.thumbnail} price={element.price} id={element.id}/>
                            </span>
                        )
                    })}
        </div>
    )
}