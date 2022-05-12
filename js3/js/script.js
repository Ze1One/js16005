// console.log("Hello");
// let i = 0;
// while (i < 3) { // выводит 0, затем 1, затем 2
//   alert( i );
//   i++;
// }
// console.log(i);
// for (let i = 0; i < 3; i++) { // выведет 0, затем 1, затем 2
//     console.log(i);
//   }
// let sum = 0;

// while (true) {

//   let value = +prompt("Введите число", '');

//   if (!value) break; // (*)

//   sum += value;

// }
// alert( 'Сумма: ' + sum ); сумма это текст , а + суь прибавляет к тексту число т.к. сум числовое, в противном число поглотится строкой
// for (let i = 0; i < 10; i++) {

//     // если true, пропустить оставшуюся часть тела цикла
//     if (i % 2 == 0) continue;   // % остаток от деления
  
//     console.log(i); // 1, затем 3, 5, 7, 9
//   }
// switch (browser) {
//   case 'edge':
//     console.log( 'edge' );
//     break;

//   case 'chrome':
//     case 'opera':
//     console.log( 'okay we support chrome' );
//     break;

//   default:
//     console.log( 'We hope' );
// }
// let browser = 'edge';

//  if (browser === 'edge') {
//     console.log("edge!");
// } else if (browser === "chrome" || browser === "opera")  {
//     console.log("е тот браузер");
// } else {
//     console.log("Если бы мы знали что это...");
// }
// showMessage();
// function showMessage() {
//     console.log('Всем привет!');
//   }
//   showMessage();

// let userName = 'Вася';

// function showMessage() {
//   userName = "Петя"; // (1) изменяем значение внешней переменной

//   let message = 'Привет, ' + userName;
//   alert(message);
// }

// alert( userName ); // Вася перед вызовом функции

// showMessage();



// alert( userName ); // Петя, значение внешней переменной было изменено функцией
// let nameOfUser = "Ivan"
// function showUsername(name) {
//     console.log(name);
// }
// showUsername(nameOfUser);


// let userName = "Ivan";
// let useAge = 30;
// function showUsername(name, age) {
//     console.log(`My name is ${name}, i'm ${age} years old.`);
// }
// showUsername(userName, useAge );

// function sum(a, b) {
//     return a + b;
//   }
  
//   let result = sum(1, 2);
//   alert( result ); // 3


function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      return false;
    }
  }
  let ourAge = prompt('Сколько вам лет?', 18);

  let isChecked = checkAge (ourAge);
 console.log(isChecked);