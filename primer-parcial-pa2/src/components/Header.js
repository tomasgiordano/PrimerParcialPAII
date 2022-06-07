import React from 'react';
import logo from '../assets/marvelLogo.png'
import '../stylesheets/Header.css'

const Header = () =>{
    return (
        <header>
            <div className='imagen'>
                <img src={logo} alt={`Imagen de logo`}/>
                <h1>Characters</h1>
            </div>
            <form>
	            <label htmlFor="search">Search</label>
	            <input id="search" type="search" autoComplete="off" required/>
	            <span className="caret"></span>
            </form>
        </header>
    )
}

export default Header;