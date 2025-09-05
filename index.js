const apikey= "3632adca6a515431671e39de1649d634";

const weatherDataEl= document.getElementById("weather-data");

const cityInputEl= document.getElementById("city-input");

const formEl= document.querySelector("form");

formEl.addEventListener("submit", (event) => {
    event.preventDefault();
    const cityValue= cityInputEl.value;
    getWeatherData(cityValue);
});

async function getWeatherData(cityValue){
    try{
        const response= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apikey}&units=metric`);
        if(!response.ok){
            throw new Error("Network response was not ok");
        }
        const data= await response.json();
        const temperature= Math.round(data.main.temp);
        const description= data.weather[0].description;
        const icon= data.weather[0].icon;
        const details= [
            `Feels like: ${Math.round(data.main.feels_like)} C`,
            `Humidity: ${data.main.humidity}%`,
            `Wind speed: ${data.wind.speed} m/s`
        ];
        weatherDataEl.querySelector(".icon").innerHTML= `<img src="data:image/jpeg;base64,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" alt="Weather Icon">`;
        weatherDataEl.querySelector(
            ".temperature").textContent= `${temperature} C`;
        weatherDataEl.querySelector(".description").textContent= description;
        weatherDataEl.querySelector(".details").innerHTML= details.map((detail) => `<div>${detail}</div>`).join("");
    }
    catch(error){
    
        weatherDataEl.querySelector(".icon").innerHTML= "";
        weatherDataEl.querySelector(
            ".temperature").textContent= "";
        weatherDataEl.querySelector(".description").textContent= "An error occurred, please try again later.";
        weatherDataEl.querySelector(".details").innerHTML= "";
    }
}