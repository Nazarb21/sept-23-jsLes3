// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function obchyslytyPloshchuPrjamokutnyka(a, b) {
//     // Обчислюємо площу прямокутника за формулою: площа = довжина * ширина
//     let ploshcha = a * b;
//     return ploshcha;
// }
//
// // Приклад використання функції
// let storonaA = 5;
// let storonaB = 10;
// let rezultat = obchyslytyPloshchuPrjamokutnyka(storonaA, storonaB);
//
// console.log('Площа прямокутника зі сторонами ' + storonaA + ' і ' + storonaB + ' дорівнює ' + rezultat + '.');

// - створити функцію яка обчислює та повертає площу кола з радіусом r

// function foobar(r) {
//     let ploshcha = Math.PI * Math.pow(r, 2);
//     return ploshcha;
// }
// let radius = 10;
// let result = foobar(radius);
// console.log('Площа кола з радіусом ' + radius + ' дорівнює ' + result + '.');

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// function foobar(h, r) {
//     let ploshcha = 2 * Math.PI * r + h + 2 * Math.PI * Math.pow(r, 2)
//     return ploshcha;
// }
// let radius = 7;
// let height = 15;
// let result = foobar(radius, height);
// console.log('Площа поверхні циліндра з радіусом ' + radius + ' і висотою ' + height + ' дорівнює ' + result + '.');

// - створити функцію яка приймає масив та виводить кожен його елемент

// function foobar(array) {
//     for (let item of array) {
//         console.log(item)
//     }
// }
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
//     ]
// foobar(users);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// function foobar(text) {
//     let paragraph = document.createElement('p');
//     paragraph.textContent = text;
//     document.body.appendChild(paragraph);
// }
// let tekst = 'Це текст для нового параграфу.';
// foobar(tekst)

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function stvorytySpysok(textLi) {
//     let spysok = document.createElement('ul');
//     for (let i = 0; i < 3; i++) {
//         let liElement = document.createElement('li');
//         liElement.textContent = textLi;
//         spysok.appendChild(liElement);
//     }
//     document.body.appendChild(spysok);
// }
// let tekstLi = 'Текст для елементів списку.';
// stvorytySpysok(tekstLi);
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.0 Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function stvorytySpysok(textLi, kilkistLi) {
//     let spysok = document.createElement('ul');
//     for (let i = 0; i < kilkistLi; i++) {
//         let liElement = document.createElement('li');
//         liElement.textContent = textLi;
//         spysok.appendChild(liElement);
//     }
//     document.body.appendChild(spysok);
// }
// let tekstLi = 'Текст для елементів списку.';
// let kilkistLi = 3;
// stvorytySpysok(tekstLi, kilkistLi);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// function buildListFromArray(elements) {
//     let ulElement = document.createElement('ul');
//     for (let i = 0; i < elements.length; i++) {
//         let liElement = document.createElement('li');
//         liElement.textContent = elements[i];
//         ulElement.appendChild(liElement);
//     }
//     document.body.appendChild(ulElement);
// }
// let myArray = [1, 'Hello', true, 3.14, 'World', false];
// buildListFromArray(myArray);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// function vydrukuvatyObiekty(objectsArray) {
//     let container = document.createElement('div');
//     for (let i = 0; i < objectsArray.length; i++) {
//         let obj = objectsArray[i];
//         let block = document.createElement('div');
//         block.innerHTML = '<p>ID: ' + obj.id + '</p>' +
//             '<p>Name: ' + obj.name + '</p>' +
//             '<p>Age: ' + obj.age + '</p>';
//         container.appendChild(block);
//     }
//     document.body.appendChild(container);
// }
// let myObjects = [
//     { id: 1, name: 'John', age: 25 },
//     { id: 2, name: 'Alice', age: 30 },
//     { id: 3, name: 'Bob', age: 22 }
// ];
// vydrukuvatyObiekty(myObjects);

// - створити функцію яка повертає найменьше число з масиву

// function znaityNajmensheChyslo(masiv) {
//     if (masiv.length === 0) {
//         return null;
//     }
//     let minChyslo = Math.min(...masiv);
//     return minChyslo;
// }
//
// let myArray = [5, 2, 8, 1, 9, 3];
// let result = znaityNajmensheChyslo(myArray);
//
// console.log('Найменше число в масиві: ' + result);

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

// function sum(arr) {
//     let total = arr.reduce(function (accumulator, currentValue) {
//         return accumulator + currentValue;
//     }, 0); // Початкове значення аккумулятора - 0
//
//     return total;
// }
//
// let myArray = [1, 2, 10];
// let result = sum(myArray);
//
// console.log('Сума елементів масиву: ' + result);

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

// function swap(arr, index1, index2) {
//     if (index1 >= 0 && index1 < arr.length && index2 >= 0 && index2 < arr.length) {
//         let temp = arr[index1];
//         arr[index1] = arr[index2];
//         arr[index2] = temp;
//     }
//     return arr;
// }
//
// let myArray = [11, 22, 33, 44];
// swap(myArray, 0, 1);
//
// console.log(myArray);

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

// function exchange(sumUAH, currencyValues, exchangeCurrency) {
//         let exchangeRate = 1;
//
//     for (let i = 0; i < currencyValues.length; i++) {
//         if (currencyValues[i].currency === exchangeCurrency) {
//             exchangeRate = currencyValues[i].value;
//             break;
//         }
//     }
//
//     let sumInCurrency = sumUAH / exchangeRate;
//
//     return sumInCurrency;
// }
// let sumUAH = 10000;
// let currencyValues = [
//     { currency: 'USD', value: 40 },
//     { currency: 'EUR', value: 42 }
// ];
// let exchangeCurrency = 'USD';
//
// let result = exchange(sumUAH, currencyValues, exchangeCurrency);
// console.log(result);