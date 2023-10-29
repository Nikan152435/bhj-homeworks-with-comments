// Опрос с выбором результатов

// Получаем элементы из DOM
const poll__title = document.getElementById('poll__title'); // Заголовок опроса
const poll__answers = document.getElementById('poll__answers'); // Ответы в опросе

// Создаем новый объект XMLHttpRequest
let xhr = new XMLHttpRequest();

// Добавляем обработчик события "readystatechange" к объекту XMLHttpRequest
xhr.addEventListener('readystatechange', () => {
    // Проверяем, что состояние запроса равно DONE (4), что означает, что запрос завершен
    if (xhr.readyState === xhr.DONE) {
        // Парсим полученные данные в формате JSON
        const parse = JSON.parse(xhr.responseText);

        // Вставляем заголовок опроса в начало элемента с id 'poll__title'
        poll__title.insertAdjacentHTML('afterbegin', `${parse.data.title}`);
        //     Эта строка кода выполняет вставку заголовка опроса в начало элемента с идентификатором 
        //'poll__title'. Давайте разберем каждую часть этой строки:
        // poll__title: Это переменная, которая содержит ссылку на элемент с идентификатором 'poll__title'. 
        //В данном случае, 'poll__title' представляет собой заголовок опроса на веб-странице.
        // insertAdjacentHTML('afterbegin', ${parse.data.title}): Это вызов метода insertAdjacentHTML, 
        //который добавляет HTML-код внутрь элемента 'poll__title'. Давайте разберем параметры метода:
        // 'afterbegin': Это аргумент, который указывает, куда вставить HTML-код внутри элемента. 
        //В данном случае, 'afterbegin' означает, что HTML-код будет вставлен в начало элемента, 
        //непосредственно перед его содержимым.
        // ${parse.data.title}: Это HTML-код, который будет вставлен. Здесь используется интерполяция 
        //(строковый шаблон) с обратными кавычками (``), чтобы вставить значение заголовка опроса, который 
        //был получен из данных parse.data.title. Это позволяет вставить текст заголовка внутрь элемента.

        // Добавляем ответы в опрос в элемент с id 'poll__answers'
        for (let i = 0; i < parse.data.answers.length; i++) {
            // Вставляем кнопки с ответами
            poll__answers.insertAdjacentHTML('beforeend', `<button class="poll__answer">${parse.data.answers[i]}</button>`);

            // Добавляем обработчик клика на каждую кнопку ответа
            document.getElementsByClassName('poll__answer')[document.getElementsByClassName('poll__answer').length - 1].addEventListener('click', () => {
                alert('Спасибо, ваш голос засчитан!');
            });


            // document.getElementsByClassName('poll__answer'): Это вызов метода getElementsByClassName, который 
            //возвращает коллекцию (псевдо-массив) элементов с классом 'poll__answer'. В данном случае, это означает, 
            //что мы получаем все элементы, которые имеют этот класс на странице.

            // [document.getElementsByClassName('poll__answer').length - 1]: Эта часть кода используется для получения
            // последнего элемента из коллекции кнопок ответов.

            // document.getElementsByClassName('poll__answer').length возвращает количество элементов с 
            //классом 'poll__answer'.
            // -1 используется для получения индекса последнего элемента, так как индексы начинаются с 0.
            // .addEventListener('click', () => { ... }): Этот метод добавляет обработчик события 'click' (клик мышью)
            // к элементу, на который ссылается [document.getElementsByClassName('poll__answer').length - 1]. 
            //Таким образом, этот код добавляет обработчик клика к последней кнопке ответа в опросе.

            // Внутри функции-обработчика () => { ... }, выполняется следующее:

            // alert('Спасибо, ваш голос засчитан!'): Это вызов функции alert, который показывает модальное 
            //диалоговое окно с сообщением "Спасибо, ваш голос засчитан!" при клике на кнопку ответа.
            // Таким образом, эти строки кода добавляют обработчик события клика к последней кнопке ответа в опросе, 
            //и при клике на нее, отображается модальное сообщение, уведомляющее пользователя о том, что его голос 
            //был засчитан.
        }
    }
});

// Открываем GET-запрос на указанный URL
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');

// Отправляем запрос
xhr.send();

//Этот код выполняет запрос к указанному URL, получает данные опроса в формате JSON,
// и затем отображает их на странице.

// 1**document.getElementById('poll__title') и document.getElementById('poll__answers'):
// document.getElementById(...) - метод, который получает элементы по их идентификаторам в HTML.

// 2**Создание объекта XMLHttpRequest:
// let xhr = new XMLHttpRequest(); - создает новый объект XMLHttpRequest для выполнения HTTP-запросов.

//3** xhr.addEventListener('readystatechange', () => {...}):
// xhr.addEventListener - добавляет обработчик события 'readystatechange' к объекту XMLHttpRequest.
// 'readystatechange' - это событие, которое срабатывает каждый раз, когда изменяется состояние объекта XMLHttpRequest в процессе выполнения запроса.
// Стрелочная функция выполняется при срабатывании этого события.

//4** Проверка состояния запроса:
// if (xhr.readyState === xhr.DONE) - проверяет, что состояние запроса равно DONE (4), 
//что означает, что запрос завершен.

//5** Парсинг данных:
// JSON.parse(xhr.responseText) - парсит полученные данные в формате JSON в JavaScript-объект.

//6** poll__title.insertAdjacentHTML('afterbegin', ${parse.data.title}):
// insertAdjacentHTML - метод, который вставляет HTML-код внутрь элемента.
// 'afterbegin' - указывает, что HTML-код должен быть вставлен перед содержимым элемента.
// ${parse.data.title} - вставляет заголовок опроса в элемент с id 'poll__title'.

//7** Добавление кнопок с ответами:
// poll__answers.insertAdjacentHTML('beforeend', ...) - вставляет кнопки с ответами в элемент с id 'poll__answers'.
// <button class="poll__answer">${parse.data.answers[i]}</button> - HTML-код для создания кнопки ответа.

//8** Добавление обработчика клика:
// document.getElementsByClassName('poll__answer')[document.getElementsByClassName('poll__answer').length - 1].addEventListener('click', () => {...}) - добавляет обработчик клика на каждую кнопку ответа.
// document.getElementsByClassName('poll__answer') - получает все элементы с классом 'poll__answer'.
// document.getElementsByClassName('poll__answer').length - 1 - получает индекс последней созданной кнопки.
// Стрелочная функция выполняется при клике на кнопку и выводит сообщение "Спасибо, ваш голос засчитан!".

//9** xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll'):
// xhr.open(...) - метод, который настраивает HTTP-запрос.
// 'GET' - указывает метод запроса (GET, который получает данные).
// 'https://students.netoservices.ru/nestjs-backend/poll' - URL, к которому отправляется запрос.

//10** xhr.send():
// xhr.send() - отправляет HTTP-запрос на сервер