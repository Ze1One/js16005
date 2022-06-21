// console.log('hi');

//                              Prototype

// function Person(first, last, age) {
//     this.name = {
//         first: first,
//         last: last,
//     },
//         this.age = age;
// };

// let personIvan = new Person('Ivan', 'Pupkin', 42);

// let student = {
//     name: 'Ivan',
//     age: 42,
//     course: 'JS',
// }

// let user = {
//     age: 42,
//     name: 'Tanya'
// }

// let person = {
//     name:'Sasha',
// }

// user.__proto__ = student;
// person.__proto__= user;
// console.log(user);
// console.log(student);
// console.log(person.course);


// let student = {
//     course: 'JS',
// }

// function Develop(name) {
//     this.name = name

// }

// Develop.prototype = student

// let newDev = new Develop('Ivan')
// console.log(newDev);



// const person = new Object({
//     name:'Ivan',
//     age: 30,
//     welcome(){
//         console.log("Hi");
//     }
// })

// Object.prototype.sayHi = function(){
//     console.log('Hello');
// }

// const personLev = Object.create(person)

// personLev.name='Lev';
// console.log(personLev);



// let string = 'String';



// let string = new String('string');
// console.log(string);

// let number = new Number(5);
// console.log(number);

