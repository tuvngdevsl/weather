import { AiOutlineUp } from "react-icons/ai";
import { BsCloudsFill } from "react-icons/bs";
import { FaCloudShowersHeavy } from "react-icons/fa";
import { BiWind } from "react-icons/bi";
import classNames from "classnames/bind";
import { useState } from 'react';

import styles from './HourlyItem.module.scss'
import HourlyDetail from "~/components/HourlyDetail";

const cx = classNames.bind(styles);




const HourlyItem = ({ props }) => {
    const [isOpen, setIsOpen] = useState(true);

    const handleToggle = () => {
        setIsOpen(prevIsOpen => !prevIsOpen);
    }

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
                    <AiOutlineUp color='#1b4de4' className={cx(`${isOpen}`)} />
                </div>
            </div>
            <div>
                {isOpen && (<HourlyDetail></HourlyDetail>)}
            </div>
        </>
    )
}

export default HourlyItem