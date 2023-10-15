import React, { useState, useEffect } from 'react'
import HeadlessTippy from '@tippyjs/react/headless'

import { Wrapper as PopperWrapper } from '~/components/Popper';
import LocationItem from '~/components/LocationItem';
import classNames from 'classnames/bind'
import styles from './Search.module.scss'
import { useDebounce } from '~/hook';
import * as searchServices from "~/services/searchService"



const cx = classNames.bind(styles)


const Search = () => {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState();
    const [showResult, setShowResult] = useState(false);
    const debounced = useDebounce(searchValue, 500)

    useEffect(() => {
        if (!debounced.trim()) {
            return
        }

        const fetchApi = async () => {
            const result = await searchServices.search(debounced);
            setSearchResult(result);

        }

        fetchApi();
    }, [debounced]);

    const handleHideResult = () => {
        setShowResult(true);
    }

    const handleKeyDown = (event) => {
        if (event.key === "Escape") {
            event.target.blur();
            setSearchValue('');
            setShowResult(false);
        }
    }

    return (
        <>
            <HeadlessTippy
                interactive
                appendTo={() => document.body}
                visible={showResult && searchResult}
                render={attrs => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h2 className={cx('search-title')}>
                                Recently
                            </h2>
                            <LocationItem data={searchResult} key={searchResult?.id}/>
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
        </>

    )
}

export default Search



