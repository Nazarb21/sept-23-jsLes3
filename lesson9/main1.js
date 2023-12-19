// //     - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// //
// //
// // За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
// //     Завдання робити через цикли.
// for (let i = 0; i < coursesAndDurationArray.length; i++) {
//
//     let courseItem = document.createElement('div')
//     courseItem.className = 'item'
//
//     let titleElement = document.createElement('h1')
//     titleElement.className = 'heading'
//     titleElement.textContent = coursesAndDurationArray[i].title
//
//     let durationElement = document.createElement('p')
//     durationElement.className = 'description'
//     durationElement.textContent = 'Duration: ' + coursesAndDurationArray[i].monthDuration + ' months';
//
//     courseItem.appendChild(titleElement)
//     courseItem.appendChild(durationElement)
//
//     document.body.appendChild(courseItem)
// }
//
//
// //
// // ==========================
// //
// // - є масив simpsons, котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
// // Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
// //     Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту
// //
//
// let simpsons = [
//     {
//         name: 'Bart',
//         surname: 'Simpson',
//         age: 10,
//         info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
//         photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
//     },
//     {
//         name: 'Homer',
//         surname: 'Simpson',
//         age: 40,
//         info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
//         photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
//     },
//     {
//         name: 'Marge',
//         surname: 'Simpson',
//         age: 38,
//         info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
//     },
//     {
//         name: 'Lisa',
//         surname: 'Simpson',
//         age: 9,
//         info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
//     },
//     {
//         name: 'Maggie',
//         surname: 'Simpson',
//         age: 1,
//         info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
//     },
// ];
// for (let i = 0; i < simpsons.length; i++) {
//     let memberBlock = document.createElement('div')
//     memberBlock.className = 'member'
//
//     let nameElement = document.createElement('h2')
//     nameElement.textContent = simpsons[i].name + ' ' + simpsons[i].surname
//
//     let ageElement = document.createElement('p')
//     ageElement.textContent = 'Age:' + simpsons[i].age
//
//     let infoElement = document.createElement('p')
//     infoElement.textContent = simpsons[i].info
//
//     let photoElement = document.createElement('img')
//     photoElement.src = simpsons[i].photo
//     photoElement.alt = simpsons[i].name
//
//     memberBlock.appendChild(nameElement)
//     memberBlock.appendChild(ageElement)
//     memberBlock.appendChild(infoElement)
//     memberBlock.appendChild(photoElement)
//
//     document.body.appendChild(memberBlock)
// }
// // =========================
// //     Цикл в циклі
// // - Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
// //
// // Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// // Приклад структири знаходиться у файлі example.png який лежить в папці з поточним фйлом
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
//
//
// function createPropertyBlock(propertyName, propertyValue) {
//     let propertyBlock = document.createElement('div');
//     propertyBlock.className = 'property-block';
//
//     let nameElement = document.createElement('span');
//     nameElement.className = 'property-name';
//     nameElement.textContent = propertyName + ': ';
//
//     let valueElement = document.createElement('span');
//     valueElement.textContent = propertyValue;
//
//     propertyBlock.appendChild(nameElement);
//     propertyBlock.appendChild(valueElement);
//
//     return propertyBlock;
// }
//
//
// for (let i = 0; i < coursesArray.length; i++) {
//     let courseBlock = document.createElement('div');
//     courseBlock.className = 'course-block';
//
//     for (let prop in coursesArray[i]) {
//         if (prop === 'modules') {
//                 let modulesBlock = document.createElement('div');
//             modulesBlock.className = 'property-block';
//
//             let modulesNameElement = document.createElement('span');
//             modulesNameElement.className = 'property-name';
//             modulesNameElement.textContent = 'modules: ';
//
//             let modulesList = document.createElement('ul');
//             modulesList.className = 'modules-list';
//
//             for (let j = 0; j < coursesArray[i].modules.length; j++) {
//                 let moduleItem = document.createElement('li');
//                 moduleItem.textContent = coursesArray[i].modules[j];
//                 modulesList.appendChild(moduleItem);
//             }
//
//             modulesBlock.appendChild(modulesNameElement);
//             modulesBlock.appendChild(modulesList);
//
//             courseBlock.appendChild(modulesBlock);
//         } else {
//                 let propertyBlock = createPropertyBlock(prop, coursesArray[i][prop]);
//             courseBlock.appendChild(propertyBlock);
//         }
//     }
//
//         document.body.appendChild(courseBlock);
// }
//
// // ------------------