'use client';

import React from 'react';
import ProductCard from './ProductCard';

interface Product {
    id: number;
    name: string;
    price: number;
    image?: string;
    description?: string;
    category?: string;
}

interface ProductGridProps {
    products?: Product[];
}

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
    const defaultProducts: Product[] = [
        { id: 1, name: 'Caja Ibérica + Peluche + Vino', price: 68.0, description: 'Pack completo San Valentín', category: 'San Valentín' },
        { id: 2, name: 'Caja Ibérica SAN Valentín', price: 42.0, description: 'Selección premium de ibéricos', category: 'San Valentín' },
        { id: 3, name: 'Ramo flores de temporada', price: 22.0, description: 'Flores frescas artesanales', category: 'San Valentín' },
        { id: 4, name: 'Tabla Ibérica madera', price: 55.0, description: 'TAM 30x30 - Tabla artesanal', category: 'San Valentín' },
        { id: 5, name: 'Caja grande BRUNCH', price: 59.0, description: 'Sirve 5-6 personas', category: 'Principales' },
        { id: 6, name: 'Caja Mediana', price: 45.0, description: 'Sirve 3-4 personas', category: 'Principales' },
        { id: 7, name: 'Caja Pequeña PICOTEO', price: 33.0, description: 'Sirve 2-3 personas', category: 'Principales' },
        { id: 8, name: 'Caja mediana ibérica', price: 57.0, description: 'Selección premium ibéricos', category: 'Principales' },
        { id: 9, name: 'Caja vegetariana mediana', price: 45.0, description: 'Variedad de quesos + frutas', category: 'Principales' },
        { id: 10, name: 'Caja picoteo XL', price: 85.0, description: 'Sirve 8-9 personas', category: 'Principales' },
        { id: 11, name: 'Caja BRUNCH edición Mamá', price: 33.0, description: 'Nuestra caja brunch versión especial', category: 'Día de la Madre' },
        { id: 12, name: 'Cesta con rosado + Flores', price: 62.0, description: 'Cesta, peñascal, bandeja...', category: 'Día de la Madre' },
    ];

    const displayProducts = products || defaultProducts;
    const categories = Array.from(new Set(displayProducts.map((p) => p.category)));

    return (
        <section id="cajas" className="product-grid-section-graze">
            <div className="section-header-graze">
                <h2>Nuestras Cajas Gourmet</h2>
                <p>Perfectas para celebraciones, reuniones y eventos especiales</p>
            </div>

            {categories.map((category) => (
                <div key={category} className="category-section">
                    <h3 className="category-title">{category}</h3>
                    <div className="product-grid-graze">
                        {displayProducts
                            .filter((p) => p.category === category)
                            .map((product) => (
                                <ProductCard key={product.id} {...product} />
                            ))}
                    </div>
                </div>
            ))}
        </section>
    );
};

export default ProductGrid;
