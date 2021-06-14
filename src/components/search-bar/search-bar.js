import React, {useRef} from 'react'
import './search-bar.scss'

import { ReactComponent as SearchIcon } from '../../assets/images/search-text-field.svg';

export const SearchBar = (props) => {

    const searchTextRef = useRef();

    function handleEnterClick(event) {
        if (event.keyCode === 13) {
            props.executeSearch(searchTextRef.current.value)
        }
    }

    return (
        <div className='pc-search-container'>
            <div className="pc-search-container__searchbar">
                <div className="pc-search-container__searchbar__icon" onClick={() => props.executeSearch(searchTextRef.current.value)}>
                    <SearchIcon stroke="white" />
                </div>
                <input className="pc-search-container__searchbar__input" type="text" onKeyUp={handleEnterClick} ref={searchTextRef}/>
            </div>
        </div>
    )
}

export default SearchBar;