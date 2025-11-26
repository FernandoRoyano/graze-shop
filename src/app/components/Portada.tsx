'use client';

// src/components/Portada.tsx

import productos from "@/data/products";
import Image from "next/image";

const destacados = productos.slice(0, 3);

const ventajas = [
    { icono: "🚚", texto: "Envío GRATIS Santander" },
    { icono: "🥇", texto: "Selección gourmet" },
    { icono: "🎁", texto: "Pack personalizable" },
    { icono: "🛡️", texto: "Pago seguro" },
];

const testimonios = [
    {
        rating: 5,
        content: "Sorprendí a mi pareja con la Cesta Regalo de San Valentín. ¡La presentación es espectacular y todo estaba delicioso!",
        author: "María García",
        role: "Cliente verificado"
    },
    {
        rating: 5,
        content: "Compré la Caja Vegetariana para mi madre. Los quesos eran de excelente calidad y el servicio fue rápido.",
        author: "Carlos López",
        role: "Cliente verificado"
    },
    {
        rating: 5,
        content: "La Bandeja Ibérica para la reunión de empresa fue un éxito. Los clientes quedaron impresionados.",
        author: "Ana Martínez",
        role: "Cliente empresarial"
    },
    {
        rating: 5,
        content: "Envío gratis en Santander y productos frescos. La Cesta Bienvenida llegó perfecta.",
        author: "José Fernández",
        role: "Cliente verificado"
    }
];

export default function Portada() {
    return (
        // Flexbox vertical y min-h-screen para sticky footer
        <main className="flex flex-col min-h-screen">
            {/* HERO - GRADIENTE ROSA/AMARILLO */}
            <section
                style={{
                    background: 'linear-gradient(135deg, #ec4899 0%, #f59e0b 100%)',
                    padding: '4rem 2rem',
                    color: 'white'
                }}
            >
                <div
                    style={{
                        maxWidth: '1200px',
                        margin: '0 auto',
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '3rem',
                        alignItems: 'center'
                    }}
                >
                    {/* Columna izquierda */}
                    <div>
                        <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem' }}>
                            Sorprende con nuestras cajas gourmet
                        </h1>
                        <p style={{ fontSize: '1.25rem', marginBottom: '2rem', opacity: 0.95 }}>
                            Para San Valentín, Navidad, Día de la Madre y más
                        </p>

                        <div
                            style={{
                                display: 'flex',
                                gap: '1rem',
                                marginBottom: '2rem',
                                flexWrap: 'wrap'
                            }}
                        >
                            <div
                                style={{
                                    background: 'rgba(255,255,255,0.2)',
                                    padding: '0.75rem 1.5rem',
                                    borderRadius: '9999px',
                                    fontWeight: '600'
                                }}
                            >
                                📦 Envío GRATIS en Santander
                            </div>
                            <div
                                style={{
                                    background: 'rgba(255,255,255,0.2)',
                                    padding: '0.75rem 1.5rem',
                                    borderRadius: '9999px',
                                    fontWeight: '600'
                                }}
                            >
                                💰 4.95€ resto de Cantabria
                            </div>
                        </div>

                        <a
                            href="#cajas"
                            style={{
                                display: 'inline-block',
                                background: 'white',
                                color: '#ec4899',
                                padding: '1rem 2.5rem',
                                borderRadius: '9999px',
                                fontWeight: 'bold',
                                fontSize: '1.125rem',
                                textDecoration: 'none',
                                boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
                            }}
                        >
                            Descubre nuestras cajas
                        </a>

                        <div
                            style={{
                                marginTop: '1.5rem',
                                display: 'inline-block',
                                background: '#dc2626',
                                padding: '0.75rem 1.5rem',
                                borderRadius: '8px',
                                fontWeight: '600'
                            }}
                        >
                            🔥 Edición San Valentín - Stock limitado
                        </div>
                    </div>

                    {/* Columna derecha = logo */}
                    <div
                        style={{
                            background: 'rgba(255,255,255,0.1)',
                            height: '400px',
                            borderRadius: '12px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        <Image
                            src="/img/logo.jpg" // asegúrate que este archivo exista en public/img/logo.jpg
                            alt="Logo Graze Shop"
                            width={560}
                            height={560}
                            style={{ objectFit: 'contain' }}
                        />
                    </div>
                </div>
            </section>

            {/* PRODUCTOS DESTACADOS - FONDO OSCURO */}
            <section
                id="cajas"
                className="product-grid-section-graze"
                style={{ background: '#0a0a0a', padding: '5rem 2rem' }}
            >
                <div
                    className="section-header-graze"
                    style={{ marginBottom: '3rem' }}
                >
                    <h2
                        style={{
                            fontSize: '2.5rem',
                            color: '#ffffff',
                            marginBottom: '0.5rem'
                        }}
                    >
                        Nuestros packs destacados
                    </h2>
                    <p style={{ fontSize: '1.125rem', color: '#a3a3a3' }}>
                        Las cajas más populares y mejor valoradas
                    </p>
                </div>

                <div className="product-grid-graze">
                    {destacados.map(producto => (
                        <div key={producto.id} className="product-card-graze">
                            <div className="product-image-graze">
                                <Image
                                    src={producto.images[0]}
                                    alt={producto.name}
                                    width={280}
                                    height={250}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="product-info-graze">
                                <h3 className="product-name">{producto.name}</h3>
                                <p className="product-description">
                                    {producto.description.substring(0, 80)}...
                                </p>
                                <div className="product-footer-graze">
                                    <span className="product-price">
                                        {producto.price}€
                                    </span>
                                    <button className="btn-add-graze">Ver detalles</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ¿POR QUÉ ELEGIRNOS? - FONDO GRIS MEDIO */}
            <section
                style={{
                    background: '#1a1a1a',
                    padding: '5rem 2rem',
                    borderTop: '1px solid #333',
                    borderBottom: '1px solid #333'
                }}
            >
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <h2
                        style={{
                            fontSize: '2.5rem',
                            textAlign: 'center',
                            marginBottom: '0.5rem',
                            color: '#ffffff'
                        }}
                    >
                        ¿Por qué elegirnos?
                    </h2>
                    <p
                        style={{
                            textAlign: 'center',
                            color: '#a3a3a3',
                            marginBottom: '3rem',
                            fontSize: '1.125rem'
                        }}
                    >
                        La mejor experiencia gourmet con envío rápido y seguro
                    </p>

                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                            gap: '2rem'
                        }}
                    >
                        {ventajas.map((v, i) => (
                            <div
                                key={i}
                                style={{
                                    background: '#262626',
                                    padding: '2.5rem 2rem',
                                    borderRadius: '12px',
                                    border: '1px solid #404040',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    textAlign: 'center',
                                    gap: '1.25rem',
                                    transition: 'all 0.3s',
                                    cursor: 'pointer'
                                }}
                                onMouseEnter={e => {
                                    e.currentTarget.style.transform = 'translateY(-8px)';
                                    e.currentTarget.style.borderColor = '#3b82f6';
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.borderColor = '#404040';
                                }}
                            >
                                <div
                                    style={{
                                        background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                                        width: '80px',
                                        height: '80px',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '2.5rem',
                                        boxShadow: '0 8px 16px rgba(59, 130, 246, 0.3)'
                                    }}
                                >
                                    {v.icono}
                                </div>
                                <h3
                                    style={{
                                        color: '#ffffff',
                                        fontSize: '1.25rem',
                                        fontWeight: '600',
                                        margin: 0
                                    }}
                                >
                                    {v.texto}
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* TESTIMONIOS - FONDO MÁS OSCURO */}
            <section
                id="testimonios"
                style={{ background: '#0f0f0f', padding: '5rem 2rem' }}
            >
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <h2
                        style={{
                            fontSize: '2.5rem',
                            textAlign: 'center',
                            marginBottom: '0.5rem',
                            color: '#ffffff'
                        }}
                    >
                        Lo que dicen nuestros clientes
                    </h2>
                    <p
                        style={{
                            textAlign: 'center',
                            color: '#a3a3a3',
                            marginBottom: '3rem',
                            fontSize: '1.125rem'
                        }}
                    >
                        Descubre por qué miles de clientes confían en Graze Shop
                    </p>

                    <div className="testimonials-grid-graze">
                        {testimonios.map((testimonial, i) => (
                            <div key={i} className="testimonial-card-graze">
                                <div className="testimonial-rating">
                                    {'⭐'.repeat(testimonial.rating)}
                                </div>
                                <p className="testimonial-content">
                                    "{testimonial.content}"
                                </p>
                                <div className="testimonial-author">
                                    <h4>{testimonial.author}</h4>
                                    <p>{testimonial.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* WhatsApp Float */}
            <a
                href="https://wa.me/34612345678"
                className="whatsapp-float"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contactar por WhatsApp"
            >
                💬
            </a>
        </main>
    );
}
