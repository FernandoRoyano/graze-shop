import React from 'react';

type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
};

type Props = {
  product: Product;
  onAddToCart: (product: Product) => void;
};

const ProductCard: React.FC<Props> = ({ product, onAddToCart }) => (
  <div className="bg-white text-black rounded-2xl shadow-lg p-4 flex flex-col items-center">
    <img src={product.image} alt={product.name} className="w-40 h-40 object-cover rounded-xl mb-2" />
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
