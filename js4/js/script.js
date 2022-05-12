// console.log("hello");
// let sayHi = function(message) {
//     console.log(message);;
//   };
//   sayHi("hello");

//   function ask(question, yes, no) {
//     // if (confirm(question)) yes()   -  вызывввет окно с вопросом да отмена (тру фолсе)
//     if (confirm(question)) yes()
//     else no();
//   }
  
//   function showOk() {
//     console.log("ok");
//   }
  
//   function showCancel() {
//     console.log("cancel");
//   }
  
//   // использование: функции showOk, showCancel передаются в качестве аргументов ask
//   ask("Вы согласны?", showOk, showCancel);

// let func = function(arg1, arg2) {
//     return expression;
//   };
//   let func = (arg1, arg2, ...argN) => expression;   =>  заменяет експрешн


// let student = {     // объект
//     name: "John",  // под ключом "name" хранится значение "John"
//     surname: 30 , // под ключом "age" хранится значение 30
//     isDriver: false,
//     age: 30,       
//   };
//   student.mail = 2;  // можно так добавитть еще 1 ключ
// //   console.log(student.age, student.name);
// //   delete student.isDriver; //удалили свойство из обьекта
// // //   console.log(student.isDriver);
// //   student.age = 36;
// //   console.log(student.age);
// for (let key in student) {
//     // ключи
//     console.log( key, student[key]); //выведит все ключи обьеекта [key] в кв скобках выведет значение ключей
// }



// let car = {
//     color: "red",
//     model: "nissan",
// }
// let moto = car;

// console.log(car);
// console.log(moto);

// car.doors = 3;

// console.log(car);
// console.log(moto);

// let user = "ivan";
// let user2 = user;

// console.log(user, user2);

// user = "oleg";

// console.log(user, user2);

let user = {
    name: "Иван",
    age: 30
  };
  
  let clone = {}; // новый пустой объект
  
  // скопируем все свойства user в него
  for (let key in user) {
    clone[key] = user[key];
  }
  
  // теперь в переменной clone находится абсолютно независимый клон объекта
  clone.name = "Пётр"; // изменим в нём данные
  
  alert( user.name ); // в оригинальном объекте значение свойства `name` осталось прежним – Иван.

  let user = {
    name: "Иван",
    age: 30
  };
  
  let clone = Object.assign({}, user); //копирует обект ключи без значений







