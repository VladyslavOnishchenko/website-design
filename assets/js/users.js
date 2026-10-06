const baseUrl = 'http://194.61.53.73/api';


async function request(finalUrl, method, body) {
    const response = await fetch(baseUrl + finalUrl, {
        method: method,
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify(body)
    })
    const data = await response.json();
    if (response.ok) {
        return data
    } else throw new Error(data.message || "Error");

}


async function createUser() {

    const form = document.getElementById("form");
    if (!form) return;

    form.addEventListener("submit", async event => {

        event.preventDefault();
        const currentForm = event.currentTarget;
        const name = currentForm.querySelector("input[name='name']").value;
        const email = currentForm.querySelector("input[name='email']").value;
        const password = currentForm.querySelector("input[name='password']").value;
        const message = document.getElementById("form__message");

        try {
            const data = await request('/user/create', 'POST', {name, email, password});
            console.log(data);
            message.textContent = "Created Successfully";
        } catch (error) {
            console.error(error);
            message.textContent = error.message;
        }
    })
}

createUser();


