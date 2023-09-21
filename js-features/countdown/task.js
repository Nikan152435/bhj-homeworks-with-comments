// Задача 1  обратного отсчета

const timerlid = setInterval(function () { // Метод setInterval() вызывает функцию через заданные промежутки времени 
  //(в миллисекундах) 
  const output = document.getElementById("timer");// getElementById Осущесвляет посик элемента по его идентификатору
  output.textContent--; // оьратный отсчет
// textContent это свойство свойство конкретного элемента, который 
//нашли на предыдущей строке. Это само значение таймера на странице, т.е. число 59. Уменьшаем его на 1 и сохраняем новое 
//значение в этот же элемент.
//которое используется для установки текстового содержимого для элемента HTML или получения текстового 
//содержимого, записанного внутри этого элемента . Если вы установите текст с помощью textContent для элемента, 
//то другие дочерние элементы
// будут удалены, и в этот элемент будет добавлен только этот текст.
  if (+output.textContent === 0) {
    alert("Вы победили в конкурсе!");
    clearInterval(timerlId);//Функция clearInterval останавливает таймер, заданный функцией setInterval . 
    //Функция принимает идентификатор
    // того таймера, который нужно остановить.
  }
}, 1000);// Задаржка таймера 1 сек

// еще вариант
/*------------ Task 1 -------------*/

const timerElement = document.getElementById("timer");

let timerValue = parseInt(timerElement.textContent);

function updateTimer() {
    timerValue -= 1;

    // Обновляем текст в элементе с таймером
    timerElement.textContent = timerValue;

    if (timerValue === 0) {
        alert("Вы победили в конкурсе!");
        clearInterval(interval);
    }
}

const interval = setInterval(updateTimer, 1000);


