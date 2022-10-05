// скролл до элемента
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}


//Всплывающее окно
let popupBg = document.querySelector('.popup__bg'); // Фон попап окна
let popupBg2 = document.querySelector('.popup__bg2'); // Фон попап окна
let popup = document.querySelector('.popup'); // Само окно
let popup2 = document.querySelector('.popup2'); // Само окно
let openPopupButtons = document.querySelectorAll('.open-popup'); // Кнопки для показа окна
let openPopupButtons2 = document.querySelectorAll('.open-popup2'); // Кнопки для показа окна
let closePopupButton = document.querySelector('.close-popup'); // Кнопка для скрытия окна
openPopupButtons.forEach((button) => { // Перебираем все кнопки
  button.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
      e.preventDefault(); // Предотвращаем дефолтное поведение браузера
      popupBg.classList.add('active'); // Добавляем класс 'active' для фона
      popup.classList.add('active'); // И для самого окна
  })
});

closePopupButton.addEventListener('click',() => { // Вешаем обработчик на крестик
  popupBg.classList.remove('active'); // Убираем активный класс с фона
  popup.classList.remove('active'); // И с окна
});

/**/
let okno1 = document.querySelector('.okno1'),
		popup1 = document.querySelector('.popup1'),
		close = document.querySelector('.close');

    popup1.addEventListener('click', (e) => {
    		e.preventDefault();
        okno1.classList.remove('okno1');
        okno1.classList.add('active');
    })

    close.addEventListener('click',() => {
        okno1.classList.remove('active');
    });