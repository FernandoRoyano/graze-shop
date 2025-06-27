import React, { useState } from 'react';

const types = [
  { label: 'San Valentín', value: 'san-valentin' },
  { label: 'Día de la Madre', value: 'dia-madre' },
];

const priceRanges = [
  { label: 'Todos', min: 0, max: 1000 },
  { label: 'Menos de 20 €', min: 0, max: 19.99 },
  { label: 'De 20 € a 30 €', min: 20, max: 30 },
  { label: 'De 30 € a 40€', min: 30.01, max: 40 },
  { label: 'De 40 € a 50€', min: 40.01, max: 50 },
  { label: 'De 50 € a 60€', min: 50.01, max: 60 },
];

const sizes = [
  { label: 'Todos', value: '' },
  { label: 'Caja pequeña', value: 'pequeña' },
  { label: 'Caja mediana', value: 'mediana' },
  { label: 'Caja grande', value: 'grande' },
  { label: 'Caja premium', value: 'premium' },
];

interface SidebarProps {
  selectedType: string;
  onSelectType: (type: string) => void;
  minPrice: number;
  maxPrice: number;
  onPriceChange: (min: number, max: number) => void;
  selectedSize?: string;
  onSelectSize?: (size: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ selectedType, onSelectType, minPrice, maxPrice, onPriceChange, selectedSize = '', onSelectSize = () => {} }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Menú hamburguesa para móvil */}
      <button className="sidebar-hamburger" onClick={() => setOpen(!open)}>
        ☰
      </button>
      {open && (
        <div
          className="sidebar-overlay"
          onClick={() => setOpen(false)}
          style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 398, background: 'rgba(0,0,0,0.01)' }}
        />
      )}
      <nav className={`sidebar ${open ? 'open' : ''}`}>
        <h3>Filtrar por tipo</h3>
        <ul>
          {types.map((type) => (
            <li key={type.value}>
              <button
                className={selectedType === type.value ? 'active' : ''}
                onClick={() => {
                  onSelectType(type.value);
                  setOpen(false); // Cierra el menú en móvil
                }}
              >
                {type.label}
              </button>
            </li>
          ))}
        </ul>
        <hr style={{ margin: '2rem 0', borderColor: '#333' }} />
        <h3>Filtrar por tamaño</h3>
        <div className="sidebar-size-filter">
          {sizes.map((size) => (
            <button
              key={size.value}
              className={selectedSize === size.value ? 'active' : ''}
              onClick={() => {
                onSelectSize(size.value);
                setOpen(false);
              }}
              style={{ display: 'block', width: '100%', marginBottom: '0.5rem' }}
            >
              {size.label}
            </button>
          ))}
        </div>
        <hr style={{ margin: '2rem 0', borderColor: '#333' }} />
        <h3>Filtrar por precio</h3>
        <div className="sidebar-price-filter">
          {priceRanges.map((range) => (
            <button
              key={range.label}
              className={minPrice === range.min && maxPrice === range.max ? 'active' : ''}
              onClick={() => {
                onPriceChange(range.min, range.max);
                setOpen(false);
              }}
              style={{ display: 'block', width: '100%', marginBottom: '0.5rem' }}
            >
              {range.label}
            </button>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
