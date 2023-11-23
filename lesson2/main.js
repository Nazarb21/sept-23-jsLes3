
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let Array= [1, 23, 834, 'dog', 'newYear', true, false, 8142, 'home', 'city'];
console.log(Array[0]);
console.log(Array[1]);
console.log(Array[2]);
console.log(Array[3]);
console.log(Array[4]);
console.log(Array[5]);
console.log(Array[6]);
console.log(Array[7]);
console.log(Array[8]);
console.log(Array[9]);


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let books = {
    title: 'Newbook',
    pageCount: 100,
    genre: 'comedy'
}
console.log(books)

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let books1 = {
    title: 'Newbook',
    pageCount: 100,
    genre: 'comedy',
    authors : [
        {author1:
        name = 'Michael',
        age: 21},
        {author2:
            name = 'Jeremy',
            age: 31}
        ]
        }
console.log(books1)
console.log(books1.authors[0])
console.log(books1.authors[1])
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let users = [
    {name: 'Michael', username: 'Michael1', password: 7438},
    {name: 'Jeremy', username: 'Jeremy1', password: 2343},
    {name: 'William', username: 'William1', password: 9465},
    {name: 'Peter', username: 'Peter1', password: 3243},
    {name: 'Dany', username: 'Dany1', password: 9863},
    {name: 'Bob', username: 'Bob1', password: 8903},
    {name: 'Mike', username: 'Mike1', password: 3769},
    {name: 'Ann', username: 'Ann1', password: 2589},
    {name: 'July', username: 'July1', password: 8753},
    {name: 'Kyle', username: 'Kyle1', password: 9494},
    {name: 'Joe', username: 'Joe1', password: 1232}
]
console.log(users[0].password)
console.log(users[1].password)
console.log(users[2].password)
console.log(users[3].password)
console.log(users[4].password)
console.log(users[5].password)
console.log(users[6].password)
console.log(users[7].password)
console.log(users[8].password)
console.log(users[9].password)


// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let number = +prompt('enter your number');
if (number === 0)
    console.log(true)
else if (number > 0)
    console.log(false)

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = +prompt('Введіть число від 0 до 59');
    if (time >=1 && time <=15) {
        console.log('Ваше число входить у 1 четверть')
    }else if (time >=16 && time <=30) {
        console.log('Ваше число входить у 2 четверть')
    }else if (time >= 31 && time <=45) {
        console.log('Ваше число входить у 3 четверть')
    }else if (time >= 46 && time <=59) {
        console.log('Ваше число входить у 4 четверть')
    }else{
        console.log('Ваше число не підходить');
}

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = +prompt('Введіть число від 1 до 31');
if (day >=1 && day <= 10) {
    console.log('Перша декада')
}else if (day >=11 && day <=20) {
    console.log('Друга декада')
}else if (day >=21 && day <=31){
    console.log('Третя декада')
}else{
    console.log('Ваше число не підходить')
}
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
let week= +prompt('Enter day of the week')
switch(week) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        console.log('?????????');

}
//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.

let num1 = +prompt('Введіть перше число');
let num2 = +prompt('Введіть Друге число');

if (num1 > num2) {
    console.log('Максимальне число' + num1)
}else if (num1 < num2){
    console.log('Максимальне число'+ num2)
}else{
    console.log('Всі числа рівні')
}
//
//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)

// var x = /* ваше значення */; // може бути стрінг, число, undefined, null і т. д.

// x = x || "default";
//
// // Виводимо результат
// console.log(x);

//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
if (coursesAndDurationArray.monthDuration >5){
    console.log(`${coursesAndDurationArray.monthDuration} - Супер`)
}