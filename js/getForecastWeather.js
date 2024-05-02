

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
        console.log('Forecast data:', forecastData);

    })
    .catch(error => {
        console.error('Error getting forecast data:', error);
    });
