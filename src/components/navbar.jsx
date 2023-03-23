import React from 'react';
import marvel from '../img/marvel.ico';
import marvelLogo from '../img/Marvel_Logo.svg.png';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg fixed-top bg-light mb-5">
            <div className="container-fluid marvel">
                <a className="navbar-brand" href="#">
                    <img className='logo' src={marvelLogo}></img>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active home" aria-current="page" href="/">Home</a>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle home" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Pages
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="/page1">Page I</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="/page2">Page II</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="/page3">Page III</a></li>
                            </ul>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;