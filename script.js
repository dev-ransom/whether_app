// select items using dom
const temperature = document.querySelector('.temp'),cityName = document.querySelector('.city-name'), humidity = document.querySelector('.humidity'), windSpeed = document.querySelector('.wind-speed'), inputField = document.querySelector('.search input'),   Weather = document.querySelector('.weather'), weatherIcon = document.querySelector('.weather-icon'), errmsg = document.querySelector('.error');

const apiKey = '4b9b52090d23164fd44e153355922a7c';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?=&units=metric&q=';

const searchBtn = document.querySelector('.search .searchBtn');
searchBtn.addEventListener('click', getWeather);

async function getWeather(){
    const city = inputField.value.trim();
    if(city == ''){
        Weather.style.display = 'none'
        alert('Please enter a city name.');
    return;
    }

  
    const response = await fetch(apiUrl + city +  `&appid=${apiKey}`);
    if(!response.ok){
        errmsg.style.display = 'block';
        Weather.style.display = 'none'
        return;
    }else{
        let data = await response.json();
    // update city name
    cityName.innerHTML = data.name;
    // round up number and update temperature
    const round = Math.round(data.main.temp);
    temperature.innerHTML = round;
    // update humidity
    const humidityData = data.main.humidity;
    humidity.innerHTML = humidityData;
    // update wind speed
    const windspeedData =data.wind.speed;
    windSpeed.innerHTML = windspeedData;
//   update icons
    if(data.weather[0].main == 'Clouds'){
        weatherIcon.src = 'images/clouds.png'
    }else if(data.weather[0].main == 'Clear'){
        weatherIcon.src = 'images/clear.png'
   }
    else if(data.weather[0].main == 'Drizzle'){
        weatherIcon.src = 'images/drizzle.png'
   }
    else if(data.weather[0].main == 'Mist'){
        weatherIcon.src = 'images/mist.png'
   }
   else if(data.weather[0].main == 'Rain'){
        weatherIcon.src = 'images/rain.png'
   }
   errmsg.style.display = 'none'
   Weather.style.display = 'block'
    }
    
}
