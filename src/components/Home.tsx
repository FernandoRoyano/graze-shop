import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo_graze.jpg";
import "../App.css";

const servicios = [
  {
    icon: "🍇",
    titulo: "Tablas Gourmet",
    descripcion:
      "Tablas de quesos, embutidos y frutas para eventos, regalos y celebraciones.",
  },
  {
    icon: "🎁",
    titulo: "Cajas Regalo",
    descripcion:
      "Cajas personalizadas con productos gourmet para sorprender a quien más quieres.",
  },
  {
    icon: "🥂",
    titulo: "Experiencias a Domicilio",
    descripcion:
      "Disfruta de una experiencia gourmet en casa, con entrega en Santander y alrededores.",
  },
];

const testimonios = [
  {
    nombre: "Laura G.",
    texto: "¡La tabla fue un éxito en mi cumpleaños! Todo delicioso y presentación de 10.",
  },
  {
    nombre: "Carlos R.",
    texto: "Pedí una caja regalo para mi pareja y quedó encantada. Repetiremos seguro.",
  },
  {
    nombre: "Marta S.",
    texto: "Servicio rápido, trato cercano y productos de calidad. ¡Muy recomendable!",
  },
];

export default function Home() {
  return (
    <div className="home-apple-bg">
      <section className="home-apple-hero">
        <img src={logo} alt="Logo Graze Santander" className="home-apple-logo" />
        <h1 className="home-apple-title">Graze Santander</h1>
        <p className="home-apple-slogan">
          Disfruta el mejor gourmet, directo a tu puerta
        </p>
        <Link to="/tienda" className="home-apple-btn">
          Descubre la tienda
        </Link>
      </section>
      <section className="home-apple-servicios">
        <div className="home-apple-servicios-list">
          {servicios.map((s, i) => (
            <div className="home-apple-servicio" key={i}>
              <div className="home-apple-servicio-icon">{s.icon}</div>
              <div className="home-apple-servicio-titulo">{s.titulo}</div>
              <div className="home-apple-servicio-desc">{s.descripcion}</div>
            </div>
          ))}
        </div>
      </section>
      <section className="home-apple-testimonios">
        <div className="home-apple-testimonios-list">
          {testimonios.map((t, i) => (
            <div className="home-apple-testimonio" key={i}>
              <div className="home-apple-testimonio-texto">“{t.texto}”</div>
              <div className="home-apple-testimonio-nombre">- {t.nombre}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
