//Домашнее задание к лекции «Возможности JavaScript в браузере»

//Task 1 Таймер обратного отсчеета

const timerlId = setInterval(function () {
  const output = document.getElementById("timer");
  output.textContent--;
  if (+output.textContent === 0) {
    alert("Вы победили в конкурсе!");
    clearInterval(timerlId);
  }
}, 1000);