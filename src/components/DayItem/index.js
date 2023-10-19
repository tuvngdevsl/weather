import classNames from 'classnames/bind'
import { AiOutlineDown } from "react-icons/ai";
import { BsCloudsFill } from "react-icons/bs";
import { FaCloudShowersHeavy } from "react-icons/fa";
import { BiWind } from "react-icons/bi";
import { useState } from 'react';

import styles from './DayItem.module.scss'
import DayDetail from '../DayDetail';

const cx = classNames.bind(styles);

const DayItem = ({ props }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [isDisclosureOpen, setIsDisclosureOpen] = useState(false);
  
  const toggleDayDetail = () => {
    setIsOpen(!isOpen)
    setIsDisclosureOpen(!isDisclosureOpen);
  }

  const handleArrowUpClick = () => {
    setIsOpen(!isOpen);
    setIsDisclosureOpen(!isDisclosureOpen)
  }
  return (
    <>
      {isDisclosureOpen && (
        <div className={cx('Disclosure')} onClick={toggleDayDetail}>
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
            <AiOutlineDown color='#1b4de4' />
          </div>
        </div>
      )}
      <div>
        {
          isOpen && (
            <DayDetail onArrowUpClick={handleArrowUpClick} ></DayDetail>
          )
        }
      </div>
    </>
  )
}

export default DayItem