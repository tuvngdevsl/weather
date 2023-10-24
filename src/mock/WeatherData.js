

const generateWeatherData = () => {
    const WeatherData = [];

    for (let i = 1; i <= 30; i++) {
        let randomNum;
        do {
            randomNum = Math.floor(Math.random() * 44) + 1;
        } while (randomNum === 27 || randomNum === 9 || randomNum === 28 || randomNum === 10);

        WeatherData.push({
            index: i,
            time: `Ngày ${i}`,
            src: randomNum,
            current_temperature: Math.floor(Math.random() * 35),
            summary: "Trời ít mây",
            partly_Cloud: "Nhiều mây",
            day: {
                temperature: Math.floor(Math.random() * 35),
                Record_High: "--",
                Average_High: `${Math.floor(Math.random() * 35)}°`,
                sun_Rise: "6:11",
                sun_Set: "18:13"
            },
            night: {
                temperature: Math.floor(Math.random() * 35),
                Record_High: "--",
                Average_High: `${Math.floor(Math.random() * 35)}°`,
                moon_Rise: "4:25",
                moon_Set: "16:47"
            }
        });
    }
    return WeatherData;
};

export default generateWeatherData;