import React from 'react';
import '../style/WatchHeader.css'
import Search from "./Search";
import {useNavigate} from "react-router-dom";

const WatchHeader = (props) => {
    const navigate = useNavigate()
    return (
        <div className="watch__header">
            <div className="watch__header-left">
                <button className={`back-arrow ${props.isAnime ? 'arrow-enabled' : ''}`}
                        onClick={() => navigate('/watch')}
                >
                </button>
                <h1>LOGO</h1>
            </div>
            <div className="watch__header-buttons">
                <Search/>
            </div>
        </div>
    );
};

export default WatchHeader;