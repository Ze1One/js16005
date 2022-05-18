// console.log("hello");
// function calcSum(numOne, numTwo, more, less) {
//     let numSum = numOne + numTwo;
//     if (numSum > 3) {
//         more()
//     } else {
//         less()
//     }
// }
// function showMore() {
//     console.log('more');
// }
// function showLess() {
//     console.log('less');
// }
// calcSum(2, 5, showMore, showLess); колбэк

// let user = {
//     name: 'Иван',
//     surname: 'Иванов',
//     age: '30',
//     sayHi() { // метод обьекта юсер, то же самое, что и "sayHi: function()"
//         console.log(`hello from ${this.name} ${this.surname}`);
//     },
//     address: {
//         city: 'Minsk',
//         street: 'kolasa',
//         numberOfHouse: 40,
//     },
// };
//     // console.log(user.name, user.address.street);

//     // let userClone = Object.assign({}, user)
//     // // console.log(user);
//     // // console.log(userClone);

//     // user.name = 'Oleg';

//     // user.address.city = 'Brest';
//     // console.log(user);
//     // console.log(userClone);
// user.sayHi();

// let ourName = 'String'

// function sayHi() {
//     console.log(this.window);
//   }
//   sayHi();



// et user = {
//     firstName: "Илья",
//     sayHi() {
//         let arrow = () => {    // у р фанкшин нет зис, он смотрит на глобальный обьект
//             alert(this.firstName)
//         }
//         arrow();
//     }
// };

// user.sayHi();


// function Employee(name, director) {
//     this.userName = name;
//     this.isDirector = director;
// }
// let user = new Employee("Вася", true);
// console.log(user);

let str = "Привет";

console.log(str.toUpperCase());
console.log(str.toLowerCase());



