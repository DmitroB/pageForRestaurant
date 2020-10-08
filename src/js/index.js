let menuBtn = document.querySelector('.mobile-menu');
let menu = document.querySelector('.menu');
let shadow = document.querySelector('.shadow-fix');
let menuMain = document.querySelector('.main-menu');


menuBtn.addEventListener('click', function(){
    menuBtn.classList.toggle('menu-active');
    menu.classList.toggle('active');
    shadow.classList.toggle('shadow-active');
    menuMain.classList.toggle('main-active');
})







