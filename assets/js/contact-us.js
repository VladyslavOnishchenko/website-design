const apiBase = 'http://194.61.53.73/api/v1/';

async function getData() {
    const form = document.getElementById('contact-us-form');

    if (!form) return;
    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = new FormData(form);
        const email = formData.get('email');
        const name = formData.get('name');
        const data = {email: email, name: name};

        if (!email || !name) {
            console.log('Please fill in all the fields 😡');
            return;
        }

        try {
            const response = await sendData('user/create', data);
            console.log(response.message);
        } catch (err) {
            console.error(err.message)
        }

    })
}

getData();


async function sendData(endpoint, data, method = 'POST') {
    try {
        const response = await fetch(`${apiBase}${endpoint}`, {
            method: method,
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data),
        })


        if (!response.ok) {
            let serverMessage = '';
            try {
                const errorData = await response.json();
                serverMessage = errorData.message;

            } catch {
                //There’s no need to display anything here
            }


            let message;

            switch (response.status) {
                case 400:
                    message = 'Data with errors 🙄';
                    break;
                case 409:
                case 422:
                    message = 'It already exists 😰';
                    break;
                case 500:
                    message = 'The server has broken down 🙁';
                    break;
                default:
                    message = 'Error 🤷‍♂️';
                    break;
            }

            throw new Error(`${message} - ${response.status} : ${serverMessage}`);
        }


        return await response.json();

    } catch (e) {
        console.error(e);
        throw e;
    }
}