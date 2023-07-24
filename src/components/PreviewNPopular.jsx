import React from 'react';
import '../style/PreviewNPopular.css'
import {useNavigate} from "react-router-dom";

const PreviewNPopular = () => {
    const navigate = useNavigate()
    return (
        <div className="preview__and__popular">
            <div className="preview__and__popular-textbox">
                <h2 className="textbox-heading">Title anime</h2>
                <div className="textbox-container">
                    <p className="textbox-description">Anime description</p>
                    <button className="textbox-play" onClick={() => navigate('/watch/anime')}>Дивитись</button>
                </div>
            </div>
            <div className="popular-collection">
                <h2 className="popular-heading">Популярне</h2>
                <div className="popular-anime">
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

export default PreviewNPopular;