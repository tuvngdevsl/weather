import React, { useState, createContext, useContext, useEffect } from 'react';
import { TodayAirPollution } from '~/services/TodayAirQuality'; 

const AirPollution = createContext();

const useAirQuality = () => {
    return useContext(AirPollution);
}

const AirProvider = ({ children }) => {
    const [airData, setAirData] = useState();

    useEffect(() => {
        const fetchAirData = async (latitude, longitude) => {
            try {
                const airPollutionData = await TodayAirPollution(latitude, longitude);
                setAirData(airPollutionData);
            } catch (error) {
                console.error('Error fetching air pollution data:', error);
            }
        }

        const latitude = 51.51;
        const longitude = -0.13;

        fetchAirData(latitude, longitude);
    }, [])


    return (
        <AirPollution.Provider value={{ airData }}>
            {children}
        </AirPollution.Provider>
    )
}

export { useAirQuality, AirProvider };
