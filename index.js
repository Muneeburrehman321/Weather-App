const apiKey="92bbe648e58b2de0a032c974217226dc";
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox=document.querySelector(".search-bar input")
const searchBtn=document.querySelector(".search-bar button")
const weatherIcon = document.querySelector(".weather-icon");

async function checkweather(city){
    const response = await fetch (apiUrl + city + `&appid=${apiKey}`);
    
    if (response.status == 404){
        document.querySelector(".error").style.display = "block"
        document.querySelector(".weather").style.display = "none"
    }else var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp)  +"°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed +"km/h";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src="img/cloudy.svg"

    }else if (data.weather[0].main == "Clear"){
        weatherIcon.src = "img/day.svg"
    }else if (data.weather[0].main == "Rain"){
        weatherIcon.src = "img/rainy-1.svg"

    }else if (data.weather[0].main == "Drizzle"){
        weatherIcon.src = "img/drizzle.png"
    }else if (data.weather[0].main == "Mist"){
        weatherIcon.src = "img/mist.png"
    }
    document.querySelector(".weather").style.display = "block"
    document.querySelector(".error").style.display = "none"

    
}

searchBtn.addEventListener("click", () =>{
    checkweather(searchBox.value);
})

