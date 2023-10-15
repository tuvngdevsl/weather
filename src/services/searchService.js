import * as request from '../utils/http';

const API_KEY = "530cdf0be09c4e32bcc163120231210";
const OPEN_API_KEY = "f9bbf6d611bb4b6059079db15cafd2fc"

//http://api.openweathermap.org/data/2.5/weather?q=[Địa điểm]&appid=[API Key]
// export const search = async (location) => {
//     try {
//         const res = await request.get('current.json', {
//             params: {
//                 key: API_KEY,
//                 q: location,
//             }
//         })
//         return res;
//     } catch (error) {
//         console.log(error);
//     }
// }

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


