//console.log('тест'); //  в браузкер вмтроен интерпрертаор, он считывает код html построчно

// элементы станицы это гнеизменяемые переменные, поэтому их объявленяем как const:
// document- глобальный объект, содерлит верстку
const btns = document.querySelectorAll('.feature__link'); // псевдомассив кнопкок  [button, button, button, button]
//console.dir(featureLinks[0]); // выведет элемент в виде объекта
const lists = document.querySelectorAll('.feature-sub');// псевдомассив списков(описаний) [ul,ul,ul,ul]


// featureLinks[0].onclick = function(){ //старый способ,  такой обработчик не позвляет навесить др события на элемент featureLinks[0]
//   console.log('нжаи на кнпоку');
// }

//метод addEventListener можнт повеситть на один и тот же эелмент, одно событие и  несоклько фунций-обработчиков:
// featureLinks[0].addEventListener('click', () => { // после того как нажали на кнпоку, выплнится  фукнция-обработчик
//   console.log('1');
// });


// featureLinks[0].addEventListener('click', () => { // после того как нажали на кнпоку, выплнится  фукнция-обработчик
//   console.log('2');
// });


//featureLinks[0].addEventListener('click', () => console.log('2')); // коротнкая запись, используется  только если одна команда записана



// for(let i= 0; i < btns.length; i++){
//   btns[i].addEventListener('click', () => { // вешаем на каждую кнопку событие клика
//     console.log(i);
//   })
// }
  

btns.forEach((btn, i) => { // этот метод используется для перебора элементов масивва

  btn.addEventListener('click', () => { // вешаем на каждую кнпоку событие клика
      
      btns.forEach((btnItem, index) => {
        if(btnItem === btn){ // если btnItem это нажатая кнпока(btn)-константа
          btnItem.classList.toggle('feature__link_active'); // стрелочка повернется вниз
          lists[index].classList.toggle('hidden'); // i-му списку добавляем/удаляем класс
        }
        else{
          btnItem.classList.remove('feature__link_active'); // у ненажатх кнпоок  убираем клас, тте стрелочка повренется вверх
          lists[index].classList.add('hidden');  // скрываем описание
        }
      });

      


  });
});

