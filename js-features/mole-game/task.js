//Домашнее задание к лекции «Возможности JavaScript в браузере»
// Задача Убей кротов
'use strict'
let getHole = index => document.getElementById(`hole${index}`);
let deadMole = document.getElementById('dead');
let lostMole = document.getElementById('lost');
let wings = +deadMole.textContent;
let losts = +lostMole.textContent;

for (let i = 1; i < 10; i++) {
  getHole(i).onclick = function () {
    if (this.className.includes('hole_has-mole')) {
      deadMole.textContent = ++wings;
    } else {
      lostMole.textContent = ++losts;
    };

    if (wings === 10) {
      alert("Вы победили!");
      deadMole.textContent = wings = 0;
      lostMole.textContent = losts = 0;
    } else if (losts === 5) {
      alert("Вы проиграли!");
      deadMole.textContent = wings = 0;
      lostMole.textContent = losts = 0;
    }
  }
}