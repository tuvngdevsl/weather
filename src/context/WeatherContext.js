import React, { useState, createContext, useContext, useEffect } from 'react'
import { dailyForecasts, currentWeather, detailWeather, get12HourlyForecasts, fiveDay } from '~/services/currentWeatherService'
import { search } from '~/services/searchService';


const WeatherContext = createContext();

const useWeather = () => {
    return useContext(WeatherContext);
}

const WeatherProvider = ({ children }) => {
    const [weatherData, setWeatherData] = useState();
    const [currentWeatherLocation, setCurrentWeatherLocation] = useState();
    const [detailData, setDetailData] = useState();
    const [weather1Day, setWeather1Day] = useState();
    const [weather12Hourly, setWeather12Hourly] = useState();
    const [weather5Day, setWeather5Day] = useState();
    const [searchLocation, setSearchLocation] = useState();


    useEffect(() => {
        const fetchApi = () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(async (position) => {
                    const { latitude, longitude } = position.coords;
                    const locationKey = `${latitude},${longitude}`

                    const result = await currentWeather(locationKey);
                    const detail = await detailWeather(result?.Key);
                    const weather1Day = await dailyForecasts(result?.Key);
                    const weather12Hourly = await get12HourlyForecasts(result?.Key);
                    const fiveDays = await fiveDay(result?.Key);

                    setCurrentWeatherLocation(result);
                    setDetailData(detail);
                    setWeather1Day(weather1Day);
                    setWeather12Hourly(weather12Hourly);
                    setWeather5Day(fiveDays);
                })
            } else {
                console.error('Geolocation is not supported by your browser.')
            }
        }

        fetchApi();
    }, [])

    useEffect(() => {
        const fetchApi = async () => {
            if (searchLocation) {
                const result = await search(searchLocation);
                const locationKey = result?.Key;

                const detail = await detailWeather(locationKey);
                const weather1Day = await dailyForecasts(locationKey);
                const weather12Hourly = await get12HourlyForecasts(locationKey);
                const fiveDays = await fiveDay(locationKey);

                setCurrentWeatherLocation(result);
                setDetailData(detail);
                setWeather1Day(weather1Day);
                setWeather12Hourly(weather12Hourly);
                setWeather5Day(fiveDays);
            }
        }

        fetchApi();
    }, [searchLocation])

    const updateWeatherData = (data) => {
        setWeatherData(data);
    }


    return (
        <WeatherContext.Provider value={{ weatherData, updateWeatherData, currentWeatherLocation, detailData, weather1Day, weather12Hourly, weather5Day, searchLocation, setSearchLocation }}>
            {children}
        </WeatherContext.Provider>
    )
}

export { useWeather, WeatherProvider };