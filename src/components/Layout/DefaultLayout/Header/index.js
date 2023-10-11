import React, { useState } from 'react';
import classNames from 'classnames/bind'
import styles from './Header.module.scss'
import logo from './logo.png';

const cx = classNames.bind(styles)

const Header = () => {
    const [location, setLocation] = useState('VN');
    const [temperature, setTemperature] = useState('°C');

    const handleLocationChange = (e) => {
        const newLocation = e.target.value;
        setLocation(newLocation);
    }

    const handleTemperatureUnitChange = (e) => {
        setTemperature(`${temperature.endsWith('°C') ? '°F' : '°C'}`);
    }

    return <header className={cx('wrapper')}> 
        <div className={cx('titleAndLogo')}>
            <img src={logo} alt="Logo" className={cx('logo')} />
            <h1 className={cx('title')}>An IBM Business</h1>
        </div>
        <div className={cx('searchContainer')}>
            <input type="text" placeholder="Tìm thành phố hoặc mã zip" className={cx('searchInput')} />
        </div>
        <div className={cx('rightContent')}>
                <div className={cx('location')}>{location}</div>
                <div className={cx('temperature')}>/ {temperature}</div>
                <div className={cx('dropdownContainer')}>
                    <select className={cx('dropdown')} onChange={handleLocationChange}>
                    <optgroup label="CHÂU MỸ">
                        <option value="VN">VN</option>
                    </optgroup>
                    <optgroup label="CHÂU PHI">
                        <option value="EG">EG</option>
                        <option value="ZA">ZA</option>
                    </optgroup>
                    <optgroup label="CHÂU Á THÁI BÌNH DƯƠNG">
                        <option value="JP">JP</option>
                        <option value="AU">AU</option>
                    </optgroup>
                    <optgroup label="CHÂU ÂU">
                        <option value="FR">FR</option>
                        <option value="DE">DE</option>
                    </optgroup>
                    <optgroup label="TRUNG ĐÔNG">
                        <option value="AE">AE</option>
                        <option value="SA">SA</option>
                    </optgroup>
                    </select>
                </div>
            </div>            
    </header>
}

export default Header