//console.log('тест'); //  в браузкр втроен интерпрертаор, он сичитывает код html построчно

// элементы станицы это гнеизменяемые переменные, поэтому их объявленяем как const:
// document- глобальный объект, содерлит верстку
const btns = document.querySelectorAll('.feature__link'); // псевдомассив кнопкок  [button, button, button, button]
//console.dir(featureLinks[0]); // выведет элемент в виде объекта
const lists = document.querySelectorAll('.feature-sub');// псевдомассив списков [ul,ul,ul,ul]


// featureLinks[0].onclick = function(){ //старый способ,  такой обработчик не позвляет навесить др события на элемент featureLinks[0]
//   console.log('нжаи на кнпоку');
// }

//метод addEventListener можнт повеситть на один и тот же эелмент, одно событие  несоклько фунций-обработчиков:
// featureLinks[0].addEventListener('click', () => { // после того как нажали на кнпоку, выплнится  фукнция-обработчик
//   console.log('1');
// });


// featureLinks[0].addEventListener('click', () => { // после того как нажали на кнпоку, выплнится  фукнция-обработчик
//   console.log('2');
// });


//featureLinks[0].addEventListener('click', () => console.log('2')); // коротнкая запись, используется  только если одна команда записана



// for(let i= 0; i < btns.length; i++){
//   btns[i].addEventListener('click', () => { // вешаем на каждую кнпоку собыие клика
//     console.log(i);
//   })
// }
  

btns.forEach((btnElement, i) => { // этот метод используется для перебора элементов масивва

  btnElement.addEventListener('click', () => { // вешаем на каждую кнпоку событие клика
      btnElement.classList.toggle('feature__link_active'); //свойство classList: если у элемента есть класс, то его убираем, если нет класса, то добавляем
      lists[i].classList.toggle('hidden'); // i-му списку добавляем/удаляем класс
  });
});

