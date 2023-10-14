import React from 'react'
import classNames from 'classnames/bind'
import styles from './LocationItem.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

const LocationItem = ({ data }) => {
    const temperature = data?.current?.feelslike_c;
    const roundTemperature = Math.round(temperature);
    return (
        <div>
            {
                data?.error ? (
                    <div className={cx('wrapper')}>
                        <span className={cx('message')}>Không tìm thấy kết quả nào!</span>
                    </div>
                ) : (
                    <div className={cx('wrapper')}>

                        <img src={data?.current?.condition.icon} alt='icon' className={cx('img-weather')}></img>
                        <div className={cx('info')}>
                            <span className={cx('temperature')}> {roundTemperature}°</span>
                        </div>
                        <div className={cx('location')}>
                            <p className={cx('name')}> {data?.location?.name} </p>
                            <span className={cx('sub-name')}> {data?.location?.country}</span>
                        </div>
                        <FontAwesomeIcon icon={faEllipsisVertical} className={cx('menu')} />

                    </div>

                )
            }
        </div>


    )
}

export default LocationItem