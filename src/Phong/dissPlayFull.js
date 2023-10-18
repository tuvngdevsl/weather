import React from 'react'
import { BsCloudsFill } from "react-icons/bs";
import { FaCloudShowersHeavy } from "react-icons/fa";
import { BiWind } from "react-icons/bi";
import styles from './styles.module.css';

 const DisplayFull = (props) => {
    return (
      <div className={styles.Disfull}>
        <div>
          <h3><span>{props.time} |</span>  {props.status}</h3>
          <div className={styles.ConditionsSummary}>
            <div className={styles.ConditionsSummary_title}>
              <span>{props.temperature ? `${props.temperature} °` : "--" }</span>
            </div>
            <div className={styles.ConditionsSummary_icon}>
              <BsCloudsFill color='#e3e3e3'/>
            </div>
            <div className={styles.DailyContent}>
              <div>
                < FaCloudShowersHeavy color='#1b4de4'/>
                <span>{props.rain}%</span>
              </div>
              <div>
                <BiWind color='#1b4de4'/>
                <span>{props.wind}</span> 
              </div>
            </div>
          </div>
          <p>{props.summary}</p>
        </div>
        
        <div className={styles.Disfull_Table}>
          <ul>
            <li>
              <BiWind color='#1b4de4'/>
              <div>
                <span>Độ ẩm</span>
                <span>{props.humidity}</span>
              </div>
            </li>
            <li>
              <BiWind color='#1b4de4'/>
              <div>
                <span>Chỉ số uv</span>
                <span>{props.UV_LeveL}</span>
              </div>
            </li>
            <li>
              <BiWind color='#1b4de4'/>
              <div>
                <span>Bình minh</span>
                <span>{props.rise}</span>
              </div>
            </li>
            <li>
              <BiWind color='#1b4de4'/>
              <div>
                <span>Hoàng hôn</span>
                <span>{props.set}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
};
export default DisplayFull;