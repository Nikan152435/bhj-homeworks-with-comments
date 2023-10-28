//Простой список дел

// Получаем элементы из DOM
const taskAdd = document.getElementById('tasks__add'); // Кнопка "Добавить задачу"
const tasksList = document.getElementById('tasks__list'); // Список задач
const tasksInput = document.getElementById('task__input'); // Поле ввода задачи

// Добавляем обработчик клика на кнопку "Добавить задачу"
taskAdd.addEventListener("click", (e) => {
  e.preventDefault(); // Предотвращаем перезагрузку страницы при отправке формы

  tasksInput.value = tasksInput.value.trim(); // Удаляем лишние пробелы из введенного текста

  if (tasksInput.value) {
    let text = tasksInput.value; // Получаем текст из поля ввода задачи

    // Вставляем HTML для новой задачи в начало списка задач
    tasksList.insertAdjacentHTML('afterBegin',
      `<div class="task">
        <div class="task__title">${text}</div>
        <a href="#" class="task__remove">&times;</a>
      </div>`);

    tasksInput.value = ''; // Очищаем поле ввода задачи

    // Получаем ссылку для удаления и задачу, которая была добавлена
    let taskRemove = document.querySelector('.task__remove');
    let task = document.querySelector('.task');

    // Добавляем обработчик клика на ссылку "удалить задачу"
    taskRemove.addEventListener('click', function(e) {
      e.preventDefault(); // Предотвращаем переход по ссылке

      task.remove(); // Удаляем задачу из списка
    });
  }
});

//Эти методы и операции используются для добавления задач в список и их управления 
//при клике на кнопке "Добавить задачу" и значке удаления.

//1** document.getElementById('tasks__add'):
// document.getElementById(...) - метод, который получает элемент по его идентификатору.

//2** addEventListener('click', (e) => {...}):
// addEventListener - метод, который добавляет обработчик события к элементу.
// 'click' - тип события, в данном случае, клик мышью.
// (e) => {...} - стрелочная функция, которая выполняется при возникновении события.

//3** e.preventDefault():
// e - объект события.
// preventDefault - метод объекта события, который предотвращает стандартное действие браузера 
//(например, переход по ссылке).

//4** document.getElementById('tasks__list'), document.getElementById('task__input'):
// document.getElementById(...) - метод, который получает элементы по их идентификаторам.

//5** tasksInput.value = tasksInput.value.trim():
// tasksInput.value - значение поля ввода задачи.
// trim() - метод строк, который удаляет лишние пробелы в начале и конце строки.

//6** tasksInput.value = '':
// Очищает поле ввода задачи, устанавливая его значение в пустую строку.

//7** tasksList.insertAdjacentHTML('afterBegin', ...):
// insertAdjacentHTML('afterBegin', ...) - метод, который вставляет указанный HTML-код внутрь 
//элемента перед его содержимым.

//8** document.querySelector('.task__remove'), document.querySelector('.task'):
// document.querySelector(...) - метод, который ищет первый элемент на странице, 
//соответствующий указанному селектору.

//9** taskRemove.addEventListener('click', function(e) {...}):
// addEventListener - метод, который добавляет обработчик клика к элементу.
// 'click' - тип события, клик мышью.
// function(e) {...} - функция, которая выполняется при клике на элементе.

//10** task.remove():
// task - элемент задачи.
// remove - метод, который удаляет элемент из DOM.





