document.addEventListener('DOMContentLoaded', function() {

    const openModalBtn = document.getElementById('openModalBtn');

    const modal = document.getElementById('modal');

    const close = document.getElementById('close');

  
    // Функция для открытия модального окна

    openModalBtn.addEventListener('click', function() {

        modal.style.display = 'block';

    });

    // Функция для закрытия модального окна

    close.addEventListener('click', function() {

        modal.style.display = 'none';

    });

    // Закрытие модального окна при клике вне его

    window.addEventListener('click', function(event) {

        if (event.target === modal) {

            modal.style.display = 'none';

        }

    });

    //Удаление формы заполнения товара

    document.querySelector('body').onclick = function(e) {
      if(e.target.className != 'btn-card') return
      let item = e.target.closest('.card')
      item.remove()
    }





    //Добавление формы заполнения товара
   

    const container = document.querySelector('.cards');
    const buttonAdd = document.querySelector('.buttonAdd');

// Функция для создания новой формы.
function createCard() {
  // Создаем div элемент для карточки товара.
  const card = document.createElement('div');
  card.classList.add('card'); // Добавляем класс 'card' для стилизации.
  card.innerHTML = `<div class="card-name">
  <p class="text-purple gap">Товар<span class="count"></span></p>
  <button class="btn-card" id="Cardclose"  >—</button>
</div>
<div class="form-example">
  <label>Название товара</label>
    <input type="number" name="name"  placeholder="Футболка" required />
<div class="gap">
  <p class="text">Скорее всего, это</p>
  <p class="text-purple">линия "Одежда"</p>
</div>
  <p class="text">Введите транспортировочные данные</p>
    <div class="unit-list">
      <div class="unit">
        <label>Длина, см</label>
        <input class="length"  type="number" placeholder="Длина" required />
      </div>
      <div class="unit">
        <label>Ширина, см</label>
        <input type="number" class="width" placeholder="Ширина" required />
      </div>
      <div class="unit">
        <label>Высота, см</label>
        <input type="number" class="height"  placeholder="Высота" required />
      </div>
      <p class="unit-list_text">или</p>
      <div class="unit">
        <label>Введите объём</label>
        <input type="number" class="volume" placeholder="Объём" required />
      </div>
    </div>
    <label>Вес коробки, кг</label>
    <input class="weight" type="number" value=""  placeholder="Введите вес коробки" required />
    <label>Кол-во коробок, шт</label>
    <input type="number" value=""  placeholder="Введите кол-во коробок" required />
    <label>Стоимость товара, ¥</label>
    <input type="number" name="name"  placeholder="Введите общую стоимость всего товара" required />
    <label><input type="checkbox" value="Хрупкий товар">Хрупкий товар</label>
</div>`

  container.insertBefore(card, buttonAdd);
}

// Находим кнопку "Добавить товар" и добавляем обработчик клика.
const addCardButton = document.querySelector('.addCard');
addCardButton.addEventListener('click', createCard);




//расчеты Общего веса

let sum   = document.getElementById('sum');

let small = document.querySelectorAll('.weight'); 
let numbers = [];

for( let i = 0; i < small.length; i++ ){
  numbers.push( small[i].value ); 
  
  small[i].addEventListener('input', function(){
    numbers[i] = this.value; 
    updateResults();
  });
}
updateResults();

function updateResults(){
  sum.value = sumArr( numbers );
}

function sumArr(arr){
  let x = 0;
  for( let i = 0; i < arr.length; i++ ){
    x += +arr[i]; // (*2)
  }
  return x;
}

//Расчеты общего объема
function calculateTotalVolume() {
  let totalVolume = 0;
  const productCards = document.querySelectorAll('.card'); // Получаем все карточки товаров
  console.log(productCards);

  productCards.forEach(card => {
    const length = parseFloat(card.querySelector('.length')?.value) || 0; // Длина
    const width = parseFloat(card.querySelector('.width')?.value) || 0; // Ширина
    const height = parseFloat(card.querySelector('.height')?.value) || 0; // Высота
    const volume = parseFloat(card.querySelector('.volume')?.value) || 0; // Объем

    let productVolume;
    if (volume > 0) {
      productVolume = volume; // Если указан объем, используем его
    } else {
      productVolume = length * width * height; // Иначе вычисляем
    }

    totalVolume += productVolume; // Добавляем к общему объему
  }); 

  document.getElementById('sumVolume').value = totalVolume; // Выводим результат
}
//Вызываем функцию при изменении значений полей
document.querySelectorAll('input').forEach(element => {
  element.addEventListener('input', calculateTotalVolume);
});

//Форма с выпадающим списком
const input = document.getElementById('myInput');
const dropdown = document.getElementById('dropdown');
const selectedItems = document.getElementById('selectedItems');

input.addEventListener('click', function (e) {
  dropdown.style.display = dropdown.style.display === 'none' ? 'block' : 'none'
})


dropdown.addEventListener('change', (event) => {
  const checkbox = event.target;
  if (checkbox.checked) {
      const item = document.createElement('button');
      item.innerHTML = checkbox.value + '<span class="remove-btn">x</span>';
      item.setAttribute('data-value', checkbox.value);
      selectedItems.appendChild(item);

      // Удаление элемента по нажатию
      item.querySelector('.remove-btn').addEventListener('click', function () {
          checkbox.checked = false;
          selectedItems.removeChild(item);
      });

  } else {
      const itemToRemove = selectedItems.querySelector(`[data-value="${checkbox.value}"]`);
      if (itemToRemove) {
          selectedItems.removeChild(itemToRemove);
      }
  }
});


//Переворот стрелки

let inpList = document.querySelector(".myInput");
let inpImg = document.querySelector(".input-img");

inpList.addEventListener('click', function (e) {
  inpImg.style.transform = inpImg.style.transform === "rotate(180deg)" ? 'rotate(360deg)' : 'rotate(180deg)' ;

})


});
