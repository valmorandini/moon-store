import React from 'react'
import './styles.scss'
import { CartWidget } from '../CartWidget'
import { useHistory } from 'react-router-dom'

export const NavBar = () => {
  
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="logocontainer" href="/">
                        <img className="logo" src="../../../images/logo.png" alt="logo" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse lcontainer" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <div class="dropdown">
                            <button class="dropbtn"><a className="dropa" href="/">Productos</a></button>
                            <div class="dropdown-content">
                                    <a href="/category/Remeras">Remeras</a>
                                    <a href="/category/Buzos">Buzos</a>
                                    <a href="/category/Pantalones">Pantalones</a>
                                    <a href="/category/Accesorios">Accesorios</a>
                                    
                            </div>
                            </div>
                        </ul>
                        <CartWidget></CartWidget>
                    </div>
                </div>
                </nav>
        </div>
    )
}


