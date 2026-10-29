import {fetchData} from './users-fetch.js';

const protocol = 'http://'
const host = "194.61.53.73";
const urlBase = `${protocol}${host}/api`;
const urlMethod = "/users";
const url = urlBase + urlMethod;

async function getUsers(method = 'GET', body = null) {
    try {
        const options = {
            method: method,
            headers: {
                'Content-Type': 'application/json'
            },
        }
        if (method === 'POST') {
            options.body = JSON.stringify(body);
        }

        const users = await fetchData(url, options);
        if (!users.ok) {
            throw new Error(`${method} ${urlMethod} ${url} not found`);
        }
        if (!users?.users?.data.length) {
            return [];
        }

        return users.users.data;

    } catch (err) {
        console.error(err);
    }

}


function renderUsers(data = []) {
    const users = document.getElementById("users__list");

    if (!data.length) return;
    data.forEach(({avatar, email, id, name, status}) => {

        const user = document.createElement("div");
        user.classList.add("user");
        user.id = id;
        user.innerHTML = `
        <div class="user">
        <div class="avatar">
        <img src="${protocol}${host}/storage/${avatar.path}" alt="${name}" />
</div>
<div class="email">${email}</div>
<div class="id">${id}</div>
<div class="name">${name}</div>
<div class="status">${status}</div>
</div>`;
        users.appendChild(user)
    })


}

document.addEventListener("DOMContentLoaded", async () => {
    const users = await getUsers()
    console.log("users loaded", users);
    if (users.length) {
        renderUsers(users);
    }

})