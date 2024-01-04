// зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
//     вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів) отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   ХХХ - айді користувача)
async function getUsers() {
    try {
        const response = await fetch('http://jsonplaceholder.typicode.com/users');
        const users = await response.json();
        return users;
    } catch (error) {
        console.error('Error fetching users:', error);
    }
}
async function displayUsers() {
    const usersListElement = document.getElementById('usersList');
    const users = await getUsers();

    users.forEach(user => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<a href="user-details.html?id=${user.id}">${user.id} - ${user.name}</a>`;
        usersListElement.appendChild(listItem);
    });
}
displayUsers();