import classNames from 'classnames/bind'
import styles from './Hourly.module.scss'
import HourlyItem from '~/components/HourlyItem';


const cx = classNames.bind(styles);

const Hourly = () => {
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
                <HourlyItem />
            </div>
        </div >
    )
}

export default Hourly