const urlBase = "http://194.61.53.73/api"
const urlMethod = "/users"

async function getUsers() {
    try{
        const users = await fetch(`${urlBase}${urlMethod}`);
        console.log(users);
        return await users.json();
    }catch(err){
        console.error(err);
    }
}

getUsers()
function renderUsers(get) {
    const users = document.getElementById("users__list");


}