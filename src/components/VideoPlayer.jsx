import React, {useEffect, useRef, useState} from 'react';
import '../style/Player.css'
import videojs from 'video.js'
import 'video.js/dist/video-js.css'
import 'videojs-contrib-ads'
import {useUpdateHistoryMutation} from "../store/userApi/user.api";
import {useUpdatePopularityMutation} from "../store/collectionApi/collections.api";
import {useGetVideoMutation} from "../store/videosApi/video.api";

const VideoPlayer = ({ anime, token, id, season, episode }) => {
    const videoRef = useRef(null)

    const [videoSource, setVideoSource] = useState('')

    const [updatePopularity] = useUpdatePopularityMutation()
    const [updateHistory] = useUpdateHistoryMutation()
    const [getVideo] = useGetVideoMutation()
    const handleUpdateHistory = async (token, animeId, season, episode) => {
        const payload = { token, animeId, season, episode }

        const res = await updateHistory({payload})
        if(res.data){
            localStorage.setItem('token', res.data.token)
        }
        if(res.error){
            console.log(res.error)
        }
    }

    const fetchVideo = async (animeId, season, episode) => {
        const getVideoRes = await getVideo({animeId, season, episode})

        if(getVideoRes.data){
            setVideoSource(getVideoRes.data.link)
        }
        if(getVideoRes.error){
            console.log(getVideoRes.error)
        }
    }

    useEffect(() => {
        fetchVideo(id,season,episode)
    }, [episode, fetchVideo, id, season])


    useEffect(() => {
        if(videoSource !== ''){
            const player = videojs(videoRef.current, {
                aspectRatio: "16:9",
                controls: true,
                playbackRates: [0.5, 1, 1.5, 2],
                controlBar: {
                    skipButtons: {
                        forward: 5,
                        backward: 5
                    }
                },
                userActions: {
                    hotkeys: function (event) {
                        if (event.key === "ArrowRight") {
                            this.currentTime(this.currentTime() + 5);
                        }
                        if (event.key === "ArrowLeft") {
                            this.currentTime(this.currentTime() - 5);
                        }
                        if (event.key === "ArrowUp") {
                            this.volume(this.volume() + 0.1);
                        }
                        if (event.key === "ArrowDown") {
                            this.volume(this.volume() - 0.1);
                        }
                    }
                }
            });

            player.on("play", () => {
                handleUpdateHistory(token, id, season, episode)
                updatePopularity(id)
            })

            // player.on("ready", () => {
            //     player.ads({
            //         prerollTimeout: 1000,
            //         adTagUrl: video
            //     })
            // })
            //
            // player.on('adsready', () => {
            //     console.log('adsready event fired');
            //     player.ads.startLinearAdMode();
            // });
            //
            // player.on('adstart', () => {
            //     console.log('adstart event fired');
            // });
            // player.on('adend', () => {
            //     console.log('adend event fired');
            //     player.ads.endLinearAdMode();
            // });
            //
            // player.on('adtimeout', () => {
            //     console.log('adtimeout event fired');
            // });
            //
            // player.on('aderror', (error) => {
            //     console.log('aderror event fired:', error);
            // });


            return () => {
                player.dispose();
            };

        }
    }, [videoSource])

    return (
        <div className={'player-wrapper'}>

            {
                videoSource !== '' ?
                    <video
                        ref={videoRef}
                        className={'video-js'}
                    >
                        <source src={videoSource}/>
                    </video>
                    : null
            }

        </div>
    );
};

export default VideoPlayer;