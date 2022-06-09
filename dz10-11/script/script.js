// console.log('Hello');

// 1) Из объекта сделать массив с массивами, а потом коллекцию (Мар)

// В эту коллекцию добавить 2 свойства (на ваше усмотрение)
// После чего выполнить проверку на наличие в массиве свойства по ключу name, результат вывести в консоль

// 2) Созданную коллекцию пройти через цикл for .. of и вывести в консоль все ключи, значения и ентрис

// let student = {
//     name: "Your name",
//     age: "Your age",
//     id: 1,
// };

// const studMass = Object.entries(student);


// const studMap = new Map(studMass);

// studMap.set('level', 'hard');
// studMap.set('lesson', 3);
// for (let keys of studMap.keys()) {
//     console.log(keys);
// };

// for (let entry of studMap.entries()) {
//     console.log(entry);
// };

// for (let value of studMap.value()) {
//     console.log(value);
// };




// 3)


// let amount = {
//     apple: 440,
//     burger: 316,
//     juice: 1120,
// };

// let ourAmount = Object.fromEntries(Object.entries(amount).map(([key, value]) => {
//     return [key, value / 2]
// }));

// console.log(ourAmount);


// function sumAmount(object) {
//     let sum = 0;
//     for (let ourAmount of Object.values(object)) {
//         sum += ourAmount;
//     }
//     return sum;

// };
// console.log(sumAmount(ourAmount));

// В объекте с количеством продуктов, уменьшить количество каждого в 2 раза

// (Изменить структуру до массива с массивами, выполнить преобразование и вернуть объект)

// 4) В измененном выше объекте рассчитать общую сумму продуктов

// 5) Написать функцию, которая принимает массив и возвращает массив с уникальными значениями
// (Использовать Set, и rest оператор)

// function returnUniqeValue(obj, key) {
//     return [...new Set(obj)]
// };



// 6) 

const weather =

{
    "coord": {
        "lon": -122.08,
        "lat": 37.39
    },
    "weather": [
        {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 282.55,
        "feels_like": 281.86,
        "temp_min": 280.37,
        "temp_max": 284.26,
        "pressure": 1023,
        "humidity": 100
    },
    "visibility": 10000,
    "wind": {
        "speed": 1.5,
        "deg": 350
    },
    "clouds": {
        "all": 1
    },
    "dt": 1560350645,
    "sys": {
        "type": 1,
        "id": 5122,
        "message": 0.0139,
        "country": "US",
        "sunrise": 1560343627,
        "sunset": 1560396563
    },
    "timezone": -25200,
    "id": 420006353,
    "name": "Mountain View",
    "cod": 200
};

const newWeather = Object.entries(weather);
console.log(newWeather);

const edit = new Map(newWeather);
console.log(edit);


// Копировать объект не используя Object.assign и цикл

// 7) 
const time = 1654420481877;

let fullData = new Date(time);
console.log(fullData);

function  YYYY(date) {
    let minutes = date.getSeconds();
    let seconds = date.getMinutes();
    let years = date.getFullYear();
    let months = date.getMonth();
    let day = date.getDate() > 10 ? date.getDay() : `0 ${date.getDay()}`;
    return `${years}/${months}/${day} (${minutes} : ${seconds})`
};
console.log(YYYY(fullData));

// Вывести дату в полном формате
// А затем в консоль вывести дату в формате YYYY/MM/DD (mm: ss);