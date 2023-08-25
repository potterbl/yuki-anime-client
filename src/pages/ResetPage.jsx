import React from 'react';
import WatchHeader from "../components/WatchHeader";
import NewPassword from "../components/NewPassword";
import {useParams} from "react-router-dom";

const ResetPage = () => {
    const {token} = useParams()

    return (
        <div className="sign-page">
            <WatchHeader isAnime={true}/>
            <NewPassword token={token}/>
        </div>
    );
};

export default ResetPage;