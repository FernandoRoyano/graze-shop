import type { Product } from '../data/products';
import ProductCard from './ProductCard';

type Props = {
  products: Product[];
  onAddToCart: (product: Product) => void;
};

const ProductList: React.FC<Props> = ({ products, onAddToCart }) => (
  <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 py-10">
    {products.map((product) => (
      <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
    ))}
  </div>
);

export default ProductList;
