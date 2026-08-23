
async function getData() {
    const form = document.getElementById('contact-us-form');

    if (!form) return;
    form.addEventListener('submit', async(e) => {
        e.preventDefault();

        const formData = new FormData(form);
        const email = formData.get('email');
        const name = formData.get('name');
        const data = {email: email, name: name};

        if (!email || !name) {
            console.log('Заполните все поля 😡');
            return;
        }

        const response = await sendData(data);
        console.log(response);

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
            try{
                const errorData = await response.json();
                console.log(errorData);
            }catch{}


            let message;

            if (response.status === 400){
                message = 'Кривые данные 🙄';
            } else if (response.status === 409){
                message = 'Уже существует 😰';
            } else if (response.status === 500){
                message = 'Сервер сломался 🙁';
            } else {
                message = 'Error 🤷‍♂️';
            }

            throw new Error (`${message} - ${response.status}`);
        }


        return response.json();

    } catch (e) {
        console.error(e);
    }
}