import * as request from '../utils/http';

export const search = async (key, location) => {
    try {
        const res = await request.get(`current.json?key=${key}&q=${location}`)
        return res;
    } catch (error) {
        console.log(error)
    }
}


