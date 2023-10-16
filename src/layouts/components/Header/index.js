import React, { useEffect, useState } from 'react'
import classNames from 'classnames/bind'
import logo from './logo.png';
import styles from './Header.module.scss'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faEarthAmericas, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import Search from '../Search'
import { currentWeather } from "~/services/currentWeatherService"

const cx = classNames.bind(styles)

const Header = () => {
    const [location, setLocation] = useState('VN');
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(true);
    // const [temperature, setTemperature] = useState('°C');

    const handleLocationChange = (e) => {
        const newLocation = e.target.value;
        setLocation(newLocation);
    }


    //get weather in this location
    useEffect(() => {
        const fetchApi = async () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(async (position) => {
                    const {latitude, longitude} = position.coords;
                    const result = currentWeather(latitude, longitude);
                    console.log(result);
                    setWeather(result);
                })
            } else {
                console.error('Geolocation is not supported by your browser.')
            }
        }
        fetchApi();

    }, [])

    // const handleTemperatureUnitChange = (e) => {
    //     setTemperature(`${temperature.endsWith('°C') ? '°F' : '°C'}`);
    // }



    return (
        <>
            <header className={cx('wrapper')}>
                <div className={cx('header')}>
                    <Link to='/' className={cx('titleAndLogo')}>
                        <img src={logo} alt="Logo" className={cx('logo')} />
                        <h1 className={cx('title')}>An IBM Business</h1>
                    </Link>
                    {/* Search Component */}
                    <Search />
                    <div className={cx('rightContent')}>
                        <button>
                            <FontAwesomeIcon icon={faEarthAmericas} className={cx('icon')} />
                            <span className={cx('location')}>{location}</span>
                            <span className={cx('temperature')}>°C</span>
                            <div className={cx('dropdownContainer')}>
                                <select className={cx('dropdown')} onChange={handleLocationChange} value={location} >
                                    <optgroup label="CHÂU MỸ">
                                        <option value="AG">Antigua và Barbuda | English</option>
                                        <option value="AR">Argentina | Español</option>
                                        <option value="BS">Bahamas | English</option>
                                        <option value="BB">Barbados | English</option>
                                        <option value="BZ">Belize | English</option>
                                        <option value="BO">Bolivia | Español</option>
                                        <option value="BR">Brazil | Português</option>
                                        <option value="CA">Canada | English</option>
                                        <option value="CA">Canada | Français</option>
                                        <option value="CL">Chile | Español</option>
                                        <option value="CO">Colombia | Español</option>
                                        <option value="CR">Costa Rica | Español</option>
                                        <option value="DM">Dominica | English</option>
                                        <option value="DO">Cộng Hòa Dominica | Español</option>
                                        <option value="EC">Ecuador | Español</option>
                                        <option value="SV">El Salvador | Español</option>
                                        <option value="GD">Grenada | English</option>
                                        <option value="GT">Guatemala | Español</option>
                                        <option value="GY">Guyana | English</option>
                                        <option value="HT">Haiti | Français</option>
                                        <option value="HN">Honduras | Español</option>
                                        <option value="JM">Jamaica | English</option>
                                        <option value="MX">Mexico | Español</option>
                                        <option value="NI">Nicaragua | Español</option>
                                        <option value="PA">Panama | Español</option>
                                        <option value="PA">Panama | English</option>
                                        <option value="PY">Paraguay | Español</option>
                                        <option value="PE">Peru | Español</option>
                                        <option value="KN">St. Kitts và Nevis | English</option>
                                        <option value="LC">St. Lucia | English</option>
                                        <option value="VC">St. Vincent và Grenadines | English</option>
                                        <option value="SR">Suriname | Nederlands</option>
                                        <option value="TT">Trinidad và Tobago | English</option>
                                        <option value="UY">Uruguay | Español</option>
                                        <option value="US">Hoa Kỳ | English</option>
                                        <option value="US">Hoa Kỳ | Español</option>
                                        <option value="VR">Venezuela | Español</option>
                                    </optgroup>
                                    <optgroup label="CHÂU PHI">
                                        <option value="DZ">Algeria | العربية</option>
                                        <option value="DZ">Algeria | Français</option>

                                    </optgroup>
                                    <optgroup label="CHÂU Á THÁI BÌNH DƯƠNG">
                                        <option value="JP">JP</option>
                                        <option value="AU">AU</option>
                                        <option value="VN">Việt Nam | Tiếng việt </option>
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

                        </button>
                    </div>
                </div>
            </header>

            <div className={cx('sub-header')}>
                <div className={cx('location-temp')}>
                    <span>ICON 25°C Hanoi, Vietnam</span>
                </div>
                <nav className={cx('navbar')}>
                    <div>
                        <Link to="/"> H.nay</Link>
                        <Link to="/month" > Hàng giờ</Link>
                        <Link to="/">10 ngày </Link>
                        <Link to="">Hàng tháng</Link>
                        <Link to="">Cuối tuần</Link>
                        <div>
                            <button>
                                Thêm dự báo
                                <FontAwesomeIcon icon={faCaretDown} className={cx('displayarrowdown')} style={{ marginLeft: '10px', fontSize: '25px' }} />
                                <FontAwesomeIcon icon={faCaretUp} className={cx('displayarrow')} style={{ marginLeft: '10px', fontSize: '25px' }} />
                            </button>
                            <nav>
                                <div>
                                    <div>
                                        <nav>
                                            <h3>CẢNH BÁO ĐẶC BIỆT</h3>
                                            <div>
                                                <Link to="">Trình theo dõi dị ứng</Link>
                                                <Link to="">Dự báo chất lượng không khí</Link>
                                            </div>
                                        </nav>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </nav >
            </div >

        </>
    )

}

export default Header