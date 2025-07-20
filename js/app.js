const apiKey = 'eb960e133bc6aacc0974d2e003743972';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`)

    var data = await response.json();

    document.querySelector('.temp').textContent = Math.round(data.main.temp) + '°C';
    document.querySelector('.city').textContent = data.name;
    document.querySelector('.wind').textContent = data.wind.speed + ' km/h';
    document.querySelector('.humidity').textContent = data.main.humidity + '%';
    
}

searchBtn.addEventListener('click', () => {
    checkWeather(searchBox.value);
})


