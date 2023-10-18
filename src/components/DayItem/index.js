import styles from './DayItem.module.scss'
import classNames from 'classnames/bind'
import { AiOutlineDown } from "react-icons/ai";
import { BsCloudsFill } from "react-icons/bs";
import { FaCloudShowersHeavy } from "react-icons/fa";
import { BiWind } from "react-icons/bi";
import DayDetail from '../DayDetail';
import { Fragment, useState } from 'react';

const cx = classNames.bind(styles);

const DayItem = ({ props }) => {
  const [isClose, setClose] = useState(true);
  const handleToggle = (event) => {
    console.log(event.target.parentNode);
    if (event.target.parentNode) {
      !isClose ? (
        setClose(true)
      ) : (
        setClose(false)
      );
    }
  }
  return (
    <>
      <div className={cx('Disclosure')} onClick={handleToggle}>
        <div className={cx('DaypartDetails')}>
          <div className={cx('DetailsSummary')}>
            <h5>Tối nay</h5>
            <div className={cx('temparature')}>
              <span className={cx('temperatureDay')}>
                {/* {props?.temperatureDay ? `${props?.temperatureDay} °` : "--"} */}
                25°
              </span> /
              <span>
                {/* {props?.temperatureNight ? `${props?.temperatureNight} °` : "--"} */}
                17°
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
                ĐĐN 20 km/giờ
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
            <DayDetail></DayDetail>
          ) : (
            <Fragment></Fragment>
          )
        }
      </div>
    </>
  )
}

export default DayItem