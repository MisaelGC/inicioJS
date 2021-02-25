/*Funciones sin paramentros = Se divide en dos, declaramos la función, dentro indicamos la tarea
y ejecutamos la función*/
// Declaramos la función
function saludos() {

  // Tarea de la función
  console.log("Hola");
}
// Ejecutamos la función
saludos();

/*Funciones con parametros = Se divide en dos, declaramos la funcion y le pasamos "n" parametros,
dentro indicamos la tarea a ejecutar, y declaramos la funcion pero en esta indicamos estos
parametros antes mencionados*/
// Declaramos la funcion con parametros
function operacion(digito1, digito2) {

  // Tarea de la función
  var resultados = digito1 + digito2;
  console.log("resultados", resultados);
}
// Ejecutamos la función e indicamos los parametros y se puede ejecutar "n" veces
operacion(5, 8);
operacion(15, 6);

/*Funciones con retorno sin parametros = la funcion con retorno tiene dentro de ella la tarea
a ejecutar y fuera de ella se coloca donde se mostrara*/
function retorno1() {

  //Tarea de la función
  var numero = 3;
  //Regresamos la tarea
  return numero;
}
// Ejecutamos la funcion
console.log(retorno1());

/*Funciones con retorno con parametros = al declararse la funcion se coloca el parametro 
dentro de esta (funcion) se coloca el retorno y fuera de esta se coloca donde mostrar pero
con los parametros a retornar*/
function retorno2(numero) {

  // Regresamos la tarea
  return numero;
}
// Ejecutamos la función
console.log(retorno2(8));