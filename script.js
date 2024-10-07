const apiKey = process.env.IPT2_OPENMAP;
const apiUrl = `http://api.openweathermap.org/data/2.5/weather`;
const searchBtn = document.getElementById('search-btn');
const cityInput = document.getElementById('city-input');
const cityName = document.getElementById('city-name');
const weatherDesc = document.getElementById('weather-desc');
const temp = document.getElementById('temp');
const humidity = document.getElementById('humidity');
const windSpeed = document.getElementById('wind-speed');

searchBtn.addEventListener('click', async () => {
    const city = cityInput.value.trim();
    if (city) {
        try {
            const response = await fetch(`${apiUrl}?q=${city}&appid=${apiKey}`);
            const data = await response.json();
            const weatherData = data.weather[0];
            cityInput.value = '';
            cityInput.focus();
            cityName.textContent = data.name;
            weatherDesc.textContent = weatherData.description;
            temp.textContent = `Temperature: ${Math.round(data.main.temp - 273.15)}°C`;
            humidity.textContent = `Humidity: ${data.main.humidity}%`;
            windSpeed.textContent = `Wind Speed: ${data.wind.speed} m/s`;
        } catch (error) {
            console.error(error);
            alert('Error fetching weather data');
        }
    }
});