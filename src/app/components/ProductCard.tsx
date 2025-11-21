'use client';

import React from 'react';

interface ProductCardProps {
    id: number;
    name: string;
    price: number;
    image?: string;
    description?: string;
    category?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
    id,
    name,
    price,
    image,
    description,
    category
}) => {
    return (
        <div className="product-card-graze">
            <div className="product-image-graze">
                {image ? (
                    <img src={image} alt={name} />
                ) : (
                    <div className="placeholder-image-graze">
                        <span>🧀🍇🥖</span>
                    </div>
                )}
            </div>
            <div className="product-info-graze">
                {category && <span className="product-category">{category}</span>}
                <h4 className="product-name">{name}</h4>
                {description && <p className="product-desc">{description}</p>}
                <div className="product-footer-graze">
                    <span className="product-price">{price.toFixed(2)}€</span>
                    <button className="btn-add-graze">Añadir</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
