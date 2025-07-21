# Weather_App
How To Make Weather App Using JavaScript

In this project, a Weather App is created for a website using HTML, CSS, and JavaScript.

The app retrieves current weather data from the free API provided by OpenWeatherMap and displays weather information such as temperature, weather conditions, humidity, and wind speed based on the specified city.

The weather information is displayed on the website using JavaScript.

A search box is included, allowing the user to enter a city name and receive the corresponding weather details.


Weather App API Details:

Website - https://home.openweathermap.org/users/sign_in

API Url - https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

API Formatted Url - https://api.openweathermap.org/data/2.5/weather?q=bangalore&appid=apikey

For getting the temperature in metric units - https://api.openweathermap.org/data/2.5/weather?q={city-name}&appid=apikey&units=metric

Modified api used in app.js -
api - https://api.openweathermap.org/data/2.5/weather?units=metric&q=bangalore
      '+'&appid='+'

===== https://api.openweathermap.org/data/2.5/weather?units=metric&q=bangalore&appid=apikey
