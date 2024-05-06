function logout() {
    var removed = document.getElementById("logout-email");
    window.localStorage.removeItem("loginEmail");
    window.location = "/login/index.html"
}
function sharedReaction(){
    const reaction = document.getElementById('shareReaction');
    window.localStorage.getItem('loginEmail');
    window.location ="/reactions/index.html"
}

async function getWeather() {
    const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=phnom%20penh';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '8f6ebc8fa0msh4d1f202514a93f6p19cb64jsnb071d99b8a27',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);

        throw error;
    }
}

getWeather()
    .then(weatherData => {
        document.getElementById("current-weather").innerHTML +=`
        <p class="card-text">${weatherData.current.last_updated}</p>
        <img src="//cdn.weatherapi.com/weather/64x64/day/116.png" class="img">
        <h1 class="temp">${weatherData.current.temp_c}&deg;C</h1>
        <p class="cloudy">"${weatherData.current.condition.text}"</p>
        `
        document.getElementById("card-text").innerHTML +=`
        <p>Feels like<span style="margin-left: 38%;">${weatherData.current.feelslike_c}&deg;C</span> </p>
        <p>Humidity<span style="margin-left: 35%;">${weatherData.current.feelslike_f}%</span></p>
        <p>Wind(Kph) <span style="margin-left: 45%;">${weatherData.current.wind_kph}</span></p>
        <p>UV<span style="margin-left: 69%;">${weatherData.current.uv}</span></p>
        <div class="box"></div>
        <br>
        <p>Country <span style="margin-left: 25%;"></span>${weatherData.location.country}</p> 
        <p> Zone<span style="margin: 10%;">${weatherData.location.tz_id}</span></p>
        `
        

    })
    .catch(error => {
        console.error('Error getting weather data:', error);
    });
    async function getForecast() {
        const url = 'https://weatherapi-com.p.rapidapi.com/forecast.json?q=phnom%20penh&days=3';
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '8f6ebc8fa0msh4d1f202514a93f6p19cb64jsnb071d99b8a27',
                'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
            }
        };
    
        try {
            const response = await fetch(url, options);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching forecast data:', error);
    
            throw error;
        }
    }
    
    
    getForecast()
        .then(forecastData => {
            for(let i = 1; i <= 2; i++){
            if(i ===1){
            document.getElementById("forecast-weather").innerHTML +=`
            <p class="card-text">${forecastData.forecast.forecastday[i].date}</p>
            <img src="//cdn.weatherapi.com/weather/64x64/day/302.png" class="img">
            <h5>Average</h5>
            <h1 class="temp">${forecastData.forecast.forecastday[i].day.avgtemp_c}&deg;C</h1>
            <p class="cloudy">"${forecastData.forecast.forecastday[i].day.condition.text}"</p>
             `
            document.getElementById("condition-weather").innerHTML +=`
            <p>Max Temp<span style="margin-left: 35%;">${forecastData.forecast.forecastday[i].day.maxtemp_c}&deg;C</span> </p>
            <p>Average.Humidity<span style="margin-left: 20%;">${forecastData.forecast.forecastday[i].day.avgtemp_c}%</span></p>
            <p>Max Wind (Kph)<span style="margin-left: 27%;">${forecastData.forecast.forecastday[i].day.maxwind_kph}</span></p>
            <p>UV<span style="margin-left: 65%;">${forecastData.forecast.forecastday[i].day.uv}</span></p>
            <div class="box"></div>
            <br>
            <p>Country <span style="margin-left: 25%;"></span>${forecastData.location.country}</p> 
            <p> Zone<span style="margin: 10%;">${forecastData.location.tz_id}</span></p>
            `
            }
            else if(i ===2){
                document.getElementById("forecast1-weather").innerHTML +=`
            <p class="card-text">${forecastData.forecast.forecastday[i].date}</p>
            <img src="//cdn.weatherapi.com/weather/64x64/day/302.png" class="img">
            <h5>Average</h5>
            <h1 class="temp">${forecastData.forecast.forecastday[i].day.avgtemp_c}&deg;C</h1>
            <p class="cloudy">"${forecastData.forecast.forecastday[i].day.condition.text}"</p>
             `
            document.getElementById("condition1-weather").innerHTML +=`
            <p>Max Temp<span style="margin-left: 35%;">${forecastData.forecast.forecastday[i].day.maxtemp_c}&deg;C</span> </p>
            <p>Average.Humidity<span style="margin-left: 10%;">${forecastData.forecast.forecastday[i].day.avgtemp_c}%</span></p>
            <p>Max Wind (Kph)<span style="margin-left: 20%;">${forecastData.forecast.forecastday[i].day.maxwind_kph}</span></p>
            <p>UV<span style="margin-left: 65%;">${forecastData.forecast.forecastday[i].day.uv}</span></p>
            <div class="box"></div>
            <br>
            <p>Country <span style="margin-left: 25%;"></span>${forecastData.location.country}</p> 
            <p> Zone<span style="margin: 10%;">${forecastData.location.tz_id}</span></p>
            `

            }
        }
            })
            
    
        .catch(error => {
            console.error('Error getting forecast data:', error);
        });
