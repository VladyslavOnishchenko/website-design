import {getRequest} from "./api/api.js";


async function getUsers() {
    const data = await getRequest('/users');


    if (!data.ok && !data.users.data.length) return;

    return data.users.data;

}


async function renderUsers(users = []) {
    const usersOut = document.getElementById('users-items');

    if (!usersOut || !users.length) return;

    for (let i = 0; i < users.length; i++) {
        const userCard = document.createElement('div');
        userCard.classList.add('user-card-wrapper');
        const user = users[i];
        const userName = user.name;
        const userEmail = user.email;
        userCard.innerHTML = `
       <div class="user-card">
            <div class="user-card__name">${userName ?? ''}</div>
            <div class="user-card__email">${userEmail ?? 'notemail@com.ua'}</div>
        </div>
       `
        console.log(userCard);
        usersOut.appendChild(userCard);

    }
}


async function initUsersRender() {
    const users = await getUsers();

    return renderUsers(users);

}

document.addEventListener('DOMContentLoaded', initUsersRender);