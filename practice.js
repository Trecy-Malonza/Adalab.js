const fetch = require('node-fetch'); // Assuming you're using Node.js

async function fetchWeatherData(cityName, apiKey) {
    
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP error status: ${response.status}`);
        const data = await response.json();
        return {
            temperature: data.main.temp,
            humidity: data.main.humidity,
            windSpeed: data.wind.speed
        };
    } catch (error) {
        console.error('Error fetching weather data:', error);
        return null;
    }
}


let weatherDataStore = {};

async function addCity(cityName, apiKey) {
    const weatherData = await fetchWeatherData(cityName, apiKey);
    if (weatherData) {
        weatherDataStore[cityName] = weatherData;
        console.log(`Added ${cityName} to the weather data store.`);
    } else {
        console.log('Failed to add city to the weather data store.');
    }
}
const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY'; // Replace with your actual API key
const cityName = 'London';

addCity(cityName, apiKey).then(() => {
    console.log('Weather data for', cityName, 'has been added.');
});




