import React, { useState } from 'react';
import styles from './styles.module.css'

const YearSelect = () => {
    const [selectedYear, setSelectedYear] = useState("");

    const handleSelectChange = (e) => {
        setSelectedYear(e.target.value);
    };

    return (
        <div className={styles.custom_select}>
            <select value={selectedYear} style={{ width:"65px" }} onChange={handleSelectChange}>
                <option value="">Năm</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
            </select>
        </div>
    );
};

export default YearSelect;