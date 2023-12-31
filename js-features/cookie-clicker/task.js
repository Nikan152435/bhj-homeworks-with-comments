// Задача 2   Игра кликер

let cookieID = document.getElementById ('cookie');// getElementById Осущесвляет посик элемента по его идентификатору
let counterID = document.getElementById('clicker__counter'); //Элемент находится в глобальной области видимости
let counter = 0;

cookieID.addEventListener('click', function() { // встроенная функция в JavaScript, которая принимает событие для прослушивания и второй аргумент, 
  //который вызывается всякий раз, когда описанное событие запускается
  counterID.textContent = ++counter; //про ++ - схожее с предыдущим пунктом/объяснением?
  // textContent это свойство DOM, которое используется для установки текстового содержимого для элемента HTML или получения текстового содержимого
  cookieID.width = counter % 2 == 0 ? 200 : 250;//cookieID.width = counter % 2 == 0 ? 200 : 250; - это тернарный оператор,
  // т.е. если остаток от деления текущего значения переменной counter равен ноль, то устанавливаем ширину (картинки/печеньки) в 200рх, 
  //иначе - в 250рх.
});

//еще варинт
/*------------ Task 2 -------------*/

const clickerCounter = document.getElementById("clicker__counter");
const cookieImage = document.getElementById("cookie");

let clickCount = 0;

function updateClickCounter() {
    clickCount++;

    clickerCounter.textContent = clickCount;

    if (cookieImage.width === 200) {
        cookieImage.width = 150;
        cookieImage.height = 150;
    } else {
        cookieImage.width = 200;
        cookieImage.height = 200;
    }
}

// Добавляем обработчик клика на изображение печеньки
cookieImage.addEventListener("click", updateClickCounter);
