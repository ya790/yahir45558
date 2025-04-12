// Creación del objeto configuracion
const configuracion = {
    tema: "oscuro",
    idioma: "español"
};

// Congelar el objeto (lo hace inmutable)
Object.freeze(configuracion);

// Intentos de modificación (no tendrán efecto)
configuracion.tema = "claro";       //  Modificar propiedad existente
configuracion.fuente = "Arial";     //  Agregar nueva propiedad
delete configuracion.idioma;        //  Eliminar propiedad

// Verificación del objeto
console.log("Configuración final:", configuracion); 
console.log("¿Está congelado?", Object.isFrozen(configuracion)); // true