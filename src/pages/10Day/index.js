import ListWeather from "../../Phong/ListWeather"
import styles from './10Day.module.scss';
import classNames from "classnames/bind";
import DayItem from "~/components/DayItem";

const cx = classNames.bind(styles)




const TenDay = () => {
  return (
    <div className={cx('DaybreakLargeScreen')}>
      <div className={cx('Header-Title')}>
        <h1><strong>Thời tiết 10 ngày</strong> <span>- Web, Or</span></h1>
      </div>
      <div className={cx('Sub-Header')}> Kể từ 16:47 EAT</div>
      <DayItem></DayItem>
      <DayItem></DayItem>
      <DayItem></DayItem>
      <DayItem></DayItem>
      <DayItem></DayItem>
    </div >
  )
}

export default TenDay