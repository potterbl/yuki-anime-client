import React, { useEffect, useState } from 'react';
import WatchHeader from '../components/WatchHeader';
import WatchPlayer from '../components/WatchPlayer';
import { useParams } from 'react-router-dom';
import '../style/WatchPage.css';
import axios from 'axios';

const WatchPage = () => {
    const [anime, setAnime] = useState([]);
    const { id, episode, season } = useParams();

    const token = localStorage.getItem('token')

    useEffect(() => {
        (() => {
            axios
                .get(`https://yuki-anime.up.railway.app/collections/${id}`)
                .then((res) => {
                    setAnime(res.data);
                })
                .catch((err) => {
                    console.log(err);
                });
        })()

    }, [id]);

    return (
        <div className="watch__page">
            <WatchHeader isAnime={true} />
            <WatchPlayer token={token} anime={anime} id={id} episode={episode} season={season}/>
        </div>
    );
};

export default WatchPage;