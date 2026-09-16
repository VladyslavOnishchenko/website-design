import {fetchData, getDayText} from './api.js';

function parseWeatherApi(data){
    const region = data.location.region;
    const country = data.location.country;
    const localtime = data.location.localtime;
    const conditionText = data.current.condition.text;
    const icon = data.current.condition.icon;

    return {
        region: region,
        country: country,
        localtime: localtime,
        conditionText: conditionText,
        icon: icon,
    }
}


function renderWeatherApi(weather){
    const regionEl = document.getElementById('weather-region');
    const countryEl = document.getElementById('weather-country');
    const localtimeEl = document.getElementById('weather-localtime');
    const conditionTextEl = document.getElementById('weather-condition-text');
    const iconEl = document.getElementById('weather-icon');

    regionEl.textContent = `${weather.region}`;
    countryEl.textContent = `${weather.country}`;
    localtimeEl.textContent = `${weather.localtime}`;
    conditionTextEl.textContent = `${weather.conditionText}`;
    iconEl.alt = weather.conditionText;
    iconEl.src = `https:${weather.icon}`;
}


export async function initWeatherApi(){
    try{
        const data = await fetchData("https://api.weatherapi.com/v1/current.json?key=e69755b14bce449db1f74829261609&q=Kosice");
        const weather = parseWeatherApi(data);
        renderWeatherApi(weather);
        console.log(data);
    }catch(error){
        console.error(error);
    }
}