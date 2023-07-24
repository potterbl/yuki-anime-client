import React, {useState} from 'react';
import '../style/WatchPlayer.css'
import video from '../images/mainBG.png'
const WatchPlayer = () => {
    const [episode, setEpisode] = useState(1)

    return (
        <div className="watch__player">
            <div className="watch__player-left">

                <div className="watch__player-player">
                    <img src={video} alt=""/>
                </div>
                <div className="watch__player-left-description">
                    <h2 className="watch__player-left-heading">Episode {episode}</h2>
                    <p className="watch__player-left-paragraph">Anime description  lalalallaal lalalallaal lalalallaal lalalallaal lalalallaal lalalallaal lalalallaal lalalallaal lalalallaal lalalallaal lalalal lalalalall lalalalla lalalall lalalalallalala</p>
                </div>

            </div>
            <div className="watch__player-right">
                <div className="watch__player-right-heading watch__player-right-row">
                    <h2 className="episode">Season</h2>
                </div>
                <div className={`watch__player-right-row ${episode === 1 ? 'watch__player-right-row-active' : ''}`} onClick={() => setEpisode(1)}>
                    <p className="episode">Episode 1</p>
                    <div className="episode-description">
                        <p>Episode description</p>
                    </div>
                </div>
                <div className={`watch__player-right-row ${episode === 2 ? 'watch__player-right-row-active' : ''}`} onClick={() => setEpisode(2)}>
                    <p className="episode">Episode 2</p>
                    <div className="episode-description">
                        <p>Episode description</p>
                    </div>
                </div>
                <div className={`watch__player-right-row ${episode === 3 ? 'watch__player-right-row-active' : ''}`} onClick={() => setEpisode(3)}>
                    <p className="episode">Episode 3</p>
                    <div className="episode-description">
                        <p>Episode description</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WatchPlayer;