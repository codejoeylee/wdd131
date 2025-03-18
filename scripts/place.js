function calculateWindChill(temp, windSpeed) {
    return (
        temp - (0.3 * windSpeed)
    ).toFixed(2);
}

const temperature = parseFloat(document.getElementById('temperature').textContent);
const windSpeed = parseFloat(document.getElementById('wind-speed').textContent);

const windChillElement = document.getElementById('wind-chill');
if (windSpeed > 4.8) {  
    windChillElement.textContent = `${calculateWindChill(temperature, windSpeed)} °C`;
} else {
    windChillElement.textContent = 'N/A';
}