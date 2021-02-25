// Condiciones = Son para diferenciar distintos tipos de información mediante una equivalencia, igualdad o exactitud
var a = 5;
var b = 10;

if (a > b) {
  console.log("a es mayor que b")
} else if (a == b) {
  console.log("a es igual que b")
} else {
  console.log("a no es lo mismo que b, y a es menor que b")
}

// Cambios = Se realizan multiples situaciones a evaluar y así llegar al resultado solicitado
var dia = "Lunes";

switch (dia) {
  case "Sabado":
    console.log("Estudiar PHP");
    break;

  case "Martes":
    console.log("Estudiar CSS");
    break;

  case "Jueves":
    console.log("Estudiar PHP");
    break;

  case "Domingo":
    console.log("Descanso");
    break;

  default:
    console.log("Estudiar JavaScript")
}