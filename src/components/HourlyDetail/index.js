import classNames from "classnames/bind"
import styles from './HourlyDetail.module.scss'
import { BsCloudsFill, BsDropletHalf, BsFillSunFill } from "react-icons/bs";
import { FaTemperatureLow } from "react-icons/fa";
import { GiHeavyRain } from "react-icons/gi"
import { BiWind } from "react-icons/bi";

const cx = classNames.bind(styles)

const HourlyDetail = ({ props }) => {

    return (
        <div className={cx('Hourly-Detail')}>

            <div className={cx('Hourly-Table')}>
                <ul>
                    <li>
                        <FaTemperatureLow color='#1b4de4' />
                        <div>
                            <span>Feels Like</span>
                            <span className={cx('active')}>{props?.humidity} 35°</span>
                        </div>
                    </li>
                    <li>
                        <BiWind color='#1b4de4' />
                        <div>
                            <span>Wind</span>
                            <span className={cx('active')}>{props?.UV_LeveL} N 5 km/h</span>
                        </div>
                    </li>
                    <li>
                        <BsDropletHalf color='#1b4de4' />
                        <div>
                            <span>Humidity</span>
                            <span className={cx('active')}>{props?.rise}51%</span>
                        </div>
                    </li>
                    <li>
                        <BsFillSunFill color='#1b4de4' />
                        <div>
                            <span>UV Index</span>
                            <span className={cx('active')}>{props?.set} 8 of 11 </span>
                        </div>
                    </li>
                    <li>
                        <BsCloudsFill color='#1b4de4' />
                        <div>
                            <span>Cloud Cover</span>
                            <span className={cx('active')}>{props?.rise} 68%</span>
                        </div>
                    </li>
                    <li>
                        <GiHeavyRain color='#1b4de4' />
                        <div>
                            <span>Rain Amount</span>
                            <span className={cx('active')}>{props?.set} 0 cm </span>
                        </div>
                    </li>

                </ul>
            </div>
        </div>
    )
}

export default HourlyDetail