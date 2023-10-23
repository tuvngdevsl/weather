import classNames from 'classnames/bind'
import { AiOutlineDown } from "react-icons/ai";
import { FaCloudShowersHeavy } from "react-icons/fa";
import { BiWind } from "react-icons/bi";
import { useState } from 'react';

import styles from './DayItem.module.scss'
import DayDetail from '../DayDetail';
import moment from 'moment';
import 'moment/locale/vi';  

const cx = classNames.bind(styles);

const DayItem = ({ data }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [isDisclosureOpen, setIsDisclosureOpen] = useState(false);
  const effectiveDate = data.Date;
  const date = moment(effectiveDate);
  const day = date.format('dd DD');

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
      {isDisclosureOpen && data && (
        <div className={cx('Disclosure')} onClick={toggleDayDetail}>
          <div className={cx('DaypartDetails')}>
            <div className={cx('DetailsSummary')}>
              <h5>{day}</h5>
              <div className={cx('temparature')}>
                <span className={cx('temperatureDay')}>
                  {data.Temperature.Maximum.Value ? `${Math.floor((data.Temperature.Maximum.Value - 32) * 5 / 9)} °` : "--"}
                </span> /
                <span>
                  {data.Temperature.Minimum.Value ? `${Math.floor((data.Temperature.Minimum.Value - 32) * 5 / 9)} °` : "--"}
                </span>
              </div>
              <div className={cx('WeatherItem')} >
              <img src={`https://developer.accuweather.com/sites/default/files/${data.Day.Icon < 10 ? '0' + data.Day.Icon : data.Day.Icon}-s.png`} alt={data.Day.LongPhrase} />
                <span>
                  {data.Night.IconPhrase}
                </span>
              </div>
              <div className={cx('WeatherItem')} >
                <FaCloudShowersHeavy color='#1b4de4' />
                <span>
                  {data.Day.Rain.Value} %
                </span>
              </div>
              <div className={cx('WeatherItem')} >
                <BiWind color='#1b4de4' />
                <span>
                  {data.Day.Wind.Speed.Value}
                  {data.Day.Wind.Speed.Unit}
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
            <DayDetail onArrowUpClick={handleArrowUpClick} data={data}></DayDetail>
          )
        }
      </div>
    </>
  )
}

export default DayItem