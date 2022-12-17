// - Створити функцію конструктор для об'єктів User з полями
// створити пустий масив, наповнити його 10 об'єктами new User(....)
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати ,
// залишивши тільки об'єкти з парними id (filter)
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

//  function user(id, name, surname , email, phone) {
//   this.id = id;
//   this.mame = name;
//   this.surname = surname;
//   this.email = email;
//   this.phone = phone;
// }
//
// const user1 = new user(1, 'Dmytro', 'Ceheyko', 'kjj@gmail.com', '5454545555');
// const user2 = new user(2, 'Dmytro', 'Ceheyko', 'kjj@gmail.com', '5454545555');
// const user3 = new user(3, 'Dmytro', 'Ceheyko', 'kjj@gmail.com', '5454545555');
// const user4 = new user(4, 'Dmytro', 'Ceheyko', 'kjj@gmail.com', '5454545555');
// const user5 = new user(5, 'Dmytro', 'Ceheyko', 'kjj@gmail.com', '5454545555');
//
// const arrUser = [];
// arrUser.push(user1,user2,user3,user4,user5);
//
// let filter = arrUser.filter(value => value.id % 2===0);
// console.log(filter);
//
// console.log(arrUser.sort((a, b) => b.id - a.id));


// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// class Client {
//   constructor(id, name, surname, email, phone, order) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
//     this.order = order;
//   }
// }
// const user1 = new Client (1, 'Dmytro', 'Ceheyko', 'kjj@gmail.com', '5454545555', [1,2,5,9,3,59]);
// const user2 = new Client (2, 'Dmytro', 'Ceheyko', 'kjj@gmail.com', '5454545555', [1,2,5,59]);
// const user3 = new Client (3, 'Dmytro', 'Ceheyko', 'kjj@gmail.com', '5454545555', [9,3,59]);
// const user4 = new Client (4, 'Dmytro', 'Ceheyko', 'kjj@gmail.com', '5454545555', [1,259]);
// const user5 = new Client (5, 'Dmytro', 'Ceheyko', 'kjj@gmail.com', '5454545555', [9,3,59]);
//
// const arrUsers = [];
// arrUsers.push(user1,user2,user3,user4,user5);
// console.log(arrUsers.sort((a, b) => a.order.length - b.order.length));

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель,// виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:-- drive () - яка виводить в консоль `їдемо зі швидкістю
// ${максимальна швидкість} на годину`-- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля -
// значення поля`-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів,і додає його в поточний об'єкт car
// function Car(model, producer, year, maxSpeed, engine) {
//   this.model = 'model';
//   this.producer = 'producer';
//   this.year = 'year';
//   this.maxSpeed = +'maxSpeed';
//   this.engine = 'engine';
//   this.engine = function () {
//     console.log((`їдемо зі швидкістю ${this.maxSpeed} на годину`))
//   };
//   this.info = function () {
//     for (const carKey in this) {
//       if (typeof [this.userKey] !== "function") {
//         console.log((`${carKey}--${this[carKey]}`))
//       }
//     }
//   };
//   this.increaseMaxSpeed = function (newSpeed) {
//     this.maxSpeed += newSpeed
//   };
//   this.changeYear = function (newValue) {
//     this.year = newValue;
//   };
//   this.addDriver = function (driver) {
//     this.driver = driver;
//   }
//   const car = new Car('Toyota', 'Japan', '2008', '170', 2.5);
//   console.log(car);
//   car.engine();
//   car.info();
//   car.increaseMaxSpeed(42);
//   car.changeYear(2015);
//   car.addDriver({name: `Vodila`});
// }

//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//
// class Car{
//   constructor(model, producer, year, maxSpeed, carEngine) {
//     this.model = model;
//     this.producer = producer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.carEngine = carEngine;
//   }
//   engine(){
//     console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//   }
//   info(){
//     for (const carKey in this) {
// if ()
//     }
//   }
// }


//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги.
// Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//   За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//   Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
function Cinderella(name, age, footSize) {
  this.name = name;
  this.age = age;
  this.footSize = footSize;
}

const cinderella1 = new Cinderella('Mariya', 28, 33);
const cinderella2 = new Cinderella('Tetyana', 27, 32);
const cinderella3 = new Cinderella('Mari', 29, 34);
const cinderella4 = new Cinderella('Riya', 23, 31);
const cinderella5 = new Cinderella('Kya', 26, 30);
const cinderella6 = new Cinderella('Nastya', 22, 35);

const arrayofCinderella = [];
arrayofCinderella.push(cinderella1, cinderella2, cinderella3, cinderella4, cinderella5, cinderella6);

class Prince {
  constructor(name, age, findFootSize) {
    this.name = name;
    this.age = age;
    this.findFootSize = findFootSize;
  }
}

const prince = new Prince('Kyrylo', 41, 32);
const findSinderellas = (arr,boy) => {
  for (const item of arr) {
    if (item.footSize === boy.findFootSize){
      console.log(`my cinderella is ${item.name}`);
    }
  }
}
findSinderellas(arrayofCinderella,prince);
