const temperatureInput = document.getElementById("temperature");
const unitSelect = document.getElementById("unit");
const convertButton = document.getElementById("convert-btn");

const celsiusResult = document.getElementById("celsius-result");
const fahrenheitResult = document.getElementById("fahrenheit-result");
const kelvinResult = document.getElementById("kelvin-result");

const errorMessage = document.getElementById("error-message");

convertButton.addEventListener("click", function () {

    const temperature = Number(temperatureInput.value);
    const unit = unitSelect.value;

    errorMessage.textContent = "";

    if (temperatureInput.value.trim() === "") {
        showError("Please enter a temperature value.");
        return;
    }

    if (!Number.isFinite(temperature)) {
        showError("Please enter a valid number.");
        return;
    }

    let celsius;
    let fahrenheit;
    let kelvin;

    if (unit === "celsius") {

        if (temperature < -273.15) {
            showError("Temperature cannot be below absolute zero.");
            return;
        }

        celsius = temperature;
        fahrenheit = (temperature * 9 / 5) + 32;
        kelvin = temperature + 273.15;

    } else if (unit === "fahrenheit") {

        if (temperature < -459.67) {
            showError("Temperature cannot be below absolute zero.");
            return;
        }

        fahrenheit = temperature;
        celsius = (temperature - 32) * 5 / 9;
        kelvin = celsius + 273.15;

    } else if (unit === "kelvin") {

        if (temperature < 0) {
            showError("Kelvin temperature cannot be below 0 K.");
            return;
        }

        kelvin = temperature;
        celsius = temperature - 273.15;
        fahrenheit = (temperature * 9 / 5) - 459.67;
    }

    celsiusResult.textContent = `${formatNumber(celsius)} °C`;
    fahrenheitResult.textContent = `${formatNumber(fahrenheit)} °F`;
    kelvinResult.textContent = `${formatNumber(kelvin)} K`;
});

function formatNumber(value) {
    return value.toFixed(2);
}

function showError(message) {
    errorMessage.textContent = message;

    celsiusResult.textContent = "-- °C";
    fahrenheitResult.textContent = "-- °F";
    kelvinResult.textContent = "-- K";
}