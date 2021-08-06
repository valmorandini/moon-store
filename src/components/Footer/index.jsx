import './styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';


export const Footer = () => {
    return (
        <div className="footer-container">
            <div>
                <p className="cFooter"><FontAwesomeIcon icon={faCopyright}/> 2021 - Todos los derechos reservados</p>
            </div>
            <div className="redes-container">
                <a href="#"><img className="redes-img" src="../../../images/facebook-brands.svg" alt="facebook" /></a>
                <a href="#"><img className="redes-img" src="../../../images/twitter-brands.svg" alt="twitter" /></a>
                <a href="#"><img className="redes-img" src="../../../images/instagram-brands.svg" alt="instagram" /></a>
             
            </div>
        </div>
    )
}