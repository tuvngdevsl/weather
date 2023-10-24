import classNames from 'classnames/bind'
import { WiMoonAltWaningGibbous1 } from 'react-icons/wi'
import DayInfoDetail from '../DayInfoDetail'

import styles from './DayCellItem.module.scss'
import { useState } from 'react'
const cx = classNames.bind(styles)

const DayCellItem = ({ data }) => {
    const [isActive, setIsActive] = useState(false)
    const handleDisplayDayDetail = () => {
        setIsActive(!isActive);
    }

    return (
        <div>
            <button className={cx('Day-Cell')} onClick={handleDisplayDayDetail}>
                <div>
                    <WiMoonAltWaningGibbous1 className={cx('Icon_Moon')} />
                </div>
                <span className={data?.active ? `${cx('Span-Active')}` : `${cx('Span-Active')}`} style={{ display: "block", width: "22px", height: "23px", fontWeight: "300", margin: "5px 0 auto" }}>
                    {data?.index}
                </span>

                <div className={cx('Icon_Cloud')} >
                <img src={`https://developer.accuweather.com/sites/default/files/${(data.src < 10) ? '0' + data.src : data.src}-s.png`} alt={data.summary} className={cx('img-weather')}></img>
                </div>

                <div className={cx('Bottom')}>
                    <div>
                        <span style={{ fontWeight: 500, fontSize: "25px" }}>
                            {data.day.temperature === 0 ? "--" : `${data.day.temperature}°`}
                       
                        </span>
                    </div>
                    <div >
                        <span style={{ fontWeight: 300, fontSize: "15px" }}>
                            {data.night.temperature === 0 ? "--" : `${data.night.temperature}°`}
                        </span>
                    </div>
                </div>
            </button>
            {
                isActive && (
                    <DayInfoDetail key={data?.index} data={data} />
                )
            }
        </div>
    )
}

export default DayCellItem