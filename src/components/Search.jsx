import React, { useRef, useState, useEffect } from 'react';
import '../style/Search.css';
import {useNavigate} from "react-router-dom";
import {useGetAllCollectionsQuery} from "../store/collectionApi/collections.api";
import {useDispatch} from "react-redux";
import {actions} from "../store/slices/header.slice";

const Search = (props) => {
    const dispatch = useDispatch()

    const navigate = useNavigate()

    const [isSearch, setIsSearch] = useState(false);
    const [search, setSearch] = useState('');
    const [isEmpty, setIsEmpty] = useState(true);
    const searchRef = useRef(null);

    const [mobileBlock, setMobileBlock] = useState(false)

    const handleScroll = () => {
        if (window.innerWidth < 834) {
            setMobileBlock(true)
            setTimeout(() => {
                setMobileBlock(false)
            }, 500)
        }
    }

    const { data: animes } = useGetAllCollectionsQuery()

    useEffect(() => {
        if (isSearch) {
            searchRef.current.focus();
            dispatch(actions.changeSearch(true))
        } else {
            setSearch('');
            dispatch(actions.changeSearch(false))
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
                    if(!mobileBlock) {
                        setTimeout(() => {
                            setIsSearch(false)
                        }, 100)
                    }
                }}
                ref={searchRef}
            />
            <div
                onScroll={handleScroll}
                className={`search-results ${isEmpty ? '' : 'search-results-enabled'}`}
            >
                {animes && animes
                    .filter((anime) => anime.title.toLowerCase().includes(search.toLowerCase()))
                    .map((anime) => (
                        <div
                            className="search-result"
                            key={anime.title}
                            onClick={() => {
                                navigate(`/watch/anime/${anime._id}/ep/1/s/1`)
                                window.location.reload()
                            }}
                        >
                            <p className="result-paragraph">
                                {window.innerWidth >= 625
                                    ? anime.title
                                    : window.innerWidth < 625 &&
                                    (anime.title.split(' ').length >= 5 || anime.title.length >= 28)
                                        ? anime.title.length >= 28
                                            ? anime.title.slice(0, 28) + '...'
                                            : anime.title
                                            .split(' ')
                                            .slice(0, 5)
                                            .join(' ') + '...'
                                        : anime.title}
                            </p>

                        </div>
                    ))}
            </div>
        </div>
    );
};

export default Search;
