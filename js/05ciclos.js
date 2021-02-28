/*Ciclo For =  Este se utiliza para realizar una tarea "n" veces solicitadas, y se incializa en 0 como referencia*/
for (var i = 0; i < 5; i++) {
  console.log("i", i)
}

/*Ciclo while = Este es parecido al anterior con la diferencia que para ver el resultado se tiene que pedir antes
del incremento o se tendra un dato perdido */
var n = 1;

while (n <= 5) {
  console.log("n", n)
  n++;
}

/*Ciclo Do While = En este primero se realiza la acción para posteriormente incrementar o decrementar la cantidad*/
var p = 1;

do {
  console.log("p", p)
  p++;
}

while (p <= 5)

// ejemplo

var cajas = document.querySelectorAll(".cajas")

for (var i = 0; i < cajas.length; i++) {
  cajas[i].style.width = "50px";
  cajas[i].style.height = "50px";
  cajas[i].style.background = "blue";
  cajas[i].style.marginRight = "2px";
  cajas[i].style.float = "left";
}