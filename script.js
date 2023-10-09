const apiKey = '4b9b52090d23164fd44e153355922a7c';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?=&units=metric&q=kano';

const searchBtn = document.querySelector('.searchBtn');
searchBtn.addEventListener('click', getWeather);

async function getWeather(){
    const response = await fetch(apiUrl + `&appid=${apiKey}`);
    let data = await response.json();
    
}
