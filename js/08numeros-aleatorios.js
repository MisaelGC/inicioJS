var numeroAleatorio = document.querySelector("#numeroAleatorio");
var numero = 0;

/* Numeros Aleatorios
El objetivo Math permite realizar tareas matemáticas en los números.
Math.ramdom = devuelve un número alearior entre 0 (inclusive), y 1 (exclusivo)
Math.floor = redondea al número menor del decimal
Math.ceil = redonde al número maximo del decimal
Math.round = devuelve el valor de x redondeado a su número entero más próximo*/

numero = Math.round(Math.random() * 10);
numeroAleatorio.innerHTML = numero;
console.log("numero", numero)