'use client';

import React from 'react';

interface Testimonial {
    id: number;
    name: string;
    role: string;
    content: string;
    rating: number;
}

const Testimonials: React.FC = () => {
    const testimonials: Testimonial[] = [
        {
            id: 1,
            name: 'María S.',
            role: 'Cliente San Valentín',
            content: 'Perfecta para San Valentín! Calidad brutal. La presentación es increíble.',
            rating: 5,
        },
        {
            id: 2,
            name: 'Carlos R.',
            role: 'Director RRHH',
            content: 'Para empresas es ideal, packaging impecable. Nuestros clientes quedaron encantados.',
            rating: 5,
        },
        {
            id: 3,
            name: 'Laura P.',
            role: 'Cliente habitual',
            content: 'Llegó en tiempo récord y todo fresco. Los productos son de altísima calidad.',
            rating: 5,
        },
    ];

    const renderStars = (rating: number) => {
        return '⭐'.repeat(rating);
    };

    return (
        <section className="testimonials-section-graze">
            <div className="testimonials-container-graze">
                <h2 className="testimonials-title">Lo que dicen nuestros clientes</h2>
                <p className="testimonials-subtitle">
                    Opiniones reales de quienes ya han probado GRAZE
                </p>

                <div className="testimonials-grid-graze">
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="testimonial-card-graze">
                            <div className="testimonial-rating">
                                {renderStars(testimonial.rating)}
                            </div>
                            <p className="testimonial-content">"{testimonial.content}"</p>
                            <div className="testimonial-author">
                                <h4>{testimonial.name}</h4>
                                <p>{testimonial.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
