export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    images: string[];
    category?: string;
}

const productos: Product[] = [
    {
        id: 1,
        name: "Cesta Regalo",
        price: 70,
        description: `2 tipos de bebidas, queso (envasado), jamón ibérico (envasado), caja de chocolate, mini tostadas, mini panetone, turrón duro, turrón premium, mejillones, bonito del norte y polvorones. El precio puede variar dependiendo de los artículos. Los ingredientes se pueden cambiar por temporada.`,
        images: [
            "/img/cesta-regalo-1.jpg",
            "/img/cesta-regalo-2.jpg"
        ],
        category: "Cestas Especiales"
    },
    {
        id: 2,
        name: "Cesta Bienvenida",
        price: 69,
        description: `Mini caja picoteo (puedes cambiar cualquier ingrediente por lo que prefieras), doudou conejo de terciopelo, marco para foto o taza, mini florero con suculenta natural o flores de temporada, zumo de naranja, donuts red velvet y pan. Empaquetados en una cesta con cintas, florecitas y tarjeta personalizada.`,
        images: [
            "/img/bienvenida-1.jpg",
            "/img/bienvenida-2.jpg",
            "/img/bienvenida-3.jpg"
        ],
        category: "Cestas Especiales"
    },
    {
        id: 3,
        name: "Caja Vegetariana Mediana",
        price: 45,
        description: `Tamaño mediano, sirve 3/4 personas. Variedades de frutas, quesos (cremoso, emmental, curado, romero, azul, brie), mermelada, frutos secos, encurtidos, cherry, picos y pan.`,
        images: [
            "/img/vegetariana-1.jpg",
            "/img/vegetariana-2.jpg",
            "/img/vegetariana-3.jpg"
        ],
        category: "Cajas Gourmet"
    },
    {
        id: 4,
        name: "Bandeja Ibérica Sin Gluten",
        price: 41,
        description: `Tamaño 28x22, sirve 2 personas. Variedades de frutas (5 opciones), con o sin pan sin gluten, jamón ibérico, salchichón ibérico, chorizo ibérico, trufas de chocolate, aceitunas, pepinillos, pistachos, nueces y mermelada.`,
        images: [
            "/img/iberica-sin-gluten.jpg"
        ],
        category: "Bandejas Ibéricas"
    },
    {
        id: 5,
        name: "Bandeja Ibérica",
        price: 89,
        description: `Tamaño 45x31, sirve 5/6 personas. Variedades de frutas (6 opciones), pan sin gluten, jamón ibérico, salchichón ibérico, chorizo ibérico, trufas de chocolate, aceitunas, pepinillos, pistachos, nueces y mermelada.`,
        images: [
            "/img/Bandeja-iberica.jpg"
        ],
        category: "Bandejas Ibéricas"
    },
    {
        id: 6,
        name: "Bandeja Flores Ibéricas",
        price: 39,
        description: `Tamaño 28x22, sirve 2 personas. Jamón ibérico, chorizo ibérico, salchichón ibérico, queso curado, queso brie, encurtidos, frutas frescas, frutos secos, picos, tostaditas y mermelada.`,
        images: [
            "/img/bandeja-flores-ibericas.jpg"
        ],
        category: "Bandejas Ibéricas"
    },
    {
        id: 7,
        name: "Bandeja Bocadillos XXL",
        price: 85,
        description: `Tamaño 59x39, sirve 15/20 personas. Mix de salado y dulce: mini sándwich de jamón y queso, mini bocadillo de atún, mini bocadillo de pollo, magdalenas, cruasanes y palmeritas.`,
        images: [
            "/img/bandejas-de-bocadillos-1.jpg",
            "/img/bandejas-de-bocadillos-2.jpg",
            "/img/bandejas-de-bocadillos-3.jpg"
        ],
        category: "Bandejas Eventos"
    }
];

export default productos;
