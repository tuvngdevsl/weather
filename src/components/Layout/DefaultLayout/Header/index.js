import React from 'react';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { faCaretUp } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

const Header = () => {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('location-temp')}>
                <span>ICON 25°C Hanoi, Vietnam</span>
            </div>
            <nav className={cx('navbar')}>
                <div>
                    
                    <a><span>H.nay</span></a>
                    <a>Hàng giờ</a>
                    <a>10 ngày</a>
                    <a>Hàng tháng</a>
                    <a>Cuối tuần</a>
                    <div>
                        <button>
                            Thêm dự báo 
                            <FontAwesomeIcon icon={faCaretDown} className={cx('displayarrowdown')} style={{marginLeft:'10px', fontSize:'25px'}} />
                            <FontAwesomeIcon icon={faCaretUp} className={cx('displayarrow')} style={{marginLeft:'10px', fontSize:'25px'}}/>
                        </button>
                        <nav>
                            <div>
                                <div>
                                    <nav>
                                        <h3>CẢNH BÁO ĐẶC BIỆT</h3>
                                        <div>
                                            <a>Trình theo dõi dị ứng</a>
                                            <a>Dự báo chất lượng không khí</a>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
