import React, {useEffect, useRef, useState} from 'react';
import video from '../images/video.mp4'
import '../style/Player.css'
import videojs from 'video.js'
import 'video.js/dist/video-js.css'
import 'videojs-contrib-ads'
import axios from "axios";

const VideoPlayer = ({ anime, token, id, season, episode }) => {
    const videoRef = useRef(null)

    let player

    const updateHistory = (token, animeId, season, episode) => {
         axios
            .patch('https://yuki-anime.up.railway.app/auth/updateHistory', {
                token: token,
                animeId: id,
                season: season,
                episode: episode
            })
            .then(res => {
                localStorage.setItem('token', res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    useEffect(() => {
        player = videojs(videoRef.current, {
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

        player.on('play', () => {
            updateHistory(token, id, season, episode)
        })

        player.ads({
            prerollTimeout: 1000,
            adTagUrl: video
        })
        player.on('adsready', () => {
            console.log('adsready event fired');
            player.ads.startLinearAdMode();
        });

        player.on('adstart', () => {
            console.log('adstart event fired');
        });
        player.on('adend', () => {
            console.log('adend event fired');
            player.ads.endLinearAdMode();
        });

        player.on('adtimeout', () => {
            console.log('adtimeout event fired');
        });

        player.on('aderror', (error) => {
            console.log('aderror event fired:', error);
        });


        return () => {
            player.dispose();
        };
    }, []);

    return (
        <div className={'player-wrapper'}>
            <video
                ref={videoRef}
                className="video-js"
            >
                <source src={video} type="video/mp4"/>
            </video>
        </div>
    );
};

export default VideoPlayer;