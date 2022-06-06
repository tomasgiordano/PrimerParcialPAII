import React from 'react';
import logo from '../assets/marvelLogo.png'
import '../stylesheets/Header.css'

const Header = () =>{
    return (
        <header>
            <img src={logo} alt={`Imagen de logo`}/>
        </header>
    )
}

export default Header;