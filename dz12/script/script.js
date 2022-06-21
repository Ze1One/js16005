console.log('hello');
// 1) Создать функцию calcSum(), которая принимает n - ое количество параметров (числа)
// Возвращает сумму первых двух параметров, а остальные записывает в массив other
// Вывести этот массив в консоль

// function calcSum(a, b, c, d, e, f, ...other) {
//     return a + b;

// };
// let x = 3;
// let y = 1;
// let z = 2;
// let c = 4;
// console.log(calcSum(x, y, z, c));
// console.log(other);

// 2) 
// let drivers = ["Dominic", "Brian", "Letty", "Roman"];
// let antagonists = ["Deckard", "Luke"];
// let family1 = [...drivers, ...antagonists];
// console.log(family1);
// let arr = drivers.concat(antagonists);
// console.log(arr);
// drivers.push.apply(drivers, ["Deckard", "Luke"])
// console.log(drivers);

// let arr2 = drivers.slice(antagonists);
// console.log(arr2);



// Объединить два массива в один общий let family = [] используя
// concat, push.apply, spread, splice, forEach

// 3) 

// let cars = ["Jeep", "Jeep", "Kia", "BMW", "BMW", "BMW", "Renault"]
// let uniq = [...new Set(cars)];
// console.log(uniq);
//  получить новый массив с уникальными значениями используя spread

// 4) Создать функцию-замыкание которая будет принимать сперва параметр country, 
// а вложенная функция будет принимать при последующем вызове параметр city
// И возвращать массив с названием города и страны

// function set(country) {
// return function(city){
//     return `${country}, ${city}`
// }
// };


// 5) Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная
// от from и заканчивая to.
// Сделайте два варианта решения. Через setTimeout и через setInterval

// function printNumbers(from, to) {
//     let current = from;

//     let timerId = setInterval(function() {
//       console.log(current);
//       if (current == to) {
//         clearInterval(timerId);
//       }
//       current++;
//     }, 1000);
//   };

//   function printNumbers(from, to) {
//     let current = from;

//     setTimeout(function go() {
//       console.log(current);;
//       if (current < to) {
//         setTimeout(go, 1000);
//       }
//       current++;
//     }, 1000);
//   }


// 6) Напишите функцию, которая будет каждые 3 секунды выводить в консоль сообщение, а на 10
//  прекратит свою работу

//                                   остановка  

// function stop() {
//   let rep = setInterval(function repit() {
//     console.log('hello');
//   }, 1000);

//   setTimeout(() => {
//     clearInterval(rep);
//   }, 5000)
// };
// stop()
// console.log(stop());



// 7)
// function firstCall() {  console.log(1);
//   secondCall();
//   setTimeout(function() {
//     console.log(3)
//   }, 3000);
//   console.log(4);
// }

// function secondCall() {
//   setTimeout(function() {
//     console.log(5)
//   }, 0);
//   console.log(6);
// }

// firstCall();

// Подумать самостоятельно в каком порядке будут выведены числа в консоль
// После чего себя проверить latentflip.com

// 8)

// let jordan = {
// name: "Michael",
// age: 59,
// }

// let messi = {
// name: "Lionel",
// age: 34,
// }

// Создать в одном из объектов метод, который будет выводить в консоль его имя, используя this
// А также добавить метод, позволяющий изменять контекст вызова. При вызове в одном объекте,
// чтобы я мог получить имя другого