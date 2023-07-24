import React from 'react';
import PreviewNPopular from "../components/PreviewNPopular";
import WatchCollections from "../components/WatchCollections";
import Footer from "../components/Footer";
import WatchHeader from "../components/WatchHeader";

const MainWatch = () => {
    return (
        <div>
            <WatchHeader isAnime={false}/>
            <PreviewNPopular/>
            <WatchCollections/>
            <Footer/>
        </div>
    );
};

export default MainWatch;