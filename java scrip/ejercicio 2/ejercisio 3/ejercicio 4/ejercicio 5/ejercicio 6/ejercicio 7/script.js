// Creación del objeto usuario con un método
const usuario = {
    nombre: "luis",
    email: "luis@example.com",
    saludar: function() {
        console.log(`Hola, mi nombre es ${this.nombre}`); 
    }
};

// Llamar al método saludar
usuario.saludar(); // Hola, mi nombre es Luis

// Versión alternativa con sintaxis ES6 (método abreviado)
const usuario2 = {
    nombre: "Pedro",
    email: "pedro@correo.com",
    saludar() { // Sintaxis abreviada para métodos
        console.log(`¡Buen día! Soy ${this.nombre}`);
    }
};

usuario2.saludar(); // ¡Buen día! Soy Pedro

// Modificar el nombre y ver el cambio reflejado
usuario.nombre = "carla";
usuario.saludar(); // Hola, mi nombre es carla