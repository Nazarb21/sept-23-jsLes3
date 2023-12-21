// Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
function submitForm() {
    let name = document.getElementById("name").value;
    let surname = document.getElementById("surname").value;
    let age = document.getElementById("age").value;

    let userObject = {
        name: name,
        surname: surname,
        age: age
    };

    let resultTextElement = document.getElementById("resultText");
    resultTextElement.innerText = JSON.stringify(userObject, null, 2);

    let resultElement = document.getElementById("result");
    resultElement.style.display = "block";
}
// ==========================
// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
let numberBlock = document.getElementById('numberBlock')

let currentNumber = localStorage.getItem('savedNumber')

if (currentNubmer !== null) {
    numberBlock.textContent = currentNumber;
}
currentNubmer = parseInt(currentNumber) + 1;
numberBlock.textContent = currentNumber;

localStorage.setItem("savedNumber", currentNumber.toString());
// ==========================
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається інформація про дату та час відвідування сторінки. Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію
let currentDate = new Date();

let sessions = JSON.parse(localStorage.getItem('sessions')) || [];

sessions.push({
    date : currentDate.toLocaleString()
});
localStorage.setItem('sessions', JSON.stringify(sessions))

window.location.href = 'sessions.html'
// =========================
//     зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів
let objectsArray = [];
for (let i = 0; i < 100; i++) {
    objectsArray.push({id: i + 1, name: 'Object' + (i+1) })
}
let objectListElement = document.getElementById('objectsList')

function displayObjects(startIndex, endIndex) {
    objectListElement.innerHTML = '';

    for (let i = startIndex; i < endIndex; i++) {
        let objectElement = document.createElement('div')
        objectElement.innerHTML = "<strong>ID:</strong> " + objectsArray[i].id + ", <strong>Name:</strong> " + objectsArray[i].name;
        objectListElement.appendChild(objectElement);
    }
}
displayObjects(0, 10);

let currentPage = 1;
let objectPerPage = 10;

function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        let startIndex = (currentPage - 1) * objectPerPage;
        let endIndex = startIndex + objectPerPage;
        displayObjects(startIndex, endIndex)
    }
}

function nextPage() {
    let totalObjects = objectsArray.length;
    let totalPages = Math.ceil(totalObjects/objectPerPage);

    if (currentPage < totalPages) {
        currentPage++;
        let startIndex = (currentPage - 1) * objectPerPage;
        let endIndex = startIndex + objectPerPage;
        displayObjects(startIndex, endIndex);

    }
}
//
//
//
//
// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
//

function hideElement() {
    let textElement = document.getElementById('text');
    textElement.style.display = 'none'
}
//
//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
//
function checkAge() {
    let age = document.getElementById('ageInput').value;

    if (age < 18) {
        alert("Ви ще неповнолітній. Доступ заборонено.")
    }else {
        alert("Ласкаво просимо! Вам більше 18 років.")
    }
}

//
// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
function createTable() {
    let rowCount = document.getElementById('rowCount').value
    let cellCount = document.getElementById('cellCount').value
    let cellContent = document.getElementById('cellContent').value

    let table = "<table border='1'>";
    for (let i = 0; i , rowCount; i ++) {
        table += '<tr>';
        for (let j = 0; j < cellCount; i++) {
            table += "<td>" + cellContent + "</td>";
        }
        table += "</tr>";
    }
    table += "</table>";

    document.getElementById('tableContainer').innerHTML = table;
}
