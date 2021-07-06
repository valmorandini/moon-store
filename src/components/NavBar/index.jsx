import React from 'react'
import './styles.scss'
import { CartWidget } from '../CartWidget'
import { useHistory } from 'react-router-dom'

export const NavBar = () => {
    const history = useHistory();
    const hadleChange = (e) => {
        if(e.target.value)
        history.push(`/category/${e.target.value}`)
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <img className="logo" src="../../../images/logo.png" alt="logo" />
                    <a className="navbar-brand" href="/">MoonStore</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse lcontainer" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                <select onChange={hadleChange}>
                                    <option value="">Seleccione categoría</option>
                                    <option value="MLA109042">Remeras</option>
                                    <option value="MLA109085">Buzos</option>
                                    <option value="MLA109255">Pijamas</option>
                                    <option value="MLA109279">Medias</option>
                                    <option value="MLA414610">Pantuflas</option>
                                </select>
                                </li>
                        </ul>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <form className="d-flex">
                                <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search"/>
                                <button className="btn btn-outline-success" type="submit">Buscar</button>
                            </form>
                            <CartWidget></CartWidget>
                        </ul>
                    </div>
                </div>
                </nav>
        </div>
    )
}




