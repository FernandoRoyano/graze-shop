import React from 'react';

type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
  images: string[];
};

type Props = {
  product: Product;
  onAddToCart: (product: Product) => void;
};

const ProductCard: React.FC<Props> = ({ product, onAddToCart }) => (
  <div className="bg-white text-black rounded-2xl shadow-lg p-4 flex flex-col items-center">
    <img src={product.images[0]} alt={product.name} className="w-40 h-40 object-cover rounded-xl mb-2" />
    {/* Miniaturas si hay más de una imagen */}
    {product.images.length > 1 && (
      <div className="flex gap-2 mb-2">
        {product.images.slice(1).map((img, idx) => (
          <img key={idx} src={img} alt={product.name + ' extra ' + (idx+1)} className="w-10 h-10 object-cover rounded-md border border-gray-300" />
        ))}
      </div>
    )}
    <h2 className="text-lg font-bold">{product.name}</h2>
    <p className="text-sm mb-1">{product.description}</p>
    <span className="text-xl font-semibold mb-2">${product.price.toFixed(2)}</span>
    <button
      onClick={() => onAddToCart(product)}
      className="bg-black text-white rounded-xl px-4 py-2 hover:bg-neutral-800 transition"
    >
      Añadir al carrito
    </button>
  </div>
);

export default ProductCard;
