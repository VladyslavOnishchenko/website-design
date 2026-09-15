const weatherCodes = {
    0: 'Clear sky',
    1: 'Mainly clear',
    2: 'Partly cloudy',
    3: 'Overcast',
    45: 'Fog',
    48: 'Depositing rime fog',
    51: 'Light drizzle',
    53: 'Moderate drizzle',
    55: 'Dense drizzle',
    56: 'Light freezing drizzle',
    57: 'Dense freezing drizzle',
    61: 'Slight rain',
    63: 'Moderate rain',
    65: 'Heavy rain',
    66: 'Light freezing rain',
    67: 'Heavy freezing rain',
    71: 'Slight snow fall',
    73: 'Moderate snow fall',
    75: 'Heavy snow fall',
    77: 'Snow grains',
    80: 'Slight rain showers',
    81: 'Moderate rain showers',
    82: 'Violent rain showers',
    85: 'Slight snow showers',
    86: 'Heavy snow showers',
    95: 'Thunderstorm',
    96: 'Thunderstorm with slight hail',
    99: 'Thunderstorm with heavy hail',
}


async function fetchData(url){
    const response = await fetch(url);
    const data = await response.json();
    return data;
}


function parseWeather(data){
    const temp = data.current.temperature_2m;
    const tempUnit = data.current_units.temperature_2m;
    const isDay = data.current.is_day;
    const rain = data.current.rain;
    const rainUnit = data.current_units.rain;
    const weatherCode = data.current.weather_code;
    const weatherCodeUnit = data.current_units.weather_code;
    return {
        temp: temp,
        tempUnit: tempUnit,
        isDay: isDay,
        rain: rain,
        rainUnit: rainUnit,
        weatherCode: weatherCode,
        weatherCodeUnit: weatherCodeUnit
    };
}


function getWeatherText(weatherCode){
    return weatherCodes[weatherCode] || 'Unknown';
}


function getDayText(isDay){
    return isDay === 1 ? "Day" : "Night";
}


function renderWeather(weather) {
    const tempEl = document.getElementById('weather-temp');
    const dayEl = document.getElementById('weather-is-day');
    const weatherCodeEl = document.getElementById('weather-weather-code');
    const rainEl = document.getElementById('weather-rain');

    tempEl.textContent = `${weather.temp} ${weather.tempUnit}`;
    dayEl.textContent = getDayText(weather.isDay);
    weatherCodeEl.textContent = getWeatherText(weather.weatherCode);
    rainEl.textContent = `${weather.rain} ${weather.rainUnit}`;
}


async function initWeather(){
    try{
        const data = await fetchData('https://api.open-meteo.com/v1/forecast?latitude=48.7144&longitude=21.258&current=temperature_2m,weather_code,rain,is_day');
        const weather = parseWeather(data);
        renderWeather(weather);
        console.log(data)
    }catch(err){
        console.error(err);
    }
}

initWeather();




//должна быть одно функция которая инициализирует запрос на погоду (реквест)

//дальше фун-ция которая разбирает параметры (все максимально разбивать по функциям)

//делать функции независимыми






