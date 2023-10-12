import axios from "axios";


const request = axios.create({
    baseURL: 'http://api.weatherapi.com/v1/'
})

export const get = async (path) => { 
    const response = await request.get(path);
    return response.data;
}

export default request;