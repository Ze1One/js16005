console.log('hi');
// 1) 

// function loadJson(url) { 
//     return fetch(url) 
//     .then(response => { 
//            if (response.status == 200) { 
//             return response.json(); 
//     } else { 
//             throw new Error(response.status); 
//           }
  
//    }) 
//   }
  
  
//   loadJson('no-such-user.json')
//    .catch(alert);


//    async function loadJson(url){
//     const response = await fetch(url);
//    if (response.status  == 200){
//     return response.json();
//    } else {
//     throw new Error(response.status);
//    }
//    }

  
  
//   Перепишите через async await
  
//   2) Напишите функцию, которая в качестве параметра будет
//    принимать url и по нему делать запрос на получение данных
//   Затем эти данные обрабатывать и выводить в консоль

// async function test(url){
//    try{ await delay(1000)
//     const response = await fetch(url);
//     const data = response.json()
//     console.log('result', data);
//    } catch(error){ 
//     console.log('rror', error);}
// }
  
//   3) Создать функцию-конструктор Person, которая будет 
//   содержать в себе имя, id, возраст, а также создать прототип
//    для этой функции-конструктора - метод, который будет 
//    выводить в консоль сообщение Hello from prototype

function Person(name, age, id){
    this.name = name;
    this.age = age;
    this.id = id;
}

let method = new Person('Stiv', 32, 1);
let user={
    name: 'Vano',
    age: 36,
    id: 3,
    message(){
        console.log('Hello from prototype');
    }
}

Person.prototype = user
console.log(method);
let dog = {
    name:'Bigl',
};
dog.__proto__ = user;
console.log(dog);

  
//   4) Создать 3 объекта самостоятельно. Сделать цепочку 
//   прототипов (объект должен наследоваться от предыдущего)
  
//   обязательно теория setTimeout/setInterval, Promise, 
//   async..await