import React, { useEffect, useState } from 'react'
import styles from './Home.module.scss'
import classNames from 'classnames/bind'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button'


const cx = classNames.bind(styles);

const Home = () => {

  const [location, setLocation] = useState("Ha Noi")
  const [weather, setWeather] = useState();
  const [searchResult, setSearchResult] = useState();


  return (
    <div className={cx('container')}>
      <main className={cx('weather')}>
        <div>
          <div className={cx('card')}>
            <div className={cx('card-header')}>
              <h1> {location}, Web OR Kể từ 10:08 EAT</h1>
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
                  <Card.Title className={cx('active', 'title')}>Sáng</Card.Title>
                  <Card.Subtitle className={cx('temperature', 'active')}> 22°</Card.Subtitle>
                  Icon
                  <p>Icon</p>
                </Card.Body>
              </Card>
              <Card className={cx('afternoon')}>
                <Card.Body>
                  <Card.Title className={cx('title')}>Chiều</Card.Title>
                  <Card.Subtitle className={cx('temperature')}> 22°</Card.Subtitle>
                </Card.Body>
              </Card>
              <Card className={cx('evening')}>
                <Card.Body>
                  <Card.Title className={cx('title')}>Tối</Card.Title>
                  <Card.Subtitle className={cx('temperature')}> 22°</Card.Subtitle>
                </Card.Body>
              </Card>
              <Card className={cx('night')}>
                <Card.Body>
                  <Card.Title className={cx('title')}>Qua đêm</Card.Title>
                  <Card.Subtitle className={cx('temperature')}> 22°</Card.Subtitle>
                </Card.Body>
              </Card>
            </CardGroup>
            <Button className={cx('btn')}> Các giờ tới</Button>
          </div>

          <div className={cx('weather-today')}>
            <Card.Header className={cx('header')}> Thời tiết hôm nay tại Web, OR </Card.Header>
            <div className={cx('weather-header')}>
              <div className={cx('feelsLikeTemp')}>
                <span className={cx('feelLike')}> Cảm giác như</span>
                <span className={cx('temperature')}> 18° </span>
              </div>
              <div className={cx('sunrise')}>
                Iconnn
              </div>
            </div>
            <CardGroup className={cx('weather-content')}>
              <Card className={cx('weather-content-item')}>
                <Card.Body>
                  <div className={cx('list-item')}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                    </svg>
                    <div>Cao/Thấp</div>
                    <div >
                      <span >26<span>°</span></span>/
                      <span >17<span>°</span></span>
                    </div>
                  </div>
                  <div className={cx('list-item')}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M13.5 0a.5.5 0 0 0 0 1H15v2.75h-.5a.5.5 0 0 0 0 1h.5V7.5h-1.5a.5.5 0 0 0 0 1H15v2.75h-.5a.5.5 0 0 0 0 1h.5V15h-1.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 .5-.5V.5a.5.5 0 0 0-.5-.5h-2zM7 1.5l.364-.343a.5.5 0 0 0-.728 0l-.002.002-.006.007-.022.023-.08.088a28.458 28.458 0 0 0-1.274 1.517c-.769.983-1.714 2.325-2.385 3.727C2.368 7.564 2 8.682 2 9.733 2 12.614 4.212 15 7 15s5-2.386 5-5.267c0-1.05-.368-2.169-.867-3.212-.671-1.402-1.616-2.744-2.385-3.727a28.458 28.458 0 0 0-1.354-1.605l-.022-.023-.006-.007-.002-.001L7 1.5zm0 0-.364-.343L7 1.5zm-.016.766L7 2.247l.016.019c.24.274.572.667.944 1.144.611.781 1.32 1.776 1.901 2.827H4.14c.58-1.051 1.29-2.046 1.9-2.827.373-.477.706-.87.945-1.144zM3 9.733c0-.755.244-1.612.638-2.496h6.724c.395.884.638 1.741.638 2.496C11 12.117 9.182 14 7 14s-4-1.883-4-4.267z" />
                    </svg>
                    <div>Độ ẩm</div>
                    <div >
                      <span>79%</span>
                    </div>
                  </div>
                  <div className={cx('list-item')}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 8Zm7-8a.5.5 0 0 1 .5.5v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 4.293V.5A.5.5 0 0 1 8 0Zm-.5 11.707-1.146 1.147a.5.5 0 0 1-.708-.708l2-2a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 11.707V15.5a.5.5 0 0 1-1 0v-3.793Z" />
                    </svg>
                    <div>Áp Suất</div>
                    <div >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z" />
                      </svg>
                      <span >1014.6 mb</span>
                    </div>
                  </div>
                  <div className={cx('list-item')}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                    </svg>
                    <div>Tầm nhìn</div>
                    <div >
                      <span>
                        14.48 km</span>
                    </div>
                  </div>
                </Card.Body>
              </Card>
              <Card className={cx('weather-content-item')}>
                <Card.Body>
                  <div className={cx('list-item')}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M12.5 2A2.5 2.5 0 0 0 10 4.5a.5.5 0 0 1-1 0A3.5 3.5 0 1 1 12.5 8H.5a.5.5 0 0 1 0-1h12a2.5 2.5 0 0 0 0-5zm-7 1a1 1 0 0 0-1 1 .5.5 0 0 1-1 0 2 2 0 1 1 2 2h-5a.5.5 0 0 1 0-1h5a1 1 0 0 0 0-2zM0 9.5A.5.5 0 0 1 .5 9h10.042a3 3 0 1 1-3 3 .5.5 0 0 1 1 0 2 2 0 1 0 2-2H.5a.5.5 0 0 1-.5-.5z" />
                    </svg>
                    <div>Gió</div>
                    <div >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M9.636 13.5a.5.5 0 0 1-.5.5H2.5A1.5 1.5 0 0 1 1 12.5v-10A1.5 1.5 0 0 1 2.5 1h10A1.5 1.5 0 0 1 14 2.5v6.636a.5.5 0 0 1-1 0V2.5a.5.5 0 0 0-.5-.5h-10a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h6.636a.5.5 0 0 1 .5.5z" />
                        <path fillRule="evenodd" d="M5 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1H6.707l8.147 8.146a.5.5 0 0 1-.708.708L6 6.707V10.5a.5.5 0 0 1-1 0v-5z" />
                      </svg>
                      <span>5 km/giờ</span>
                    </div>
                  </div>


                  <div className={cx('list-item')}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M7.21.8C7.69.295 8 0 8 0c.109.363.234.708.371 1.038.812 1.946 2.073 3.35 3.197 4.6C12.878 7.096 14 8.345 14 10a6 6 0 0 1-12 0C2 6.668 5.58 2.517 7.21.8zm.413 1.021A31.25 31.25 0 0 0 5.794 3.99c-.726.95-1.436 2.008-1.96 3.07C3.304 8.133 3 9.138 3 10c0 0 2.5 1.5 5 .5s5-.5 5-.5c0-1.201-.796-2.157-2.181-3.7l-.03-.032C9.75 5.11 8.5 3.72 7.623 1.82z" />
                      <path fillRule="evenodd" d="M4.553 7.776c.82-1.641 1.717-2.753 2.093-3.13l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448z" />
                    </svg>
                    <div>Điểm ngưng</div>
                    <div >
                      <span> 14°</span>
                    </div>
                  </div>
                  <div className={cx('list-item')}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
                    </svg>
                    <div>Chỉ số UV</div>
                    <div >
                      <span >
                        0 / 11</span>
                    </div>
                  </div>
                  <div className={cx('list-item')}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z" />
                    </svg>
                    <div>Tuần trăng</div>
                    <div >
                      <span>Trăng hạ huyền</span>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </CardGroup>
          </div>

          <div className={cx('card-eachHour')}>
            <Card.Header className={cx('header')}>Dự báo từng giờ</Card.Header>
            <CardGroup className={cx('card-eachHour-content')}>
              <Card className={cx('hour-item')}>
                <Card.Body>
                  <Card.Title className={cx('active', 'title')}>Bây giờ</Card.Title>
                  <Card.Subtitle className={cx('temperature', 'active')}> 22°</Card.Subtitle>
                  Icon
                  <p>Icon</p>
                </Card.Body>
              </Card>
              <Card className={cx('hour-item')}>
                <Card.Body>
                  <Card.Title className={cx('title')}>10:00</Card.Title>
                  <Card.Subtitle className={cx('temperature')}> 22°</Card.Subtitle>
                </Card.Body>
              </Card>
              <Card className={cx('hour-item')}>
                <Card.Body>
                  <Card.Title className={cx('title')}>11:00</Card.Title>
                  <Card.Subtitle className={cx('temperature')}> 24°</Card.Subtitle>
                </Card.Body>
              </Card>
              <Card className={cx('hour-item')}>
                <Card.Body>
                  <Card.Title className={cx('title')}>12:00</Card.Title>
                  <Card.Subtitle className={cx('temperature')}> 24°</Card.Subtitle>
                </Card.Body>
              </Card>
              <Card className={cx('hour-item')}>
                <Card.Body>
                  <Card.Title className={cx('title')}>13:00</Card.Title>
                  <Card.Subtitle className={cx('temperature')}> 26°</Card.Subtitle>
                </Card.Body>
              </Card>
            </CardGroup>
            <Button className={cx('btn')}> 48 giờ tới</Button>
          </div>
          <div className={cx('card-eachDay')}>
            <Card.Header className={cx('header')}> Dự báo hàng ngày </Card.Header>
            <CardGroup className={cx('card-eachDay-content')}>
              <Card className={cx('each-day')}>
                <Card.Body>
                  <Card.Title className={cx('active', 'title')}>Hôm nay</Card.Title>
                  <Card.Subtitle className={cx('temperature', 'active')}> 22°</Card.Subtitle>
                  <Card.Text className={cx('subTemperature')}> 17°</Card.Text>
                  Icon
                  <p>Icon</p>
                </Card.Body>
              </Card>
              <Card className={cx('each-day')}>
                <Card.Body>
                  <Card.Title className={cx('title')}>Th 6 13</Card.Title>
                  <Card.Subtitle className={cx('temperature')}> 26°</Card.Subtitle>
                  <Card.Text className={cx('subTemperature')}> 17°</Card.Text>
                </Card.Body>
              </Card>
              <Card className={cx('each-day')}>
                <Card.Body>
                  <Card.Title className={cx('title')}>Th 7 14</Card.Title>
                  <Card.Subtitle className={cx('temperature')}> 22°</Card.Subtitle>
                  <Card.Text className={cx('subTemperature')}> 17°</Card.Text>
                </Card.Body>
              </Card>
              <Card className={cx('each-day')}>
                <Card.Body>
                  <Card.Title className={cx('title')}>CN 15</Card.Title>
                  <Card.Subtitle className={cx('temperature')}> 22°</Card.Subtitle>
                  <Card.Text className={cx('subTemperature')}> 17°</Card.Text>
                </Card.Body>
              </Card>
              <Card className={cx('each-day')}>
                <Card.Body>
                  <Card.Title className={cx('title')}>Th 2 16</Card.Title>
                  <Card.Subtitle className={cx('temperature')}> 22°</Card.Subtitle>
                  <Card.Text className={cx('subTemperature')}> 17°</Card.Text>
                </Card.Body>
              </Card>
            </CardGroup>
            <Button className={cx('btn')}> 10 ngày tới</Button>
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
                <text x="50%" y="55%" dominantBaseline="middle" alignmentBaseline="middle" textAnchor="middle" className={cx('circle-text')} data-testid="DonutChartValue">33</text>
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