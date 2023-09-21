//Задача 3   Убей кротов

'use strict' // Директива use strict включает строгий режим JavaScript . Строгий режим JavaScript был введен в ECMAScript 5. 
//Он обеспечивает более строгий анализ и обработку ошибок кода во время выполнения. Это также помогает вам писать более чистый код и
// выявлять ошибки и ошибки, которые в противном случае могли бы остаться незамеченными

let getHole = index => document.getElementById(`hole${index}`);
// getElementById Осущесвляет посик элемента по его идентификатору
let deadMole = document.getElementById('dead');//
let lostMole = document.getElementById('lost');//
let wings = +deadMole.textContent; //// textContent это свойство DOM, которое используется для установки текстового содержимого для 
//элемента HTML или получения текстового содержимого
let losts = +lostMole.textContent;//

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

// еще вариант
/*----------------- Task 3 -------------------*/

let deadCount = 0; // счетчик убитых кротов
let lostCount = 0; // счетчик промахов
const targetCount = 10; // общее число кротов, которых нужно убить для победы
const maxLostCount = 5; // количество поражений для завершения игры

let getHole = index => document.getElementById(hole${index});

function handleClick(index) {
    const hole = getHole(index);
    if (hole.classList.contains('hole_has-mole')) {
        // Крот убит
        deadCount++;
        hole.classList.remove('hole_has-mole'); // Убираем крота из лунки
    } else {
        // Промах
        lostCount++;
    }

    // Обновляем текст в элементах счетчиков
    document.getElementById("dead").textContent = deadCount;
    document.getElementById("lost").textContent = lostCount;

    // Проверяем условия победы и поражения
    if (deadCount === targetCount) {
        alert("Вы победили!");
        resetGame();
    } else if (lostCount === maxLostCount) {
        alert("Игра окончена. Вы проиграли.");
        resetGame();
    }
}

// Добавляем обработчики клика к каждой лунке
for (let i = 1; i <= 9; i++) {
    getHole(i).addEventListener('click', () => handleClick(i));
} (изменено)
[16:06]
