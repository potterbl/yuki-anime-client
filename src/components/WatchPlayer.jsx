import React, {useState} from 'react';
import '../style/WatchPlayer.css'
import VideoPlayer from "./VideoPlayer";
import {useNavigate} from "react-router-dom";

const WatchPlayer = (props) => {
    const {id, episode, season, anime, token} = props
    const [isMenu, setIsMenu] = useState(false)

    const navigate = useNavigate()
    return (
        <div className="watch__player">
            <div className="watch__player-left">

                <div className="watch__player-player">
                    <VideoPlayer episode={episode} season={season} id={id} token={token}/>
                </div>
                <div className="watch__player-left-description">
                    <h2 className="watch__player-left-heading">{anime.title}</h2>
                    <p className="watch__player-left-paragraph">{anime.description}</p>
                </div>

            </div>
            <div className={`watch__player-right ${isMenu ? 'menu-shown' : ''}`}>
                {   window.innerWidth <= 688 && anime.videos?
                        anime.videos.map((seasonArr, seasonIndex) => (
                            <>
                                <button
                                    className={`menu-episode ${isMenu ? 'menu-episode-shown' : ''}`}
                                    onClick={() => setIsMenu(!isMenu)}
                                >

                                </button>
                                <div key={`season-${seasonIndex}`}
                                     className="watch__player-right-heading watch__player-right-row">
                                    <h2 className="episode">Season {seasonIndex + 1}</h2>
                                </div>
                                {
                                    seasonArr.map((episodeObj, episodeIndex) => (
                                        <div key={`season-${seasonIndex}-episode-${episodeIndex}`}
                                             className={`watch__player-right-row ${(seasonIndex + 1).toString() === season.toString() && episodeObj.episode.toString() === episode.toString() ? 'watch__player-right-row-active' : ''}`}
                                            onClick={() => {
                                                navigate(`/watch/anime/${id}/ep/${episodeIndex + 1}/s/${seasonIndex + 1}`)
                                                window.location.reload()
                                            }}
                                        >
                                            <p className="episode">Episode {episodeObj.episode}</p>
                                            <div className="episode-description">
                                                <p>{episodeObj.description}</p>
                                            </div>
                                        </div>
                                    ))
                                }
                            </>
                        ))
                    :
                    anime.videos &&
                        anime.videos.map((seasonArr, seasonIndex) => (
                            <>
                                <div key={`season-${seasonIndex}`}
                                     className="watch__player-right-heading watch__player-right-row">
                                    <h2 className="episode">Season {seasonIndex + 1}</h2>
                                </div>
                                {
                                    seasonArr.map((episodeObj, episodeIndex) => (
                                        <div key={`season-${seasonIndex}-episode-${episodeIndex}`}
                                             className={`watch__player-right-row ${(seasonIndex + 1).toString() === season.toString() && episodeObj.episode.toString() === episode.toString() ? 'watch__player-right-row-active' : ''}`}
                                            onClick={() => {
                                                navigate(`/watch/anime/${id}/ep/${episodeIndex + 1}/s/${seasonIndex + 1}`)
                                                window.location.reload()
                                            }}
                                        >
                                            <p className="episode">Episode {episodeObj.episode}</p>
                                            <div className="episode-description">
                                                <p>{episodeObj.description}</p>
                                            </div>
                                        </div>
                                    ))
                                }
                            </>
                        ))
                }
            </div>


        </div>
    )
        ;
};

export default WatchPlayer;