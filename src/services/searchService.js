import * as request from '../utils/http';


const OPEN_API_KEY = "f9bbf6d611bb4b6059079db15cafd2fc"


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




