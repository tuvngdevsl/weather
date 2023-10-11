import React from 'react'
import styles from './Home.module.scss'
import classNames from 'classnames/bind'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button'
import { useState, useEffect } from 'react'
import axios from 'axios'

const cx = classNames.bind(styles);

const API_KEY = "8a20c89836ab4f28a5962338230910";
const BASE_URL = 'http://api.weatherapi.com/v1';




const Home = () => {

  return (
    <div className={cx('container')}>
      <main className={cx('weather')}>
        <div>
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
          <div className={cx('card-today')}>
            <Card.Header className={cx('header')}>Dự báo hôm nay cho Web, OR </Card.Header>
            <CardGroup className={cx('card-today-content')}>
              <Card className={cx('morning')}>
                <Card.Body>
                  <Card.Title>Sáng</Card.Title>
                  <Card.Subtitle> 22°</Card.Subtitle>
                </Card.Body>
              </Card>
              <Card className={cx('afternoon')}>
                <Card.Body>
                  <Card.Title>Chiều</Card.Title>
                  <Card.Subtitle> 22°</Card.Subtitle>
                </Card.Body>
              </Card>
              <Card className={cx('evening')}>
                <Card.Body>
                  <Card.Title>Tối</Card.Title>
                  <Card.Subtitle> 22°</Card.Subtitle>
                </Card.Body>
              </Card>
              <Card className={cx('night')}>
                <Card.Body>
                  <Card.Title>Qua đêm</Card.Title>
                  <Card.Subtitle> 22°</Card.Subtitle>
                </Card.Body>
              </Card>

            </CardGroup>
            <Button variant='primary'> Các giờ tới</Button>
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
        <Card bg='primary' className={cx('card-bootstrap')}>
          <Card.Body>
            <Card.Title className={cx('header')}>Sức khỏe & Hoạt động</Card.Title>
            <div className={cx('content')}>
              <svg
                width="50"
                height="50"
                data-testid="DonutChart"
                className={cx('svg-icon')}
              >
                <circle r="23" cx="25" cy="25" transform="rotate(90 25 25)" style={{ strokeWidth: 4 }} className={cx("DonutChart--track--1fk6L")}></circle>
                <circle r="23" cx="25" cy="25" transform="rotate(90 25 25)" style={{ strokeWidth: 4, strokeDasharray: "0 144.51326206513048", stroke: "#00e838" }} className={cx("DonutChart--indicator--NTUT5")}></circle>
                <svg
                  name="grass"
                  set="lifestyle"
                  theme="dark"
                  className="Icon--icon--2aW0V Icon--darkTheme--1PZ-8"
                  data-testid="Icon"
                  width="25"
                  x="12.5"
                  viewBox="0 0 24 24"
                >
                  <title>Grass</title>
                  <path d="M 12.452 10.885 C 11.662 8.905 10.941 7.779 9.304 6.101 C 8.629 5.402 7.861 4.87 7.08 4.345 C 6.472 3.978 5.794 4.514 6.185 5.039 C 7.252 6.401 9.09 8.945 9.757 10.378 C 10.628 12.244 10.905 14.043 11.049 15.936 C 11.252 18.031 10.529 20.132 11.227 21.024 C 11.705 21.641 13.362 21.813 13.894 21.024 C 14.47 20.199 14.143 17.614 13.894 16.146 C 13.68 14.538 13.056 12.398 12.452 10.885 Z M 20.415 11.958 C 20.703 11.458 20.072 11.101 19.685 11.424 C 19.221 11.782 18.274 12.685 17.761 13.374 C 16.996 14.402 16.457 14.927 15.638 17.173 C 15.191 18.416 14.507 20.246 15.253 21.058 C 16.23 22.121 17.638 20.736 17.761 20.11 C 18.163 19.544 18.049 18.158 18.214 17.036 C 18.451 15.426 18.698 14.66 19.63 13.14 C 20.091 12.391 20.043 12.545 20.415 11.958 Z"></path>
                  <path d="M 9.248 15.485 C 8.589 13.951 7.378 12.385 6.222 11.494 C 5.299 10.782 4.654 10.299 3.973 9.923 C 3.583 9.701 3.056 9.964 3.45 10.544 C 3.808 11.09 4.975 12.21 5.531 12.916 C 6.087 13.622 6.504 14.061 7.034 15.827 C 7.563 17.592 7.25 18.267 7.794 19.832 C 8.281 21.107 9.264 21.641 10.07 20.494 C 10.579 19.258 9.904 17.018 9.248 15.485 Z M 17.601 7.625 C 17.318 8.058 16.974 8.381 16.181 10.389 C 15.273 12.523 15.724 15.035 14.976 14.861 C 14.457 14.861 13.893 13.196 14.13 11.518 C 14.457 10.389 14.457 10.061 14.976 9.058 C 15.341 8.236 16.218 7.57 16.991 7.07 C 17.431 6.828 17.885 7.191 17.601 7.625 Z"></path>
                </svg>
              </svg>
              <div className={cx('subContent')}>
                <Card.Subtitle className={cx('sub-title')}>
                  Dự báo dị ứng theo mùa và lượng phấn hoa
                </Card.Subtitle>
                <Card.Text className={cx('text')}>
                  Không phát hiện phấn hoa trong khu vực của bạn
                </Card.Text>
              </div>
              <svg
                name="caret-right"
                set="ui"
                theme="action"
                className={cx('icon')}
                data-testid="Icon"
                width="9"
                viewBox="0 0 24 24"
              >
                <title>Arrow Right</title>
                <path d="M15.086 12L7.793 4.707a1 1 0 1 1 1.414-1.414l8 8a1 1 0 0 1 0 1.414l-8 8a1 1 0 1 1-1.414-1.414L15.086 12z"></path>
              </svg>
            </div>
          </Card.Body>
        </Card>

      </aside>
    </div>
  )
}

export default Home