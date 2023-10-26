import React, { useEffect, useState } from 'react'
import classNames from "classnames/bind"
import styles from "./Radar.module.scss"

const cx = classNames.bind(styles)

const Radar = () => {
    const [lat, setLat] = useState(null);
    const [lon, setLon] = useState(null);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            setLat(position.coords.latitude);
            setLon(position.coords.longitude);
        });
    }, []);

    return lat && lon ? (
        <div className={cx('container')}>
            <iframe
                title="Windy Map"
                width="1200"
                height="600"
                src={`https://embed.windy.com/embed2.html?lat=${lat}&lon=${lon}&zoom=5`}
                frameBorder="0"

            />
        </div>
    ) : null;
}

export default Radar;