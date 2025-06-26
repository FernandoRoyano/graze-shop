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
    <div className="home-bg-elegante">
      <div className="home-hero-elegante">
        <img src={logo} alt="Logo Graze Santander" className="home-logo-elegante" />
        <div className="home-hero-text">
          <h1 className="home-title-elegante">Graze Santander</h1>
          <p className="home-slogan-elegante">Tablas y cajas gourmet para regalar, celebrar y disfrutar</p>
          <Link to="/tienda" className="home-btn-elegante">Ver productos</Link>
        </div>
      </div>
      <section className="home-servicios-elegante">
        <h2>Nuestros servicios</h2>
        <div className="servicios-list-elegante">
          {servicios.map((s, i) => (
            <div className="servicio-card-elegante" key={i}>
              <div className="servicio-icon-elegante">{s.icon}</div>
              <div className="servicio-titulo-elegante">{s.titulo}</div>
              <div className="servicio-desc-elegante">{s.descripcion}</div>
            </div>
          ))}
        </div>
      </section>
      <section className="home-galeria-elegante">
        <h2>Más vendidos</h2>
        <div className="galeria-list-elegante">
          {masVendidos.map((p) => (
            <div key={p.id} className="galeria-img-elegante">
              <img src={p.image} alt={p.name} />
              <div style={{color:'#FFD700',fontWeight:'bold',fontSize:'1.1em'}}>{p.name}</div>
              <div style={{color:'#fff',fontSize:'0.98em',marginBottom:4}}>{p.description}</div>
              <div style={{color:'#FFD700',fontWeight:'bold'}}>€{p.price.toFixed(2)}</div>
            </div>
          ))}
        </div>
      </section>
      <section className="home-testimonios-elegante">
        <h2>Testimonios</h2>
        <div className="testimonios-list-elegante">
          {testimonios.map((t, i) => (
            <div className="testimonio-card-elegante" key={i}>
              <div className="testimonio-texto-elegante">“{t.texto}”</div>
              <div className="testimonio-nombre-elegante">- {t.nombre}</div>
            </div>
          ))}
        </div>
      </section>
      <section className="home-proceso-elegante">
        <h2>¿Cómo funciona?</h2>
        <div className="proceso-list-elegante">
          <div className="proceso-paso-elegante"><b>1.</b> Elige tu producto</div>
          <div className="proceso-paso-elegante"><b>2.</b> Personaliza y añade al carrito</div>
          <div className="proceso-paso-elegante"><b>3.</b> Paga por Bizum o pide por WhatsApp</div>
          <div className="proceso-paso-elegante"><b>4.</b> Recibe en casa o regala</div>
        </div>
      </section>
      <section className="home-faq-elegante">
        <h2>Preguntas Frecuentes</h2>
        <div className="faq-list-elegante">
          {faqs.map((faq, i) => (
            <div className="faq-item-elegante" key={i}>
              <button className="faq-q-elegante" onClick={() => setFaqOpen(faqOpen === i ? null : i)}>
                {faq.pregunta} {faqOpen === i ? '▲' : '▼'}
              </button>
              {faqOpen === i && <div className="faq-a-elegante">{faq.respuesta}</div>}
            </div>
          ))}
        </div>
      </section>
      <section className="contacto-rapido-elegante">
        <div className="contacto-rapido-card-elegante">
          <h3>Contacto rápido</h3>
          <p>¿Tienes dudas o quieres pedir por WhatsApp? ¡Escríbenos!</p>
          <a href="https://wa.me/34600000000" target="_blank" rel="noopener noreferrer" className="contacto-rapido-btn-elegante">WhatsApp</a>
          <a href="mailto:info@grazeshop.com" className="contacto-rapido-btn-elegante" style={{marginTop:'0.7em'}}>Email</a>
          <a href="https://instagram.com/grazeshop" target="_blank" rel="noopener noreferrer" className="contacto-rapido-btn-elegante" style={{marginTop:'0.7em'}}>Instagram</a>
        </div>
      </section>
      <section className="zona-entrega-elegante">
        <div className="zona-entrega-card-elegante">
          <h3>Zona de entrega</h3>
          <div className="zona-entrega-mapa-elegante">
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
