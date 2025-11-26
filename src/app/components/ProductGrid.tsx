'use client';

import React from 'react';
import ProductCard from './ProductCard';
import productos from '@/data/products';

// Define el tipo Product para mayor claridad y reusabilidad.
type Product = typeof productos[number];

interface ProductGridProps {
    products?: Product[];
}

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
    // Usamos el listado por props si viene, si no el import global
    const displayProducts = products ?? productos;

    // Agrupamos por categoría
    const categoriesRaw = Array.from(
        new Set(displayProducts.map((p) => p.category ?? 'Sin categoría'))
    );

    // Si quieres que 'Sin categoría' salga siempre la última
    const categories =
        categoriesRaw.includes('Sin categoría')
            ? [...categoriesRaw.filter((c) => c !== 'Sin categoría'), 'Sin categoría']
            : categoriesRaw;

    // Si no hay productos, muestra aviso didáctico y accesible
    if (!displayProducts.length) {
        return (
            <section id="cajas" className="product-grid-section-graze my-12">
                <div className="section-header-graze">
                    <h2 className="text-3xl font-bold">Nuestras Cajas Gourmet</h2>
                    <p>Perfectas para celebraciones, reuniones y eventos especiales</p>
                </div>
                <p className="text-gray-500 my-10 text-lg">No hay productos disponibles en este momento.</p>
            </section>
        );
    }

    // Render principal: categorías y grid de productos
    return (
        <section id="cajas" className="product-grid-section-graze">
            <div className="section-header-graze">
                <h2 className="text-3xl font-bold">Nuestras Cajas Gourmet</h2>
                <p>Perfectas para celebraciones, reuniones y eventos especiales</p>
            </div>

            {categories.map((category) => (
                <div key={category} className="category-section">
                    {/* Título grande y accesible con línea decorativa */}
                    <h3 className="text-4xl font-bold mt-12 mb-8 text-gray-900 dark:text-gray-100 tracking-tight border-b-2 border-pink-500 pb-3">
                        {category}
                    </h3>

                    {/* Grid responsivo de productos */}
                    <div className="product-grid-graze">
                        {displayProducts
                            .filter((p) => (p.category ?? 'Sin categoría') === category)
                            .map((product) => (
                                <ProductCard
                                    key={product.id}
                                    id={product.id}
                                    name={product.name}
                                    price={product.price}
                                    images={product.images}
                                    description={product.description}
                                    category={product.category}
                                // Pasa props adicionales si tu ProductCard lo requiere
                                />
                            ))}
                    </div>
                </div>
            ))}
        </section>
    );
};

export default ProductGrid;
