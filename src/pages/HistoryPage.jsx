import React, {useEffect, useState} from 'react';
import WatchHeader from "../components/WatchHeader";
import '../style/HistoryPage.css'
import {useNavigate} from "react-router-dom";
import axios from "axios";
import Footer from "../components/Footer";

const HistoryPage = () => {
    const navigate = useNavigate()
    const [anime, setAnime] = useState([])
    const [me, setMe] = useState({})

    const token = localStorage.getItem('token')


    useEffect(() => {
        const getMe = () => {
            if (token) {
                axios
                    .post('https://yuki-anime.up.railway.app/auth/getMe', {
                        token: token
                    })
                    .then((res) => {
                        setMe(res.data)
                    })
                    .catch((err) => {
                        navigate('/auth/login')
                    })
            } else {
                navigate('/auth/login')
            }
        }

        (() => {
            axios
                .get('https://yuki-anime.up.railway.app/collections')
                .then((res) => {
                    setAnime(res.data);
                })
                .catch((err) => {
                    navigate('/auth/login');
                });
        })()

        getMe();
    }, [navigate, token])
    return (
        <>
            <WatchHeader isAnime={true}/>
            <div className="history-page">
                <div className="history__heading">
                    <h2>Історія перегляду</h2>
                    <hr/>
                </div>
                <div className="history">
                    {
                        anime.length && me.history &&
                        me.history.map(historyItem => (
                            <button
                                key={historyItem.animeId}
                                className="animetest"
                                style={{backgroundImage: `url(${anime.find(anime => anime._id === historyItem.animeId).image})`}}
                                onClick={() => {
                                    navigate(`/watch/anime/${historyItem.animeId}/ep/${historyItem.episode}/s/${historyItem.season}`);
                                }}
                            >

                            </button>
                        ))
                    }
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default HistoryPage;