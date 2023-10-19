import styles from "./Weekend.module.scss"
import classNames from "classnames/bind"
import DayItem from "~/components/DayItem"

const cx = classNames.bind(styles)

const Weekend = () => {
  return (
    <div className={cx('DaybreakLargeScreen')}>
      <div className={cx('Header-Title')}>
        <h1><strong>Thời tiết cuối tuần</strong> <span>- Web, Or</span></h1>
      </div>
      <div className={cx('Sub-Header')}> Kể từ 16:47 EAT</div>
      <div>
        <h3 class={cx('WeekendForecast')}>Cuối tuần này</h3>
        <DayItem></DayItem>
        <DayItem></DayItem>
        <DayItem></DayItem>
      </div>
    </div>
  )
}

export default Weekend