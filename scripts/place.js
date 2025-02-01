document.addEventListener('DOMContentLoaded', function () {
    // Function to calculate Wind Chill
    function calculateWindChill(temperature, windSpeed) {
      if (temperature <= 10 && windSpeed > 4.8) {
        return (
          13.12 +
          0.6215 * temperature -
          11.37 * Math.pow(windSpeed, 0.16) +
          0.3965 * temperature * Math.pow(windSpeed, 0.16)
        );
      } else {
        return "N/A";
      }
    }
  
    // Temperature and wind speed data
    const temperature = 10;
    const windSpeed = 5;
  
    // Calculate wind chill
    const windChill = calculateWindChill(temperature, windSpeed);
  
  
    const windChillElement = document.querySelector(".wind-chill");
    windChillElement.textContent =
      windChill !== "N/A" ? `${windChill.toFixed(1)}°C` : "N/A";
  
    // Update the current year and last modified date
    document.getElementById("currentyear").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;
  });
  