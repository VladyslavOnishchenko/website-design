
async function getUsers(){
    try{
        const response = await fetch('https://dummyjson.com/users');

        return await response.json();

    }catch(err){
        console.error("Error getting users");
    }
}

async function usersRender(){
    const users = await getUsers();
    console.log( users);

    if(!users.users.length) return;

    const card = document.getElementById("users");

    if(!card) return;

    users.forEach(({id, firstName, lastName, email, image}) => {
        card.innerHTML += `
        <div class="users__card">
        <div class="users__id">${id}</div>
        <div class="users__name">${firstName} ${lastName}</div>
        <div class="users__email">${email}</div>
        <div class="users__image">${image}</div>
</div>`
    })
}

document.addEventListener('DOMContentLoaded', () => {
    usersRender();
})
