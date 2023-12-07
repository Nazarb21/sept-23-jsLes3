// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// let numb1 = (a, b) => a + b;
// console.log(numb1(1, 2))
// }
//
// // Приклад використання функції
// let storonaA = 5;
// let storonaB = 10;
// let rezultat = obchyslytyPloshchuPrjamokutnyka(storonaA, storonaB);
//
// console.log('Площа прямокутника зі сторонами ' + storonaA + ' і ' + storonaB + ' дорівнює ' + rezultat + '.');

// - створити функцію яка обчислює та повертає площу кола з радіусом r
//
//     let ploshcha = (r) => Math.PI * Math.pow(r , 2)
//     console.log(ploshcha(10))


// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// let foobar = (h, r) => 2* Math.PI * r + h +2 * Math.PI * Math.pow(r, 2)
// console.log(foobar(15, 7))


// - створити функцію яка приймає масив та виводить кожен його елемент

// const displayArrayElementsArrow = (arr) => {
//     arr.forEach((element) => {
//         console.log(element);
//     });
// };
//
// const myArray = [1, 2, 3, 4, 5];


// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
//
// let paragraph = text => {
//     document.write(`<p>${text}</p>`);
// };
// let MyText = 'thit is text for paragraph'
// paragraph(MyText)

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// let createList = text => {
//     document.write(`<ul>
// <li>${text}</li>
// <li>${text}</li>
// <li>${text}</li>
// </ul>`)
// }
// let MyText = 'bla bla bla'
// createList(MyText)

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.0 Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// let createList = text => {
//     document.write('<ul>')
//     for (i=0; i <10; i++){
//         document.write(`<li>${text}</li>`)
//     }
//     document.write(`</ul>`)
// }
// let MyText = 'blablabla'
// createList(MyText)


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let createLofArr = (array) => {
//     document.write(`<ul>${array.map(item => <li>${item}</li>).join(``)}</ul>`)
// }
// let myArray = [1, "Hello", true, 42, "World", false];
// createLofArr(myArray);


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// let masyv = (objects) => {
//     objects.forEach(object => {
//         let block = `<div>ID: ${object.id}<br>Name: ${object,name}<br>Age: ${object.age}</div>`
//         document.write(block)
//     })
// }
//
// let myObjects = [
//     { id: 1, name: "John", age: 25 },
//     { id: 2, name: "Alice", age: 30 },
//     { id: 3, name: "Bob", age: 22 }
// ];
// masyv(myObjects)


// - створити функцію яка повертає найменьше число з масиву

// let minimum = array => Math.min(...array)
//
// let numbers = [5, 2, 8, 1, 9, 4];
// let minNumber = minimum(numbers);
// console.log(`min number in array is: ${minNumber}`)

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

// let sum = arr => arr.reduce((acc, val) => acc + val, 0);
// let numbers = [1, 2, 10];
// let result = sum(numbers);
// console.log(`sum nubmer in array is: ${result}`)


// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

// let swap = (arr, index1, index2) => {
//     [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
//     return arr;
// }
// let numbers = [11, 22, 33, 44];
// swap(numbers, 0, 1)
// console.log(numbers)

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

// let exchange = (sumUAH,currencyValues, exchangeCurrency) =>
//     (currencyValues.find(currency => currency.currency === exchangeCurrency)?.value || 0)* sumUAH;
//     let result = exchange(10000, [{ currency: 'USD', value: 40 }, { currency: 'EUR', value: 42 }], 'USD');
// console.log(result)