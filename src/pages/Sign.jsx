import React, {useEffect} from 'react';
import Login from "../components/Login";
import '../style/Sign.css'
import WatchHeader from "../components/WatchHeader";
import SignUp from "../components/SignUp";
import {useNavigate, useParams} from "react-router-dom";
import {useGetMeMutation} from "../store/userApi/user.api";
import Forget from "../components/Forget";

const Sign = () => {
    const {method} = useParams()

    const navigate = useNavigate()

    useEffect(() => {
        if (method !== 'login' && method !== 'sign' && method !== 'forget') {
            navigate('/');
        }
    }, [method, navigate]);

    const token = localStorage.getItem('token')
    const [getMe] = useGetMeMutation()

        const fetchData = async () => {
            const res = await getMe({token})
            if (res.data) {
                navigate('/')
            }
        };

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className="sign-page">
            <WatchHeader isAnime={true}/>
            {method === 'login' ?
                <Login/>
                : method === 'sign' ?
                    <SignUp/>
                    : method === 'forget' ?
                        <Forget/> :
                        null
            }
        </div>
    );
};

export default Sign;