import classNames from 'classnames/bind'
import styles from './DayInfoDetail.module.scss'
import { AiOutlineClose } from 'react-icons/ai'
import { BsCloudsFill, BsSunrise, BsSunset } from "react-icons/bs";
import { RiMoonCloudyFill, RiMoonLine } from 'react-icons/ri'
import { WiMoonAltWaxingCrescent1 } from 'react-icons/wi';
import { useState } from 'react';



const cx = classNames.bind(styles)


const DayInfoDetail = ({ props }) => {
    const [isActive, setIsActive] = useState(true);


    const handleActive = () => {
        setIsActive(!isActive);
    }
    return (
        <div>
            {
                isActive && (
                    <div className={cx('DayInfo-Card')}>
                        <div className={cx('Button-Close')}>
                            <button className={cx('Button-Close')} onClick={handleActive}>
                                <AiOutlineClose color='#1b4de4' />
                            </button>
                        </div>
                        {/* Ngày */}
                        <div className={cx('DayInfo-Content')}>
                            <div className={cx('Daily-Content')}>
                                <h3>
                                    <span>{props?.time} Th 2 02| </span>
                                    <span>{props?.status} Ngày </span>
                                </h3>
                                <div className={cx('Conditions-Summary')}>
                                    <div className={cx('temperature-value')}>
                                        <span >
                                            {/* {props?.temperature ? `${props?.temperature} °` : "--"} */}
                                            27°
                                        </span>
                                    </div>
                                    <div className={cx('ConditionsSummary-icon')}>
                                        <BsCloudsFill color='#e3e3e3' />
                                    </div>

                                </div>
                            </div>
                            <div className={cx('Daypart-Details')}>
                                <ul className={cx('Detail-Table')} >
                                    <li className={cx('DetailTable-item')}>
                                        <BsSunrise className={cx('icon')} />
                                        <div className={cx('DetailTable-Field')}>
                                            <span className={cx('Sun-Title')}> Bình minh </span>
                                            <span className={cx('Sun-Time')}> 6:14 </span>
                                        </div>
                                    </li>
                                    <li className={cx('DetailTable-item')}>
                                        <BsSunset className={cx('icon')} />
                                        <div className={cx('DetailTable-Field')}>
                                            <span className={cx('Sun-Title')}> Hoàng hôn </span>
                                            <span className={cx('Sun-Time')}> 18:14 </span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            {/* Đêm */}

                            <div className={cx('Daily-Content')}>
                                <h3>
                                    <span>{props?.time} Th 2 02| </span>
                                    <span>{props?.status} Đêm </span>
                                </h3>
                                <div className={cx('Conditions-Summary')}>
                                    <div className={cx('temperature-value')}>
                                        <span >
                                            {/* {props?.temperature ? `${props?.temperature} °` : "--"} */}
                                            27°
                                        </span>
                                    </div>
                                    <div className={cx('ConditionsSummary-icon')}>
                                        <BsCloudsFill color='#e3e3e3' />
                                    </div>

                                </div>
                            </div>

                            <div className={cx('Daypart-Details')}>
                                <ul className={cx('Detail-Table')} >
                                    <li className={cx('DetailTable-item')}>
                                        <RiMoonLine className={cx('icon')} />
                                        <div className={cx('DetailTable-Field')}>
                                            <span className={cx('Moon-Title')}> Mặt trăng mọc </span>
                                            <span className={cx('Moon-Time')}> 18:43 </span>
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
                                            <span className={cx('Moon-Time')}> 07:00 </span>
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