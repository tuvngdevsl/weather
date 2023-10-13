import React from 'react'
import classNames from 'classnames/bind'
import styles from './LocationItem.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

const LocationItem = () => {
    return (
        <div className={cx('wrapper')}>
            <FontAwesomeIcon icon={faCloud} className={cx('icon')} />
            <div className={cx('info')}>
                <span className={cx('temperature')}> 28°</span>
            </div>
            <div className={cx('location')}>
                <p className={cx('name')}> Ha Noi </p>
                <span className={cx('sub-name')}> Ha Noi</span>
            </div>
            <FontAwesomeIcon icon={faEllipsisVertical} className={cx('menu')}/>

        </div>
    )
}

export default LocationItem