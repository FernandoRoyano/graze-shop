'use client';

import React from 'react';
import Image from 'next/image';

interface ProductCardProps {
    id: number;
    name: string;
    price: number;
    images: string[]; // Cambiado de image a images (array)
    description?: string;
    category?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
    id,
    name,
    price,
    images,
    description,
    category
}) => {
    // Usar la primera imagen del array
    const mainImage = images && images.length > 0 ? images[0] : null;

    return (
        <div className="product-card-graze">
            <div className="product-image-graze">
                {mainImage ? (
                    <Image
                        src={mainImage}
                        alt={name}
                        width={300}
                        height={300}
                        className="w-full h-full object-cover rounded-lg"
                    />
                ) : (
                    <div className="placeholder-image-graze">
                        <span>🧀🍇🥖</span>
                    </div>
                )}
            </div>
            <div className="product-info-graze">
                {category && <span className="product-category">{category}</span>}
                <h4 className="product-name">{name}</h4>
                {description && (
                    <p className="product-desc line-clamp-2">{description}</p>
                )}
                <div className="product-footer-graze">
                    <span className="product-price">{price}€</span>
                    <button className="btn-add-graze">Añadir</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
