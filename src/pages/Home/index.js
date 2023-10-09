import React from 'react'
import styles from './Home.module.scss'
import classNames from 'classnames/bind'
import { useState, useEffect } from 'react'
import axios from 'axios'

const cx = classNames.bind(styles);

const API_KEY = "8a20c89836ab4f28a5962338230910";
const BASE_URL = 'http://api.weatherapi.com/v1';




const Home = () => {

  return (
    <div className={cx('container')}>
      <main className={cx('weather')}>
        <div className={cx('card')}>
          <div className={cx('card-header')}>
            <h1> Ha Noi, Web OR Kể từ 10:08 EAT</h1>
          </div>
          <div className={cx('card-body')}>
            <div className={cx('card-body-content')}>
              <span className={cx('temperature')}> 22°</span>
              <span className={cx('description')}> Chủ yếu có mây </span>
              <span className={cx('day')}> Ngày 28°. Đêm 17°</span>
            </div>
            <div className={cx('card-body-icon')}>
              icon
            </div>
          </div>
        </div>
      </main>
      <aside className={cx('aside')}>
        {/* Section card không khí */}
        <section className={cx('aside-card')}>
          <div className={cx('header-title')}>
            <h3> CHỉ SỐ CH.LƯỢNG KH.KHÍ</h3>
          </div>
          <div className={cx('aside-body')}>
            <div>
              <svg width={60} height={60} >
                <circle r={27.5} cx={30} cy={30} transform="rotate(90 30 30)" style={{ strokeWidth: 5 }} className={cx('circle1')} />
                <circle r={27.5} cx={30} cy={30} transform="rotate(90 30 30)" style={{ strokeWidth: 5, strokeDasharray: '28.797932657906433 172.78759594743863', stroke: '#00E838' }} className={cx('circle2')} />
                {/* <text x="50%" y="55%" >33</text> */}
                <text x="50%" y="55%" dominant-baseline="middle" alignment-baseline="middle" text-anchor="middle" className={cx('circle-text')} data-testid="DonutChartValue">33</text>
              </svg>
            </div>
            <div className="">
              <div className={cx('right-content')}>
                <h4 className={cx('right-content-header')} >Tốt</h4>
                <p style={{ paddingBottom: '15px' }}>
                  Chất lượng không khí được coi là đạt yêu cầu và ô nhiễm không khí gây ra ít rủi ro hoặc không gây ra rủi ro.
                </p>
              </div>
            </div>
          </div>

          <div className={cx('btn')}>
            <button className={cx('btn-detail')}> Xem chi tiết </button>
          </div>
        </section>
        {/* End section KK */}

      </aside>
    </div>
  )
}

export default Home