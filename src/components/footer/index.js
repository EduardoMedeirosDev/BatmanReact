import React from "react";
import { Link } from "react-router-dom";
import './styles.css'
import Logo from '../../assets/logo.jpg'

function Footer() {
    return (
    <footer>
  <img id="logo-footer" src={Logo}></img>
        <span className="span-footer">Todos os direitos reservados ©</span>
        <span className="span-footer">Desenvolvido por: Eduardo Medeiros</span>
        <nav className="footer-navigation">
            <ul className="footer-list">
                    <Link to='/'>
                        <li className="li-footer">Home</li>
                        </Link>
                
                    <Link to='/contato'>
                        <li className="li-footer">Contato</li>
                        </Link>

                    <Link to='/fotos'>
                        <li className="li-footer">Fotos</li>
                        </Link>

                    <Link to='/comentarios'>
                    <li className="li-footer">Comentários</li>
                        </Link>
            </ul>
        </nav>
    </footer>
    )
}

export default Footer;