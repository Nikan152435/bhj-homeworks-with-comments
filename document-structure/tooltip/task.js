//Всплывающая подсказка.Этот код добавляет и управляет подсказками при клике на элементы 
//с классом 'has-tooltip'


// Получаем все элементы с классом 'has-tooltip' и преобразуем их в массив
const hasTooltip = Array.from(document.querySelectorAll('.has-tooltip'));

// Добавляем обработчик клика для каждого элемента
for (let i = 0; i < hasTooltip.length; i++) {
  hasTooltip[i].addEventListener('click', (e) => {
    e.preventDefault(); // Предотвращаем стандартное действие по клику (например, переход по ссылке)

    let tooltip = document.querySelector('.tooltip_active'); // Ищем уже активные подсказки

    if (tooltip == undefined) {
      // Если нет активной подсказки, создаем и вставляем элемент с классом 'tooltip_active' после текущего элемента
      hasTooltip[i].insertAdjacentHTML('afterEnd', '<div class="tooltip tooltip_active"></div>');

      // Получаем новый активный элемент
      let active = document.querySelector('.tooltip_active');

      // Заполняем его текстом из атрибута 'title' текущего элемента
      active.innerText = hasTooltip[i].title;

      // Устанавливаем позицию активной подсказки относительно текущего элемента
      active.style.top = hasTooltip[i].getBoundingClientRect().top + 20 + 'px';
      active.style.left = hasTooltip[i].getBoundingClientRect().left + 'px';
    } else if ((tooltip !== undefined) && (tooltip.textContent === hasTooltip[i].title)) {
      // Если есть активная подсказка и текст совпадает с 'title' текущего элемента, удаляем подсказку
      tooltip.remove();
    } else if ((tooltip !== undefined) && (tooltip.textContent !== hasTooltip[i].title)) {
      // Если есть активная подсказка, но текст не совпадает, заменяем подсказку на новую
      tooltip.remove();
      hasTooltip[i].insertAdjacentHTML('afterEnd', '<div class="tooltip tooltip_active"></div>');
      let active = document.querySelector('.tooltip_active');
      active.innerText = hasTooltip[i].title;
      active.style.top = hasTooltip[i].getBoundingClientRect().top + 20 + 'px';
      active.style.left = hasTooltip[i].getBoundingClientRect().left + 'px';
    }
  })
}

//Эти методы и операции используются для создания и управления подсказками при клике на 
//элементы с классом 'has-tooltip'.

// 1** Array.from(document.querySelectorAll('.has-tooltip')):
// document.querySelectorAll('.has-tooltip') - это метод querySelectorAll, который ищет все элементы, имеющие класс 'has-tooltip' на странице.

// 2**addEventListener('click', (e) => {...}):
//  addEventListener - метод, который добавляет обработчик события к элементу.
// 'click' - тип события, в данном случае, клик мышью.
// (e) => {...} - стрелочная функция, которая выполняется при возникновении события.

//3** e.preventDefault():
// e - объект события.
// preventDefault - метод объекта события, который предотвращает стандартное действие браузера (например, переход по ссылке).

// 4**document.querySelector('.tooltip_active'):
//  document.querySelector(...) - метод, который ищет первый элемент на странице, соответствующий указанному селектору.

// 5**hasTooltip[i].insertAdjacentHTML('afterEnd', '<div class="tooltip tooltip_active"></div>'):
// insertAdjacentHTML('afterEnd', ...) - метод, который вставляет указанный 
//HTML-код после элемента hasTooltip[i].

// 6**hasTooltip[i].title:
// hasTooltip[i] - текущий элемент из массива.
// title - атрибут элемента, содержащий текст, который используется для создания подсказки.

//7** hasTooltip[i].getBoundingClientRect().top и hasTooltip[i].getBoundingClientRect().left:
// getBoundingClientRect() - метод, возвращающий информацию о размерах и позиции элемента относительно видимой области браузера.
// top - свойство объекта, содержащее верхнюю координату элемента.
// left - свойство объекта, содержащее левую координату элемента.

//8** tooltip.remove():
// tooltip - элемент подсказки.
// remove - метод, который удаляет элемент из DOM.