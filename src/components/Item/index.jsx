import './styles.scss';
import {Link} from 'react-router-dom';

export const Item = ({title, price, img, id}) => {
    return (
        <div className="card">
            <Link className="item-link" to={`/item/${id}`}>
            <img src={img} className="card-img-top imgg" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">${price}</p>                    
                </div>   
            </Link> 
        </div>
        
    )
}