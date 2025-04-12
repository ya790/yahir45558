// Creación del objeto producto
const producto = {
    nombre: "canaima",
    precio: 120,
    stock: 25
};

// Uso de Object.keys para obtener las claves
const claves = Object.keys(producto);
console.log("Claves del objeto:", claves); // ["nombre", "precio", "stock"]

// Uso de Object.values para obtener los valores
const valores = Object.values(producto);
console.log("Valores del objeto:", valores); // ["Laptop", 120, 25]

// Uso de Object.entries para obtener pares [clave, valor]
const entradas = Object.entries(producto);
console.log("Entradas del objeto:", entradas); // [["nombre", "canaima"], ["precio", 120], ["stock", 25]]

// Mostrar entradas de forma detallada
console.log("\nDetalle de entradas:");
for (const [clave, valor] of entradas) {
    console.log(`${clave} -> ${valor}`);
}