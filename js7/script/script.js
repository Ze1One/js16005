// console.log('hello');
// let arr = [1, 2, 3, 4, 9];
// let arrSquare = [];
// arr.forEach((item) => {
//     arrSquare.push(item**2);
// });
// console.log(arrSquare);

// arr.forEach((item, index) => {    изм начальный массив
//     arr[index] = item ** 2;
// });



// let moto = ["Я", "учусь", "очень", "плохо"];
// // moto.splice(3, 3, "good"); первая цифра с какой позиции
// moto.splice(2, 0, "js");
// console.log(moto);



// let  parfumes = ["Dior", "JHG", "Killian", "BDQQ"];
// parfumes.splice(-1,1, "replica");
// parfumes[parfumes.length-1]="replics";
// console.log(parfumes);



// let alco = ['Rom','Vine','Vodka'];
// // alco.splice(2, 0, "beer");
// console.log(alco);
// alco.splice(2, 0, "jin");



// let phrase = ["прекрасно", "думать", "что", "истории", "имеют", "продолжения"];
// phrase.splice(2);
// console.log(phrase);



// let arr = [1, 2, 3, 4];
// let newArr= arr.slice(0,2);  //создает новый массив с задаными параметрами
// console.log(newArr);
// let fullArr= arr.slice();   //просто создает новый массив
// console.log(fullArr);
// let newArr = arr.slice(1, 3);



// let arr = ["Jeep", "KIA", "BMW", "VW"];
// let num = [1, 2, 3, 4, 5, 6];
// let concat= arr.concat(num);
// console.log(concat);



// let arr = [1, 2, -5, , 9, -22, -1, -0];
// arr.sort((a,b)=>a-b);
// console.log(arr);
// let language = [
//     "1 Language",
//     "1",
//     "Язык",
//     "Language 1",
//     "1 Язык",
//     "язык",
// ];
// console.log(language);

// language.sort();
// console.log(language);



// let  number = [1,2,5,6,128,-8];
// let squareResult = number.map((item => {return item **2;}));
// console.log(squareResult);



// let sport = ["football", "tenis", "golf"];
// let sportLength = sport.map(item, index =>{
//     return item.length;   return item+index
// });
// console.log(sportLength);



// let student =[{
//     name: "Ivan",
//     age: 18,
// },
// {
//     name: "Oleg",
//     age: 20,
// },{
//     name: "Annaa",
//     age: 30,
// },{
//     name: "Ivan",
//     age: 25,
// }];
// let mame = student.map((item =>{
//     return item.name.toUpperCase();
// }));
// console.log(mame);



// let student =[{
//     name: "Ivan",
//     age: 18,
// },
// {
//     name: "Oleg",
//     age: 20,
// },{
//     name: "Annaa",
//     age: 30,
// },{
//     name: "Ivan",
//     age: 25,
// }];

// let forEachName=[]
// student.forEach((item) => {
//     forEachName.push(item.name.toUpperCase());
// });
// console.log(forEachName);



// let arr = [5, 3, 8, 1];
// let filtered = filterRange(arr, 1, 4);
// function(arr, a, b) {
//     return arr.filter(item => (a < item && item  > b))
// };
// console.log(filtered);



let student =[{
    name: " Ivan",
    age: 18,
},
{
    name: "Oleg ",
    age: 20,
},{
    name: " Annaa",
    age: 30,
},{
    name: "Ivan ",
    age: 25,
}];
let forEachName=[]
student.forEach((item) => {
    forEachName.push(item.name.toUpperCase().trim()); // убирает все пробелы, toLoverCase в нижний регистр
});
console.log(forEachName);
