export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    images: string[];
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
    },
    {
        id: 2,
        name: "Cesta Bienvenida",
        price: 69,
        description: `Mini caja picoteo, doudou conejo de terciopelo, marco para foto o taza, mini florero con suculenta natural o flores de temporada, zumo de naranja, donuts red velvet y pan. Empaquetados en una cesta con cintas, florecitas y tarjeta personalizada.`,
        images: [
            "/img/bienvenida-1.jpg",
            "/img/bienvenida-2.jpg",
            "/img/bienvenida-3.jpg"
        ],
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
    }
];

export default productos;
