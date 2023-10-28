const dropdownValue = document.querySelector('.dropdown__value');
const dropdownItems = Array.from(document.querySelectorAll('.dropdown__item'));
const dropdownList = document.querySelector('.dropdown__list');


dropdownValue.addEventListener('click', function(e) {
  dropdownList.classList.add('dropdown__list_active');
});



dropdownItems.forEach(item => 
  item.addEventListener('click', function(e) {
    e.preventDefault();
    dropdownValue.textContent = this.textContent;
    dropdownList.classList.remove('.dropdownlist_active');        
  })
);

//console.log(dropdownValue);

//с комментами

const dropdowns = document.querySelectorAll('.dropdown');

// Добавляем обработчик события для каждого элемента "dropdown"
dropdowns.forEach(dropdown => {
    const valueElement = dropdown.querySelector('.dropdown__value');
    const listElement = dropdown.querySelector('.dropdown__list');

    // Обработчик клика на кнопке
    valueElement.addEventListener('click', () => {
        listElement.classList.toggle('dropdown__list_active');
    });

    // Обработчик клика на элемент списка
    listElement.addEventListener('click', (e) => {
        e.preventDefault(); // Запрещаем переход по ссылке
        const selectedValue = e.target.textContent;
        valueElement.textContent = selectedValue;
        listElement.classList.remove('dropdown__list_active');
    });
});

//Разбор задачи с Комментариями


// Выбираем элемент с классом 'dropdown__value' и сохраняем его в переменную dropdownValue
const dropdownValue = document.querySelector('.dropdown__value');

// Выбираем все элементы с классом 'dropdown__item', преобразуем их в массив и сохраняем в переменной dropdownItems
const dropdownItems = Array.from(document.querySelectorAll('.dropdown__item'));

// Выбираем элемент с классом 'dropdown__list' и сохраняем его в переменной dropdownList
const dropdownList = document.querySelector('.dropdown__list');

// Добавляем слушатель события 'click' на элемент dropdownValue
dropdownValue.addEventListener('click', function(e) {
  // При клике на dropdownValue добавляем класс 'dropdown__list_active' к dropdownList
  dropdownList.classList.add('dropdown__list_active');
});

// Добавляем обработчики события 'click' к каждому элементу из массива dropdownItems
dropdownItems.forEach(item => 
  item.addEventListener('click', function(e) {
    // Предотвращаем стандартное действие при клике на элемент (e.preventDefault() - отмена перехода по ссылке)
    e.preventDefault();

    // Устанавливаем текст dropdownValue равным тексту выбранного элемента
    dropdownValue.textContent = this.textContent;

    // Убираем класс 'dropdown__list_active' у dropdownList, скрывая список
    dropdownList.classList.remove('dropdown__list_active');
  })
);

// Закомментированная строка, которая была закомментирована с помощью "//", не выполняет никаких действий и может быть удалена.

//Разбор задачи с выпадающим и сворачивающимся списком

const dropdownValue = document.querySelector('.dropdown__value');
const dropdownItems = Array.from(document.querySelectorAll('.dropdown__item'));
const dropdownList = document.querySelector('.dropdown__list');
let isListOpen = false; // Флаг, показывающий, открыт ли список

dropdownValue.addEventListener('click', function(e) {
  // Переключаем состояние флага при клике на dropdownValue
  isListOpen = !isListOpen;

  if (isListOpen) {
    // Если флаг true, то добавляем класс 'dropdown__list_active' и показываем список
    dropdownList.classList.add('dropdown__list_active');
  } else {
    // Если флаг false, то убираем класс 'dropdown__list_active' и скрываем список
    dropdownList.classList.remove('dropdown__list_active');
  }
});

dropdownItems.forEach(item => 
  item.addEventListener('click', function(e) {
    e.preventDefault();
    dropdownValue.textContent = this.textContent;
    
    // Закрываем список при выборе элемента
    isListOpen = false;
    dropdownList.classList.remove('dropdown__list_active');
  })
);