// src/components/Portada.tsx

import productos from "@/data/products";
import Image from "next/image"; // Usar next/image es recomendable en Next.js 13+

// Ejemplo de selección de productos destacados
const destacados = productos.slice(0, 3); // Los 3 primeros o filtra como prefieras

const ventajas = [
    { icono: "🚚", texto: "Envío 24h" },
    { icono: "🥇", texto: "Selección gourmet" },
    { icono: "🎁", texto: "Pack personalizable" },
    { icono: "🛡️", texto: "Pago seguro" },
];

export default function Portada() {
    return (
        <main className="bg-white min-h-screen flex flex-col pb-8 font-sans">
            {/* HERO */}
            <section className="w-full relative h-[340px] flex items-center justify-center">
                {/* Fondo con overlay para texto legible */}
                <div className="absolute inset-0">
                    <Image
                        src={destacados[0]?.images[0] || "/default-hero.jpg"}
                        alt="Caja gourmet"
                        fill
                        priority
                        className="object-cover brightness-75 rounded-b-2xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/30 rounded-b-2xl" />
                </div>
                <div className="relative z-10 flex flex-col items-center justify-center w-full text-center px-3">
                    <h1 className="text-3xl font-extrabold text-white drop-shadow-lg mb-4">
                        Graze Shop
                    </h1>
                    <span className="text-lg font-medium text-white drop-shadow">
                        La experiencia gourmet que llega a tu puerta
                    </span>
                    <a href="/tienda">
                        <button className="mt-7 px-8 py-3 bg-gradient-to-r from-pink-600 to-yellow-500 text-white font-bold rounded-full shadow-lg text-lg tracking-wide transition hover:scale-105 hover:shadow-xl focus:outline-none active:scale-100">
                            Descubre tu pack
                        </button>
                    </a>
                </div>
            </section>

            {/* PACKS DESTACADOS */}
            <section className="mt-5 px-4">
                <h2 className="text-xl font-bold mb-3 text-gray-800">Nuestros packs destacados</h2>
                <div className="flex overflow-x-auto gap-4 pb-2 hide-scrollbar snap-x snap-mandatory -mx-4 px-4">
                    {destacados.map(producto => (
                        <div
                            key={producto.id}
                            className="bg-white rounded-2xl shadow-lg min-w-[210px] snap-center p-3 flex flex-col items-center transition hover:shadow-xl"
                            style={{ border: '1px solid #f2f2f2' }}
                        >
                            <Image
                                src={producto.images[0]}
                                alt={producto.name}
                                width={128}
                                height={128}
                                className="rounded-lg object-cover mb-2 aspect-square"
                            />
                            <div className="text-base font-semibold mt-1 mb-1 text-center">{producto.name}</div>
                            <div className="text-pink-600 font-bold text-lg">{producto.price} €</div>
                            <button className="mt-2 px-6 py-2 bg-pink-500 text-white rounded-full text-sm font-semibold shadow hover:bg-pink-600">
                                Comprar
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            {/* ¿POR QUÉ ELEGIRNOS? */}
            <section className="mt-8 px-5">
                <h2 className="text-base font-bold mb-2 text-gray-700">¿Por qué elegirnos?</h2>
                <div className="grid grid-cols-2 gap-4">
                    {ventajas.map((v, i) => (
                        <div
                            key={i}
                            className="flex flex-col items-center justify-center bg-white rounded-xl shadow w-full py-5 px-2"
                        >
                            <span className="bg-pink-100 text-xl w-11 h-11 flex items-center justify-center rounded-full shadow mb-2">{v.icono}</span>
                            <span className="text-sm font-medium text-gray-700 text-center">{v.texto}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* FOOTER */}
            <footer className="mt-10 px-7 pt-8 pb-4 text-xs text-gray-400 flex flex-col items-center gap-2 border-t border-gray-100">
                <div>Contacto · Aviso legal · RRSS</div>
                <div className="flex gap-3 mt-1 text-lg">
                    <a href="#"><span role="img" aria-label="instagram">📸</span></a>
                    <a href="#"><span role="img" aria-label="whatsapp">💬</span></a>
                    <a href="#"><span role="img" aria-label="mail">📧</span></a>
                </div>
                <div>© 2025 Graze Shop</div>
            </footer>
        </main>
    );
}
