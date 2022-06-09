// // alert('1'[0])
// for (var i = 0; i < 10; i++);

// var i = 2;
// console.log(i);

// const user = {
//     name: 'ilya',
//     age: 18,
//     isAdmin: false,
// };

// const students = [
//     {
//         name: 'vasya',
//         age: 19,
//         isAdmin: false,
//     },
//     {
//         name: 'lera',
//         age: 21,
//         isAdmin: false,
//     },
//     {
//         name: 'igor',
//         age: 25,
//         isAdmin: false,
//     },
// ];

// let names = [];

// students.forEach(({name, age, isAdmin}, index) => {
//     names.push(name);
//     console.log(age, isAdmin);
// });

// console.log(names);


// let date = new Date();
// console.log(date);
// let years = date.getFullYear();
// console.log(years);
// let months = date.getMonth();
// let days = date.getDate();
// let dateNow = Date.now();
// console.log(dateNow);

// let dateNow = Date.now();
// function getDate(time) {
//     let date = new Date(time);
//     let days = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
//     let years = date.getFullYear();
//     let months = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
//     return `${days}.${months}.${years}`;
// };
// let result = getDate(dateNow)
// console.log(result);



const user = {
    name: 'ilya',
    age: 18,
    isAdmin: false,
    address:{
        city: 'Minsk',
        street: 'Gurskogo',
}
};
console.log(user);

let objectToJSON = JSON.stringify(user);
console.log(objectToJSON);

let fromJSONToObject = JSON.parse(objectToJSON);
console.log(fromJSONToObject);