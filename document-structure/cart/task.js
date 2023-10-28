//Корзина товаров

// Получение коллекций элементов на странице
const controlDec = Array.from(document.querySelectorAll('.product__quantity-control_dec'));
const controlInk = Array.from(document.querySelectorAll('.product__quantity-control_inc'));
const quantityValue = Array.from(document.querySelectorAll('.product__quantity-value'));

const productAdd = Array.from(document.querySelectorAll('.product__add'));
const cartProducts = document.querySelector('.cart__products');
const product = Array.from(document.querySelectorAll('.product'));

// Обработчик клика на кнопку увеличения количества товара
for (let i = 0; i < controlInk.length; i++) {
  controlInk[i].addEventListener('click', () => {
    // Увеличиваем значение количества товара на 1
    quantityValue[i].textContent = +quantityValue[i].textContent + 1;
  });
}

// Обработчик клика на кнопку уменьшения количества товара
for (let i = 0; i < controlDec.length; i++) {
  controlDec[i].addEventListener('click', () => {
    // Уменьшаем значение количества товара на 1, но не меньше 1
    if (quantityValue[i].textContent > 1) {
      quantityValue[i].textContent = +quantityValue[i].textContent - 1;
    }
  });
}

// Обработчик клика на кнопку "Добавить в корзину"
for (let i = 0; i < productAdd.length; i++) {
  productAdd[i].addEventListener('click', () => {
    // Получаем идентификатор товара из атрибута data-id
    const productId = product[i].dataset.id;

    // Получаем коллекцию элементов в корзине
    const cartProduct = Array.from(document.querySelectorAll('.cart__product'));

    // Ищем товар с таким же идентификатором в корзине
    let findProduct = cartProduct.find(item => item.dataset.id == productId);

    if (findProduct) {
      // Если товар уже есть в корзине, увеличиваем его количество
      const actualityQuantity = findProduct.querySelector('.cart__product-count');
      const additionalQuantity = product[i].querySelector(".product__quantity-value");
      actualityQuantity.innerText = +actualityQuantity.innerText + +additionalQuantity.innerText;
      return false;
    } else {
      // Если товара нет в корзине, добавляем его в корзину
      cartProducts.insertAdjacentHTML('beforeEnd', `
        <div class="cart__product" data-id="${productId}">
          <img class="cart__product-image" src="${product[i].querySelector("img").src}">
          <div class="cart__product-count">${product[i].querySelector(".product__quantity-value").textContent}</div>
        </div>`);
    }
  });
}

// 1. Получение коллекций элементов:
// Array.from(document.querySelectorAll(...)) используется для выбора и преобразования коллекций 
// элементов в массивы.

// 2. Обработчики клика на кнопках "увеличить" и "уменьшить" количество товара:
// controlInk и controlDec - коллекции кнопок увеличения и уменьшения количества товара.
// addEventListener('click', ...) назначает функцию обратного вызова для обработки события клика на кнопках.
// quantityValue[i].textContent - обращение к текстовому содержимому элемента, представляющего количество 
// товара.

// 3. Обработчик клика на кнопке "Добавить в корзину":
// productAdd - коллекция кнопок "Добавить в корзину".
// product[i].dataset.id - получение идентификатора товара из атрибута data-id.
// Поиск товара в корзине с помощью Array.from(document.querySelectorAll(...)).
// Использование insertAdjacentHTML для добавления товара в корзину или увеличения его количества, 
//если он уже там есть.