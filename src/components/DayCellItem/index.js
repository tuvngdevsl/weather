import classNames from 'classnames/bind'
import { BsCloudsFill } from 'react-icons/bs'
import { WiMoonAltWaningGibbous1 } from 'react-icons/wi'
import DayInfoDetail from '../DayInfoDetail'

import styles from './DayCellItem.module.scss'
const cx = classNames.bind(styles)

const DayCellItem = ({ props }) => {
    return (
        <div>
            <button className={cx('Day-Cell')}>
                <div>
                    <WiMoonAltWaningGibbous1 className={cx('Icon_Moon')} />
                </div>
                <span className={props?.active ? `${cx('Span-Active')}` : `${cx('Span-Active')}`} style={{ display: "block", width: "22px", height: "23px", fontWeight: "300", margin: "5px 0 auto" }}>
                    1
                    {/* {props?.day} */}
                </span>

                <div className={cx('Icon_Cloud')} >
                    <BsCloudsFill color='#039' />
                </div>

                <div className={cx('Bottom')}>
                    <div>
                        <span style={{ fontWeight: 500, fontSize: "25px" }}>
                            {/* {props?.temperatureDay == 0 ? "--" : `${props?.temperatureDay}°`} */}
                            26°
                        </span>
                    </div>
                    <div >
                        <span style={{ fontWeight: 300, fontSize: "15px" }}>
                            {/* {props?.temperatureNight == 0 ? "--" : `${props?.temperatureNight}°`} */}
                            16°
                        </span>
                    </div>
                </div>
            </button>

            <DayInfoDetail />
        </div>
    )
}

export default DayCellItem