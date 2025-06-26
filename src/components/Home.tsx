import React from "react";
import { Link } from "react-router-dom";
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
		<div className="landing-bg">
			<div className="landing-hero">
				<h1 className="landing-title">Graze Santander</h1>
				<p className="landing-slogan">
					Disfruta el mejor gourmet, directo a tu puerta
				</p>
				<Link to="/tienda" className="landing-btn">
					Descubre la tienda
				</Link>
			</div>
			<section className="home-servicios">
				<h2>Nuestros servicios</h2>
				<div className="servicios-list">
					{servicios.map((s, i) => (
						<div className="servicio-card" key={i}>
							<div className="servicio-icon">{s.icon}</div>
							<div className="servicio-titulo">{s.titulo}</div>
							<div className="servicio-desc">{s.descripcion}</div>
						</div>
					))}
				</div>
			</section>
			<section className="home-testimonios">
				<h2>Testimonios</h2>
				<div className="testimonios-list">
					{testimonios.map((t, i) => (
						<div className="testimonio-card" key={i}>
							<div className="testimonio-texto">“{t.texto}”</div>
							<div className="testimonio-nombre">- {t.nombre}</div>
						</div>
					))}
				</div>
			</section>
		</div>
	);
}
