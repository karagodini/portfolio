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

//скрол меню
window.onscroll = function(){
  var scrolled = window.pageYOffset || document.documentElement.scrollTop;
  var o = document.getElementById('header');
  if (scrolled > 1) o.setAttribute('class','fix');
  else o.setAttribute('class','not_fix');
}


/*Модальное окно*/
let popup_basic = document.querySelector('.popup-basic'),
    popup_Business = document.querySelector('.popup-Business'),
    popup_Premium = document.querySelector('.popup-Premium'),
		popup_basic_open = document.querySelector('.popup-basic_open'),
    popup_Business_open = document.querySelector('.popup-Business_open'),
    popup_Premium_open = document.querySelector('.popup-Premium_open'),
    popup_basic_bg = document.querySelector('.popup-basic_bg'),
    popup_Business_bg = document.querySelector('.popup-Business_bg'),
    popup_Premium_bg = document.querySelector('.popup-Premium_bg'),
		close = document.querySelector('.close'),
    close_Business = document.querySelector('.close-Business'),
    close_Premium = document.querySelector('.close-Premium');

    popup_basic_open.addEventListener('click', (e) => {
    		e.preventDefault();
        popup_basic.classList.remove('popup-basic');
        popup_basic.classList.add('okno-active');
        popup_basic_bg.classList.add('popup-basic_bg-active');
    })

    popup_Business_open.addEventListener('click', (e) => {
      e.preventDefault();
      popup_Business.classList.remove('popup-Business');
      popup_Business.classList.add('okno-active');
      popup_Business_bg.classList.add('popup-Business_bg-active');
  })

    popup_Premium_open.addEventListener('click', (e) => {
      e.preventDefault();
      popup_Premium.classList.remove('popup-Premium');
      popup_Premium.classList.add('okno-active');
      popup_Premium_bg.classList.add('popup-Premium_bg-active');
  })

    close.addEventListener('click',() => {
        popup_basic.classList.remove('okno-active');
        popup_basic_bg.classList.remove('popup-basic_bg-active');
    });

    close_Business.addEventListener('click',() => {
        popup_Business.classList.remove('okno-active');
        popup_Business_bg.classList.remove('popup-Business_bg-active');
  });

    close_Premium.addEventListener('click',() => {
      popup_Premium.classList.remove('okno-active');
      popup_Premium_bg.classList.remove('popup-Premium_bg-active');
  });