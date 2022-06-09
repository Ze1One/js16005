// console.log('hello');

//                          //rest остаточные параметры

// function showPlayer(name, surname, ...info) {
//     console.log(`${name}, ${surname}`);
//     console.log(info, 'rest');
// };
// showPlayer('Dennis', 'Bergkamp', 'Amsterdam', 1969);



//                          spread оператор расширения

// let date = [1970, 0, 12];
// let d = new Date(...date);
// console.log(d);

// let arr= [1,2,3,4,55,5,6,6];
// let uniq =[...new Set(arr)];
// console.log(uniq);

// let oldPlay = ['Ronaldo', 'Henry', 'Pires'];
// let currentPlay = ['Saka', 'Mount', 'Walker'];
// let play = [...oldPlay, ...currentPlay];
// console.log(play);


// const mySkills =['html', 'css'];

// // mySkills.push.apply(mySkills, ['JS', 'React'])

// // mySkills.push(...['JS', 'React'])

// let newSkills = ['JS', 'Rreact'];
// mySkills.push(...newSkills)
// console.log(mySkills);



//                               деструктиризация


// const mySkills = [
//     {course:'html', mark: 9},
//     {course: 'js', mark: 8}

// ];

// let newArr = mySkills.map(({course, mark})=>{
//     console.log(mark);
//     return course.toLocaleUpperCase();
// });

// console.log(newArr);


// const [numFurst, ...otherName] = [1,2,3,5,9];
// console.log(numFurst);
// console.log(otherName);


// const user = {
//     name:'Alex',
//     age: 30,
//     id: 7,
// };

// const {name, ...other} = user;
// console.log(name);
// console.log(other);


//                           функция  замыкания

// function createFunc(x){
//     return function(){
//         console.log(x);
//     }
// };
// console.log(createFunc(100));

// const newFunc = createFunc(100);

// newFunc();


// function calcSum(a) {
//     return function (b) {
//         return a + b;
//     };
// };
// const addTen = calcSum(10);
// console.log(addTen(5));


function createProfilInfo(groupNumber){
    return function(fullName){
        return `Работу сделал ${fullName} из группы ${groupNumber}`;
    };
};

const groupSevenStudent = createProfilInfo(7);
console.log(groupSevenStudent('Фёдор Сиянко'));
