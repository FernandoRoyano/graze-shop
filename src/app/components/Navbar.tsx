'use client';

import React from 'react';

const Navbar: React.FC = () => {
    return (
        <nav className="navbar-graze">
            <div className="navbar-container">
                <div className="navbar-logo">
                    <h2>GRAZE SANTANDER</h2>
                </div>
                <ul className="navbar-menu">
                    <li><a href="#cajas">Cajas</a></li>
                    <li><a href="#personaliza">Personaliza</a></li>
                    <li><a href="#empresas">Empresas</a></li>
                    <li><a href="#testimonials">Testimonios</a></li>
                    <li><a href="#contacto">Contacto</a></li>
                </ul>
                <div className="navbar-actions">
                    <button className="btn-cart">🛒 Carrito (0)</button>
                    <a href="#" className="lang-switch">EN</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
