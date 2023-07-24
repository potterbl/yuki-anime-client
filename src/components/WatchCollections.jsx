import React from 'react';
import '../style/WatchCollections.css'
import {useNavigate} from "react-router-dom";

const WatchCollections = () => {
    const navigate = useNavigate()
    return (
        <div className="watch__collections">
            <div className="anime-collection">
                <h2 className="anime-collection-heading">Нове аніме</h2>
                <div className="anime-collection-body">
                    <div className="animetest" onClick={() => navigate('/watch/anime')}></div>
                    <div className="animetest" onClick={() => navigate('/watch/anime')}></div>
                    <div className="animetest" onClick={() => navigate('/watch/anime')}></div>
                    <div className="animetest" onClick={() => navigate('/watch/anime')}></div>
                    <div className="animetest" onClick={() => navigate('/watch/anime')}></div>
                    <div className="animetest" onClick={() => navigate('/watch/anime')}></div>
                    <div className="animetest" onClick={() => navigate('/watch/anime')}></div>
                    <div className="animetest" onClick={() => navigate('/watch/anime')}></div>
                    <div className="animetest" onClick={() => navigate('/watch/anime')}></div>
                </div>
            </div>
            <div className="anime-collection">
                <h2 className="anime-collection-heading">Категорія</h2>
                <div className="anime-collection-body">
                    <div className="animetest" onClick={() => navigate('/watch/anime')}></div>
                    <div className="animetest" onClick={() => navigate('/watch/anime')}></div>
                    <div className="animetest" onClick={() => navigate('/watch/anime')}></div>
                    <div className="animetest" onClick={() => navigate('/watch/anime')}></div>
                    <div className="animetest" onClick={() => navigate('/watch/anime')}></div>
                    <div className="animetest" onClick={() => navigate('/watch/anime')}></div>
                    <div className="animetest" onClick={() => navigate('/watch/anime')}></div>
                    <div className="animetest" onClick={() => navigate('/watch/anime')}></div>
                    <div className="animetest" onClick={() => navigate('/watch/anime')}></div>
                </div>
            </div>
        </div>
    );
};

export default WatchCollections;