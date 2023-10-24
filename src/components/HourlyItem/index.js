import { AiOutlineUp } from "react-icons/ai";
import { BsCloudsFill } from "react-icons/bs";
import { BiWind } from "react-icons/bi";
import classNames from "classnames/bind";
import { useState } from 'react';
import styles from './HourlyItem.module.scss'
import HourlyDetail from "~/components/HourlyDetail";
import { GiHeavyRain } from "react-icons/gi";


const cx = classNames.bind(styles);




const HourlyItem = ({ data }) => {
    const [isOpen, setIsOpen] = useState(false);
    const date_string = data?.DateTime;
    var datetime_obj = new Date(date_string);
    var formatted_datetime = datetime_obj.getUTCHours();

    const changeTemperature = Math.floor((data.Temperature.Value - 32) * 5 / 9)

  
    console.log(data);
    const handleToggle = () => {
        setIsOpen(prevIsOpen => !prevIsOpen);
    }

    return (
        <>
            {
                data && (
                    <div>
                        <div className={cx('Disclosure')} onClick={handleToggle}>
                            <div className={cx('DaypartDetails')}>
                                <div className={cx('DetailsSummary')}>
                                    <h5>{formatted_datetime}:00</h5>
                                    <div className={cx('temparature')}>
                                        <span className={cx('temperatureDay')}>
                                            {data.Temperature ? `${changeTemperature} °` : "--"}
                                        </span>
                                    </div>
                                    <div className={cx('WeatherItem')} >
                                        <img src={`https://developer.accuweather.com/sites/default/files/${data.WeatherIcon < 10 ? '0' + data.WeatherIcon : data.WeatherIcon}-s.png`} alt={data.IconPhrase} />
                                        <span>
                                            {data.IconPhrase}
                                        </span>
                                    </div>
                                    <div className={cx('WeatherItem')} >
                                        <GiHeavyRain color='#1b4de4' />
                                        <span>
                                            {data.RainProbability} %
                                        </span>
                                    </div>
                                    <div className={cx('WeatherItem')} >
                                        <BiWind color='#1b4de4' />
                                        <span>
                                            {data.Wind.Speed.Value} {data.Wind.Speed.Unit}    
                                        </span>
                                    </div>
                                </div>
                                <AiOutlineUp color='#1b4de4' className={cx(`${isOpen}`)} />
                            </div>
                        </div>
                        <div>
                            {isOpen && (<HourlyDetail data={data}/>)}
                        </div>
                    </div>
                )
            }

        </>
    )
}

export default HourlyItem