'use client';

import React from 'react';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <>
            {/* Sección Empresas */}
            <section id="empresas" className="business-section-graze">
                <div className="business-container">
                    <h2>Soluciones para Empresas</h2>
                    <p>Regalos corporativos, eventos, facturación a medida</p>
                    <button className="btn-primary-graze">Solicita presupuesto</button>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer-graze">
                <div className="footer-container-graze">
                    <div className="footer-section">
                        <h3>GRAZE SANTANDER</h3>
                        <p>Cajas gourmet que sorprenden</p>
                        <p className="footer-tagline">
                            ✨ Grazing Tables | Platters | Boxes
                        </p>
                    </div>

                    <div className="footer-section">
                        <h4>Contacto</h4>
                        <p>📱 WhatsApp: +34 600 000 000</p>
                        <p>📧 Email: hola@grazesantander.com</p>
                        <p>⏰ Pedidos con 24h de antelación</p>
                    </div>

                    <div className="footer-section">
                        <h4>Envíos</h4>
                        <p>📦 Santander: GRATIS</p>
                        <p>📦 Resto Cantabria: 4.95€</p>
                        <p>🚚 Entrega en 24-48h</p>
                    </div>

                    <div className="footer-section">
                        <h4>Síguenos</h4>
                        <div className="social-links-graze">
                            <a href="https://www.instagram.com/grazesantander" target="_blank" rel="noopener noreferrer">
                                Instagram
                            </a>
                            <a href="https://www.facebook.com/grazesantander" target="_blank" rel="noopener noreferrer">
                                Facebook
                            </a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom-graze">
                    <p>&copy; {currentYear} Graze Santander | Aviso Legal | Privacidad</p>
                </div>
            </footer>

            {/* WhatsApp Flotante */}
            <a
                href="https://wa.me/34600000000"
                className="whatsapp-float"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contactar por WhatsApp"
            >
                💬
            </a>
        </>
    );
};

export default Footer;
