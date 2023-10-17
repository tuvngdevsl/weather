import axios from "axios";

// URL of Accuweather: "https://dataservice.accuweather.com/currentconditions/v1/{location_key}?apikey={api_key}"
// URL of OpenWeatherMap: 'https://api.openweathermap.org/data/2.5/'

const request = axios.create({
    baseURL: 'https://dataservice.accuweather.com'
})

export const get = async (path, options = {}) => { 
    const response = await request.get(path, options);
    return response;
}

export default request;