import React, {useState} from 'react';
import '../style/Trending.css'
const Trending = () => {
    const [position, setPosition] = useState(0);

    const moveLeft = () => {
        if (position > 0) {
            setPosition(position - 1);
        } else {
            setPosition(4)
        }
    };

    const moveRight = () => {
        if (position < 4) {
            setPosition(position + 1);
        } else {
            setPosition(0)
        }
    };

    let x = [0, 1, 2, 3, 4, 5, 6, 7, 8]

    return (
        <div className="trending">
            <h2 className="thin-caption">Популярне</h2>
            <div className="carousel-trending" style={{transform: `translateX(-${position * 11.11}%)` }}>
                {x.map(x => {
                    return <div className="trending-box"></div>
                })}
            </div>
            <button className="arrow-left" onClick={moveLeft}>

            </button>
            <button className="arrow-right" onClick={moveRight}>

            </button>
            <div className="carousel-buttons">
                <button
                    className={
                    `carousel-radio 
                    ${position === 0 ? 'carousel-active' : ''}
                    `}
                    onClick={() => setPosition(0)}
                >
                </button>
                <button
                    className={`
                    carousel-radio 
                    ${position === 1 ? 'carousel-active' : ''}
                    `}
                    onClick={() => setPosition(1)}
                >
                </button>
                <button
                    className={`
                    carousel-radio 
                    ${position === 2 ? 'carousel-active' : ''}
                    `}
                    onClick={() => setPosition(2)}
                >
                </button>
                <button
                    className={`
                    carousel-radio 
                    ${position === 3 ? 'carousel-active' : ''}
                    `}
                    onClick={() => setPosition(3)}
                >
                </button>
                <button
                    className={`
                    carousel-radio 
                    ${position === 4 ? 'carousel-active' : ''}
                    `}
                    onClick={() => setPosition(4)}
                >
                </button>
            </div>
        </div>
    );
};

export default Trending;