// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let strings = ['hello world', 'lorem ipsum', 'javascript is cool'];
// for (let s of strings) {
//     console.log(s.length)
// }

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let strings = ['hello world', 'lorem ipsum', 'javascript is cool']
// for (let s of strings) {
//     console.log(s.toUpperCase())
// }

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// let strings = ['HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL']
// for (let s of strings) {
//     console.log(s.toLowerCase())
// }

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// let str = ' dirty string   '
// console.log(str.trim())

//
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

// function stringToarray(str) {
//     return str.split(' ')
// }
// let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str)
// console.log(arr)

//
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

// let numbers = [10,8,-7,55,987,-1011,0,1050,0];
// let stringArray = numbers.map(String)
// console.log(stringArray)

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

// function sortNums(nums, direction) {
//     if (direction === 'ascending') {
//         return nums.slice().sort((a, b) => a - b)
//     }else if (direction === 'descending') {
//         return nums.slice().sort((a, b) => b - a)
//     }else{
//         return nums
//     }
// }
// let nums = [11,21,3];
// console.log(sortNums(nums, 'ascending'))
// console.log(sortNums(nums, 'descending'))

//
// ==========================
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration

// let sort =
//     coursesAndDurationArray.sort((course1, course2) => {
//         return course2.monthDuration - course1.monthDuration
//     })
//     console.log(sort)

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

// let filteredCourse = coursesAndDurationArray.filter(course => course.monthDuration > 5)
// console.log(filteredCourse)

// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

// let transformedArray = coursesAndDurationArray.map((course, index) => ({
//     id: index +1,
//     title: course.title,
//     monthDuration: course.monthDuration
// }))
// console.log(transformedArray)

// =========================
//     описати колоду карт (від 6 до туза без джокерів)
// let cardDeck = [];
// let suits = ['spade', 'diamond','heart', 'clubs']
// let values = ['6'-'10', 'ace','jack','queen','king','joker']
// for (let suit of suits) {
//     for (let value of values) {
//         let color = (suit === 'heart' || suit === 'diamond') ? 'red' : 'black';
//
//         cardDeck.push({
//             cardSuit: suit,
//             value: value,
//             color: color
//         })
//     }
// }
// - знайти піковий туз

// let aceOfSpades = cardDeck.find(card => card.cardSuit === 'spade' && card.value === 'ace')
// console.log(aceOfSpades)

// - всі шістки

// let sixes = cardDeck.filter(card => card.value === '6')
// console.log(sixes)

// - всі червоні карти

// let redCards = cardDeck.filter(card => card.color === 'red')
// console.log(redCards)

// - всі буби
// let diamondcard = cardDeck.filter(card => card.cardSuit === 'diamond')
// console.log(diamondcard)

// - всі трефи від 9 та більше

// let highValueClubs = cardDeck.filter(card => card.Suit === 'clubs' && values.indexOf(card.value) >= values.indexOf('9'))
// console.log(highValueClubs)
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }

//
// =========================
//
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }

// let cardDeck = [];
// let suits = ['spade', 'diamond','heart', 'clubs']
// let values = ['6'-'10', 'ace','jack','queen','king','joker']
// for (let suit of suits) {
//     for (let value of values) {
//         let color = (suit === 'heart' || suit === 'diamond') ? 'red' : 'black';
//
//         cardDeck.push({
//             cardSuit: suit,
//             value: value,
//             color: color
//         })
//     }
// }
// let cardsBySuits = cardDeck.reduce((result, card) => {
//     result[card.cardSuit].push(card);
//     return result;
// }, {spade: [], diamond: [], heart: [], clubs: [] })
// console.log(cardsBySuits)
// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];

// --написати пошук всіх об'єктів, в який в modules є sass
//
// let coursesWithSass = coursesArray.filter(course => course.modules.includes('sass'));
// console.log(coursesWithSass)

// --написати пошук всіх об'єктів, в який в modules є docker
// let coursesWithDocker = coursesArray.filter(course => course.modules.includes('docker'));
// console.log(coursesWithDocker)