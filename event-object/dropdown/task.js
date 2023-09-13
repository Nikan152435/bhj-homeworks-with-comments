const dropdowwnValue = document.querySelector('.dropdown__value');
const dropdownItems = Array.from(document.querySelectorAll('.dropdown__item'));
const dropdownList = document.querySelector('.dropdown__list');

dropdowwnValue.addEventListener('click', function() {
  dropdownList.classList.add('dropdown__list_active');
})

dropdownItems.forEach(item => 
  item.addEventListener('click', function(e) {
    e.preventDefault();
    dropdowwnValue.textContent = this.textContent;
    dropdownList.classList.remove('dropdown__list_active');        
  });
);