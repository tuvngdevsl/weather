import React, { useState } from 'react'
import { AiOutlineDown } from "react-icons/ai";
import { BsCloudsFill } from "react-icons/bs";
import { FaCloudShowersHeavy } from "react-icons/fa";
import { BiWind } from "react-icons/bi";
import styles from './styles.module.css';
import DisplayFull from './dissPlayFull'


const WeatherItem = (props) => {
  const [close, setClose] = useState(false);
  const UseCallback = (() => {
    setClose(!close);
  })
  const hasNightData = props.rainDay ? true : false;


  return (
    <div>
      <ExpendableColumn
        className={props.className}
        close={close}
        toggle={UseCallback}
        time={props.time}
        summary={props.summary}
        partly_Cloud={props.partly_Cloud}
        temperatureDay={props.temperatureDay}
        rainDay={props.rainDay}
        windDay={props.windDay}
        temperatureNight={props.temperatureNight}
      />
      {close && (
        <div className={hasNightData ? `${styles.Disfulltime}` : ""}>
          <DisplayFull
            status={"ngày"}
            time={props.time}
            humidity={props.humidityDay}
            UV_LeveL={props.UV_LeveLDay}
            temperature={props.temperatureDay}
            rain={props.rainDay}
            wind={props.windDay}
            summary={props.summaryDay}
            rise={props.sunRise}
            set={props.sunSet}
          />
          {hasNightData &&
            <DisplayFull
              status={"đêm"}
              time={props.time}
              humidity={props.humidityNight}
              UV_LeveL={props.UV_LeveLNight}
              temperature={props.temperatureNight}
              rain={props.rainNight}
              wind={props.windNight}
              summary={props.summaryNight}
              rise={props.moonRise}
              set={props.moonSet}
            />
          }

        </div>
      )}
    </div>
  )
}

export const ExpendableColumn = (props) => {
  let tempClassName = props.className;
  let dynamicClassName = props.close ? "" : tempClassName;
  return (
    <div className={`${styles.Disclosure} ${dynamicClassName}`} onClick={props.toggle}>
      <div className={styles.DaypartDetails}>
        <div className={styles.DetailsSummary}>
          <h3 style={{ visibility: `${props.close ? "hidden" : "visible"}`, width: "10%" }} >Tối nay</h3>
          <div className='temparature' style={{ visibility: `${props.close ? "hidden" : "visible"}`, width: "20%" }}>
            <span>{props.temperatureDay ? `${props.temperatureDay} °` : "--"}<span>/<span>{props.temperatureNight ? `${props.temperatureNight} °` : "--"}</span></span></span>
          </div>
          <div className={styles.WeatherItem} style={{ visibility: `${props.close ? "hidden" : "visible"}`, width: "35%" }}>
            <BsCloudsFill color='#e3e3e3' />
            <span>{props.summary}</span>
          </div>
          <div className={styles.WeatherItem} style={{ visibility: `${props.close ? "hidden" : "visible"}`, width: "15%" }}>
            <FaCloudShowersHeavy color='#1b4de4' />
            <span>{props.rainDay}%</span>
          </div>
          <div className={styles.WeatherItem} style={{ visibility: `${props.close ? "hidden" : "visible"}`, width: "20%" }}>
            <BiWind color='#1b4de4' />
            <span>{props.windDay}</span>
          </div>
        </div>
        <AiOutlineDown color='#1b4de4' style={{
          transform: `rotate(${!props.close ? 180 : 0}deg)`,
          transition: "all 0.25s",
          border: `${props.close ? "2px solid blue" : "none"}`,
          borderRadius: `${props.close ? "3px" : "0"}`
        }} />
      </div>
    </div>
  );
};


export default WeatherItem