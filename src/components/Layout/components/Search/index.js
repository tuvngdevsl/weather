import React, { useState, useEffect } from 'react'
import HeadlessTippy from '@tippyjs/react/headless'
import { Wrapper as PopperWrapper } from '../../../Popper';
import LocationItem from '../../../LocationItem';
import classNames from 'classnames/bind'
import styles from './Search.module.scss'
import * as searchServices from '../../../../api-service/searchService'



const cx = classNames.bind(styles)
const API_KEY = "530cdf0be09c4e32bcc163120231210";

const Search = () => {
    const [searchValue, setSearchValue] = useState('')
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);

    useEffect(() => {
        // setSearchResult([1, 2, 3, 4])
        const res = searchServices.search(API_KEY, searchValue);
        console.log(searchValue)
        console.log(res);

    }, []);

    const handleHideResult = () => {
        setShowResult(false);
    }

    const handleKeyDown = (event) => {
        if (event.key === "Escape") {
            event.target.blur();
            setSearchValue('');
            setShowResult(false);
        }
    }

    return (
        <HeadlessTippy
            interactive
            visible={showResult && searchResult.length > 0}
            render={attrs => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h2 className={cx('search-title')}>
                            Recently
                        </h2>
                        <LocationItem></LocationItem>
                        <LocationItem></LocationItem>
                        <LocationItem></LocationItem>
                        <LocationItem></LocationItem>
                    </PopperWrapper>
                </div>
            )}
            onClickOutside={handleHideResult}
        >
            <div className={cx('searchContainer')}>
                <input type="text" placeholder="Find a city or zip code" className={cx('searchInput')}
                    onFocus={() => setShowResult(true)}
                    onKeyDown={handleKeyDown}
                    value={searchValue}
                    onChange={(e) => {
                        setSearchValue(e.target.value);
                    }}
                />
            </div>
        </HeadlessTippy>
    )
}

export default Search



