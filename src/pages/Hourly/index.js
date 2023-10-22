import classNames from 'classnames/bind'
import styles from './Hourly.module.scss'
import HourlyItem from '~/components/HourlyItem';
import { useWeather } from "~/context/WeatherContext";



const cx = classNames.bind(styles);

const Hourly = () => {
    const { weather12Hourly } = useWeather();;

    return (
        <div className={cx('DaybreakLargeScreen')}>
            <div className={cx('Header-Title')}>
                <h2><strong>Hourly Weather</strong> <span className={cx('Sub-Title')}>- Hanoi, Vietnam</span></h2>
            </div>
            <div className={cx('Sub-Header')}> As of 09:54 GMT+07:00</div>

            <div>
                <div className={cx('Day-Title')}>
                    <h2>Wednesday, 18 October</h2>
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

export default Hourly