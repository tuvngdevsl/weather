import classNames from 'classnames/bind'
import styles from './DayInfoDetail.module.scss'
import { BsSunrise, BsSunset } from "react-icons/bs";
import { RiMoonCloudyFill, RiMoonLine } from 'react-icons/ri'
import { WiMoonAltWaxingCrescent1 } from 'react-icons/wi';




const cx = classNames.bind(styles)


const DayInfoDetail = ({ data }) => {
   
    return (
        <div>
            {
                data && (
                    <div className={cx('DayInfo-Card')}>
                        {/* Ngày */}
                        <div className={cx('DayInfo-Content')}>
                            <div className={cx('Daily-Content')}>
                                <h3>
                                    <span>{data?.time} Th 2 02| </span>
                                    <span> Ngày </span>
                                </h3>
                                <div className={cx('Conditions-Summary')}>
                                    <div className={cx('temperature-value')}>
                                        <span >
                                            {data?.day.temperature ? `${data?.day.temperature} °` : "--"}
                                        </span>
                                    </div>
                                    <div className={cx('ConditionsSummary-icon')}>
                                        <img src={`https://developer.accuweather.com/sites/default/files/${(data.src < 10) ? '0' + data.src : data.src}-s.png`} alt={data.summary} className={cx('img-weather')}></img>
                                    </div>

                                </div>
                            </div>
                            <div className={cx('Daypart-Details')}>
                                <ul className={cx('Detail-Table')} >
                                    <li className={cx('DetailTable-item')}>
                                        <BsSunrise className={cx('icon')} />
                                        <div className={cx('DetailTable-Field')}>
                                            <span className={cx('Sun-Title')}> Bình minh </span>
                                            <span className={cx('Sun-Time')}> {data.day.sun_Rise} </span>
                                        </div>
                                    </li>
                                    <li className={cx('DetailTable-item')}>
                                        <BsSunset className={cx('icon')} />
                                        <div className={cx('DetailTable-Field')}>
                                            <span className={cx('Sun-Title')}> Hoàng hôn </span>
                                            <span className={cx('Sun-Time')}> {data.day.sun_Set} </span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            {/* Đêm */}

                            <div className={cx('Daily-Content')}>
                                <h3>
                                    <span>{data?.time} Th 2 02| </span>
                                    <span>{data?.status} Đêm </span>
                                </h3>
                                <div className={cx('Conditions-Summary')}>
                                    <div className={cx('temperature-value')}>
                                        <span >
                                            {data?.night.temperature ? `${data?.night.temperature} °` : "--"}
                                        </span>
                                    </div>
                                    <div className={cx('ConditionsSummary-icon')}>
                                        <img src={`https://developer.accuweather.com/sites/default/files/${(data.src < 10) ? '0' + data.src : data.src}-s.png`} alt={data.summary} className={cx('img-weather')}></img>
                                    </div>

                                </div>
                            </div>

                            <div className={cx('Daypart-Details')}>
                                <ul className={cx('Detail-Table')} >
                                    <li className={cx('DetailTable-item')}>
                                        <RiMoonLine className={cx('icon')} />
                                        <div className={cx('DetailTable-Field')}>
                                            <span className={cx('Moon-Title')}> Mặt trăng mọc </span>
                                            <span className={cx('Moon-Time')}> {data.night.moon_Rise} </span>
                                            <div className={cx('moonPhraseWrapper')}>
                                                <WiMoonAltWaxingCrescent1 className={cx('ConditionsSummary-icon')} />
                                                <span className={cx('moonPhrase')}>Trăng lưỡi liềm già</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li className={cx('DetailTable-item')}>
                                        <RiMoonCloudyFill className={cx('icon')} />
                                        <div className={cx('DetailTable-Field')}>
                                            <span className={cx('Moon-Title')}> Mặt trăng lặn </span>
                                            <span className={cx('Moon-Time')}> {data.night.moon_Set}  </span>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                        </div>


                    </div>
                )
            }
        </div>
    )
}

export default DayInfoDetail