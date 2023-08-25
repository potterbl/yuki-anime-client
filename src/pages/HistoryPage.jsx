import React, {useEffect, useState} from 'react';
import WatchHeader from "../components/WatchHeader";
import '../style/HistoryPage.css'
import {useNavigate} from "react-router-dom";
import Footer from "../components/Footer";
import {useGetMeMutation} from "../store/userApi/user.api.js";
import {useGetMultiplyMutation} from "../store/collectionApi/collections.api.js";

const HistoryPage = () => {
    const navigate = useNavigate()

    const [isLoading, setIsLoading] = useState(true)
    const [me, setMe] = useState({})
    const [animeHistory, setAnimeHistory] = useState([])

    const token = localStorage.getItem('token')

    const [getMe] = useGetMeMutation()
    const [getHistoryArray] = useGetMultiplyMutation()

    useEffect(() => {
        if (token) {
            const fetchMe = async () => {
                const getMeRes = await getMe({token})

                if (getMeRes.data) {
                    setMe(getMeRes.data)
                    if(getMeRes.data.history.length > 0){
                        const fetchHistory = async () => {
                            const historyArray = getMeRes.data.history.map(historyItem => historyItem.animeId);
                            const getHistoryArrayRes = await getHistoryArray(historyArray)

                            if(getHistoryArrayRes.data){
                                setAnimeHistory(getHistoryArrayRes.data)
                            }
                            if(getHistoryArrayRes.error){
                                console.log(getHistoryArrayRes.error)
                            }
                        }
                        fetchHistory()
                    }
                }
                if (getMeRes.error) {
                    navigate('/auth/login')
                }
            }
            fetchMe()
        } else {
            navigate('/auth/login')
        }
    }, [token, navigate]);

    useEffect(() => {
        if(animeHistory.length && Object.keys(me).length){
            setIsLoading(false);
        }
    }, [animeHistory, me]);

    return (
        <>
            <WatchHeader isAnime={true}/>
            <div className="history-page">
                <div className="history__heading">
                    <h2>Історія перегляду</h2>
                    <hr/>
                </div>
                <div className="history">
                    {
                        !isLoading &&
                        animeHistory.map(historyItem => (
                            <button
                                key={historyItem._id}
                                className="animetest"
                                style={{backgroundImage: `url(${historyItem.image})`}}
                                onClick={() => {
                                    navigate(`/watch/anime/${historyItem._id}/ep/${me.history.find(h => h.animeId === historyItem._id).episode}/s/${me.history.find(h => h.animeId === historyItem._id).season}`);
                                }}
                            >

                            </button>
                        ))
                    }
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default HistoryPage;