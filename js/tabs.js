// массив от псевдомассива отилчается тем, что у массиовв методов больше чем у псевдо
const tabsHandlerElems = document.querySelectorAll('[data-tabs-handler]'); // нашил кнпоки(псевдомассив)) по из datа атрибуту 
const tabsContentElems = document.querySelectorAll('[data-tabs-field]'); // по атрибуу взяли Описание
const titles = document.querySelectorAll('.design__title');



for(let btn of tabsHandlerElems){ // перебирает элементы псевдомассива

    btn.addEventListener('click', () => { // вешаем событие на текущую кнопку
        
        tabsHandlerElems.forEach((item) =>  item.classList.remove('design-list__item_active')); // у обеих кнопок удаляем класс
        btn.classList.add('design-list__item_active');
      
        tabsContentElems.forEach((content) => { // Описание
            if(content.dataset.tabsField === btn.dataset.tabsHandler) {
                content.classList.remove('hidden');
            }
            else{
                content.classList.add('hidden');
            }    
        });

        titles.forEach((title) => {
            if(title.dataset.tabsTitle === btn.dataset.tabsHandler) {
                title.classList.remove('hidden');
            }
            else{
                title.classList.add('hidden');
            } 
        }); 
    });
}

//console.dir(btn); // в dataset храняться все data-атрибуты, в  dir отобразится data-tabs-handler как tabsHandle  
 //console.log(btn.dataset.tabsHandler); // получили значенеи data-атрибута