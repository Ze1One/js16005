// let a = 4, b = 0;
// let c = ++a;
// let d = b++;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);


// let e = 3;
// let f = 2;
// let x = 1 + (e += 2);
// let у = 1 + (f *= 2);

// console.log(e);
// console.log(f);
// console.log(x);
// console.log(у);



// let checking = prompt("Введите год и узнаете чемпиона в период с 2011 по 2022 год");  +promt= будет переводить введенные значения в числовые, тода можно будет использовать строгое равенство
// if (checking == 2016) {
//     alert("Лестер Сити");
// } else if (checking == 2020) {
//     alert("Ливерпуль");
// } else if (checking == 2015) {
//     alert("Челси");
// } else if (checking == 2017) {
//     alert("Челси");
// } else if (checking == 2012) {
//     alert("Манчестер Сити");
// } else if (checking == 2014) {
//     alert("Манчестер Сити");
// } else if (checking == 2018) {
//     alert("Манчестер Сити");
// } else if (checking == 2019) {
//     alert("Манчестер Сити");
// } else if (checking == 2021) {
//     alert("Манчестер Сити");
// } else if (checking == 2011) {
//     alert("Манчестер Юнайтед");
// } else if (checking == 2013) {
//     alert("Манчестер Юнайтед");
// } else if (checking < 2011) {
//     alert("Статистика еще не велась");
// } else if (checking == 2022) {
//     alert("Сезон еще идет");
// } else if (checking > 2022) {
//     alert("Все лучшее впереди");
// }

// let result = a > 5 ? "more" : a ===5 ? "equal" : "less";

// let checking = prompt("Введите год и узнаете чемпиона в период с 2011 по 2022 год");
// let result = (checking > 2022) ? "Все лучшее впереди"
// : (checking < 2011) ? "Статистика еще не велась" 
// : (checking == 2016) ? "Лестер Сити"
// : (checking == 2020) ? "Ливерпуль"
// : (checking == 2015 || checking == 2017) ? "Челси"
// : (checking == 2012 || checking == 2014 || checking == 2018 || checking == 2019 || checking == 2021) ? "Манчестер Сити"
// : (checking == 2011 || checking == 2013) ? "Манчестер Юнайтед"
// : "Сезон еще идет" ;
// alert(result)

// let checking = prompt("Введите год и узнаете чемпиона в период с 2011 по 2022 год");

// switch (true) {
//     case (checking == 2012 || checking == 2014 || checking == 2018 || checking == 2019 || checking == 2021) :
//         alert('Манчестер Сити');
//         break;
//     case (checking == 2011 || checking == 2013):
//         alert('Манчестер Юнайтед');
//         break;
//     case (checking == 2015 || checking == 2017):
//         alert('Челси');
//         break;
//     case (checking == 2020):
//         alert('Ливерпуль');
//         break;
//     case (checking == 2016):
//         alert('Лестер Сити');
//         break;
//     case (checking < 2011):
//         alert('Статистика еще не велась');
//         break;
//     case (checking > 2022):
//         alert('Все лучшее впереди');
//         break;
//     case (checking == 2022):
//         alert('Сезон еще идет');
//         break;
//     default:
//         alert("Пинай мячь!");
// }

// let logIn = prompt('Введите имя пользователя', '');
// let result = (logIn == `Admin`) ? password = prompt('Введите пароль', '')
//     : (password == 'Я главный') ? "Здравствуйте!"
//         : (password === '' || password === null) ? "Отменено"
//             : 'Неверный пароль'
// // : (logIn === '' || logIn === null)
// // : 'Отменено'

// alert(result)  не работает



// let logIn = prompt("Введите имя пользователя", '');

// if (logIn === 'Админ') {

//     let password = prompt('Введите пароль?', '');

//     if (password === 'Я главный') {
//         alert('Здравствуйте!');
//     } else if (password === '' || password === null) {
//         alert('Отменено');
//     } else {
//         alert('Неверный пароль');
//     }

// } else if (logIn === '' || logIn === null) {
//     alert('Отменено');
// } else {
//     alert("Я вас не знаю");
// }


// for (let i = 7; i < 15; i++) {
//     if (i % 2 == 1) continue;
//     console.log(i);

// } 

// for (let j = 0; j < 5; j++) { 
//     console.log( `number ${j}!` ); 
//  }

//  let j = 0
//  while (j++ < 5) console.log( `number ${j}!` );

// function max( a , b ) {
//     return a > b ? a : b;
// }

function pow(a, b) {
   return a ** b;
}
let result = pow(1 , 2)
