import classNames from "classnames/bind"
import styles from './Monthly.module.scss'
import { useState } from "react";
import DayCellItem from "~/components/DayCellItem";
import { useWeather } from "~/context/WeatherContext";
import generateWeatherData from "~/mock/WeatherData";
import { CubeSpinner } from "react-spinners-kit"
import DayInfoDetail from "~/components/DayInfoDetail";
import DisplayMonthFull from "~/components/DisplayMonthFull";

const cx = classNames.bind(styles);

const MonthSelect = () => {

  const [selectedMonth, setSelectedMonth] = useState("");

  const handleSelectChange = (e) => {
    setSelectedMonth(e.target.value);
  };

  return (
    <div className={cx('Month-Option')}>
      <select value={selectedMonth} onChange={handleSelectChange}>
        <option value="">Tháng 10</option>
        <option value="1">Tháng 1</option>
        <option value="2">Tháng 2</option>
        <option value="3">Tháng 3</option>
        <option value="4">Tháng 4</option>
        <option value="5">Tháng 5</option>
        <option value="6">Tháng 6</option>
        <option value="7">Tháng 7</option>
        <option value="8">Tháng 8</option>
        <option value="9">Tháng 9</option>
        <option value="11">Tháng 11</option>
        <option value="12">Tháng 12</option>

      </select>
    </div>
  );
};

const YearSelect = () => {
  const [selectedYear, setSelectedYear] = useState("");

  const handleSelectChange = (e) => {
    setSelectedYear(e.target.value);
  };

  return (
    <div className={cx('Year-Option')}>
      <select value={selectedYear} style={{ width: "65px" }} onChange={handleSelectChange}>
        <option value="2023">2023</option>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
      </select>
    </div>
  );
};

const Monthly = () => {
  const weatherData = generateWeatherData();
  const [data, setData] = useState(weatherData);
  const [checkActive, setCheckActive] = useState(false)
  const [indexCurrent, setIndexCurrent] = useState(-1)
  const [close, setClose] = useState(true)
  const [item, setItem] = useState({})
  const { weather12Hourly, currentWeatherLocation, detailData } = useWeather();
  const dayOfWeek = [
    'Chủ Nhật', 'T.2', 'T.3', 'T.4', 'T.5', 'T.6', 'T.7'
  ];


  if (!currentWeatherLocation && !detailData && !weather12Hourly) {
    return (
      <div className={cx('loading')} >
        <CubeSpinner size={100} />
      </div>
    )
  }

  const handleClick = (index, item) => {
    setItem(item)
    if (index !== indexCurrent && close) {
      setCheckActive(!checkActive)
      setClose(false)
    }

    setIndexCurrent(index);
    const dataCopy = [ ...weatherData ]
    dataCopy[index].active = true
    setData(dataCopy)
  }

  const handleSetCheckActive = (index) => {
    setCheckActive(!checkActive)
    setClose(!close)
    setIndexCurrent(index)
    const dataCopy = [...weatherData ]
    dataCopy[index].active = false;
    setData(dataCopy)
    index = -1;
  }

  return (
    <>
      {
        weather12Hourly && currentWeatherLocation && detailData && (
          <div className={cx('DaybreakLargeScreen')}>
            <div className={cx('Header-Title')}>
              <h2><strong>Monthly Weather</strong> <span className={cx('Sub-Title')}>- {currentWeatherLocation.LocalizedName}</span></h2>
            </div>
            <div className={cx('Sub-Header')}> Kể từ {(detailData[0].LocalObservationDateTime).substring(11, 19)}</div>

            <div className={cx('Nav-Content')}>
              <nav className={cx('Nav-Header')}>
                <button className={cx('Button-Month')} > {"<"}Tháng 9</button>
                <div className={cx('Select-Month')}>
                  <MonthSelect />
                  <YearSelect />
                  <button>Xem</button>
                </div>
                <button className={cx('Button-Month')} >Tháng 11 {">"}</button>
              </nav>
            </div>

            <div className={cx('Card-Content')}>
              <dl className={cx('DayOfWeek')}>
                {
                  dayOfWeek.map((day, index) => (
                    <dt key={index}>{day}</dt>
                  ))
                }
              </dl>
              <div className={cx('Calender-Wrapper')}>
                <DisplayMonthFull
                  weatherData={data}
                  onClick={handleClick}
                  checkActive={checkActive}
                  setCheckActive={handleSetCheckActive}
                  indexCurrent={indexCurrent}
                  item={item} />
              </div>
            </div>

          </div >
        )
      }
    </>



  )
}

export default Monthly