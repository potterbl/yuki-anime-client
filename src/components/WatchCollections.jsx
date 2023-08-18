import React from 'react';
import '../style/WatchCollections.css'
import {useNavigate} from "react-router-dom";
import {A11y, Scrollbar} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";

const WatchCollections = (props) => {
    const {animes} = props

    const navigate = useNavigate()
    return (
        <div className="watch__collections">
            <div className="anime-collection">
                <h2 className="anime-collection-heading">Нове аніме</h2>
                <Swiper
                    modules={{Scrollbar, A11y}}
                    scrollbar={{draggable: true}}
                    slidesPerView={5.15}
                    className={'swiper'}
                    spaceBetween={10}
                >
                    {
                        animes.map(anime => (
                            <SwiperSlide
                                onClick={() => navigate(`/watch/anime/${anime._id}/ep/1/s/1`)}
                            >
                                <div className="anime-container">
                                    <button
                                        className="anime"
                                        style={{backgroundImage: `url(${anime.preview})`}}
                                    >

                                    </button>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
            <div className="anime-collection">
                <h2 className="anime-collection-heading">Категорія</h2>
                <Swiper
                    modules={{Scrollbar, A11y}}
                    scrollbar={{draggable: true}}
                    slidesPerView={5.15}
                    className={'swiper'}
                    spaceBetween={10}
                >
                    {
                        animes.map(anime => (
                            <SwiperSlide
                                onClick={() => navigate(`/watch/anime/${anime._id}/ep/1/s/1`)}
                            >
                                <div className="anime-container">
                                    <button
                                        className="anime"
                                        style={{backgroundImage: `url(${anime.preview})`}}
                                    >

                                    </button>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default WatchCollections;