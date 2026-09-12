async function getWeather() {
    try {
        const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=48.72&longitude=21.26&current=temperature_2m');

        const data = await response.json();

        console.log(data);

        const temp = data.current.temperature_2m;
        const unit = data.current_units.temperature_2m;

        renderTeam(temp, unit);

        console.log(temp, unit);

        // return data.current
    }catch(err) {
        console.log(err)
    }
}
getWeather();


function renderTeam(weather, weather2) {
   const card = document.getElementById('weather-temp');
   card.textContent = weather && weather2;
}

//
// async function getCurrent() {
//     try{
//         const weather = await fetch('https://api.open-meteo.com/v1/forecast?latitude=48.72&longitude=21.26&current=temperature_2m');
//
//         const data = await weather.json();
//
//         return data.current;
//
//     }catch(err) {
//         console.log(err)
//     }
// }
//
//
// async function getCurrentUnits() {
//     try{
//         const weather = await fetch('https://api.open-meteo.com/v1/forecast?latitude=48.72&longitude=21.26&current=temperature_2m');
//
//         const data = await weather.json();
//
//         return data.current_units;
//     }catch(err) {
//         console.log(err)
//     }
// }