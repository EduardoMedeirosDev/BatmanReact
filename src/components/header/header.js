import React from "react";
import { Link } from "react-router-dom";
import './styles.css';
import Logo from '../../assets/logo.jpg'


import './styles.css';

function Header({}){
    return (
        <header>
            <img id='logo' src={Logo}></img>
            <nav className="nav-header">
                <ul className='ul-header'>
                    <Link style={{textDecoration: 'none'}} to='/'>
                        <li className="li-header">Home</li>
                        </Link>
                
                    <Link style={{textDecoration: 'none'}} to='/contato'>
                        <li className="li-header">Contato</li>
                        </Link>
                    <Link style={{textDecoration: 'none'}} to='/fotos'>
                        <li className="li-header">Fotos</li>
                        </Link>
                    <Link style={{textDecoration: 'none'}} to='/comentarios'>
                    <li className="li-header">Comentários</li>
                        </Link>
                </ul>
            </nav>
        </header>
    )
}

export default Header