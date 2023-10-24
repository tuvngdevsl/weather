import React from 'react';
import styles from './AirItem.module.scss';
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const AirItem = ({ data }) => {
  return (
    <div className={cx('item-container')}>
      <h3 className={cx('item-title')}>{data.title}</h3>
      <p className={cx('item-description')}>{data.description}</p>
    </div>
  );
}

export default AirItem;
