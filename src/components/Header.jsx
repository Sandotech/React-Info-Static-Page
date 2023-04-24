import React from 'react';
import ReactLogo from './ReactLogo';
import '../styles/Navbar.css';


const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-inverse">
                <ReactLogo />
                <h3 className='nav-tittle nav-tittle-h3'>ReactStuff</h3>
                <h4 className='nav-tittle nav-tittle-h4'>React Coourse - Project 1</h4>
            </nav>
        </header>
    );
}

export default Header;