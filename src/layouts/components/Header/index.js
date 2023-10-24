import React, { useState } from 'react'
import classNames from 'classnames/bind'
import logo from './logo.png';
import styles from './Header.module.scss'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faEarthAmericas, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import Search from '../Search'
import { useWeather } from '~/context/WeatherContext';
import { FlapperSpinner } from 'react-spinners-kit';


const cx = classNames.bind(styles)

const Header = () => {
    const { currentWeatherLocation, detailData } = useWeather();
    const [location, setLocation] = useState('VN');
    const [loading, setLoading] = useState(false);
    const handleLocationChange = (e) => {
        const newLocation = e.target.value;
        setLocation(newLocation);
    }
   
    return (
        <>
            <div>
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
                    {
                        loading ?
                            (
                                <div className={cx('location-temp')}>
                                    <FlapperSpinner loading={loading} color="#fff" size={25} />
                                </div>
                            ) : (
                                <div className={cx('location-temp')}>
                                    {
                                        detailData && detailData.length > 0 ? (
                                            <div className={cx('weather-left')}> 
                                                <img src={`https://developer.accuweather.com/sites/default/files/${detailData[0].WeatherIcon < 10 ? '0' + detailData[0].WeatherIcon : detailData[0].WeatherIcon}-s.png`} alt={detailData[0].WeatherText} className={cx('img-weather')}></img>
                                                <span className={cx('weather-detail')}>
                                                    {Math.floor(detailData[0].Temperature.Metric.Value)}°C {currentWeatherLocation?.LocalizedName}, {currentWeatherLocation?.Country?.LocalizedName}
                                                </span>
                                            </div>
                                        ) : <FlapperSpinner loading={true} color="#000" size={25} />
                                    }
                                </div>
                            )
                    }

                    <nav className={cx('navbar')}>
                        <div>
                            <Link to="/today"> Today</Link>
                            <Link to="/hourly" > Hourly</Link>
                            <Link to="/10day">10 Day </Link>
                            <Link to="/monthly">Monthly</Link>
                            <Link to="/weekend">Weekend</Link>
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
                                                    <Link to="/AirQuality">Dự báo chất lượng không khí</Link>
                                                </div>
                                            </nav>
                                        </div>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </nav >
                </div >
            </div>
        </>
    )

}

export default Header