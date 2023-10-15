// import axios from "axios";


// const request = axios.create({
//     baseURL: 'http://api.weatherapi.com/v1/'
// })

// export const get = async (path, options = {}) => { 
//     const response = await request.get(path, options);
//     return response;
// }

// export default request;

import axios from "axios";


const request = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5/'
})

export const get = async (path, options = {}) => { 
    const response = await request.get(path, options);
    return response;
}

export default request;