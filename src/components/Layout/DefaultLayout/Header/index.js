import React from 'react';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

const Header = () => {
    return (
        <header className={cx('wrapper')}>
            <nav>
                <ul>
                    <li>H.nay</li>
                    <li>Hàng giờ</li>
                    <li>10 ngày</li>
                    <li>Hàng tháng</li>
                    <li>Cuối tuần</li>
                    <li>Thêm dự báo
                        <ul>
                            <ul>CẢNH BÁO ĐẶC BIỆT
                                <li>Trình theo dõi dị ứng</li>
                                <li>Dự báo chất lượng không khí</li>
                            </ul>
                            
                        </ul>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;