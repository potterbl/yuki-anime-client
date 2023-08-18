import React, { useRef, useState, useEffect } from 'react';
import '../style/Search.css';
import axios from "axios";

const Search = (props) => {
    const [isSearch, setIsSearch] = useState(false);
    const [search, setSearch] = useState('');
    const [isEmpty, setIsEmpty] = useState(true);
    const searchRef = useRef(null);

    const [animes, setAnimes] = useState([])

    useEffect(() => {
        if (isSearch) {
            searchRef.current.focus();
        } else {
            setSearch('');
        }
    }, [isSearch]);

    useEffect(() => {
        setIsEmpty(search === '');
    }, [search]);

    const getAnimes = () => {
        axios
            .get('https://yuki-anime.up.railway.app/collections')
            .then(res => {
                setAnimes(res.data)
                console.log(123)
            })
            .catch(err => {
                console.log(err)
            })
    }

    useEffect(() => {
        getAnimes()
    }, [])

    return (
        <div className="search">
            <button
                className={`search-button ${isSearch ? '' : 'search-button-enabled'}`}
                onClick={() => setIsSearch(true)}
            ></button>
            <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className={`search-input ${isSearch ? 'search-enabled' : ''}`}
                onBlur={() => setIsSearch(false)}
                ref={searchRef}
            />
            <div className={`search-results ${isEmpty ? '' : 'search-results-enabled'}`}>
                {animes
                    .filter((anime) => anime.title.toLowerCase().includes(search.toLowerCase()))
                    .map((anime) => (
                        <div className="search-result" key={anime.title}>
                            <p className="result-paragraph">{anime.title}</p>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default Search;
