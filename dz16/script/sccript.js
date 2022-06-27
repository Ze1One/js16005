console.log('hi');
// 1) Создать класс разработчика, у которого будут свойства: 
// имя, язык программирования, метод, который в консоль выводит
//  фразу " "имя" работает с "язык программирования" "
// А также класс студента, который будет расширен с помощью 
// класса разработчика. Добавьте туда свойство: номер группы

class Developer {
    constructor(options) {
        this.name = options.name
        this.progLang = options.progLang
    }
    string() {
        console.log(this.name, `работает с`, this.progLang);
    }
}

class Students extends Developer {
    constructor(options) {
        this.numGrop = options.numGrop
    }
}


console.log(Students);



// 2) Написать метод, который будет в конце строки добавлять
// точку. Метод должен быть в прототипе String 

String.prototype.toDot = function(dot){
    return `${this} ${dot}.`
}

console.log('hi'.toDot('point'));