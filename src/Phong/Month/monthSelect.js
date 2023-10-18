import React, { useState } from 'react';
import styles from './styles.module.css'

const MonthSelect = () => {
    const [selectedMonth, setSelectedMonth] = useState("");

    const handleSelectChange = (e) => {
        setSelectedMonth(e.target.value);
    };

    return (
        <div className={styles.custom_select}>
            <select value={selectedMonth} onChange={handleSelectChange}>
                <option value="">Tháng</option>
                <option value="1">Tháng 1</option>
                <option value="2">Tháng 2</option>
                <option value="3">Tháng 3</option>
                <option value="4">Tháng 4</option>
                <option value="5">Tháng 5</option>
                <option value="6">Tháng 6</option>
                <option value="7">Tháng 7</option>
                <option value="8">Tháng 8</option>
                <option value="9">Tháng 9</option>
                <option value="10">Tháng 10</option>
                <option value="11">Tháng 11</option>
                <option value="12">Tháng 12</option>

            </select>
        </div>
    );
};

export default MonthSelect;