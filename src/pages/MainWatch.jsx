import React from 'react';
import PreviewNPopular from "../components/PreviewNPopular";
import WatchCollections from "../components/WatchCollections";
import Footer from "../components/Footer";
import WatchHeader from "../components/WatchHeader";
import {useGetAllCollectionsQuery} from "../store/collectionApi/collections.api.js";
import {useDispatch} from "react-redux";

const MainWatch = () => {

    const {data: animes, isLoading} = useGetAllCollectionsQuery()

    if(isLoading){
        return <div>Loading</div>
    }

    return (
        <div>
            <WatchHeader isAnime={false}/>
            <PreviewNPopular animes={animes}/>
            <WatchCollections animes={animes}/>
            <Footer/>
        </div>
    );
};

export default MainWatch;