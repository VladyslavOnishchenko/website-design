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
            const response = await sendData(data);
            console.log(response.message);
        }catch(err) {
            console.error(err.message)
        }

    })
}

getData();


async function sendData(data) {
    try {
        const response = await fetch('http://194.61.53.73/api/v1/user/create', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data),
        })


        if (!response.ok) {
            let serverMessage = '';
            try {
                const errorData = await response.json();
                serverMessage = errorData.message;

            } catch {
                //
            }


            let message;

            if (response.status === 400) {
                message = 'Data with errors 🙄';
            } else if (response.status === 409 || response.status === 422) {
                message = 'It already exists 😰';
            } else if (response.status === 500) {
                message = 'The server has broken down 🙁';
            } else {
                message = 'Error 🤷‍♂️';
            }

            throw new Error(`${message} - ${response.status} : ${serverMessage}`);
        }


        return await response.json();

    } catch (e) {
        console.error(e);
        throw e;
    }
}