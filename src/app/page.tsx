import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import CustomizeSection from './components/CustomizeSection';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Portada from './components/Portada';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Portada />
      <Hero />
      <ProductGrid />
      <CustomizeSection />
      <Testimonials />
      <Footer />
    </main>
  );
}
