import './styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

export const Input = ({type, label, id, leyendaError, expresionRegular, estado, cambiarEstado, funcion}) => {

    const onChange = (e) => {
        cambiarEstado({...estado, campo: e.target.value})
    }

    const validacion = () => {
        if(expresionRegular){
            if(expresionRegular.test(estado.campo)){
                cambiarEstado({...estado, valido: 'true'})
            }else {
                cambiarEstado({...estado, valido: 'false'})
            }
        }
        if(funcion){
            funcion();
        }
    }

    return (
        <>
        <div className="form-group">
            <label htmlFor="name">{label}</label>
            <div className="groupInput">
                <input type={type} className="formInput" id={id} onChange={onChange} onKeyUp={validacion} onBlur={validacion}/>
                <FontAwesomeIcon className={estado.valido === null? "i-default" : (estado.valido === 'true'? "i-default" : "i-error") } icon={faTimesCircle}/>
                <FontAwesomeIcon className={estado.valido === null? "i-default" : (estado.valido === 'true'? "i-valid" : "i-default") } icon={faCheckCircle}/>
            </div>
            <p className={estado.valido === null? "i-default" : (estado.valido === 'true'? "i-default" : "l-error") }>{leyendaError}</p>
        </div>
        
        </>
    )

}
