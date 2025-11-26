'use client';

import React from 'react';
import ProductCard from './ProductCard';
import productos from '@/data/products';

type Product = typeof productos[number];

interface ProductGridProps {
    products?: Product[];
}

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
    const displayProducts = products ?? productos;
    const categoriesRaw = Array.from(
        new Set(displayProducts.map((p) => p.category ?? 'Sin categoría'))
    );
    const categories =
        categoriesRaw.includes('Sin categoría')
            ? [...categoriesRaw.filter((c) => c !== 'Sin categoría'), 'Sin categoría']
            : categoriesRaw;

    if (!displayProducts.length) {
        return (
            <section
                id="cajas"
                className="product-grid-section-graze pt-16 pb-24 px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950 min-h-[400px] flex flex-col justify-center items-center"
            >
                <div className="section-header-graze mb-10">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg mb-2 tracking-normal">
                        Nuestras Cajas Gourmet
                    </h2>
                    <p className="text-lg text-gray-300">Perfectas para celebraciones, reuniones y eventos especiales</p>
                </div>
                <p className="text-xl text-gray-500 mt-10">No hay productos disponibles en este momento.</p>
            </section>
        );
    }

    return (
        <section
            id="cajas"
            className="product-grid-section-graze pt-16 pb-24 px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950"
        >
            <div className="section-header-graze mb-14 text-center">
                <h2 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg mb-2 tracking-normal">
                    Nuestras Cajas Gourmet
                </h2>
                <p className="text-lg text-gray-300">
                    Perfectas para celebraciones, reuniones y eventos especiales
                </p>
            </div>
            <div className="space-y-16">
                {categories.map((category) => (
                    <div key={category} className="category-section">
                        <h1 className="text-3xl md:text-4xl font-bold mb-10 text-white text-left inline-block border-b-4 border-pink-500 pb-3 px-2 bg-gradient-to-r from-black/60 via-transparent to-black/30 rounded-xl shadow-lg">
                            {category}
                        </h1>
                        <div className="product-grid-graze grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-8">
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
                                    // ...otros props
                                    />
                                ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProductGrid;
