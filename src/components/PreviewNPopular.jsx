import React, {useState} from 'react';
import '../style/PreviewNPopular.css'
import {useNavigate} from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import {Scrollbar, A11y} from "swiper/modules";
import {useGetPopularQuery} from "../store/collectionApi/collections.api";

const PreviewNPopular = (props) => {
    const navigate = useNavigate()

    const {data: animes} = useGetPopularQuery()

    const [slideIndex, setSlideIndex] = useState(0)

    const handleSlideChange = (swiper) => {
        setSlideIndex(swiper.activeIndex)
    }

    return (
        <>
        {animes ?
                <div
                    className="preview__and__popular"
                    style={{backgroundImage: `linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5) 40%, rgba(255,255,255,0) 100%), url(${animes[slideIndex].preview}) `}}
                >
                        <h2 className="textbox-heading">{animes[slideIndex].title}</h2>
                        <div className="textbox-container">
                            <p className="textbox-description">{animes[slideIndex].description.slice(0, 240)}...</p>
                            <button
                                className="textbox-play"
                                onClick={() => navigate(`/watch/anime/${animes[slideIndex]._id}/ep/1/s/1`)}
                            >
                                Дивитись
                            </button>
                        </div>
                    <div className="popular-collection">
                        <h2 className="popular-heading">Популярне</h2>
                        <Swiper
                            modules={{Scrollbar, A11y}}
                            scrollbar={{draggable: true}}
                            navigation
                            onSlideChange={handleSlideChange}
                            slidesPerView={
                            window.innerWidth > 1024?
                            5.15 :
                                window.innerWidth <= 1024 && window.innerWidth > 700 ?
                                    4.15 :
                                    window.innerWidth <= 700 && window.innerWidth > 425 ?
                                        3.15 : 1
                        }
                            className={'swiper'}
                            spaceBetween={10}
                        >
                            {animes.map((anime) => (
                                <SwiperSlide
                                    key={anime._id}
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
                            ))}
                        </Swiper>
                    </div>
                </div>
            :
                null
        }
        </>
    );
};

export default PreviewNPopular;