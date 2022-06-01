console.log("hello ");

// let checkMonth = +prompt("Введите номер месяца и узнаешь сколько в нем дней");
// switch (true) {
//     case (checkMonth === 1 || checkMonth === 3 || checkMonth === 5 || checkMonth === 7
//         || checkMonth === 8 || checkMonth === 10 || checkMonth === 12):
//         alert(31);
//         break;
//     case (checkMonth === 4 || checkMonth === 6 || checkMonth === 9 || checkMonth === 11):
//         alert(30);
//         break;
//     case (checkMonth === 2):
//         alert(28);
//         break;
// }


// let student = {
//     name:"Степан",
//     surname:"Юруц",
//     age:"31",
//     well:"1",
//     toefl:"А2",
// };
// delete student.toefl;
// console.log(student);


// let book = {
//     numberOfPages : 545,
//     cover  : true,
//     isTheAuthorAlive  : false, 
//     isBestseller  : true,
//     booksEditions  : 20000000,
// };
// console.log(!!book);


// let train = {
//     locomotiveLength: 25,
//     totalCoachCars: 4,
//     coachLength: 15,
// };


// function sum(train) {
//     return train.locomotiveLength + train.totalCoachCars * train.coachLength;
// };
// let result = sum(train);
// console.log(result);




// let car = {
//     brand: "Renault",
//     color: "Grey",
//     doors: 5,
//     hp: 110,
//     v: 1.5,
//     transmission: "mechanical",
// };

// let badCar = car;
// let goodCar = {};
// for(let key in car){
//     goodCar[key]=car[key]
// };
// console.log(goodCar);


// let student = {
//         name:"Степан",
//         surname:"Юруц",
//         age:"31",
//         well:"1",
//         toefl:"А2",
//     };
// console.log(`Это студент ${student.surname} ${student.name} из группы ${student.well}`);


// let animalObj = {
//     name: "cat",
//     legs: 4,
//     color: "black",
// };
// console.log(`This ${animalObj.color} ${animalObj.name} has ${animalObj.legs} legs`);

// let animalObj = {
//     animal: "cat",
//     legs: 4,
//     color: "black",
//     isPredator: true,
// };

// function Animal(animal, legs, color, isPredator) {
//     this.animal = animal;
//         this.legs = legs;
//         this.color = color;
//         this.isPredator = isPredator;
// };
// let animalObj= new Animal()


// class AnimalNew {
//     constructor(animal) {

//         this.animal = animal;
//         this.isPredator = true;

//     }
// };
// animalObj = new Animal(`Хищник`);
// console.log(Animal);


// function back() {
//     let a = +prompt("Введите число");
//     let b = +prompt("Введите число");
//     let c = a * b;
//     function even(c) {
//         if (c % 2 === 0);
//         console.log('Четное', +even);
//     };
//     function notEven(c) {
//         if (c % 1 === 0)
//         console.log('Не четнон', +notEven);
//     }

// };          
// back();      

let firstNumber = +prompt("Введите число");
let secondNumber = +prompt("Введите число");

showIsEvenMessage(firstNumber, secondNumber, showEvenNumber, showOddNumber);


function showIsEvenMessage(numOne, numTwo, showIsEven, showIsOdd) {
    let numSum = numOne + numTwo;
    if (numSum % 2 === 0) {
        showIsEven();
    } else {
        showIsOdd();
    }
};

function showEvenNumber() {
    console.log("is even");
};

function showOddNumber() {
    console.log("is  not even");
};

