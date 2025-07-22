import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo_graze.jpg";
import { products } from "../data/products";
import "../App.css";

const servicios = [
  {
    icon: "🥖",
    titulo: "Tablas Gourmet",
    descripcion: "Tablas de quesos, embutidos y frutas para eventos, regalos y celebraciones.",
  },
  {
    icon: "🎁",
    titulo: "Cajas Regalo",
    descripcion: "Cajas personalizadas con productos gourmet para sorprender a quien más quieres.",
  },
  {
    icon: "🥂",
    titulo: "Experiencias a Domicilio",
    descripcion: "Disfruta de una experiencia gourmet en casa, con entrega en Santander y alrededores.",
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

// Productos más vendidos (simulación: los 3 primeros)
const masVendidos = products.slice(0, 3);

// Preguntas frecuentes
const faqs = [
  {
    pregunta: "¿Con cuánta antelación debo pedir?",
    respuesta: "Recomendamos pedir con al menos 24h de antelación para asegurar disponibilidad.",
  },
  {
    pregunta: "¿Puedo personalizar mi pedido?",
    respuesta: "Sí, puedes indicarnos preferencias, alergias o dedicatorias al hacer tu pedido.",
  },
  {
    pregunta: "¿Dónde entregáis?",
    respuesta: "Entregamos gratis en Santander y Torrelavega. Para otras zonas, consúltanos.",
  },
  {
    pregunta: "¿Qué métodos de pago aceptáis?",
    respuesta: "Bizum, transferencia y pago en efectivo a la entrega.",
  },
];

export default function HomeElegante() {
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  return (
    <div className="home-apple-bg">
      {/* HEADER MINIMALISTA FIJO */}
      <header className="home-apple-header">
        <div className="home-apple-header-content">
          <img src={logo} alt="Logo Graze Santander" className="home-apple-header-logo" />
          <span className="home-apple-header-title">Graze Santander</span>
          <Link to="/tienda" className="home-apple-header-btn">Tienda</Link>
        </div>
      </header>
      {/* HERO MINIMALISTA */}
      <section className="home-apple-hero" style={{marginTop:'90px'}}>
        <img src={logo} alt="Logo Graze Santander" className="home-apple-logo" />
        <h1 className="home-apple-title">Graze Santander</h1>
        <p className="home-apple-slogan">Tablas y cajas gourmet para regalar, celebrar y disfrutar</p>
        <Link to="/tienda" className="home-apple-btn">Ver productos</Link>
      </section>
      {/* SERVICIOS */}
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
      {/* MÁS VENDIDOS */}
      <section className="home-apple-masvendidos">
        <h2 className="home-apple-section-title">Más vendidos</h2>
        <div className="home-apple-masvendidos-list">
          {masVendidos.map((p) => (
            <div key={p.id} className="home-apple-masvendido">
              <img src={p.images[0]} alt={p.name} className="home-apple-masvendido-img" />
              <div className="home-apple-masvendido-nombre">{p.name}</div>
              <div className="home-apple-masvendido-desc">{p.description}</div>
              <div className="home-apple-masvendido-precio">€{p.price.toFixed(2)}</div>
            </div>
          ))}
        </div>
      </section>
      {/* TESTIMONIOS */}
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
      {/* PROCESO */}
      <section className="home-apple-proceso">
        <h2 className="home-apple-section-title">¿Cómo funciona?</h2>
        <div className="home-apple-proceso-list">
          <div className="home-apple-proceso-paso"><b>1.</b> Elige tu producto</div>
          <div className="home-apple-proceso-paso"><b>2.</b> Personaliza y añade al carrito</div>
          <div className="home-apple-proceso-paso"><b>3.</b> Paga por Bizum o pide por WhatsApp</div>
          <div className="home-apple-proceso-paso"><b>4.</b> Recibe en casa o regala</div>
        </div>
      </section>
      {/* FAQ */}
      <section className="home-apple-faq">
        <h2 className="home-apple-section-title">Preguntas Frecuentes</h2>
        <div className="home-apple-faq-list">
          {faqs.map((faq, i) => (
            <div className="home-apple-faq-item" key={i}>
              <button className="home-apple-faq-q" onClick={() => setFaqOpen(faqOpen === i ? null : i)}>
                {faq.pregunta} {faqOpen === i ? '▲' : '▼'}
              </button>
              {faqOpen === i && <div className="home-apple-faq-a">{faq.respuesta}</div>}
            </div>
          ))}
        </div>
      </section>
      {/* CONTACTO RÁPIDO */}
      <section className="home-apple-contacto">
        <div className="home-apple-contacto-card">
          <h3>Contacto rápido</h3>
          <p>¿Tienes dudas o quieres pedir por WhatsApp? ¡Escríbenos!</p>
          <a href="https://wa.me/34600000000" target="_blank" rel="noopener noreferrer" className="home-apple-contacto-btn">WhatsApp</a>
          <a href="mailto:info@grazeshop.com" className="home-apple-contacto-btn" style={{marginTop:'0.7em'}}>Email</a>
          <a href="https://instagram.com/grazeshop" target="_blank" rel="noopener noreferrer" className="home-apple-contacto-btn" style={{marginTop:'0.7em'}}>Instagram</a>
        </div>
      </section>
      {/* ZONA DE ENTREGA */}
      <section className="home-apple-zonaentrega">
        <div className="home-apple-zonaentrega-card">
          <h3>Zona de entrega</h3>
          <div className="home-apple-zonaentrega-mapa">
            <iframe
              title="Mapa Cantabria"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12297.96496402413!2d-3.819622!3d43.462305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd494b8c6b1e7e2b%3A0x40340b4fc3d2e10!2sCantabria!5e0!3m2!1ses!2ses!4v1719240000000!5m2!1ses!2ses"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{border:0, width:'100%', height:'260px'}}
            ></iframe>
          </div>
          <ul style={{listStyle:'none',padding:0,margin:'1.2em 0 0 0',display:'flex',flexWrap:'wrap',gap:'1.1em',justifyContent:'center'}}>
            {['Santander','Torrelavega','Bezana','Camargo','Astillero','El Alisal','Peñacastillo','Maliaño','Muriedas','Soto de la Marina'].map(zona => (
              <li key={zona} style={{display:'flex',alignItems:'center',gap:'0.5em',background:'#fffbe6',borderRadius:'1em',padding:'0.5em 1.1em',boxShadow:'0 1px 6px #FFD70022',fontWeight:'bold',color:'#181818',fontSize:'1em'}}>
                <span style={{color:'#FFD700',fontSize:'1.2em'}}>✔</span> {zona}
              </li>
            ))}
          </ul>
          <p style={{marginTop:'1.2em',color:'#FFD700',fontWeight:'bold',textAlign:'center'}}>¡Envío gratis en todas estas zonas!</p>
        </div>
      </section>
    </div>
  );
}
