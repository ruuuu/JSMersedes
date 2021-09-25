const modalButtons = document.querySelectorAll('.more'); // кнпока Узнать больше
const modal = document.querySelector('.modal'); //  мод окно


modalButtons.forEach((modalBut) => {

    modalBut.addEventListener('click', () => {
        modal.classList.remove('hidden'); // модалка откроется
    });
})


// делегирование - вместо того чтоыб вешать обрабочик на все элементы, мы повесили его на их родителя
modal.addEventListener('click', (event) => {
    //console.log(event.target); // выведет эдемент на который нажали
    if(event.target.classList.contains('overlay')  || event.target.classList.contains('modal__close')){ // если нажатый элемент содерлит класс overlay
        modal.classList.add('hidden');
    }
});

