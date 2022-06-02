// console.log("hello");



// isMozartHere();
// function isMozartHere(str){
//     return str.includes("Mozart");

// };
// console.log(str);



// let str = "степа";
// showUppercaseFirstLetter(str);
// function showUppercaseFirstLetter(str) {

//     str[0].toUpperCase() + str.slice(1);
//     // return str;

// };
// // let newStr = str[0].toUpperCase() + str.slice(1);
// console.log(str);


//  3.    Перебрать массив. Имена, содержащие подстроку 
//     "а", добавить в новый массив "teamA"; подстроку "H" в новый 
//     массив "teamH"
// Регистр важен

// let harryPotterTeam = [
//     "Albus",
//     "Hermione",
//     "Ronald",
//     "Draco",
//     "Neville"];

// let teamA = harryPotterTeam.filter(item => {
//     return item.includes("a")
// });
// console.log(teamA);
// let teamH = harryPotterTeam.filter(item => {
//     return item.includes("H")
// });
// console.log(teamH);




// 5) Создайте функцию, которая в качестве аргумента принимает массив  

// let numArr = [1, 3, 5, 7, 9, 11];
// let newArr = [];
// function multi(arr){
//     arr.forEach(item => {
//         newArr.push(item **2)
// })};
// multi(numArr);
// console.log(newArr);
// let squareAr =[]; 
// numArr.forEach(item => {
//     squareAr.push(item **2);
// });
// console.log(squareAr);

// let numArr = [1, 3, 5, 7, 9, 11];
// let squareAr = numArr.map(item => {return(item **2)});
// console.log(squareAr);



// 6.
// let text = "Роман «1984» наряду с такими произведениями, как «Мы» Евгения Замятина (1920), «О дивный новый мир» Олдоса Хаксли (1932) и «451 градус по Фаренгейту» Рэя Брэдбери (1953) считается одним из образцов антиутопии."
// let result = text.indexOf('451');
// console.log(result);
// let finishresult = text.indexOf('Фаренгейту');
// console.log(finishresult);
// let res = text.slice(124, 149);
// console.log(res);

// let search = "«451 градус по Фаренгейту»";
// let func = text.substring(text.lastIndexOf(search),text.length);
// console.log(func);


// 7.

// let students = [ {name: 'Alexey', id: 123, marks : 9 },
// {name: 'Vitalik', id: 101, marks : 5 },
// {name: 'Tanya', id: 200, marks : 7 },
// {name: 'Sasha', id: 115, marks : 10 }
// ];

// let resultId = students.find(id => id.id ===101)
// console.log(resultId);

// Найдите элемент массива с id: 101



// 8.

// let students = [ {name: 'Alexey', id: 123, marks : 9 },
// {name: ' Vitalik', id: 101, marks : 5 },
// {name: 'Tanya ', id: 200, marks : 7 },
// {name: 'Sasha', id: 115, marks : 10 }
// ];
// let seven = students.filter(item =>{
//     return item.marks >7;
// });
// console.log(seven);


// let lower = []
// students.forEach(item =>{
//     lower.push(item.name.toLowerCase().trim());
// });
// console.log(lower);
// Сделайте так, чтобы в новом массиве были только объекты студентов с оценками выше 7.
// А также второй массив с именами студентов в нижнем регистре, без пробелов в начале/конце строки


// 9.

// let javaScriptTypes = ["number", "null", "undefined", "string"];
// javaScriptTypes.splice(4,0, 'boolin');
// javaScriptTypes.push('Nan');
// let type = ['BigInt'];
// let typeJs = javaScriptTypes.concat(type);
// console.log(javaScriptTypes);
// console.log(typeJs);



// 11.
// Создайте строку из элементов массива

// let serials = ["How i met your mom", "Friends", "Big bang theory"];
// let str = serials.join(', ');
// console.log(str);



// 10. Создайте функцию, которая будет принимать в качестве аргумента массив и:
// Копировать массив и отсортировывать его от меньшей зп к большей
// После чего изменять порядок на обратный
// Новый массив возвращать
// А также с помощью оператора проверять является ли полученный массив массивом (выводить в консоль)

// let salary = [1000, 500, 1200, 230];
// function show(arr) {
//     arr.forEach(item => {
//         arr. sort((a, b) => a - b);
//         arr.reverse();
//         return;
//     })
// };
// show(salary);
// console.log(salary);




// 4.
// Получите и выведите в консоль сумму и произведение
// всех числовых значений данного массива (через forEach, map)
// let arr = [6, 3, "ten", 1, true, "4"]
// let mult = 1;
// let sum = 0;
// function multi(arr) {
    
//     arr.forEach(item => {
//         if (typeof item === "number") {
//             mult *= item
//             sum += item
//             return mult;
//         }
//         return sum;
        
//     });
// };
// let result = multi(arr);
// console.log(mult);
// console.log(sum);



// function arrSum() {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//       if (Object.prototype.toString.call(arr[i]) === '[object Number]') {
//         sum += arr[i];
//       }
//     }
//     return sum
//   };
//   function arrSumMultiplication() {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i**) {
//       if (Object.prototype.toString.call(arr[i]) === '[object Number]') {
//         sum *= arr[i];
//       }
//     }
//     return sum
//   };
//   arrSum(arr);
//   arrSumMultiplication(arr);
//   console.log(arrSum(arr));
//   console.log(arrSumMultiplication(arr));



// let sum = arr.reduce((acc, item) => {
//     return acc += item;
// });
// console.log(sum);
