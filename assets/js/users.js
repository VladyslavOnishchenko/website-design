async function getUsers() {
    try {
        const users = await fetch('http://194.61.53.73/api/v1/users');

        const data = await users.json();
        // console.log(data);

        return data.users.data;

    } catch (err) {
        console.log(err);
    }
}


async function usersRender() {

    const users = await getUsers();

    if (!users.length) return;

    const card = document.querySelector('.users');
    users.forEach(({id, email}) => {

        card.innerHTML += `
        <div class="users__card">
            <div class="users__id">${id}</div>
            <div class="users__email">${email}</div>
        </div>`;
    })

}


function searchUsers() {
    const input = document.getElementById('input-user-search');

    if (!input) return;

    input.addEventListener('input', (e) => {
        const search = e.target.value;

        console.log(search)
    });
}

document.addEventListener('DOMContentLoaded', () => {
    searchUsers();
});
