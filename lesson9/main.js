// //
// // - створити блок,
// //     - додати йому класи wrap, collapse, alpha, beta
// // - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// // - додати цей блок в body.
// // - клонувати його повністю, та додати клон в body.
//
// let originalBlock = document.createElement('div');
// originalBlock.className = 'custom-block wrap collapse alpha beta';
// originalBlock.textContent = 'This is the original block.';
//
// document.body.appendChild(originalBlock);
//
// let clonedBlock = originalBlock.cloneNode(true);
//
// document.body.appendChild(clonedBlock);
// //
// // - Є масив:
// let menuItems = ['Main','Products','About us','Contacts']
// // Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)
// let ul = document.createElement('ul');
// menuItems.forEach(function(item) {
//     let li = document.createElement('li')
//     li.textContent = item
//     ul.appendChild(li)
// })
// document.body.appendChild(ul)
// //
// // - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// // Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// // Завдання робити через цикли.
// for (let i = 0; i < coursesAndDurationArray.length; i++) {
//     let courseBlock = document.createElement("div");
//     courseBlock.className = 'course-block';
//
//     let titleElement = document.createElement('p');
//     titleElement.textContent = 'Title: ' + coursesAndDurationArray[i].title;
//
//     let durationElement = document.createElement('p');
//     durationElement.textContent = 'Duration: ' + coursesAndDurationArray[i].monthDuration + ' months';
//
//     courseBlock.appendChild(titleElement);
//     courseBlock.appendChild(durationElement);
//
//     document.body.appendChild(courseBlock);
// }
//
// //
// // =========================
