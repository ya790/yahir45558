// Creación del objeto carro
const carro = {
    marca: "4x4",
    modelo: "Corolla",
    año: 2026
  };
  
  // Acceso a propiedades usando notación de corchetes
  console.log("Marca:", carro["marca"]);       // 4x4
  console.log("Modelo original:", carro["modelo"]); // Corolla
  console.log("Año:", carro["año"]);          // 2026
  
  // Modificación de la propiedad modelo usando corchetes
  carro["modelo"] = "Camry"; // Cambiamos el modelo de Corolla a Camry
  
  // Mostrar el cambio aplicado
  console.log("Modelo actualizado:", carro["modelo"]); // Camry