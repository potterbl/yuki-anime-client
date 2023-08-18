import React, {useEffect, useState} from 'react';
import PreviewNPopular from "../components/PreviewNPopular";
import WatchCollections from "../components/WatchCollections";
import Footer from "../components/Footer";
import WatchHeader from "../components/WatchHeader";
import axios from "axios";

const MainWatch = () => {
    const [animes, setAnimes] = useState([])

    const getAnimes = () => {
        axios
            .get('https://yuki-anime.up.railway.app/collections')
            .then(res => {
                setAnimes(res.data)
                console.log(123)
            })
            .catch(err => {
                console.log(err)
            })
    }

    useEffect(() => {
        getAnimes()
    }, [])

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