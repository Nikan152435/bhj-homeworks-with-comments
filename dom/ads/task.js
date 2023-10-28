//Решение 1
// const rotatorCases = document.querySelectorAll('.rotator__case');

// Функция для смены активного элемента
// function rotateText() {
//   // Текущий активный элемент
//   const activeCase = document.querySelector('.rotator__case_active');

//   // Скрываем текущий активный элемент
//   activeCase.classList.remove('rotator__case_active');

//   // Ищем следующий элемент для смены
//   let nextCase = activeCase.nextElementSibling;

//   // Если следующего элемента нет, выбрать первый
//   if (!nextCase || !nextCase.classList.contains('rotator__case')) {
//     nextCase = rotatorCases[0];
//   }

//   // Делаем следующий элемент активным
//   nextCase.classList.add('rotator__case_active');

//   // Получаем значения атрибутов data-сolor и data-speed
//   const textColor = nextCase.getAttribute('data-color') || 'black';
//   const transitionSpeed = parseInt(nextCase.getAttribute('data-speed')) || 1000;

//   // Уставим цвет текста и скорость смены
//   nextCase.style.color = textColor;

//   // Установим таймер для вызова функции rotateText через скорость смены слайдов
//   setTimeout(rotateText, transitionSpeed);
// }

// rotateText();

// Еще решение 2

// const rotators = document.querySelector('.rotator');// ищем ротатор
// const rotatorEl = rotators.children;// создаем и присваиваем туда все дочерние эл от rotators
// let i = 0;// создаем переменную , которая равна 0

// function iteratesText (){ //создаем ф-ю, кот ратирует элементы

//     if(i < rotatorEl.length -1){
//         for(let el of rotatorEl){//создаем цикл
//             el.classList.remove('rotator__case_active');//удаляем класс актив
//         }
//         rotatorEl[i].classList.add('rotator__case_active');//добавляем класс атив
//         const color = rotatorEl[i].getAttribute('data-color');//создаем константу колор, 
//         //кот мы присваиваем data-color через метод getAttribute
//         rotatorEl[i].style.color = color;//
//         i++//
//     } else {//
//         i = 0;//
//     } 

// }

// setInterval(iteratesText, 1000);//

//Еще решение 3

const caseElements = document.querySelectorAll('.rotator__case');

function iteratesText (){
    const activeElement = document.querySelector('.rotator__case_active');

    activeElement.classList.remove('rotator__case_active');

    let nextElement = activeElement.nextElementSibling;

    if(!nextElement){
        nextElement = caseElements[0];
    }
    nextElement.classList.add('rotator__case_active');

    const color = nextElement.getAttribute('data-color');
    nextElement.style.color = color;
    const speed = nextElement.getAttribute('data-speed');

    setTimeout(iteratesText, speed);
}
iteratesText ()