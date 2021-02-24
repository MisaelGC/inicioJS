// Variales Númericas = Esta no lleva comillas, los números puden ser infinitos y decimales
var numero = 1;
console.log("numero", numero);

// Variable de Texto = Esta se le llama String y va dentro de comillas SIEMPRE
var palabra = "Hola";
console.log("palabra", palabra);

// Variable Booleana = Esta suele tener solo dos valores True (verdadero) o False (falso)
var booleana = true;
console.log("booleana", booleana);

// Variable Array (Arreglo) = Esta conformada por una, varias o todas las anteriores, claro siguiendo
// las reglas antes mencionadas y siempre va dentro de corchetes [] y puede almacenar más de un dato
// incluso le podemos pasar o colocar, variables ya existentes
var arreglo = [56, "pato", false, numero, palabra, booleana];
console.log("arreglo", arreglo);
// Y si quiero solo ver un indice se puede selecionar desde 0
console.log("arreglo", arreglo[2]);

// Varible Object (Objeto) = Esta puede almacenar igual que el Array variada informacion, pero
// la diferencia seria que, esta lleva dos parametros (propiedad: valor) y esta va encerrada
// dentro de llaves {}
var jugo = {
  ingrediente1: "fresa",
  ingrediente2: "azucar",
  ingrediente3: "agua"
};
console.log("jugo", jugo);
// Y si quiero solo ver un indice se puede selecionar lo selecciono directo
console.log("jugo", jugo.ingrediente1);