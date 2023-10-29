// Анимация загрузки данных

// Получаем элементы из DOM
const loader = document.getElementById('loader'); // Элемент с индикатором загрузки
const items = document.getElementById('items'); // Элемент, в который будут добавляться элементы
const url = 'https://students.netoservices.ru/nestjs-backend/slow-get-courses/'; // URL для HTTP-запроса

// Создаем новый объект XMLHttpRequest
const xhr = new XMLHttpRequest();

// Открываем GET-запрос на указанный URL
xhr.open('GET', url);

// Отправляем запрос на сервер
xhr.send();

// Обработчик события "readystatechange"
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4) {
    // Убираем класс 'loader_active' с элемента индикатора загрузки
    loader.classList.remove('loader_active');

    // Парсим JSON-данные из ответа сервера
    const json = JSON.parse(xhr.response);

    // Получаем объект "Valute" из JSON-данных
    const valutes = json.response["Valute"];

    // Итерируемся по объекту "Valute" и создаем элементы на основе данных
    for (let i in valutes) {
      createItem(valutes[i].CharCode, valutes[i].Value);
    }
  }
};

// Функция для создания элемента
let createItem = function(code, value) {
  // Создаем элемент с классом 'item'
  const item = document.createElement('div');
  item.classList.add('item');

  // Создаем элемент с классом 'item__code' для кода
  const itemCode = document.createElement('div');
  itemCode.classList.add('item__code');

  // Создаем элемент с классом 'item__value' для значения
  const itemValue = document.createElement('div');
  itemValue.classList.add('item__value');

  // Устанавливаем текстовое содержимое для элементов кода и значения
  itemCode.textContent = code;
  itemValue.textContent = value;

  // Добавляем элементы кода и значения к элементу 'item'
  item.appendChild(itemCode);
  item.appendChild(itemValue);

  // Добавляем элемент 'item' к элементу 'items'
  items.appendChild(item);
};


//1** Получение элементов из DOM:
// const loader = document.getElementById('loader') - получает элемент с id 'loader', который представляет индикатор загрузки.
// const items = document.getElementById('items') - получает элемент с id 'items', в который будут добавлены элементы.
// const url = 'https://students.netoservices.ru/nestjs-backend/slow-get-courses/' - задает URL для HTTP-запроса к серверу.

//2** Создание объекта XMLHttpRequest:
// const xhr = new XMLHttpRequest() - создает новый объект XMLHttpRequest для выполнения HTTP-запросов.

//3** Открытие GET-запроса:
// xhr.open('GET', url) - настраивает GET-запрос к указанному URL.

//4** Отправка запроса:
// xhr.send() - отправляет GET-запрос на сервер.

//5** Обработчик события "readystatechange":
// xhr.onreadystatechange = function() { ... } - добавляет обработчик события "readystatechange", который срабатывает при
// изменении состояния запроса.
// if (xhr.readyState === 4) - проверяет, что состояние запроса равно 4, что означает, что запрос завершен и ответ получен.

//6** Убирание класса 'loader_active':
// loader.classList.remove('loader_active') - удаляет класс 'loader_active' с элемента индикатора загрузки, что скрывает 
// индикатор после получения ответа от сервера.

//7** Парсинг JSON-данных:
// const json = JSON.parse(xhr.response) - парсит JSON-данные из ответа сервера.

//8** Получение объекта "Valute":
// const valutes = json.response["Valute"] - получает объект "Valute" из JSON-данных.

//9** Создание элементов:
// createItem(valutes[i].CharCode, valutes[i].Value)