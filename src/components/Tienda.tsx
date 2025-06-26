import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
// Importa aquí los hooks y props necesarios si los necesitas

export default function Tienda(props: any) {
  // Recibe todos los props de App para mantener la lógica y el estado
  return (
    <div className="app-layout">
      <nav className="tienda-nav">
        <Link to="/" className="landing-link">Inicio</Link>
        <button className="cart-btn" onClick={() => props.setCartOpen(true)}>
          🛒
          {props.cartCount > 0 && <span className="cart-count">{props.cartCount}</span>}
        </button>
      </nav>
      {/* Sidebar, carrito, main-content, etc. */}
      {props.children}
    </div>
  );
}
