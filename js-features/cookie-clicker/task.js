//Домашнее задание к лекции «Возможности JavaScript в браузере»
// Задача 2  Игра кликер

let cookieID = document.getElementById ('cookie');
let counterID = document.getElementById('clicker__counter');
let counter = 0;

cookieID.addEventListener('click', function() {
  counterID.textContent = ++counter;
  cookieID.width = counter % 2 == 0 ? 200 : 250;
});