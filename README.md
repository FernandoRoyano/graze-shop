# Graze Shop

**Tienda online de packs gourmet, cestas de regalo y experiencias gastronómicas a domicilio.**  
Desarrollada con Next.js 16, TypeScript y TailwindCSS.

---

## 🚀 Características

- Landing page móvil y desktop optimizada para conversión
- Slider horizontal con los productos más destacados
- Packs personalizables, variedad de cajas y cestas temáticas
- Soporte para imágenes propias y visualización optimizada
- Componentes modulares y fáciles de escalar
- Ready para desplegar en Vercel

---

## 🛠️ Tecnologías

- [Next.js 16](https://nextjs.org/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- Imágenes propias en `/public/img/`

---

## 📦 Estructura de carpetas

src/
app/ # Páginas principales (Next.js App Router)
components/ # Componentes reutilizables
data/ # Datos estáticos (productos.ts)
public/
img/ # Tus propias imágenes para productos
favicon.ico
README.md # Este archivo
next.config.js # Configuración Next.js
tailwind.config.js


---

## ⚡ Instalación y uso local

git clone https://github.com/tu-usuario/graze-shop.git
cd graze-shop
npm install
npm run dev

text

La web estará disponible en [http://localhost:3000](http://localhost:3000)

---

## 🖼️ Usar tus propias imágenes

Coloca las fotos de tus productos en la carpeta `/public/img/`.  
En cada entrada del array de productos (en `/src/data/products.ts`), referencia la imagen como:

images: ["/img/nombre-foto.jpg"]

text

Se recomienda formato `.jpg` o `.webp` y un tamaño ideal de **600x600px** (<200kb) para mejor rendimiento.

---

## ✨ Añadir productos

Edita `/src/data/products.ts` y añade tu producto siguiendo este formato:

{
id: 4,
name: "Cesta Gourmet Deluxe",
price: 70,
description: "Incluye bebidas, jamón, queso y mucho más.",
images: ["/img/cesta-deluxe.jpg"],
}



---

## 📝 Contribuir

¿Quieres mejorar el diseño, añadir nuevos packs o ampliar funcionalidades?  
- Haz fork y tu rama `feature/mi-aporte`
- Abre un Pull Request y describe tus cambios
- Se agradecen propuestas visuales y feedback de usabilidad

---

## 🗄️ Despliegue

Este proyecto está listo para despliegue directo en [Vercel](https://vercel.com/):  
- Solo haz “Import Project” y selecciona el repo  
- Vercel detecta Next.js, instala dependencias y publica tu app rápidamente

---

## 📧 Contacto

Para dudas sobre el proyecto, colaboraciones o soporte, contáctanos en  
**tu-email@ejemplo.com**

---

**© 2025 Graze Shop • Tu tienda gourmet online**