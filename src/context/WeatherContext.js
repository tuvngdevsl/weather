import React, { useState, createContext, useContext } from 'react'

const WeatherContext = createContext();

const useWeather = () => {
    return useContext(WeatherContext);
}

const WeatherProvider = ({ children }) => {
    const [weatherData, setWeatherData] = useState();


    const updateWeatherData = (data) => {
        setWeatherData(data);
    }

    return (
        <WeatherContext.Provider value={{ weatherData, updateWeatherData}}>
            {children}
        </WeatherContext.Provider>
    )
}

export { useWeather, WeatherProvider };