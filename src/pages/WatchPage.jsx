import React from 'react';
import WatchHeader from "../components/WatchHeader";
import WatchPlayer from "../components/WatchPlayer";

const WatchPage = () => {
    return (
        <div className="watch__page">
            <WatchPlayer/>
            <WatchHeader isAnime={true}/>
        </div>
    );
};

export default WatchPage;