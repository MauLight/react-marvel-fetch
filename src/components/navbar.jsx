import React from 'react';
import marvelLogo from '../img/Marvel_Logo.svg.png';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg fixed-top bg-light mb-5">
            <div className="container-fluid marvel">
                <a className="navbar-brand" href="/">
                    <img className='logo' src={marvelLogo} alt="Marvel logo"></img>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

            </div>
        </nav>
    )
}

export default Navbar;