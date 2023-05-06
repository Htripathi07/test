// API key for OpenWeatherMap
const api_key = '9ee56170c006525e1e00d91f8c418cb2';

// Function to get weather data for a city
function getWeather(city) {
  // API endpoint for weather data
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`;

  // Fetch weather data from API
  fetch(url)
    .then(response => response.json())
    .then(data => {
      // Get weather details
      const temp = data.main.temp;
      const minTemp = data.main.temp_min;
      const maxTemp = data.main.temp_max;
      const wind = data.wind.speed;
      const clouds = data.clouds.all;
      const sunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
      const sunset = new Date(data.sys.sunset * 1000).toLocaleTimeString();

      // Display weather details on webpage
      document.getElementById('city').textContent = city;
      document.getElementById('temp').textContent = `${temp}°C`;
      document.getElementById('minTemp').textContent = `${minTemp}°C`;
      document.getElementById('maxTemp').textContent = `${maxTemp}°C`;
      document.getElementById('wind').textContent = `${wind} m/s`;
      document.getElementById('clouds').textContent = `${clouds}%`;
      document.getElementById('sunrise').textContent = sunrise;
      document.getElementById('sunset').textContent = sunset;
    })
    .catch(error => {
      console.error(error);
      alert('Could not get weather data for the city. Please try again.');
    });
}

// Event listener for search button
document.getElementById('searchBtn').addEventListener('click', () => {
  const city = document.getElementById('searchInput').value.trim();
  if (city) {
    getWeather(city);
  } else {
    alert('Please enter a city name.');
  }
});
