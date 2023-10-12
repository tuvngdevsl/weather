import React, { useState } from 'react'
import classNames from 'classnames/bind'
import logo from './logo.png';
import styles from './Header.module.scss'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { faCaretUp } from '@fortawesome/free-solid-svg-icons';


const cx = classNames.bind(styles)

const Header = () => {
    const [location, setLocation] = useState('VN');
    // const [temperature, setTemperature] = useState('°C');

    const handleLocationChange = (e) => {
        const newLocation = e.target.value;
        setLocation(newLocation);
    }

    // const handleTemperatureUnitChange = (e) => {
    //     setTemperature(`${temperature.endsWith('°C') ? '°F' : '°C'}`);
    // }

    return (
        <>
            <header className={cx('wrapper')}>
                <div className={cx('header')}>
                    <div className={cx('titleAndLogo')}>
                        <img src={logo} alt="Logo" className={cx('logo')} />
                        <h1 className={cx('title')}>An IBM Business</h1>
                    </div>
                    <div className={cx('searchContainer')}>
                        <input type="text" placeholder="Tìm thành phố hoặc mã zip" className={cx('searchInput')} />
                    </div>
                    <div className={cx('rightContent')}>
                        <div className={cx('location')}>{location}</div>
                        <div className={cx('temperature')}>/ °C</div>
                        <div className={cx('dropdownContainer')}>
                            <select className={cx('dropdown')} onChange={handleLocationChange}>
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
                                    <option value="AO">Angola | Português</option>
                                    <option value="BJ">Benin | Français</option>
                                    <option value="BF">Burkina Faso | Français</option>
                                    <option value="BI">Burundi | Français</option>
                                    <option value="CM">Cameroon | Français</option>
                                    <option value="CM">Cameroon | English</option>
                                    <option value="CV">Cape Verde | Português</option>
                                    <option value="CF">Cộng Hòa Trung Phi | Français</option>
                                    <option value="TD">Chad | Français</option>
                                    <option value="TD">Chad | العربية</option>
                                    <option value="KM">Comoros | Français</option>
                                    <option value="KM">Comoros | العربية</option>
                                    <option value="CD">Democratic Republic of the Congo | Français</option>
                                    <option value="CG">Cộng Hòa Congo | Français</option>
                                    <option value="CI">Côte d'Ivoire | Français</option>
                                    <option value="DJ">Djibouti | Français</option>
                                    <option value="EG">Ai Cập | العربية</option>
                                    <option value="GQ">Equatorial Guinea | Español</option>
                                    <option value="ER">Eritrea | العربية</option>
                                    <option value="GA">Gabon | Français</option>
                                    <option value="GM">Gambia | English</option>
                                    <option value="GH">Ghana | English</option>
                                    <option value="GN">Guinea | Français</option>
                                    <option value="GW">Guinea-Bissau | Português</option>
                                    <option value="KE">Kenya | English</option>
                                    <option value="LS">Lesotho | English</option>
                                    <option value="LR">Liberia | English</option>
                                    <option value="LY">Libya | العربية</option>
                                    <option value="MG">Madagascar | Français</option>
                                    <option value="ML">Mali | Français</option>
                                    <option value="MR">Mauritania | العربية</option>
                                    <option value="MU">Mauritius | English</option>
                                    <option value="MU">Mauritius | Français</option>
                                    <option value="MA">Morocco | العربية</option>
                                    <option value="MA">Morocco | Français</option>
                                    <option value="MZ">Mozambique | Português</option>
                                    <option value="NA">Namibia | English</option>
                                    <option value="NE">Niger | Français</option>
                                    <option value="NG">Nigeria | English</option>
                                    <option value="RW">Rwanda | Français</option>
                                    <option value="RW">Rwanda | English</option>
                                    <option value="ST">Sao Tome và Principe | Português</option>
                                    <option value="SN">Senegal | Français</option>
                                    <option value="SL">Sierra Leone | English</option>
                                    <option value="SO">Somalia | العربية</option>
                                    <option value="ZA">Nam Phi | English</option>
                                    <option value="SS">Nam Sudan | English</option>
                                    <option value="SD">Sudan | العربية</option>
                                    <option value="SZ">Swaziland | English</option>
                                    <option value="TZ">Tanzania | English</option>
                                    <option value="TG">Togo | Français</option>
                                    <option value="TN">Tunisia | العربية</option>
                                    <option value="UG">Uganda | English</option>
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