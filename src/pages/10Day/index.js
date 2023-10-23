
import styles from './10Day.module.scss';
import classNames from "classnames/bind";
import DayItem from "~/components/DayItem";
import { useWeather } from '~/context/WeatherContext';

const cx = classNames.bind(styles)


const TenDay = () => {
  const { weather5Day } = useWeather();;
  return (
    <>
      {
        weather5Day && (
          <div className={cx('DaybreakLargeScreen')}>
            <div className={cx('Header-Title')}>
              <h1><strong>Thời tiết 10 ngày</strong> <span>- Web, Or</span></h1>
            </div>
            <div className={cx('Sub-Header')}> Kể từ 16:47 EAT</div>
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