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


/*Модальное окно*/
let popup_basic = document.querySelector('.popup-basic'),
		popup_basic_open = document.querySelector('.popup-basic_open'),
    popup_basic_bg = document.querySelector('.popup-basic_bg'),
		close = document.querySelector('.close');

    popup_basic_open.addEventListener('click', (e) => {
    		e.preventDefault();
        popup_basic.classList.remove('popup-basic');
        popup_basic.classList.add('okno-active');
        popup_basic_bg.classList.add('popup-basic_bg-active');
    })

    close.addEventListener('click',() => {
        popup_basic.classList.remove('okno-active');
        popup_basic_bg.classList.remove('popup-basic_bg-active');
    });