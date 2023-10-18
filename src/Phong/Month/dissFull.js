import React, { useState } from 'react'
import styles from './styles.module.css';
import Day from './day';
import { WeatherData } from '../Tenday/WeatherData'
import DisplayFull from '../dissPlayFull';


const DisFull = (props) => {
    const { data } = props
    let fixIndex = 6
    if(props.indexCurrent <= 6) fixIndex = 6;
    else if(props.indexCurrent > 6 && props.indexCurrent <= 13 ) fixIndex = 13; 
    else if(props.indexCurrent > 13 && props.indexCurrent <= 20 ) fixIndex = 20; 
    else if(props.indexCurrent > 20 && props.indexCurrent <= 27 ) fixIndex = 27; 
    else fixIndex = 33;

    return (
        <div className={styles.DisFull}>

            
            {data.map((item, index) => (
                <>
                    <Day
                        onClick={() => props.onClick(index, item)}
                        active={item.active}
                        day={index + 1}
                       
                        temperatureDay={item.day.temperature}
                        temperatureNight={item.night.temperature}
                    />
                    <div key={index}>

                        {props.checkActive && index === fixIndex && (
                            <div className={styles.DisFullCustom}>
                                <div className={styles.DisFullButton}><button onClick={(() => props.setCheckActive(index))}> X</button></div>
                                <div className={props.item.night.temperature ? `${styles.Disfulltime}` : ""}>
                                    {console.log(item)}
                                    <DisplayFull
                                        status={"ngày"}
                                        time={props.item.time}
                                        humidity={props.item.day.humidity}
                                        UV_LeveL={props.item.day.UV_LeveL}
                                        temperature={props.item.day.temperature}
                                        rain={props.item.day.rain}
                                        wind={props.item.day.wind}
                                        summary={props.item.day.summary}
                                        rise={props.item.day.sunRise}
                                        set={props.item.day.sunSet}
                                    />
                                    {props.item.night.temperature &&
                                        <DisplayFull
                                            status={"đêm"}
                                            time={props.item.time}
                                            humidity={props.item.night.humidity}
                                            UV_LeveL={props.item.night.UV_LeveL}
                                            temperature={props.item.night.temperature}
                                            rain={item.night.rain}
                                            wind={item.night.wind}
                                            summary={item.night.summary}
                                            rise={item.night.moonRise}
                                            set={item.night.moonSet}
                                        />
                                    }

                                </div>
                            </div>
                        )}




                    </div>
                </>

            ))}

        </div>

    )
}

export default DisFull