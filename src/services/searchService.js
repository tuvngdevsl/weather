import * as request from '../utils/http';


// URL of Accuweather: "https://dataservice.accuweather.com/currentconditions/v1/{location_key}?apikey={api_key}"
// Search: https://dataservice.accuweather.com/locations/v1/cities/search?q=${query}&apikey=${apiKey}

// const OPEN_API_KEY = "aa758be0dbb67363e6c09ff2cbd74ca9"  OpenWeather
const ACCUWEATHER_API_KEY = '5ESEhcfGJq75LmMhe0rMUdvWepZtRh9N'



export const search = async (location) => {
    try {
        const res = await request.get('/locations/v1/cities/search', {
            params: {
                q: location,
                apikey: ACCUWEATHER_API_KEY,
                offset: 5,
            }
        })
        return res.data;
    } catch (error) {
        console.log(error);
    }
}




