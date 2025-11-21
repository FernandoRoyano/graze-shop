'use client';

import React from 'react';

const Hero: React.FC = () => {
    return (
        <section className="hero-graze">
            <div className="hero-content">
                <h1 className="hero-title">Cajas gourmet que sorprenden</h1>
                <p className="hero-subtitle">
                    San Valentín, Navidad, Día de la Madre, Empresas...
                </p>
                <p className="shipping-info">
                    📦 Envío GRATIS en Santander | 4.95€ resto Cantabria
                </p>
                <div className="hero-actions">
                    <button className="btn-primary-graze">Descubre nuestras cajas</button>
                </div>
            </div>
            <div className="urgency-banner">
                <p>🔥 Edición San Valentín disponible - Stock limitado</p>
            </div>
        </section>
    );
};

export default Hero;
