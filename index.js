const API_KEY = `6a509fda6fd836420fe15b2f5140b278`

const form = document.querySelector("form")
const search = document.querySelector("#search")
const weather = document.querySelector("#weather")

const getWeather = async(city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    const response = await fetch(url);
    const data = await response.json()
    return showWeather(data)
    console.log(data)
}

const showWeather = (data) => {

    weather.innerHTML = `
        <div>
            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="Image Not Found">
        </div>
        <div>
            <h2> ${data.main.temp} </h2>
            <h4> ${data.weather[0].main} </h4>
        </div>
    `
}


form.addEventListener(
    "submit",
    function(event){
        getWeather(search.value)
        event.preventDefault();
    }
)