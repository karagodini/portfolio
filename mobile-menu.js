/* Когда пользователь нажимает на кнопку,
переключайтесь между скрытием и отображением содержимого выпадающего списка */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Закройте выпадающий список, если пользователь нажмет за его пределами
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("mobile-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}