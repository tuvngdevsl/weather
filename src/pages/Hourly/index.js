import classNames from 'classnames/bind'
import styles from './Hourly.module.scss'
import HourlyItem from '~/components/HourlyItem';
import { useWeather } from "~/context/WeatherContext";
import moment from 'moment';




const cx = classNames.bind(styles);

const Hourly = () => {
    const { weather12Hourly, currentWeatherLocation, detailData } = useWeather();;

    return (
        <>
            {
                currentWeatherLocation && weather12Hourly && detailData && (
                    <div className={cx('DaybreakLargeScreen')}>
                        <div className={cx('Header-Title')}>
                            <h2><strong>Hourly Weather</strong> <span className={cx('Sub-Title')}>- {currentWeatherLocation.LocalizedName}</span></h2>
                        </div>
                        <div className={cx('Sub-Header')}> Kể từ - {(detailData[0].LocalObservationDateTime).substring(11, 19)}</div>

                        <div>
                            <div className={cx('Day-Title')}>
                                <h2>
                                    {moment(weather12Hourly.DateTime).format('dd DD MM')}
                                </h2>
                            </div>
                            {
                                weather12Hourly && (
                                    weather12Hourly.map((data, index) => (
                                        <HourlyItem key={index} data={data} index={index} />
                                    ))
                                )
                            }

                        </div>
                    </div >
                )
            }
        </>


    )
}

export default Hourly