// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

// function User(id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
// let usersArray = [];
//
// for (let i = 0; i < 10; i++){
//     let user = new User(
//         i + 1,
//         `name${i + 1}`,
//         `Surname${i + 1}`,
//         `user${i + 1}example@.com`,
//         `+124124${i + 1}`,
//     );
//     usersArray.push(user)
// }
// console.log(usersArray)

//
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

// let filteredUsers = usersArray.filter(user => user.id % 2===0);
// console.log(filteredUsers)

//
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

// let sort = usersArray.sort((s1, s2) => {
//     return s1.id - s2.id})
// console.log(sort)
//
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

// class Client {
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
// let clientsArray = []
//
// for (let i = 0; i < 10; i++) {
//     let client = new Client(
//         i + 1,
//         `name${i + 1}`,
//         `Surname${i + 1}`,
//         `user${i + 1}example@.com`,
//         `+124124${i + 1}`,
//         122
//     )
//     clientsArray.push(client)
// }
// console.log(clientsArray)
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

// let sort = clientsArray.sort((s1, s2) => {
//     return s1.id - s2.id})
//
//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// function Car(model, manufacturer, year, maxSpeed, engineVolume) {
//     this.model = model;
//     this.manufacturer = manufacturer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.engineVolume = engineVolume;
//
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
//     }
//     this.info = function () {
//         for (let key in this) {
//             if (typeof this[key] !== "function") {
//                 console.log(`${key} - ${this[key]}`)
//             }
//         }
//     }
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.maxSpeed += newSpeed;
//         console.log(`Максимальна швидкість збільшена на ${newSpeed}. Нова максимальна швидкість: ${this.maxSpeed}`);
//     }
//     this.changeYear = function (newValue) {
//         this.year = newValue;
//         console.log(`Рік випуску змінено на ${newValue}`);
//     }
//     this.addDriver = function (driver) {
//         this.driver = driver;
//         console.log('Водій доданий:', driver);
//     }
// }
// let car1 = new Car('M5', 'BMW', 2022, 250, 4.4)
//
// car1.drive()
// car1.info()
// car1.increaseMaxSpeed(270)
// car1.changeYear(2023)
// car1.addDriver({name: 'Vin Diesel', license: A1242323})
//
//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// class Car {
//     constructor(model, manufacturer, year, maxSpeed, engineVolume) {
//         this.model = model;
//         this.manufacturer = manufacturer;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.engineVolume = engineVolume;
//     }
//
//     drive() {
//         console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     }
//
//     info() {
//         for (let key in this) {
//             if (typeof this[key] !== 'function') {
//                 console.log(`${key} - ${this[key]}`);
//             }
//         }
//     }
//
//     increaseMaxSpeed(newSpeed) {
//         this.maxSpeed += newSpeed;
//         console.log(`Максимальна швидкість збільшена на ${newSpeed}. Нова максимальна швидкість: ${this.maxSpeed}`);
//     }
//
//     changeYear(newValue) {
//         this.year = newValue;
//         console.log(`Рік випуску змінено на ${newValue}`);
//     }
//
//     addDriver(driver) {
//         this.driver = driver;
//         console.log('Водій доданий:', driver);
//     }
// }
//
// let car1 = new Car('Civic', 'Honda', 2022, 200, 1.8);
//
// car1.drive()
// car1.info()
// car1.increaseMaxSpeed(270)
// car1.changeYear(2023)
// car1.addDriver({name: 'Vin Diesel', license: A1242323})

//
//
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class Cinderella {
    constructor(name, age, shoeSize) {
        this.name = name;
        this.age = age;
        this.shoeSize = shoeSize
    }
}

class Prince {
    constructor(name, age, foundShoe) {
        this.name = name;
        this.age = age;
        this.foundShoe = foundShoe;
    }
}

let cinderellasArray = [];
for (let i = 0; i < 10; i++) {
    let cinderella = new Cinderella(`Cinderella${i+1}`, 18 + i, 5 + i);
    cinderellasArray.push(cinderella)
}

let prince = new Prince('Prince Charming', 25, 7);

let foundCinderella;
for (let i = 0; i < cinderellasArray.length; i++){
    if (cinderellasArray[i].shoeSize === prince.foundShoe) {
        foundCinderella = cinderellasArray[i]
        break;
    }
}
console.log('Попелюшка, яка повинна бути з принцом (за допомогою циклу):', foundCinderella);

let foundCinderellaFind = cinderellasArray.find(cinderella => cinderella.shoeSize === prince.foundShoe);

console.log('Попелюшка, яка повинна бути з принцом (за допомогою find):', foundCinderellaFind);