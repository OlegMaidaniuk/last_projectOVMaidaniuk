
const usersContainer = document.getElementsByClassName('userContainer')[0];
let key = 'key';

fetch(`https://jsonplaceholder.typicode.com/users`)
  .then(users => {
  for (const user of users) {
    const userDiv = document.createElement('div');
    userDiv.innerText = `${user.id} -- ${user.name}`;
    userDiv.classList.add('userDiv');
    usersContainer.appendChild(userDiv);

    const userButton = document.createElement('button');
    userButton.innerText = 'Click';
    userButton.classList.add('userButton');
    userDiv.appendChild(userButton);

    userButton.onclick = (e) => {
      e.preventDefault();

      localStorage.setItem(key, JSON.stringify(user));
      location.href = `user-details.html`;
    }}})
