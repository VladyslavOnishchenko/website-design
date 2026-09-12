async function getWeather() {
    try {
        const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=48.72&longitude=21.26&current=temperature_2m');

        const data = await response.json();

        console.log(data);

        const temp = data.current.temperature_2m;
        const unit = data.current_units.temperature_2m;

        return [temp, unit];
        // return data.current
    } catch (err) {
        console.log(err)
    }
}

getWeather();


async function renderTeam() {
    const card = document.getElementById('weather-temp');
    const [temp, unit] = await getWeather();
    card.textContent = temp && unit;
}
//должна быть одно функция которая инициализирует запрос на погоду (реквест)

//дальше фун-ция которая разбирает параметры (все максимально разбивать по функциям)

//делать функции независимыми

//