const form =  document.querySelector('.form-test-drive');



//https://jsonplaceholder.typicode.com будем опралять данные на этот сервер

form.addEventListener('submit', (event) => { // событе отправки формы
    event.preventDefault(); // отменяем действие по умолчанию
    //console.dir(form);


    let data = {};

    // деструктуризация { name, value }: 
    for(let { name, value } of form.elements){ //  для каждого элемента формы, elements - это свйсто формы, 
        //console.log(form.elements); // [ input,  input,  input, button]
        
        if(name) { // если у элкента есть атрибут name
            data[name] = value;
        }
    }

    //console.log(data); // data = { name: 'lklhj', email: 'lkjhg#mail.ru', phone: '89767656768'  }

    // отправляем даннеы data на этот сервер https://jsonplaceholder.typicode.com/photos методом ГЕТ , метод then отработате тогда, когда получим данные от сервера-response
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => {
          if(response.status === 200 || response.status === 201){
              return response.json(); // получаем ответ в виже джсон
          }
          else{
              throw new Error(response.status);
          }
      })
      .then(data => { 
          console.log(data);
          console.log('жанные ушли успешно');
      }).catch(error => { // обрбабытваем ошибку
          console.dir('произошла ошибка ' + error.message);
      })

    //  отправка данных методом POST:
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(data)  // отправляем в виде строки
    })
    .then(response => {
          if(response.status === 200 || response.status === 201){
              return response.json(); // получаем ответ в виже джсон
          }
          else{
              throw new Error(response.status);
          }
    })
    .then(data => { 
          console.log('данные ушли успешно');
          form.reset(); // очищаем форму после отправки данных
          // если надо редиректить или вывести модалку, то это пишется в этом месте
    }).catch(error => { // обрбабытваем ошибку
          console.dir('произошла ошибка ' + error.message);
    })   

});

// статус 201 при успешном POSt запроса
// эти схемы отравки можно исползваоть везде6 только даерс сервера поменять надо на свой 