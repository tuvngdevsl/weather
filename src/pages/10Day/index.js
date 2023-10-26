
import styles from './10Day.module.scss';
import classNames from "classnames/bind";
import DayItem from "~/components/DayItem";
import { useWeather } from '~/context/WeatherContext';
import { CubeSpinner } from "react-spinners-kit"

const cx = classNames.bind(styles)


const TenDay = () => {
  const { weather5Day, currentWeatherLocation, detailData } = useWeather();
  if (!weather5Day && !currentWeatherLocation && !detailData) {
    return (
      <div className={cx('loading')} >
       <CubeSpinner size={100} />
      </div>
    )
  }
  return (
    <>
      {
        weather5Day && currentWeatherLocation && detailData && (
          <div className={cx('DaybreakLargeScreen')}>
            <div className={cx('Header-Title')}>
              <h1><strong>Thời tiết 5 ngày</strong> <span>- {currentWeatherLocation.LocalizedName}</span></h1>
            </div>
            <div className={cx('Sub-Header')}> Kể từ {(detailData[0].LocalObservationDateTime).substring(11,19)}</div>
            {weather5Day.DailyForecasts.map((data, index) => (
              <DayItem data={data} key={index} />
            ))}
          </div >
        )
      }
    </>

  )
}

export default TenDay