import * as request from '~/utils/http'

const OPEN_API_KEY = "aa758be0dbb67363e6c09ff2cbd74ca9"
export const currentWeather = async (latitude, longitude) => {
    try {
        const res = await request.get('/weather', {
            params: {
                lat: latitude,
                lon: longitude,
                appid: OPEN_API_KEY
            }
        })
        console.log(res.data);

        return res.data;
    } catch (error) {
        console.log(error)
    }
}

