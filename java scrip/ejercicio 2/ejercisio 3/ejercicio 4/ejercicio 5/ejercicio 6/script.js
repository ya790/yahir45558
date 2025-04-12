// Creación del objeto empleado
const empleado = {
    nombre: "josue",
    salario: 900
};

// Variable para acceder dinámicamente a la propiedad "salario"
const propiedad = "salario";

// Acceso dinámico a la propiedad usando la variable
console.log("Salario actual:", empleado[propiedad]); // 900

// Modificación del salario usando la variable
empleado[propiedad] = 3500; // Cambiamos el salario

// Verificación del cambio
console.log("Nuevo salario:", empleado[propiedad]); // 3500