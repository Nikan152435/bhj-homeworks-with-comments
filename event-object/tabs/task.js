const tab = Array.from(document.querySelectorAll(".tab"));
const tabContent = Array.from(document.querySelectorAll(".tab__content"));

for (let i = 0; i < tab.length; i++) {
  tab[i].addEventListener("click", function () {
    if (tab[i].className.includes("tab_active")) {
      tab[i].classList.remove("tab_active");
    } else {
      for (let item of tab) {
        if (item.className.includes("tab_active")) {
          item.classList.remove("tab_active");
        }
        tab[i].classList.add("tab_active");
      }
    }

    if (tabContent[i].className.includes("tab__content_active")) {
      tabContent[i].classList.remove("tab__content_active");
    } else {
      for (let items of tabContent) {
        if (items.className.includes("tab__content_active")) {
          items.classList.remove("tab__content_active");
        }
        tabContent[i].classList.add("tab__content_active");
      }
    }
  });
}

// с комментами

document.addEventListener('DOMContentLoaded', function () {
  const tabsContainers = document.querySelectorAll('.tabs');

  tabsContainers.forEach(container => {
    const tabs = container.querySelectorAll('.tab');
    const tabContents = container.querySelectorAll('.tab__content');

    tabs.forEach((tab, index) => {
      tab.addEventListener('click', () => {
        // Убираем активный класс у всех вкладок и содержимого
        tabs.forEach(tab => tab.classList.remove('tab_active'));
        tabContents.forEach(content => content.classList.remove('tab__content_active'));

        // Добавляем активный класс выбранной вкладке и соответствующему содержимому
        tab.classList.add('tab_active');
        tabContents[index].classList.add('tab__content_active');
      });
    });
  });
});



