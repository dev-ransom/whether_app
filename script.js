// select items using dom
const temperature = document.querySelector('.temp'),cityName = document.querySelector('.city-name'), humidity = document.querySelector('.humidity'), windSpeed = document.querySelector('.wind-speed');

const apiKey = '4b9b52090d23164fd44e153355922a7c';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?=&units=metric&q=jos';

const searchBtn = document.querySelector('.searchBtn');
searchBtn.addEventListener('click', getWeather);

async function getWeather(){
    const response = await fetch(apiUrl + `&appid=${apiKey}`);
    let data = await response.json();
    // update city name
    cityName.innerHTML = data.name;
    // round up number
    const round = Math.round(data.main.temp);
    temperature.innerHTML = round;
    console.log(data)
}
