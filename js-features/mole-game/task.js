//Задача 3   Убей кротов

'use strict' // Директива use strict включает строгий режим JavaScript . Строгий режим JavaScript был введен в ECMAScript 5. 
//Он обеспечивает более строгий анализ и обработку ошибок кода во время выполнения. Это также помогает вам писать более чистый код и
// выявлять ошибки и ошибки, которые в противном случае могли бы остаться незамеченными

let getHole = index => document.getElementById(`hole${index}`);
// getElementById Осущесвляет посик элемента по его идентификатору
let deadMole = document.getElementById('dead');
let lostMole = document.getElementById('lost');
let wings = +deadMole.textContent; //// textContent это свойство DOM, которое используется для установки текстового содержимого для 
//элемента HTML или получения текстового содержимого
let losts = +lostMole.textContent;

for (let i = 1; i < 10; i++) {
  getHole(i).onclick = function () {
// в getHole же сохранили стрелочную ф-ию, поэтому теперь это вызов ф-ии с передачей ей аргумента и 
//на результат её работы (конкретное поле) навешан обработчик события клик. this это объект, у него есть свойство className, 
//его значение - строка. includes - это метод строки.  
    if (this.className.includes('hole_has-mole')) { 
      // Метод includes() возвращает true, если строка содержит указанную строку. 
      deadMole.textContent = ++wings; //Установка текстового содержимого
    } else {
      lostMole.textContent = ++losts;//Установка текстового содержимого
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
