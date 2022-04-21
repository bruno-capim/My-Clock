var Timer = document.getElementById("Time");
var timerText = document.getElementById("Text");
var clock = document.getElementById("Clock");

var opacidade;

function mostraTimer() {
  let now = new Date();
  let today = new Date();

  dayName = new Array(
    "domingo",
    "segunda",
    "terça",
    "quarta",
    "quinta",
    "sexta",
    "sábado"
  );
  monName = new Array(
    "janeiro",
    "fevereiro",
    "março",
    "abril",
    "maio",
    "junho",
    "agosto",
    "outubro",
    "novembro",
    "dezembro"
  );

  Timer.innerHTML = today.getDate() + " / " + today.getDay() + " / " + today.getFullYear();

  timerText.innerHTML =
    "Hoje é " +
    dayName[now.getDay()] +
    ", " +
    now.getDate() +
    " de " +
    monName[now.getMonth()] +
    " de " +
    now.getFullYear() +
    " ";

  clock.innerHTML =
    now.getHours() + " : " + now.getMinutes() + " : " + now.getSeconds();
}

timer = setInterval(loop, 1);

function loop() {
  mostraTimer();
}
