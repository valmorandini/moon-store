import './styles.scss'
import { ItemCount } from '../../components/ItemCount'

export const ItemListContainer = ({greeting}) => {
    const producto = {
        nombre: "Remera",
        precio: 1300,
        stock: 5
    }
    return (
        <>
            <h1>{greeting}</h1>
            <ItemCount stock={producto.stock}/>
        </>
    )
}