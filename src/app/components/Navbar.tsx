export default function Navbar() {
    return (
        <nav className="navbar-graze">
            <div className="navbar-container">
                <div className="navbar-logo">
                    <h2>Graze</h2>
                </div>

                <ul className="navbar-menu">
                    <li><a href="#cajas">Cajas</a></li>
                    <li><a href="#testimonios">Testimonios</a></li>
                    <li><a href="#contacto">Contacto</a></li>
                </ul>

                <div className="navbar-actions">
                    <button className="btn-cart">🛒 Carrito</button>
                    <button className="btn-login">Iniciar sesión</button>
                </div>
            </div>
        </nav>
    );
}
