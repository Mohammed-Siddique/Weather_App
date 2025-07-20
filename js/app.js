const apiKey = 'eb960e133bc6aacc0974d2e003743972';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');

const weatherIcon = document.querySelector('.weather img');

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`)

    // if the city name is not entered properly
    if (response.status == 404) {
        document.querySelector('.error').style.display = 'block';
        document.querySelector('.weather').style.display = 'none';
    } else {
    // if the city name is valid 
        var data = await response.json();

        document.querySelector('.temp').textContent = Math.round(data.main.temp) + '°C';
        document.querySelector('.city').textContent = data.name;
        document.querySelector('.wind').textContent = data.wind.speed + ' km/h';
        document.querySelector('.humidity').textContent = data.main.humidity + '%';

        if (data.weather[0].main == 'Clouds'){
            weatherIcon.src = 'images/clear.png';
        } else if (data.weather[0].main == 'Clear'){
            weatherIcon.src = 'images/clear.png';
        } else if (data.weather[0].main == 'Rain'){
            weatherIcon.src = 'images/rain.png';
        } else if (data.weather[0].main == 'Drizzle'){
            weatherIcon.src = 'images/drizzle.png';
        } else if (data.weather[0].main == 'Mist'){
            weatherIcon.src = 'images/mist.png';
        }

        document.querySelector('.error').style.display = 'none';
        document.querySelector('.weather').style.display = 'block';
    
        }
    }

    

searchBtn.addEventListener('click', () => {
    checkWeather(searchBox.value);
})


