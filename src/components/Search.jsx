import React, {useRef, useState, useEffect} from 'react';
import '../style/Search.css'
const Search = () => {
    const [isSearch, setIsSearch] = useState(false)
    const [search, setSearch] = useState('')
    const [isEmpty, setIsEmpty] = useState(true)
    const searchRef = useRef(null)

    useEffect(() => {
        if (isSearch) {
            searchRef.current.focus();
        } else {
            setSearch('')
        }
    }, [isSearch]);

    useEffect(() => {
        if(search === ''){
            setIsEmpty(true)
        } else {
            setIsEmpty(false)
        }
    }, [search])

    const anime = ['barby', 'ryan gosling', 'naruto']

    return (
        <div className="search">
            <button
                className={`
                search-button 
                ${isSearch ? '' : 'search-button-enabled'}
                `}
                onClick={() => setIsSearch(true)}
            >
            </button>
            <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className={`search-input ${isSearch ? 'search-enabled' : ''}`}
                onBlur={() => setIsSearch(false)}
                ref={searchRef}
            />
            <div className={`search-results ${isEmpty ? '' : 'search-results-enabled'}`}>
                {anime
                    .filter((a) => a.includes(search))
                    .map((anime) => (
                        <div className="search-result" key={anime}>
                            <p className="result-paragraph">{anime}</p>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default Search;