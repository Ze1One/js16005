console.log('Hello');

// MAP

// const user = {
//     name: 'Ivan',
//     age: 30,
//     isAdmin: false,
// };

// const entries = [
//     ['name','Ivan'],
//     ['age',30],
//     ['isAdmin',false]
// ];
// console.log(user);
// // console.log(Object.entries(user));         переводит из обьекта в массив
// console.log(Object.entries(user));  
// console.log(entries);
// // console.log(Object.fromEntries(entries));  переводит из массива в обьект
// console.log(Object.fromEntries(entries));

const entries = [
    ['name', 'Ivan'],
    ['age', { isAlive: true, years: 1992 }],
    ['isAdmin', false]
];

const ourMap = new Map(entries);
// console.log(ourMap);

// console.log(ourMap.get('age'));

// console.log(ourMap.set('isDriver', true).set({ street: 'Kolasa', house: 23 },'Minsk'));
// ourMap.set(Nan, 'Nan');
// console.log(ourMap);

// ourMap.delete('Nan');



// console.log(ourMap.has('age'));
// console.log(ourMap.size);
// ourMap.clear();
// console.log(ourMap.size);
// console.log(ourMap);

// for (let entry of ourMap.entries()) {
// console.log(entry);
// };

// for (let value of ourMap.value()) {
//     console.log(value);
//     };


// for (let keys of ourMap.keys()) {
//     console.log(keys);
//     };



// ourMap.forEach((value, key,map) => {
//     console.log(value);
//     console.log(key);
//     console.log(map);

// })

// const arr= [...ourMap];
// console.log(arr);
// const arr2 = Array.from(ourMap);
// console.log(arr2);


//  вернуть в массив

// const mapObj = Object.fromEntries(ourMap.entries()); 
// console.log(mapObj);


// const students = [
//     { name: 'Ivan' },
//     { name: 'Alex' },
// ];

// const visited = new Map();

// visited.set(students[0], new Date())
//         .set(students[1], new Date());

// function showLastVisited(students) {
//     return visited.get(students);
// };
// console.log(showLastVisited((students[1])));


let nums = [1, 2, 2, 2, 3, 4, 4, 5];

const mySet = new Set(nums);
// console.log(mySet);

// mySet.add(66);
// ;
// console.log(mySet.delete(2));

// console.log(mySet.keys(),'keys');
// console.log(mySet.values(),'values');

// console.log(mySet.entries(),'entries');

// function unique(arr){
//     return [...new Set(arr)];
//     // return Array.from(new Set(arr));
// };
// console.log(unique(nums));


// const phones = {
//     samsung:300,
//     iPhone: 500,
//     nokia: 200,
// };

// let ourPhone = 
// Object.fromEntries(
//     Object.entries(phones).map(([key, value])=> {
//         return [key,value * 2]
//     })
// );
// console.log(ourPhone);


// const salary = {
//     'Ivan':300,
//     'Oleg': 500,
//     'Ira': 200,
// };

// function sumVal(obj){
//     let sum=0;
//     for (let salary of Object.values(obj)){
//         sum +=salary;
//     };
//     return sum;
// };

// console.log(sumVal(salary));

// let date = new Date();
// // console.log(date);
// let years = date.getFullYear();
// console.log(years);
// let months = date.getMonth();
// let days = date.getDate();
let dateNow = Date.now();
// console.log(dateNow);

let date = new Date(dateNow);
// console.log(date);

// let n = 1653108946868;

// let date2 = new Date(n);
// console.log(date2);

function showDate(date) {
    let years = date.getFullYear();
    let months = date.getMonth();
    let day = date.getDate() > 10 ? date.getDay() : ` ${date.getDay()}`;
    return `0 ${day} ${months} ${years}`
};
console.log(showDate(date));
