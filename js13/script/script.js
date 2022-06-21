//                                  Imitation Back промисы асинхроонные функции
// console.log('Запрос данных');
// setTimeout(() => {
//     console.log('Подготовка данных');
//     const backendDate = {
//         sttus: 'Done',
//         code: 200,
//     }
//     setTimeout(() => {
//         console.log('Данные получены', backendDate);
//     }, 3000);

// }, 3000);




//  resolve                    успешный запрос

// console.log('Запрос данных');
// const ourPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('Подготовка данных');
//         const backendDate = {
//             sttus: 'Done',
//             code: 200,
//         }
//         resolve(backendDate);
//     }, 3000)

// });

// ourPromise.then(date => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             date.modified = true;
//             resolve(date);
//             //     console.log('date upload', date);
//         })
//     }, 3000)
//         .then(modifiedData => {
//             modifiedData.fromPromiseTwo = true;
//             return modifiedData;
//         })
//             .then(secondaryModifiedData => { 
//                 console.log('Date upload successful', secondaryModifiedData)
//             })

//         });

// promise2.then(modifiedData =>{
//     console.log('Date upload successful', modifiedData);
// })
// });

// .catch(err => console.log('Error', err));  должен быть reject
// .finally(() => console.log('finally'));




// const timePause = delay => {
//     return new Promise(resolve => {
//         setTimeout(()=> {
//     resolve()
// }, delay)
//     })
// }

// timePause(5000)
// .then(() => {
//     console.log('after 5 seconds');
// })
// timePause(1000)
// .then(() => {
//     console.log('after 1 seconds');
// })
// Promise.all([timePause(4000), timePause(2000)])
// .then(() => {
//     console.log('All promise is worked now');
// })
// .finally(()=> console.log('finishresult'));




//        sintetiq sugar

const delay = ms => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), ms)
    })
}
const url = ' http://jsonplaceholder.typicode.com/posts';

// function fetchDateFromBack() {
//     return delay(3000)
//         .then(() => fetch(url))
//         .then(response => response.json())
// }

// fetchDateFromBack()
//     .then(data => console.log(data))
//     .catch(e => console.error(e))



async function fetchDataFromBack() {
    try {
        console.log('Fetch ssstart');
        await delay(2000);
        const response = await fetch(url);
        const data = await response.json();

        console.log('data', data);
    } catch(e) {
        console.log(e);
    }
    
}
fetchDataFromBack();