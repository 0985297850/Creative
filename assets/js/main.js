var button = document.querySelector('.navbar .navbar__button');
var listMenu = document.querySelector('.navbar .navbar__menu-list');
button.addEventListener('click',function(){
    listMenu.classList.toggle('show')
})