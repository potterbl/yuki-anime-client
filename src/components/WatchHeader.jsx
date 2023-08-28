import React, {useEffect, useState} from 'react';
import '../style/WatchHeader.css'
import Search from "./Search";
import {useNavigate} from "react-router-dom";
import UserMenu from "./UserMenu";
import {useGetMeMutation} from "../store/userApi/user.api.js";

const WatchHeader = (props) => {
    const navigate = useNavigate()

    const [isLogged, setIsLogged] = useState(false)

    const token = localStorage.getItem('token')
    const [getMe] = useGetMeMutation()

    useEffect(() => {
        if( token ) {
            const fetchData = async () => {
                const res = await getMe({token})
                if(res.data){
                    setIsLogged(true)
                }
                if(res.error){
                    localStorage.removeItem('token')
                }
            }
            fetchData()
        }
    }, [getMe, token])



    return (
        <div className="watch__header">
            <div className="watch__header-left">
                <button className={`back-arrow ${props.isAnime ? 'arrow-enabled' : ''}`}
                        onClick={() => navigate('/')}
                >
                </button>
                {
                    (window.innerWidth >= 440 && !props.isAnime) && <h1>YUKI</h1>
                }
            </div>
            <div className="watch__header-buttons">
                <Search animes={props.animes}/>
                <UserMenu isLogged={isLogged}/>
            </div>
        </div>
    );
};

export default WatchHeader;