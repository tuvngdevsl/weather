import * as request from '../utils/http';


const OPEN_API_KEY = "aa758be0dbb67363e6c09ff2cbd74ca9"


export const search = async (location) => {
    try {
        const res = await request.get('weather', {
            params: {
                q: location,
                appid: OPEN_API_KEY,
            }
        })
        
        return res.data;
    } catch (error) {
        console.log(error);
    }
}




