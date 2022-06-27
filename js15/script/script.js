// console.log('hi');
// const Animal = function ({ name, color }) {
//     this.name = name,
//         this.color = color
//     // this.voice = function(){
//     //     console.log('Voice from:', this.name);
//     // }
// }

// Animal.prototype.voice = function () {
//     console.log('Voice from:', this.name);
// }

// const dog = new Animal({ name: 'Chivas', color: 'while' })

// console.log(dog.voice());

// const Cat = function (options) {
//     Animal.apply(this, arguments)
//     this.hastail = options.hastail
//     this.type = 'Cat'
// }
// Cat.prototype = Object.create(Animal.prototype)
// Cat.prototype.constructor = Cat
// Animal.prototype.voice = function(){
//     console.log('This sound from', this.name);
// }
// Cat.prototype.voice= function(){
//     console.log(this.name, 'says meow');
// }


// const cat = new Cat({ name: 'Felix', color: 'Black', hastail: true })

// const fish= new Animal({ name: 'Nemo', color: 'Orange'})

// console.log(fish.voice());
// console.log(cat.voice());

// console.log(cat);



//                             Class

// class Animal {
//     constructor(options){
//         this.name=options.name,
//         this.color=options.color
//     }
//     voice(){
//         console.log('Voice from', this.name);
//     }
// }
// const dog = new Animal({ name: 'Chivas', color: 'White'})

// console.log(dog);

// class Cat extends Animal {
//     constructor(options){
//         super(options)

//         this.hastail = options.hastail
//         this.type = 'Cat'
//     }
// voice(){
//     super.voice()
//     console.log(this.name, ' says meow');
// }
// }
// const cat = new Cat({ name: 'Felix', color: 'White', hastail:true})

// // console.log(cat.voice());

// Object.prototype.information = function(){
//     console.log('This is object:', this);
// }

// // cat.information(cat)

// Array.prototype.ourMap= function(){
//     console.log(this);
//     return this.map.apply(this, arguments);
// }

// console.log([1,2,3, -7].ourMap(item => item **2));


String.prototype.toTag = function(tagName){
    return `<${tagName}>${this}</${tagName}>`
}
console.log('String'.toTag('div'));