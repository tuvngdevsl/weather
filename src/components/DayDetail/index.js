import classNames from "classnames/bind"
import styles from './DayDetail.module.scss'
import { BsCloudsFill } from "react-icons/bs";
import { FaCloudShowersHeavy } from "react-icons/fa";
import { BiWind } from "react-icons/bi";

const cx = classNames.bind(styles)

const DayDetail = ({ props }) => {
    const temperature = "17"
    return (
        <div className={cx('Day-Detail')}>
            <div className={cx('Daily-Content')}>
                <h3><span>{props?.time} Th 3 17 |</span>  Đêm {props?.status}</h3>
                <div className={cx('ConditionsSummary')}>
                    <div className={cx('ConditionsSummary-title')}>
                        <span>{temperature ? `${temperature} °` : "--"}</span>
                        <BsCloudsFill color='#e3e3e3' className={cx('ConditionsSummary-icon')} />
                    </div>
                    <div className={cx('ConditionsSummary-title-right')}>
                        <div>
                            <FaCloudShowersHeavy color='#1b4de4' />
                            <span>{props?.rain} 44%</span>
                        </div>
                        <div>
                            <BiWind color='#1b4de4' />
                            <span>{props?.wind} ĐB 12km/giờ</span>
                        </div>
                    </div>
                </div>
                <p>{props?.summary}
                    Phần nào có mây, có thể có giông bão. Thấp 17 độ C. Gió ĐB ở tốc độ 10 đến 15 km/giờ. Khả năng có mưa 40%.
                </p>
            </div>
            <div className={cx('Daily-Table')}>
                <ul>
                    <li>
                        <BiWind color='#1b4de4' />
                        <div>
                            <span>Độ ẩm</span>
                            <span>{props?.humidity} 83%</span>
                        </div>
                    </li>
                    <li>
                        <BiWind color='#1b4de4' />
                        <div>
                            <span>Chỉ số uv</span>
                            <span>{props?.UV_LeveL} 0 / 11</span>
                        </div>
                    </li>
                    <li>
                        <BiWind color='#1b4de4' />
                        <div>
                            <span>Bình minh</span>
                            <span>{props?.rise} 8:07</span>
                        </div>
                    </li>
                    <li>
                        <BiWind color='#1b4de4' />
                        <div>
                            <span>Hoàng hôn</span>
                            <span>{props?.set} 20:16</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default DayDetail