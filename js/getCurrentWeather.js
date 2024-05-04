

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
        console.log('Weather data:', weatherData);
    })
    .catch(error => {
        console.error('Error getting weather data:', error);
    });





