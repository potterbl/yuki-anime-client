import React, {useEffect} from 'react';
import Login from "../components/Login";
import '../style/Sign.css'
import WatchHeader from "../components/WatchHeader";
import SignUp from "../components/SignUp";
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";

const Sign = () => {
    const {method} = useParams()

    const navigate = useNavigate()

    useEffect(() => {
        if (method !== 'login' && method !== 'sign') {
            navigate('/');
        }
    }, [method]);

    const getMe = () => {
        const token = localStorage.getItem('token')
        if (token) {
            axios
                .post('https://yuki-anime.up.railway.app/auth/getMe', {
                    token: token
                })
                .then((res) => {
                    navigate('/')
                })
                .catch((err) => {
                    console.log('error:' + err)
                })
        }
    }
    getMe()

    return (
        <div className="sign-page">
            <WatchHeader isAnime={true}/>
            {method === 'login' ?
                    <Login/>
                : method === 'sign' ?
                    <SignUp/>
                :
                    null
            }
        </div>
    );
};

export default Sign;