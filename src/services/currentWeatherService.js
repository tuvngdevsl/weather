import * as request from '~/utils/http'

const OPEN_API_KEY = "5ESEhcfGJq75LmMhe0rMUdvWepZtRh9N"


export const currentWeather = async (locationKey) => {
    try {
        const res = await request.get('/locations/v1/cities/geoposition/search', {
            params: {
                q: locationKey,
                apikey: OPEN_API_KEY,
                language: "vi-vn"
            }
        })
        return res.data;
    } catch (error) {
        console.log(error)
    }
}



export const detailWeather = async (locationKey) => {
    try {
        const res = await request.get(`/currentconditions/v1/${locationKey}`, {
            params: {
                apikey: OPEN_API_KEY,
                language: "vi-vn",
                details: true,
            }
        })
        return res.data
    } catch (error) {
        console.log(error);
    }
}
export const DailyForecasts = async (locationKey) => {
    try {
        const res = await request.get(`/forecasts/v1/daily/1day/${locationKey}`, {
            params: {
                apikey: OPEN_API_KEY,
                language: 'vi-vn',
                details: true
            }
        })
        return res.data;
    } catch (error) {
        console.log(error);
    }
}
//1 Day of Daily Forecasts

