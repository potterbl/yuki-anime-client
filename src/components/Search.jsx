import React, { useRef, useState, useEffect } from 'react';
import '../style/Search.css';
import {useNavigate} from "react-router-dom";
import {useGetAllCollectionsQuery} from "../store/collectionApi/collections.api";

const Search = (props) => {
    const navigate = useNavigate()

    const [isSearch, setIsSearch] = useState(false);
    const [search, setSearch] = useState('');
    const [isEmpty, setIsEmpty] = useState(true);
    const searchRef = useRef(null);

    const { data: animes } = useGetAllCollectionsQuery()

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
                onBlur={() => {
                    setTimeout(() => {
                        setIsSearch(false)
                    }, 100)
                }}
                ref={searchRef}
            />
            <div className={`search-results ${isEmpty ? '' : 'search-results-enabled'}`}>
                {animes && animes
                    .filter((anime) => anime.title.toLowerCase().includes(search.toLowerCase()))
                    .map((anime) => (
                        <div
                            className="search-result"
                            key={anime.title}
                            onClick={() => {
                                navigate(`/watch/anime/${anime._id}/ep/1/s/1`)
                            }}
                        >
                            <p className="result-paragraph">{anime.title}</p>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default Search;
