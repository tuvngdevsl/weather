import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import CardGroup from 'react-bootstrap/CardGroup';
import classNames from 'classnames/bind';
import styles from './eachHour.module.scss';

const cx = classNames.bind(styles)

const Today = () => {
  return (
    <main className={cx('region-main')}>
      <div className={cx('card-eachHour')}>
        <Card.Header className={cx('header')}> Thời tiết hàng giờ <span> - Web, OR </span>
          <Card.Title > Kể từ 9:45 EAT </Card.Title>
        </Card.Header>
        <Card.Title > Kể từ 9:45 EAT </Card.Title>
        <CardGroup className={cx('card-eachHour-content')}>
          <Card className={cx('each-hour')}>
            <Card.Body>
              <Card.Title className={cx('active', 'title')}>Hôm nay</Card.Title>
              <Card.Subtitle className={cx('temperature', 'active')}> 22°</Card.Subtitle>
              <Card.Text className={cx('subTemperature')}> 17°</Card.Text>
              Icon
              <p>Icon</p>
            </Card.Body>
          </Card>
          <Card className={cx('each-hour')}>
            <Card.Body>
              <Card.Title className={cx('title')}>Th 6 13</Card.Title>
              <Card.Subtitle className={cx('temperature')}> 26°</Card.Subtitle>
              <Card.Text className={cx('subTemperature')}> 17°</Card.Text>
            </Card.Body>
          </Card>
          <Card className={cx('each-hour')}>
            <Card.Body>
              <Card.Title className={cx('title')}>Th 7 14</Card.Title>
              <Card.Subtitle className={cx('temperature')}> 22°</Card.Subtitle>
              <Card.Text className={cx('subTemperature')}> 17°</Card.Text>
            </Card.Body>
          </Card>
          <Card className={cx('each-hour')}>
            <Card.Body>
              <Card.Title className={cx('title')}>CN 15</Card.Title>
              <Card.Subtitle className={cx('temperature')}> 22°</Card.Subtitle>
              <Card.Text className={cx('subTemperature')}> 17°</Card.Text>
            </Card.Body>
          </Card>
          <Card className={cx('each-hour')}>
            <Card.Body>
              <Card.Title className={cx('title')}>Th 2 16</Card.Title>
              <Card.Subtitle className={cx('temperature')}> 22°</Card.Subtitle>
              <Card.Text className={cx('subTemperature')}> 17°</Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
        <Button className={cx('btn')}> 10 ngày tới</Button>
      </div>

    </main>
  )
}

export default Today