var tiempo = document.querySelector("#tiempo");
var segundo = 0;
// Set Interval (Intervalo de tiempo)
// setInterval(función, tiempo)

var intervalos = setInterval(function () {

  segundo++;

  tiempo.innerHTML = segundo;
}, 1000)

// Set Timeout (retardo de tiempo)
// setTimeout (función, tiempo)

setTimeout(function () {

  // alert("Se cumplió el tiempo");
  clearInterval(intervalos);

}, 5000)