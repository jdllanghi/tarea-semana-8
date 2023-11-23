function validarTaxi(taxi) {
  // Verificar si el objeto tiene la propiedad 'anioFabricacion'
  if ('anioFabricacion' in taxi) {
      // Obtener el año actual
      const anioActual = new Date().getFullYear();

      // Calcular la vida útil del taxi
      const vidaUtil = anioActual - taxi.anioFabricacion;

      // Verificar si la vida útil es menor a 10 años
      return vidaUtil < 10;
  } else {
      // Si el objeto no tiene la propiedad 'anioFabricacion', retornar false
      return false;
  }
}

// Ejemplo de uso
const taxi1 = {
  marca: 'Toyota',
  modelo: 'Corolla',
  anioFabricacion: 2015,
  // Otros atributos...
};

const taxi2 = {
  marca: 'Honda',
  modelo: 'Civic',
  // Otros atributos...
};

console.log(validarTaxi(taxi1)); // Devolverá true o false dependiendo del año de fabricación
console.log(validarTaxi(taxi2)); // Devolverá false ya que no tiene la propiedad 'anioFabricacion'
