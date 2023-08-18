import React, {useEffect, useState} from 'react';
import '../style/WatchHeader.css'
import Search from "./Search";
import {useNavigate} from "react-router-dom";
import UserMenu from "./UserMenu";
import axios from "axios";

const WatchHeader = (props) => {
    const navigate = useNavigate()

    const [isLogged, setIsLogged] = useState(false)

    const getMe = () => {
        const token = localStorage.getItem('token')
        if (token) {
             axios
                .post('https://yuki-anime.up.railway.app/auth/getMe', {
                    token: token
                })
                .then((res) => {
                    console.log(res.data)
                    setIsLogged(true)
                })
                .catch((err) => {
                    setIsLogged(false)
                    console.log('error:' + err)
                })
        }
    }

    useEffect(() => {
        getMe()
    }, [])

    return (
        <div className="watch__header">
            <div className="watch__header-left">
                <button className={`back-arrow ${props.isAnime ? 'arrow-enabled' : ''}`}
                        onClick={() => navigate('/')}
                >
                </button>
                <h1>LOGO</h1>
            </div>
            <div className="watch__header-buttons">
                <Search animes={props.animes}/>
                <UserMenu isLogged={isLogged}/>
            </div>
        </div>
    );
};

export default WatchHeader;