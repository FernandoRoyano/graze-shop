import { products } from "./data/products";
import Sidebar from "./components/Sidebar";
import React, { useState } from "react";
import './App.css';
import jsPDF from 'jspdf';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/HomeElegante";
import Tienda from "./components/Tienda";
import PayPalButton from "./components/PayPalButton";

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

function App() {
  const [selectedType, setSelectedType] = useState<string>("");
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(1000);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [showBizum, setShowBizum] = useState(false);
  const [bizumForm, setBizumForm] = useState({
    nombre: '',
    telefono: '',
    direccion: '',
    fecha: '',
    franja: ''
  });
  const [bizumFormTouched, setBizumFormTouched] = useState(false);
  const [showReceipt, setShowReceipt] = useState(false);
  const [receiptData, setReceiptData] = useState<{cart: CartItem[], total: number, form: typeof bizumForm}>({cart: [], total: 0, form: {nombre:'',telefono:'',direccion:'',fecha:'',franja:''}});

  // Estado para el modal de WhatsApp
  const [showWhatsappModal, setShowWhatsappModal] = useState(false);
  const [whatsappForm, setWhatsappForm] = useState(bizumForm);
  const [whatsappFormTouched, setWhatsappFormTouched] = useState(false);

  // Estado para toast
  const [toast, setToast] = useState<{msg: string, visible: boolean}>({msg: '', visible: false});

  // Calcular fecha mínima de entrega (24h desde ahora)
  const now = new Date();
  const minDeliveryDate = new Date(now.getTime() + 24 * 60 * 60 * 1000);
  // Formato YYYY-MM-DD para input type="date"
  const minDeliveryDateStr = minDeliveryDate.toISOString().split('T')[0];

  // Validación extra: la fecha seleccionada debe ser >= minDeliveryDate
  const isDeliveryDateValid = bizumForm.fecha && (new Date(bizumForm.fecha + 'T00:00:00') >= new Date(minDeliveryDateStr + 'T00:00:00'));
  const bizumFormValid = bizumForm.nombre && bizumForm.telefono && bizumForm.direccion && bizumForm.fecha && bizumForm.franja && isDeliveryDateValid;

  // Validación del formulario de WhatsApp
  const whatsappFormValid = whatsappForm.nombre && whatsappForm.telefono && whatsappForm.direccion && whatsappForm.fecha && whatsappForm.franja;

  // Asignar tipo a cada producto según el id (esto es solo un ejemplo, puedes mejorarlo en tu modelo de datos)
  const getProductType = (product: typeof products[0]) => {
    if (product.id >= 1 && product.id <= 5) return "dia-madre";
    if (product.id >= 6) return "san-valentin";
    return "";
  };

  const filteredProducts = products.filter(product => {
    const typeMatch = selectedType ? getProductType(product) === selectedType : true;
    const priceMatch = product.price >= minPrice && product.price <= maxPrice;
    // Mejorado: filtro por tamaño solo para cajas con pequeña, mediana o grande
    const sizeKeywords = ["pequeña", "mediana", "grande"];
    const hasSizeKeyword = sizeKeywords.some(kw => product.name.toLowerCase().includes(kw));
    const sizeMatch = selectedSize
      ? (hasSizeKeyword && product.name.toLowerCase().includes(selectedSize))
      : true;
    return typeMatch && priceMatch && sizeMatch;
  });

  // Función para mostrar toast
  const showToast = (msg: string) => {
    setToast({msg, visible: true});
    setTimeout(() => setToast(t => ({...t, visible: false})), 2200);
  };

  // Animación y toast al añadir producto
  const handleAddToCart = (product: typeof products[0]) => {
    setCart(prev => {
      const found = prev.find(item => item.id === product.id);
      if (found) {
        showToast('Cantidad actualizada en el carrito');
        return prev.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        showToast('Producto añadido al carrito');
        return [...prev, { id: product.id, name: product.name, price: product.price, image: product.image, quantity: 1 }];
      }
    });
  };

  const handleRemoveFromCart = (id: number) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const handleIncreaseQty = (id: number) => {
    setCart(prev => prev.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const handleDecreaseQty = (id: number) => {
    setCart(prev => prev.map(item =>
      item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    ));
  };

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Generar mensaje de WhatsApp dinámico (usando whatsappForm)
  const whatsappMessage = `Hola, quiero pedir:\n${cart.map(item => `- ${item.quantity} x ${item.name}`).join('\n')}\nTotal: €${cartTotal.toFixed(2)}\nNombre: ${whatsappForm.nombre}\nTeléfono: ${whatsappForm.telefono}\nDirección: ${whatsappForm.direccion}\nFecha de entrega: ${whatsappForm.fecha}\nFranja horaria: ${whatsappForm.franja}`;
  const whatsappUrl = `https://wa.me/34644176597?text=${encodeURIComponent(whatsappMessage)}`;

  // Mostrar recibo tras Bizum
  const handleBizumSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBizumFormTouched(true);
    if (bizumFormValid) {
      setShowBizum(false);
      setReceiptData({cart: cart, total: cartTotal, form: bizumForm});
      setShowReceipt(true);
      setCart([]);
      setBizumForm({nombre:'',telefono:'',direccion:'',fecha:'',franja:''});
      setBizumFormTouched(false);
      showToast('¡Pedido realizado con éxito!');
    }
  };

  // Unificada: Al enviar el modal, abrir WhatsApp y mostrar recibo
  const handleWhatsappSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setWhatsappFormTouched(true);
    if (whatsappFormValid) {
      setBizumForm(whatsappForm);
      setShowWhatsappModal(false);
      setReceiptData({cart: cart, total: cartTotal, form: whatsappForm});
      setShowReceipt(true);
      showToast('¡Pedido enviado por WhatsApp!');
      window.open(whatsappUrl, '_blank');
    }
  };

  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    // Logo en base64 (reemplaza por tu string si cambias el logo)
    const logoBase64 = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD..."; // recorta para ejemplo
    // Añadir logo
    doc.addImage(logoBase64, 'JPEG', 75, 8, 60, 18);
    doc.setDrawColor(200,200,200);
    doc.line(14, 30, 196, 30);
    doc.setFontSize(18);
    doc.setTextColor(40,40,40);
    doc.setFont('helvetica', 'bold');
    doc.text('Recibo de pedido - Graze Shop', 14, 40);
    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');
    let y = 50;
    doc.text('¡Gracias por tu pedido!', 14, y);
    y += 8;
    doc.text('Hemos recibido tu información y tu pago.', 14, y);
    y += 8;
    doc.text('En breve nos pondremos en contacto para confirmar la entrega.', 14, y);
    y += 12;
    doc.setFont('helvetica', 'bold');
    doc.text('Resumen del pedido:', 14, y);
    doc.setFont('helvetica', 'normal');
    y += 8;
    receiptData.cart.forEach(item => {
      doc.text(`- ${item.quantity} x ${item.name}`, 18, y);
      y += 7;
    });
    y += 2;
    doc.setFont('helvetica', 'bold');
    doc.text(`Total: €${receiptData.total.toFixed(2)}`, 14, y);
    y += 10;
    doc.setFont('helvetica', 'normal');
    doc.text(`Nombre: ${receiptData.form.nombre}`, 14, y);
    y += 7;
    doc.text(`Teléfono: ${receiptData.form.telefono}`, 14, y);
    y += 7;
    doc.text(`Dirección: ${receiptData.form.direccion}`, 14, y);
    y += 7;
    doc.text(`Fecha de entrega: ${receiptData.form.fecha}`, 14, y);
    y += 7;
    doc.text(`Franja horaria: ${receiptData.form.franja}`, 14, y);
    y += 12;
    doc.setDrawColor(200,200,200);
    doc.line(14, y, 196, y);
    y += 8;
    doc.setFontSize(10);
    doc.setTextColor(120,120,120);
    doc.text('Graze Shop · www.grazeshop.es', 14, y);
    doc.save('recibo-graze.pdf');
  };

  // Bandera para evitar guardar el carrito en el primer render
  const isFirstLoad = React.useRef(true);

  // Guardar y restaurar carrito en localStorage
  React.useEffect(() => {
    const savedCart = localStorage.getItem('graze_cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  React.useEffect(() => {
    if (isFirstLoad.current) {
      isFirstLoad.current = false;
      return;
    }
    localStorage.setItem('graze_cart', JSON.stringify(cart));
  }, [cart]);

  // Guardar y restaurar formulario de Bizum en localStorage
  React.useEffect(() => {
    const savedForm = localStorage.getItem('graze_bizum_form');
    if (savedForm) {
      setBizumForm(JSON.parse(savedForm));
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem('graze_bizum_form', JSON.stringify(bizumForm));
  }, [bizumForm]);

  // Al pulsar el botón, mostrar modal si faltan datos
  const handleWhatsappClick = (e: React.MouseEvent) => {
    if (!whatsappFormValid) {
      e.preventDefault();
      setWhatsappForm(bizumForm); // Rellenar con lo que haya
      setShowWhatsappModal(true);
      setWhatsappFormTouched(false);
    }
    // Si es válido, deja pasar (el <a> abrirá WhatsApp)
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tienda" element={
          <Tienda setCartOpen={setCartOpen} cartCount={cartCount}>
            <div>
              {/* Sidebar, carrito, main-content, etc. aquí (todo el contenido actual de App) */}
              <aside className={`cart-sidebar${cartOpen ? ' open' : ''}`}>
                <button className="cart-close" onClick={() => setCartOpen(false)}>✕</button>
                <h2>Carrito</h2>
                {cart.length === 0 ? (
                  <p>Tu carrito está vacío.</p>
                ) : (
                  <>
                    <ul className="cart-list">
                      {cart.map(item => (
                        <li key={item.id} className="cart-item">
                          <img src={item.image} alt={item.name} className="cart-item-img" />
                          <div className="cart-item-info">
                            <div className="cart-item-title">{item.name}</div>
                            <div className="cart-item-subtotal">{item.quantity} × €{item.price.toFixed(2)} = <b>€{(item.price * item.quantity).toFixed(2)}</b></div>
                            <div className="cart-item-qty">
                              <button className="cart-item-qty-btn" onClick={() => handleDecreaseQty(item.id)}>-</button>
                              <span>{item.quantity}</span>
                              <button className="cart-item-qty-btn" onClick={() => handleIncreaseQty(item.id)}>+</button>
                            </div>
                            <button className="cart-item-remove" onClick={() => handleRemoveFromCart(item.id)}>Eliminar</button>
                          </div>
                        </li>
                      ))}
                    </ul>
                    <div className="cart-total">Total: €{cartTotal.toFixed(2)}</div>
                    <div className="cart-actions cart-actions-vertical">
                      <div className="cart-action-block">
                        <button onClick={() => setShowBizum(true)} className="cart-action-btn">Pagar por Bizum</button>
                      </div>
                      <div className="cart-action-block">
                        <a
                          href={whatsappFormValid ? whatsappUrl : undefined}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="whatsapp-btn cart-action-btn"
                          onClick={handleWhatsappClick}
                        >
                          <span className="whatsapp-icon" aria-label="WhatsApp">
                            {/* ...icono SVG... */}
                            <svg width="22" height="22" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="16" cy="16" r="16" fill="#25D366"/>
                              <path d="M23.47 19.37c-.32-.16-1.88-.93-2.17-1.04-.29-.11-.5-.16-.71.16-.21.32-.82 1.04-1.01 1.25-.18.21-.37.24-.69.08-.32-.16-1.36-.5-2.59-1.6-.96-.86-1.61-1.92-1.8-2.24-.19-.32-.02-.5.14-.66.14-.14.32-.37.48-.55.16-.18.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.71-1.71-.97-2.34-.26-.62-.53-.54-.71-.55-.18-.01-.4-.01-.62-.01-.21 0-.56.08-.85.4-.29.32-1.12 1.09-1.12 2.66 0 1.57 1.15 3.09 1.31 3.3.16.21 2.27 3.47 5.51 4.73.77.3 1.37.48 1.84.61.77.2 1.47.17 2.02.1.62-.08 1.88-.77 2.15-1.51.27-.74.27-1.37.19-1.51-.08-.14-.29-.21-.61-.37z" fill="#fff"/>
                            </svg>
                          </span>
                          Pedir por WhatsApp
                        </a>
                      </div>
                      <div className="cart-action-block paypal-block">
                        <PayPalButton
                          amount={cartTotal.toFixed(2)}
                          onSuccess={(details) => {
                            alert("Pago completado por " + details.payer.name.given_name);
                            setCart([]); // Vacía el carrito tras el pago
                            showToast('¡Pago realizado con PayPal!');
                          }}
                        />
                      </div>
                    </div>
                  </>
                )}
                <div className="cart-instructions">
                  <p>
                    Creamos tablas y experiencias gourmet para todo tipo de celebraciones.<br />
                    <b>Recomendamos pedir con 24h de antelación.</b><br />
                    Entregamos gratis en Santander y Torrelavega. Para otras zonas, consúltanos.
                  </p>
                </div>
              </aside>
              <main className="main-content">
                <Sidebar
                  selectedType={selectedType}
                  onSelectType={setSelectedType}
                  minPrice={minPrice}
                  maxPrice={maxPrice}
                  onPriceChange={(min, max) => {
                    setMinPrice(min);
                    setMaxPrice(max);
                  }}
                  selectedSize={selectedSize}
                  onSelectSize={setSelectedSize}
                />
                <div className="product-list">
                  {filteredProducts.map(product => (
                    <div className="product-card" key={product.id}>
                      <img src={product.image} alt={product.name} />
                      <h2>{product.name}</h2>
                      <p>{product.description}</p>
                      <div className="price">€{product.price.toFixed(2)}</div>
                      <button onClick={() => handleAddToCart(product)}>Añadir al carrito</button>
                    </div>
                  ))}
                </div>
              </main>
              <footer className="app-footer">
                © {new Date().getFullYear()} Graze Shop. Todos los derechos reservados.
              </footer>
            </div>
          </Tienda>
        } />
      </Routes>
      {/* Toast visual */}
      <div className={`toast ${toast.visible ? 'show' : ''}`}>{toast.msg}</div>

      {/* Modal Bizum */}
      {showBizum && (
        <div className="bizum-modal-bg">
          <div className="bizum-modal">
            <button className="bizum-close" onClick={() => setShowBizum(false)}>✕</button>
            <h2>Pagar por Bizum</h2>
            <form onSubmit={handleBizumSubmit} className="bizum-form">
              <input type="text" placeholder="Nombre" value={bizumForm.nombre} onChange={e => setBizumForm(f => ({...f, nombre: e.target.value}))} required />
              <input type="tel" placeholder="Teléfono" value={bizumForm.telefono} onChange={e => setBizumForm(f => ({...f, telefono: e.target.value}))} required />
              <input type="text" placeholder="Dirección" value={bizumForm.direccion} onChange={e => setBizumForm(f => ({...f, direccion: e.target.value}))} required />
              <input type="date" min={minDeliveryDateStr} value={bizumForm.fecha} onChange={e => setBizumForm(f => ({...f, fecha: e.target.value}))} required />
              <select value={bizumForm.franja} onChange={e => setBizumForm(f => ({...f, franja: e.target.value}))} required>
                <option value="">Franja horaria</option>
                <option value="mañana">Mañana (10-14h)</option>
                <option value="tarde">Tarde (16-20h)</option>
              </select>
              <button type="submit" className="cart-action-btn">Confirmar y ver recibo</button>
            </form>
          </div>
        </div>
      )}

      {/* Modal WhatsApp */}
      {showWhatsappModal && (
        <div className="bizum-modal-bg">
          <div className="bizum-modal">
            <button className="bizum-close" onClick={() => setShowWhatsappModal(false)}>✕</button>
            <h2>Pedir por WhatsApp</h2>
            <form onSubmit={handleWhatsappSubmit} className="bizum-form">
              <input type="text" placeholder="Nombre" value={whatsappForm.nombre} onChange={e => setWhatsappForm(f => ({...f, nombre: e.target.value}))} required />
              <input type="tel" placeholder="Teléfono" value={whatsappForm.telefono} onChange={e => setWhatsappForm(f => ({...f, telefono: e.target.value}))} required />
              <input type="text" placeholder="Dirección" value={whatsappForm.direccion} onChange={e => setWhatsappForm(f => ({...f, direccion: e.target.value}))} required />
              <input type="date" min={minDeliveryDateStr} value={whatsappForm.fecha} onChange={e => setWhatsappForm(f => ({...f, fecha: e.target.value}))} required />
              <select value={whatsappForm.franja} onChange={e => setWhatsappForm(f => ({...f, franja: e.target.value}))} required>
                <option value="">Franja horaria</option>
                <option value="mañana">Mañana (10-14h)</option>
                <option value="tarde">Tarde (16-20h)</option>
              </select>
              <button type="submit" className="cart-action-btn whatsapp-btn">Enviar pedido por WhatsApp</button>
            </form>
          </div>
        </div>
      )}
      {/* Modales y otros overlays globales aquí si es necesario */}
    </Router>
  );
}

export default App;
