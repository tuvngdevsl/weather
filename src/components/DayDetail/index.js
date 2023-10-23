import classNames from "classnames/bind"
import styles from './DayDetail.module.scss'
import { FaCloudShowersHeavy } from "react-icons/fa";
import { BiWind } from "react-icons/bi";
import { AiOutlineUp } from "react-icons/ai";
import moment from "moment";

const cx = classNames.bind(styles)

const DayDetail = ({ data, onArrowUpClick }) => {
    const effectiveDate = data.Date;
    const date = moment(effectiveDate);
    const day = date.format('dd DD');

    const handleArrowUpClick = () => {
        onArrowUpClick();
    }
    return (
        <>
            {
                data && (
                    <div className={cx('Day-Detail')}>
                        <div className={cx('Daily')}>
                            <div className={cx('Day-Detail')}>
                                <summary className={cx('Disclosure--Summary')} onClick={handleArrowUpClick}>
                                    <AiOutlineUp color='#1b4de4' className={cx("Arrow-up")} />
                                </summary>
                                <div className={cx('Daily')}>
                                    <div className={cx('Daily-Item')}>
                                        <div className={cx('Daily-Content')}>
                                            <h3><span>{day}  |</span>  Ngày</h3>
                                            <div className={cx('ConditionsSummary')}>
                                                <div className={cx('ConditionsSummary-title')}>
                                                    <span>{data.Temperature.Maximum.Value ? `${Math.floor((data.Temperature.Maximum.Value - 32) * 5 / 9)} °` : "--"}</span>
                                                    <img src={`https://developer.accuweather.com/sites/default/files/${data.Day.Icon < 10 ? '0' + data.Day.Icon : data.Day.Icon}-s.png`} alt={data.Day.LongPhrase} />
                                                </div>
                                                <div className={cx('ConditionsSummary-title-right')}>
                                                    <div>
                                                        <FaCloudShowersHeavy color='#1b4de4' />
                                                        <span>{data.Day.Rain.Value}%</span>
                                                    </div>
                                                    <div>
                                                        <BiWind color='#1b4de4' />
                                                        <span>{data.Day.Wind.Speed.Value}
                                                            {data.Day.Wind.Speed.Unit}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <p>{data.Day.IconPhrase} </p>
                                        </div>
                                        <div className={cx('Daily-Table')}>
                                            <ul>
                                                <li>
                                                    <BiWind color='#1b4de4' />
                                                    <div>
                                                        <span>Độ ẩm</span>
                                                        <span>{data?.humidity} 83%</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <BiWind color='#1b4de4' />
                                                    <div>
                                                        <span>Chỉ số uv</span>
                                                        <span>{data?.UV_LeveL} 0 / 11</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <BiWind color='#1b4de4' />
                                                    <div>
                                                        <span>Bình minh</span>
                                                        <span>{data?.rise} 8:07</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <BiWind color='#1b4de4' />
                                                    <div>
                                                        <span>Hoàng hôn</span>
                                                        <span>{data?.set} 20:16</span>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className={cx('Daily-Item')}>
                                        <div className={cx('Daily-Content')}>
                                            <h3><span>{day} |</span>  Đêm {data?.status}</h3>
                                            <div className={cx('ConditionsSummary')}>
                                                <div className={cx('ConditionsSummary-title')}>
                                                    <span>{data.Temperature.Minimum.Value ? `${Math.floor((data.Temperature.Minimum.Value - 32) * 5 / 9)} °` : "--"}</span>
                                                    <img src={`https://developer.accuweather.com/sites/default/files/${data.Night.Icon < 10 ? '0' + data.Night.Icon : data.Night.Icon}-s.png`} alt={data.Night.LongPhrase} />
                                                </div>
                                                <div className={cx('ConditionsSummary-title-right')}>
                                                    <div>
                                                        <FaCloudShowersHeavy color='#1b4de4' />
                                                        <span>{data.Night.Rain.Value}%</span>
                                                    </div>
                                                    <div>
                                                        <BiWind color='#1b4de4' />
                                                        <span>{data.Night.Wind.Speed.Value}
                                                            {data.Night.Wind.Speed.Unit}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <p>
                                                {data.Night.IconPhrase}
                                            </p>
                                        </div>
                                        <div className={cx('Daily-Table')}>
                                            <ul>
                                                <li>
                                                    <BiWind color='#1b4de4' />
                                                    <div>
                                                        <span>Độ ẩm</span>
                                                        <span>{data?.humidity} 83%</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <BiWind color='#1b4de4' />
                                                    <div>
                                                        <span>Chỉ số uv</span>
                                                        <span>{data?.UV_LeveL} 0 / 11</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <BiWind color='#1b4de4' />
                                                    <div>
                                                        <span>Bình minh</span>
                                                        <span>{data?.rise} 8:07</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <BiWind color='#1b4de4' />
                                                    <div>
                                                        <span>Hoàng hôn</span>
                                                        <span>{data?.set} 20:16</span>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default DayDetail