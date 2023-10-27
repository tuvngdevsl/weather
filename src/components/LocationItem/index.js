import React from 'react'
import classNames from 'classnames/bind'
import styles from './LocationItem.module.scss'
// import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { useWeather } from '~/context/WeatherContext';

const cx = classNames.bind(styles);

const LocationItem = ({ data }) => {
    const { setSearchLocation, searchLocation } = useWeather();

    const handleClick = (event) => {
        event.preventDefault();
        setSearchLocation(data.EnglishName);

    };

    return (
        // <div>
        //     {p
        //         data ? (
        //             <Link to={`/I/${data?.name}`} className={cx('wrapper')}>

        //                 {/* <img src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`} alt='icon' className={cx('img-weather')}></img> */}
        //                 <div className={cx('info')}>
        //                     <span className={cx('temperature')}> {Math.round(kelvinToCelsius(temperature))}°</span>
        //                 </div>
        //                 <div className={cx('location')}>
        //                     <p className={cx('name')}> {data?.name} </p>
        //                     <span className={cx('sub-name')}> {data?.sys?.country}</span>
        //                 </div>
        //                 <FontAwesomeIcon icon={faEllipsisVertical} className={cx('menu')} />

        //             </Link>
        //         ) : (
        //             <div className={cx('wrapper')}>
        //                 <span className={cx('message')}>Không tìm thấy kết quả nào!</span>
        //             </div>
        //         )
        //     }
        // </div>
        <div>
            {/* <Link to={`/vi/zw/harare`} className={cx('wrapper')} > */}
            <div className={cx('location', 'wrapper')} onClick={handleClick} >
                <p className={cx('name')}>{data.LocalizedName}, {data.EnglishName}, {data.Country.ID} </p>
            </div>
            {/* </Link> */}

        </div>

    );
}

export default LocationItem