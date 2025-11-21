'use client';

import React, { useState } from 'react';

const CustomizeSection: React.FC = () => {
    const [selectedExtras, setSelectedExtras] = useState<string[]>([]);

    const extras = [
        { id: 'vino', name: 'Vino premium', price: 12 },
        { id: 'peluche', name: 'Peluche', price: 16 },
        { id: 'flores', name: 'Flores', price: 22 },
        { id: 'mensaje', name: 'Mensaje personalizado', price: 3 },
    ];

    const toggleExtra = (extraId: string) => {
        setSelectedExtras(prev =>
            prev.includes(extraId)
                ? prev.filter(id => id !== extraId)
                : [...prev, extraId]
        );
    };

    return (
        <section id="personaliza" className="customize-section-graze">
            <div className="customize-container-graze">
                <h2 className="customize-title">¿Quieres personalizar tu caja?</h2>
                <p className="customize-subtitle">
                    Cambia productos, añade extras, hazla única
                </p>

                <div className="customize-demo">
                    <div className="swap-section">
                        <h3>Intercambia ingredientes</h3>
                        <div className="swap-items">
                            <div className="swap-item">
                                <span>Queso manchego</span>
                                <button className="btn-swap">Cambiar</button>
                            </div>
                            <div className="swap-item">
                                <span>Chorizo ibérico</span>
                                <button className="btn-swap">Cambiar</button>
                            </div>
                            <div className="swap-item">
                                <span>Tarta artesana</span>
                                <button className="btn-swap">Cambiar</button>
                            </div>
                        </div>
                    </div>

                    <div className="extras-section">
                        <h3>Extras disponibles</h3>
                        <div className="extras-list">
                            {extras.map((extra) => (
                                <label key={extra.id} className="extra-item">
                                    <input
                                        type="checkbox"
                                        checked={selectedExtras.includes(extra.id)}
                                        onChange={() => toggleExtra(extra.id)}
                                    />
                                    <span>{extra.name} (+{extra.price}€)</span>
                                </label>
                            ))}
                        </div>
                    </div>
                </div>

                <button className="btn-primary-graze">Solicitar personalización</button>
            </div>
        </section>
    );
};

export default CustomizeSection;
