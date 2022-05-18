// console.log('Четное');
// let animal = 'Cat';
// console.log(animal.toUpperCase());


// let num = 3.32545;
// // console.log(num.toFixed(3)); методы округления
// console.log(Math.floor(num));


// console.log('Четное');
// let animal = 'Cat 123';
// console.log(animal.length); длинна строки


// let str = `Hello`;

// получаем первый символ
// alert( str[3] ); //доступ к символу в строке
// alert( str.charAt(0) ); // устревшее

// получаем последний символ
// console.log(str[str.length - 1] ); // помогает найти последний символ в строке1


// let lorem = 'Hello word i am hangry Lorem Ipsum is ';
// console.log(lorem.indexOf('am', 1));   находит перевое совп с начала
// console.log(lorem);
// console.log(lorem.lastIndexOf('am',15));
// console.log(lorem);


// let lorem='lorem ipsum dolor sit amet, consectetur adipiscing';
// console.log(lorem.includes('Ipsum'));  проверяет есть ли в тексте значение важен регистр


// let subLorem = lorem.slice(0, 2);
// console.log(subLorem);

// console.log(lorem.substr(0, 5));  вывод. к-во символов ук. в ()


// let group=['string',23, {name:'Ivan'}, {age:31}];
// console.log(group);
// console.log(group[1]);
// group.pop();   удаляет элемент с конца
// console.log(group);

// group.push('New Element');  добавляет элемент
// console.log(group);

// group.shift('New Element'); 
// console.log(group);
// group.unshift('New Element'); 
// console.log(group);



// let arr = ['a', 'b', 'c'];
// arr.forEach((item, index, array) => {
// console.log(item);
// console.log(index);
// console.log(array);
// });


// let arr = [10, 20, 45];

// let sum = 0;
// arr.forEach((item)=>{
//     sum += item
// });
// console.log(sum);

// let copy = [];

// arr.forEach((item, index) => {
//     copy.push(item);
//     console.log(`Number ${item} with index ${index}`);
// });


// if (arr.includes(10)){
//     console.log('Yes, includes');
// }



// let arr = [-1, 10, 23, -3, 0, -2];
// let arr2 = []
// arr.forEach((item) => {
// if (item<0) arr2.push(item);
// if (item < 0 && item % 2===0)  arr2.push(item);

// });
// console.log(arr2);


// let strArr = ['one', 'two', 'five'];
// let newArr = [];

// strArr.forEach((item)=> {
//     if (item.length ===3) console.log(item);;
// })

// let arr = [-1, 10, -23, -3, 0, -2];
// let minus=0;

// arr.forEach(item => {
//     if (item < 0 ) minus++;
// });
// console.log(minus);

// let harryPotter = [{
//     name: 'Harry',
//     age: 10,
// }, {
//     name: 'Ron',
//     age: 11,
// }, {
//     name: 'Draco',
//     age: 11,
// }
// ];
// console.log(harryPotter);

// let res = harryPotter.find((item) => {
//     return item.name === "Harry";

// });
// let res = harryPotter.findIndex((item) => {
//     return item.name === "Ron";

// });
// console.log(res);


// let cars = [{
//     color: "black",
//     model: "Vehicle",
// },
// {
//     color: "red",
//     model: "Jeep",
// },
// {
//     color: "black",
//     model: "WV",
// }];

// let blackCars = cars.filter((item) => {
//     return item.color==="black";
// });
// console.log(blackCars);



// let stud = [{
//     name:'Fedor',
//     isHere:true,
//     mark:100,
// },{
//     name:'Stepan',
//     isHere:true,
//     mark:70,
// },{
//     name:'Igor',
//     isHere:false,
//     mark:40,
// }];

// let goodStud = stud.filter((item)=>{
//     return item.isHere === true && item.mark >=60;
// });
// console.log(goodStud);