import React, { useState } from 'react'

import DisFull from './dissFull'
import { WeatherData } from '../Tenday/WeatherData';
import styles from '../Tenday/styles.module.css'
import MonthSelect from './monthSelect';
import YearSelect from './yearSelect';

const Month = () => {
  const [data, setData] = useState(WeatherData.map(x => ({ ...x, active: false })));
  const [checkActive, setCheckActive] = useState(false)
  const [indexCurrent, setIndexCurrent] = useState(-1)
  const [close, setClose] = useState(true)
  const [item, setItem] = useState({})
  const handleClick = (index, item) => {
    setItem(item)
    if (index !== indexCurrent && close) {
      setCheckActive(!checkActive)
      setClose(false)

    }

    setIndexCurrent(index)
    
    
    
    
    const dataCopy = WeatherData.map(x => ({ ...x, active: false }))
    dataCopy[index].active = true
    setData(dataCopy)
  }
  const handleSetCheckActive = (index) => {

    setCheckActive(!checkActive)
    setClose(!close)
    setIndexCurrent(index)
    const dataCopy = WeatherData.map(x => ({ ...x, active: false }))
    dataCopy[index].active = false
    setData(dataCopy)
    index = -1;
  }

  return (


    <div className={styles.DaybreakLargeScreen}>
      <div className={styles.DivHeader}>
        <h1><strong>Thời tiết trong thang</strong> <span>- Web, Or</span></h1>
      </div>
      <div className= {styles.DivHeader}>Kể từ 16:47 EAT</div>
     
      <div>
          <nav className={styles.NavCustom}>
              <button style={{ color: "blue" }}> {"<"} Tháng 9</button>
              <div className={styles.SelectDiv}>  
                <MonthSelect />
                <YearSelect/>
                <button>Xem</button>
              </div>
              <button style={{ color: "blue" }}>Tháng 11 {">"}</button>
          </nav>
      </div>
      <DayOfWeekHorizontal></DayOfWeekHorizontal>
      <DisFull
        data={data}
        onClick={handleClick}
        checkActive={checkActive}
        setCheckActive={handleSetCheckActive}
        indexCurrent={indexCurrent}
        item={item}
      />

    </div>

  )
}

export function DayOfWeekHorizontal() {
  const daysOfWeek = [
    'Chủ Nhật', 'T.2', 'T.3', 'T.4', 'T.5', 'T.6', 'T.7'
  ];

  return (
    <div style={{ display: 'flex', marginTop: "5px" }}>
      {daysOfWeek.map((day, index) => (
        <div key={index} style={{ flex: 1, textAlign: 'center' }}>
          <div>{day}</div>
        </div>
      ))}
    </div>
  );
}

export default Month