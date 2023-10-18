import classNames from 'classnames/bind'
import { BsFillCloudMoonFill, BsCloudsFill } from 'react-icons/bs'

import styles from './DayCellItem.module.scss'
const cx = classNames.bind(styles)

const DayCellItem = ({ props }) => {
    return (
        <div>
            <button className={cx('Day-Cell')}>
                <div>
                    <svg set="astro" name="phase-17" theme="full" class={styles.IconMoon}
                        data-testid="Icon" width="1024" height="1024" viewBox="0 0 1024 1024">
                        <title>Moon Phase - Day 17</title>
                        <path
                            d="M515.73 978.714q155.039 0 265.856-135.06T892.404 517.86q0-190.202-110.818-325.528T515.73 57.006q-189.669 0-324.995 135.326T55.409 517.86q0 190.734 135.326 325.794t324.995 135.06zm.532-956.87q204.587 0 350.568 145.981t145.981 350.568q0 205.12-145.981 350.568t-350.568 145.448q-205.12 0-350.568-145.448T20.246 518.393q0-204.587 145.448-350.568T516.262 21.844z">
                        </path>
                    </svg>
                </div>
                <span className={props?.active ? `${styles.SpanActive}` : ""}
                    style={{ display: "block", width: "22px", height: "23px", fontWeight: "300", margin: "5px 0 auto" }}>

                    {props?.day}
                </span>

                <div className={styles.IconCloud} >
                    <BsCloudsFill color='#039' />

                </div>

                <div className={styles.Bottom}>
                    <div>
                        <span style={{ fontWeight: 500, fontSize: "25px" }}>{props?.temperatureDay == 0 ? "--" : `${props?.temperatureDay}°`}</span>

                    </div>
                    <div >
                        <span style={{ fontWeight: 300, fontSize: "15px" }}>{props?.temperatureNight == 0 ? "--" : `${props?.temperatureNight}°`}</span>
                    </div>
                </div>
            </button>
        </div>
    )
}

export default DayCellItem