import * as request from '~/utils/http'

const OPEN_API_KEY = "iqCilp9KNRB1G8wj8gwiaRLwq88bRWM9"


export const currentWeather = async (locationKey) => {
    try {
        const res = await request.get('/locations/v1/cities/geoposition/search', {
            params: {
                q: locationKey,
                apikey: OPEN_API_KEY
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
                apikey: OPEN_API_KEY
            }
        })
        return res.data
    } catch (error) {
        console.log(error);
    }
}

