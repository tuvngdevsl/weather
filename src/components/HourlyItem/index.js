import { AiOutlineDown } from "react-icons/ai";
import { BsCloudsFill } from "react-icons/bs";
import { FaCloudShowersHeavy } from "react-icons/fa";
import { BiWind } from "react-icons/bi";
import classNames from "classnames/bind";
import { Fragment, useState } from 'react';

import styles from './HourlyItem.module.scss'
import HourlyDetail from "~/components/HourlyDetail";

const cx = classNames.bind(styles);

const handleToggle = () => {

}


const HourlyItem = ({ props }) => {
    const [isClose, setClose] = useState(false);
    return (
        <>
            <div className={cx('Disclosure')} onClick={handleToggle}>
                <div className={cx('DaypartDetails')}>
                    <div className={cx('DetailsSummary')}>
                        <h5>11:00</h5>
                        <div className={cx('temparature')}>
                            <span className={cx('temperatureDay')}>
                                {/* {props?.temperatureDay ? `${props?.temperatureDay} °` : "--"} */}
                                31°
                            </span>
                        </div>
                        <div className={cx('WeatherItem')} >
                            <BsCloudsFill color='#e3e3e3' className={cx("icon")} />
                            <span>
                                {/* {props?.summary} */}
                                Giông Bão Cô Lập
                            </span>
                        </div>
                        <div className={cx('WeatherItem')} >
                            <FaCloudShowersHeavy color='#1b4de4' />
                            <span>
                                {/* {props?.rainDay} */}
                                44%
                            </span>
                        </div>
                        <div className={cx('WeatherItem')} >
                            <BiWind color='#1b4de4' />
                            <span>
                                {/* {props?.windDay} */}
                                ĐĐN 20 km/h
                            </span>
                        </div>
                    </div>
                    <AiOutlineDown color='#1b4de4' style={{
                        transform: `rotate(${!props?.close ? 180 : 0}deg)`,
                        transition: "all 0.25s",
                        border: `${props?.close ? "2px solid blue" : "none"}`,
                        borderRadius: `${props?.close ? "3px" : "0"}`
                    }} />
                </div>
            </div>
            <div>
                {
                    !isClose ? (
                        <HourlyDetail></HourlyDetail>
                    ) : (
                        <Fragment></Fragment>
                    )
                }
            </div>
        </>
    )
}

export default HourlyItem