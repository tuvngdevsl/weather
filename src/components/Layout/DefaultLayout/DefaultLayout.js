import React from 'react'
import Header from "../components/Header";
import Footer from '../components/Footer'
import styles from './DefaultLayout.module.scss'
import classNames from 'classnames/bind';
const cx = classNames.bind(styles)


const DefaultLayout = ({ children }) => {
    return (
        <div>
            <Header />
            <div className={cx('container')}>
                <div className={cx('content')}>
                    {children}
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default DefaultLayout