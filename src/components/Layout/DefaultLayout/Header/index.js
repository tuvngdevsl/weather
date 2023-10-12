import React from 'react';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

const Header = () => {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('location-temp')}>
                <span>Hanoi, Vietnam</span>
                <span>25°C</span>
            </div>
            <nav>
                <div>
                    <a>H.nay</a>
                    <a>Hàng giờ</a>
                    <a>10 ngày</a>
                    <a>Hàng tháng</a>
                    <a>Cuối tuần</a>
                    <div>
                        <button>
                            Thêm dự báo
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
