
const linksHead = document.querySelectorAll('.menu-list__link'); //псевдомассив сссылок в меню [a, a, a, a]
const mainScroll = document.querySelectorAll('.main__scroll'); // кнпоа на баннере
const newArray = [...linksHead,  mainScroll]; //с помощтю spread оператора,  к массиву linksHead добавили ссылку mainScroll, и полуичли новый массив newArray




newArray.forEach((link) => { // перебираем массив ссылок

  link.addEventListener('click', (event) => { // на кажудю ссылку из спсика вешаем обработчик(коллбэк функция)
    
    //console.log(event); // объект события-клик
    //console.dir(event.target);
    event.preventDefault(); // отменяем стандартное повдение ссылки (повденеи по умочанию)
    //console.log(event.target); // выведет элемнетна котрый нажали, то есть ссылку <a href=""></a>
    //console.log(event.target.getAttribute('href')); // получаем значение атрибута href у нажатого элемента
    const id = event.target.getAttribute('href').substr(1); // метод substr отрезает от строки первый символ(#)
    
    document.getElementById(id).scrollIntoView({  // скроллим к секции
      behavior: 'smooth',
      block: 'start'
    }); // находим жлемнет с указанным id, можно также чрез querySelector

    menuElem.classList.toggle('menu-active');
  });

});