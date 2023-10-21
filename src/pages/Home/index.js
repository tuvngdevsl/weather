import React from 'react'
import styles from './Home.module.scss'
import classNames from 'classnames/bind'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button'
import { useWeather } from '~/context/WeatherContext';
import humidity_icon from '~/components/Assets/humidity.png';
import cloud_icon from '~/components/Assets/cloud.png';
import drizzle_icon from '~/components/Assets/drizzle.png';
import rain_icon from '~/components/Assets/rain.png';
import snow_icon from '~/components/Assets/snow.png';
import clear_icon from '~/components/Assets/clear.png'
import wind_icon from '~/components/Assets/clear.png';
import { FaTemperatureLow } from 'react-icons/fa';
import { WiHumidity } from 'react-icons/wi';
import { BsArrowsCollapse, BsWind } from 'react-icons/bs';
import { MdVisibility } from 'react-icons/md';
import { LuDroplets } from 'react-icons/lu';
import { TbUvIndex } from 'react-icons/tb'
import { TiWeatherCloudy } from 'react-icons/ti'


const cx = classNames.bind(styles);

const Home = () => {
  const { currentWeatherLocation, detailData, weather1Day } = useWeather();

  return (
    <div >
      {
        currentWeatherLocation && detailData && weather1Day && (
          <div className={cx('container')}>
            <main className={cx('weather')}>
              <div>
                <div className={cx('card')}>
                  <div className={cx('card-header')}>
                    <h3> {currentWeatherLocation?.LocalizedName} </h3> <span className={cx('current-condition')}>Kể từ {detailData[0].LocalObservationDateTime}</span>
                  </div>
                  <div className={cx('card-body')}>
                    <div className={cx('card-body-content')}>
                      <span className={cx('temperature')}> {Math.floor(detailData[0].Temperature.Metric.Value)}°</span>
                      <span className={cx('description')}> {detailData[0].WeatherText} </span>
                      <span className={cx('day')}> Ngày {Math.floor((weather1Day.DailyForecasts[0].Temperature.Maximum.Value - 32) * 5 / 9)}°. Đêm {Math.floor((weather1Day.DailyForecasts[0].Temperature.Minimum.Value - 32) * 5 / 9)}°</span>
                    </div>
                    <div className={cx('card-body-icon')}>
                      <img src={cloud_icon} alt='icon' className={cx('icon')} />
                    </div>
                  </div>
                </div>
                <div className={cx('card-today')}>
                  <Card.Header className={cx('header')}>Dự báo hôm nay cho {currentWeatherLocation?.LocalizedName} </Card.Header>
                  <CardGroup className={cx('card-today-content')}>
                    <Card className={cx('morning')}>
                      <Card.Body>
                        <Card.Title className={cx('active', 'title')}>Sáng</Card.Title>
                        <Card.Subtitle className={cx('temperature', 'active')}> 22°</Card.Subtitle>
                        <img src={rain_icon} alt="" className={cx('icon')} />
                        <p>--</p>
                      </Card.Body>
                    </Card>
                    <Card className={cx('afternoon')}>
                      <Card.Body>
                        <Card.Title className={cx('title')}>Chiều</Card.Title>
                        <Card.Subtitle className={cx('temperature')}> 22°</Card.Subtitle>
                        <img src={drizzle_icon} alt="" className={cx('icon')} />
                      </Card.Body>
                    </Card>
                    <Card className={cx('evening')}>
                      <Card.Body>
                        <Card.Title className={cx('title')}>Tối</Card.Title>
                        <Card.Subtitle className={cx('temperature')}> 22°</Card.Subtitle>
                        <img src={snow_icon} alt="" className={cx('icon')} />
                      </Card.Body>
                    </Card>
                    <Card className={cx('night')}>
                      <Card.Body>
                        <Card.Title className={cx('title')}>Qua đêm</Card.Title>
                        <Card.Subtitle className={cx('temperature')}> 22°</Card.Subtitle>
                        <img src={clear_icon} alt="" className={cx('icon')} />
                      </Card.Body>
                    </Card>
                  </CardGroup>
                  <Button className={cx('btn')}> Các giờ tới</Button>
                </div>

                <div className={cx('weather-today')}>
                  <Card.Header className={cx('header')}> Thời tiết hôm nay tại {currentWeatherLocation?.LocalizedName} </Card.Header>
                  <div className={cx('weather-header')}>
                    <div className={cx('feelsLikeTemp')}>
                      <span className={cx('feelLike')}> Cảm giác như</span>
                      <span className={cx('temperature')}> {Math.floor(detailData[0].Temperature.Metric.Value)}°  </span>
                    </div>
                    <div className={cx('sunrise')}>
                      <img src={wind_icon} alt="sunrise" className={cx('icon')}/> 
                    </div>
                  </div>
                  <CardGroup className={cx('weather-content')}>
                    <Card className={cx('weather-content-item')}>
                      <Card.Body>
                        <div className={cx('list-item')}>
                          <FaTemperatureLow color='#000' className={cx('icon-weather')} />
                          <div>Cao/Thấp</div>
                          <div >
                            <span >{Math.floor((weather1Day.DailyForecasts[0].Temperature.Maximum.Value - 32) * 5 / 9)}°</span>/
                            <span >{Math.floor((weather1Day.DailyForecasts[0].Temperature.Minimum.Value - 32) * 5 / 9)}°</span>
                          </div>
                        </div>
                        <div className={cx('list-item')}>
                          <WiHumidity color="#000" className={cx('icon-weather')} />
                          <div>Độ ẩm</div>
                          <div >
                            <span>{detailData[0].RelativeHumidity}% </span>
                          </div>
                        </div>
                        <div className={cx('list-item')}>
                          <BsArrowsCollapse color="#000" className={cx('icon-weather')} />
                          <div>Áp Suất</div>
                          <div >
                            <span >{detailData[0].Pressure.Metric.Value} mb</span>
                          </div>
                        </div>
                        <div className={cx('list-item')}>
                          <MdVisibility color="#000" className={cx('icon-weather')} />
                          <div>Tầm nhìn</div>
                          <div >
                            <span>{Math.floor(detailData[0].Visibility.Metric.Value)} km</span>
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                    <Card className={cx('weather-content-item')}>
                      <Card.Body>
                        <div className={cx('list-item')}>
                          <BsWind color='#000' className={cx('icon-weather')} />
                          <div>Gió</div>
                          <div >

                            <span>{Math.floor(detailData[0].Wind.Speed.Metric.Value)} km/h</span>
                          </div>
                        </div>


                        <div className={cx('list-item')}>
                          <LuDroplets color="#000" className={cx('icon-weather')} />
                          <div>Điểm ngưng</div>
                          <div >
                            <span> {Math.floor(detailData[0].DewPoint.Metric.Value)}°</span>
                          </div>
                        </div>
                        <div className={cx('list-item')}>
                          <TbUvIndex color="#000" className={cx('icon-weather')} />
                          <div>Chỉ số UV</div>
                          <div >
                            <span > {detailData[0].UVIndex}</span>
                          </div>
                        </div>
                        <div className={cx('list-item')}>
                          <TiWeatherCloudy color="#000" className={cx('icon-weather')} />
                          <div>Thời tiết</div>
                          <div >
                            <span>{detailData[0].WeatherText}</span>
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

    </div>
  )
}

export default Home