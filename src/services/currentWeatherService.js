import * as request from '~/utils/http'


const OPEN_API_KEY = "LsXDmLTcFLx4xR1xVcaSin17jRv1EQac"

// const OPEN_API_KEY = "TGNnfAceatTI3LI3kSDpaUetq1xvVUV2"



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
//1 Day of Daily Forecasts
export const dailyForecasts = async (locationKey) => {
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

//5 Day of Daily Forecasts
export const fiveDay = async (locationKey) => {
    try {
        const res = await request.get(`/forecasts/v1/daily/5day/${locationKey}`, {
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

// 12 Hours of Hourly Forecasts
export const get12HourlyForecasts = async (locationKey) => {
    try {
        const res = await request.get(`forecasts/v1/hourly/12hour/${locationKey}`, {
            params: {
                apikey: OPEN_API_KEY,
                language: 'vi-vn',
                details: true
            }       
        })
      
        return res.data
    } catch (error) {
        console.log(error);
    }
}

