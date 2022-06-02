// 1. Получить массив имен тех студентов, чьи оценки ниже 8
// Сделать двумя способами

// 2. Написать функцию, которая принимает массив и рассчитывает средний балл 
// тех студентов чей id больше 120
// Сделать двумя способами

let students = [{ name: 'Alexey', id: 123, marks: 9 },
{ name: 'Vitalik', id: 101, marks: 5 },
{ name: 'Tanya', id: 200, marks: 7 },
{ name: 'Sasha', id: 115, marks: 10 }
];

// let result = [];
// function studentsNames(array){
//     array.forEach((item=>{
//         if (item.marks<8)
//         result.push(item.name);
//     }))
// };
// studentsNames(students)
// console.log(result);

// let result = students.filter(item => {
//     return item.marks < 8
// }).map(item =>item.name);
// console.log(result);

// let result = students.reduce((acc, item) => acc + item.marks, 0) / students.length;
// console.log(result);

// function average(arr) {
//     let result = arr.filter(item => {
//         return item.id > 120}) 
//        return result.reduce((acc, item) => acc + item.marks, 0) / result.length;
// };


// console.log(average(students));

// 3. Получить массив имен студентов, у которых оценки выше 5 и id меньше 200

// let students = [
//     { name: 'Alexey', id: 123, marks: 9 }, { name: 'Vitalik', id: 101, marks: 5 },
//     { name: 'Tanya', id: 200, marks: 7 },
//     { name: 'Sasha', id: 115, marks: 10 },
//     { name: 'Kolya', id: 440, marks: 5 },
//     { name: 'Dima', id: 170, marks: 7 }
// ];
// let res = students.filter(item => {
//     return item.marks > 5;
// }).filter(item => {
//     return item.id < 200;
// });
// console.log(res);