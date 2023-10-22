import classNames from "classnames/bind"
import styles from './HourlyDetail.module.scss'
import { BsCloudsFill, BsDropletHalf, BsFillSunFill } from "react-icons/bs";
import { FaTemperatureLow } from "react-icons/fa";
import { GiHeavyRain } from "react-icons/gi"
import { BiWind } from "react-icons/bi";

const cx = classNames.bind(styles)

const HourlyDetail = ({ data }) => {
    const changeTemperature = Math.floor((data.Temperature.Value - 32) * 5 / 9)
    return (
        <>
            {data && (
                <div>
                    <div className={cx('Hourly-Detail')}>

                        <div className={cx('Hourly-Table')}>
                            <ul>
                                <li>
                                    <FaTemperatureLow color='#1b4de4' />
                                    <div>
                                        <span>Feels Like</span>
                                        <span className={cx('active')}>{data.Temperature ? `${changeTemperature} °` : "--"}</span>
                                    </div>
                                </li>
                                <li>
                                    <BiWind color='#1b4de4' />
                                    <div>
                                        <span>Wind</span>
                                        <span className={cx('active')}>{data.Wind.Speed.Value} {data.Wind.Speed.Unit}</span>
                                    </div>
                                </li>
                                <li>
                                    <BsDropletHalf color='#1b4de4' />
                                    <div>
                                        <span>Humidity</span>
                                        <span className={cx('active')}>{data.RelativeHumidity}%</span>
                                    </div>
                                </li>
                                <li>
                                    <BsFillSunFill color='#1b4de4' />
                                    <div>
                                        <span>UV Index</span>
                                        <span className={cx('active')}>{data.UVIndex} / 11</span>
                                    </div>
                                </li>
                                <li>
                                    <BsCloudsFill color='#1b4de4' />
                                    <div>
                                        <span>Cloud Cover</span>
                                        <span className={cx('active')}>{data.CloudCover}%</span>
                                    </div>
                                </li>
                                <li>
                                    <GiHeavyRain color='#1b4de4' />
                                    <div>
                                        <span>Rain Amount</span>
                                        <span className={cx('active')}>{data.RainProbability} cm </span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </>

    )
}

export default HourlyDetail