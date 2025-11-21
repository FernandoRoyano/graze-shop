import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import CustomizeSection from './components/CustomizeSection';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProductGrid />
      <CustomizeSection />
      <Testimonials />
      <Footer />
    </main>
  );
}
