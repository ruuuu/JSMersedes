// кнпока бургер humburger-menu
// моб меню menu 
// humburger-menu-active
//menu-active

const burger = document.querySelector('.humburger-menu'); // кнпока бургера
const menuElem = document.querySelector('.menu');  // меню

const toggleMenu = () => { 
    burger.classList.toggle('humburger-menu-active'); // крстик отобразится
    menuElem.classList.toggle('menu-active');
}
    


burger.addEventListener('click', toggleMenu); // при клике вызоется функция


