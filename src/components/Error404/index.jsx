import './styles.scss';
import {Link} from 'react-router-dom';

export const Error404 = () => {
    return (
        <div className="error-template">
            <div className="circle404">
                <h1>Oops!</h1>
                <h1>404 Not Found</h1>
            </div>
                <div className="error-details">
                   <h4>La página que estás buscando no existe.</h4> 
                </div>
                <div className="error-actions">
                    <Link to="/"><button className="btn">Volver a la página principal</button></Link>
                </div>
            </div>
    )
}