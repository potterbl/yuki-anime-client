import React from 'react';
import WatchHeader from '../components/WatchHeader';
import WatchPlayer from '../components/WatchPlayer';
import { useParams } from 'react-router-dom';
import '../style/WatchPage.css';
import {useGetByIdQuery} from "../store/collectionApi/collections.api";

const WatchPage = () => {
    const { id, episode, season } = useParams();

    const token = localStorage.getItem('token')

    const {data: anime} = useGetByIdQuery(id)

    return (
        <div className="watch__page">
            {anime ? (
                <>
                    <WatchHeader isAnime={true} />
                    <WatchPlayer token={token} anime={anime} id={id} episode={episode} season={season}/>
                </>
            ) : null}
        </div>
    );
};

export default WatchPage;