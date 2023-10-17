import React, { useState, createContext, useContext, useEffect } from 'react'
import { currentWeather, detailWeather } from '~/services/currentWeatherService'

const WeatherContext = createContext();

const useWeather = () => {
    return useContext(WeatherContext);
}

const WeatherProvider = ({ children }) => {
    const [weatherData, setWeatherData] = useState();
    const [currentWeatherLocation, setCurrentWeatherLocation] = useState();
    const [detailData, setDetailData] = useState();


    useEffect(() => {
        const fetchApi = () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(async (position) => {
                    const { latitude, longitude } = position.coords;
                    const locationKey = `${latitude},${longitude}`

                    const result = await currentWeather(locationKey);
                    const detail = await detailWeather(result?.Key);

                    setCurrentWeatherLocation(result);
                    setDetailData(detail);
                })
            } else {
                console.error('Geolocation is not supported by your browser.')
            }
        }

        fetchApi();
    }, [])


    const updateWeatherData = (data) => {
        setWeatherData(data);
    }


    return (
        <WeatherContext.Provider value={{ weatherData, updateWeatherData, currentWeatherLocation, detailData }}>
            {children}
        </WeatherContext.Provider>
    )
}

export { useWeather, WeatherProvider };