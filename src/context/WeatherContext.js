import React, { useState, createContext, useContext, useEffect } from 'react'
import { currentWeather } from '~/services/currentWeatherService'

const WeatherContext = createContext();

const useWeather = () => {
    return useContext(WeatherContext);
}

const WeatherProvider = ({ children }) => {
    const [weatherData, setWeatherData] = useState();
    const [currentWeatherLocation, setCurrentWeatherLocation] = useState();


    useEffect(() => {
        const fetchApi = () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(async (position) => {
                    const { latitude, longitude } = position.coords;
                    const result = await currentWeather(latitude, longitude)
                    setCurrentWeatherLocation(result);
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
        <WeatherContext.Provider value={{ weatherData, updateWeatherData, currentWeatherLocation }}>
            {children}
        </WeatherContext.Provider>
    )
}

export { useWeather, WeatherProvider };