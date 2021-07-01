import './styles.scss'

export const Item = ({title, price, img}) => {
    return (
        <div className="card">
            <img src={img} className="card-img-top imgg" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{price}</p>                    
                </div>    
        </div>
        
    )
}