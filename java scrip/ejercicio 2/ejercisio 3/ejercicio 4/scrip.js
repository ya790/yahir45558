// Creación del objeto persona
const persona = {
    nombre: "yahir",
    edad: 15,
    ciudad: "carabobo"
};

// Iteración sobre las propiedades del objeto
for (let propiedad in persona) {
    console.log(`${propiedad}: ${persona[propiedad]}`);
}