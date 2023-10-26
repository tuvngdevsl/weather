import styles from "./Weekend.module.scss"
import classNames from "classnames/bind"
import DayItem from "~/components/DayItem"
import { useWeather } from "~/context/WeatherContext"

const cx = classNames.bind(styles)

const Weekend = () => {
  const { weather5Day, currentWeatherLocation, detailData } = useWeather();
  if (!weather5Day && !currentWeatherLocation && !detailData) return <div>Loading...</div>;
  return (
    <div className={cx('DaybreakLargeScreen')}>
      <div className={cx('Header-Title')}>
        <h1><strong>Thời tiết cuối tuần</strong> <span>- {currentWeatherLocation.LocalizedName}</span></h1>
      </div>
      <div className={cx('Sub-Header')}> Kể từ {(detailData[0].LocalObservationDateTime).substring(11, 19)}</div>
      <div>
        <h3 className={cx('WeekendForecast')}>Cuối tuần này</h3>
        <div>
          {weather5Day.DailyForecasts.map((day, index) => {
            const date = new Date(day.Date);
            if (date.getDay() === 6 || date.getDay() === 0) {
              return (
                <DayItem key={index} data={day}></DayItem>
              );
            }
            return null;
          })}
        </div>
      </div>
    </div>
  )
}

export default Weekend