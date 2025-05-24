const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

document.getElementById("lastModified").textContent =
  `Last Modification: ${document.lastModified}`;

const temperatureC = 17;     
const windSpeedKmh = 11;

function calculateWindChill(tempC, speedKmh) {
  return (
    13.12 +
    0.6215 * tempC -
    11.37 * Math.pow(speedKmh, 0.16) +
    0.3965 * tempC * Math.pow(speedKmh, 0.16)
  ).toFixed(1); 
}

function displayWindChill(temp, speed) {
  const weatherElement = document.getElementById("weather-windchill");

  if (temp <= 10 && speed > 4.8) {
    const chill = calculateWindChill(temp, speed);
    weatherElement.textContent = `${chill} °C`;
  } else {
    weatherElement.textContent = "N/A";
  }
}

displayWindChill(temperatureC, windSpeedKmh); 
