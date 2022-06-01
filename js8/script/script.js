console.log('hello');
//  метод редьюс

// let number = [1, 2, 3, 4, 5];
// let nuSq = number.map(item => item**2)
// console.log(nuSq);

// let fen = 0;
// number.forEach(item =>{
//     fen += item;
// });
// console.log(fen);


// let value = arr.reduce(function (previousValue, item, index, array) {
//     // ...
// }, [initial]);
// let sum = number.reduce((acc, item) => {
//     return acc += item;
// }, 0);
// console.log(sum);


// let zeroNum = [1, 4, -2, 5, 0, 15, 6];
// let sum = 0;
// let zero = zeroNum.reduce((acc, item) => {
//     if (item === 0) {
//         sum = acc;
//         return acc;
//     }
//     else {
//         return acc += item;
//     }
// }, 0);
// console.log(sum);

// let num = [1, 2, 1, -2, 3, 9, -20];
// 1 способ
//  let sum = 1;
// let result =num.reduce((acc,item) => {
//     if(item < 10){
//         sum ++;
//     }
//     return acc +=item;

// });
// console.log(sum);
// console.log(result);
// 2 способ
// let sum = 1;
// let result =num.reduce((acc,item) => {
//         if(acc > 10){
//             return;
//         }
//         sum ++;
//         return acc += item;

//     });
//     console.log(sum);
//     console.log(result);





// let totalMark = 0;
// student.forEach(item => {
//     if (item.id > 30) totalMark += item.mark;
// });
// console.log(totalMark);

// let totalMark = student.reduce((acc, item)=>{
//     if (item.id >30){
//         return acc += item.mark;
//     } else{
//         return acc;
//     };
// },0);
// console.log(totalMark);

// let totalMark = student.filter(item => {
//     return item.id > 30;
// }).map(item=> item.mark);
// let sum = totalMark[0]+totalMark[1];
// console.log(sum);

//                                                       9 Lesson

// let student = [
//     {
//         name: 'Tanya',
//         id: 20,
//         mark: 340,
//     },
//     {
//         name: 'Fedya',
//         id: 33,
//         mark: 140,
//     }, {
//         name: 'Stepa',
//         id: 50,
//         mark: 640,
//     }, {
//         name: 'Sacha',
//         id: 2,
//         mark: 40,
//     },
// ];

// let totalMark = [];
// student.forEach(item => {
//     if (item.mark > 200) {
//         totalMark.push(item.name);
//     }

// });
// console.log(totalMark);

// let studName = student.filter(item => {
//    return item.mark > 200;

// }).map(item=> item.name);
// console.log(studName);

// let studName = student.reduce((acc, item) => {
//     if (item.mark > 200)
//         acc.push(item.name);
//     return acc;

// }, []);
// console.log(studName);



// let student = [
//     {
//         name: 'Tanya',
//         id: 20,
//         mark: 340,
//     },
//     {
//         name: 'Fedya',
//         id: 33,
//         mark: 140,
//     }, {
//         name: 'Stepa',
//         id: 50,
//         mark: 640,
//     }, {
//         name: 'Sacha',
//         id: 2,
//         mark: 40,
//     },
// ];

// function average(arr) {
//     return arr.reduce((acc, item) => acc + item.mark, 0) / arr.length;
// };

// console.log(average(student));




// function average(arr) {
//     let sum = 0;
//     arr.forEach((item) => {
//         sum += item.mark / arr.length;

//     });
//     return sum;
// };
// console.log(average(student));



// let boolin = [1, 5, 0, 'str', undefined, true, false];

// function isTr(arr) {
//     return arr.filter(item => !!item)};
// console.log(isTr(boolin));


// let unic = [1, 2, 3, 4, 4, 3, 2, 1];
// function nonRepit(arr) {
//    return arr.filter((item, index) =>{  
//        console.log(item, 'Item');  
//        console.log(arr.indexOf(item));
//        console.log();
//         return arr.indexOf(item) === index;
//     })
// };
// console.log(nonRepit(unic));

// let newArr = [];
// unic.forEach(item => {
//     if (!newArr.includes(item)) {
//         newArr.push(item);
//     };
// });
// console.log(newArr);