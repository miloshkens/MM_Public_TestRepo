
document.getElementById('weatherForm').addEventListener('submit', async function(event) {
  event.preventDefault();

  const lat = document.getElementById('latitude').value.trim();
  const lon = document.getElementById('longitude').value.trim();
  const apiKey = 'c4f86ece00bc8aa272652ac9065af12d'; // Replace with your OpenWeatherMap API key
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Invalid coordinates or API error');
    }

    const data = await response.json();
    const weatherInfo = document.getElementById('weatherInfo');
    weatherInfo.innerHTML = `
      <h2>Weather at (${lat}, ${lon})</h2>
      <p><strong>Location:</strong> ${data.name || 'Unknown'}</p>
      <p><strong>Temperature:</strong> ${data.main.temp} &#8451;</p>
      <p><strong>Weather:</strong> ${data.weather[0].description}</p>
      <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
      <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
    `;
  } catch (error) {
    document.getElementById('weatherInfo').innerHTML = `<p style="color:red;">${error.message}</p>`;
  }
});
