// src/app/page.tsx

import Navbar from './components/Navbar';
import Portada from './components/Portada';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Portada />
      <ProductGrid />
      <Footer />
    </main>
  );
}
