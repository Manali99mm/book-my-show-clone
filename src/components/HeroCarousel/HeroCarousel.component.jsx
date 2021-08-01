import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Slider from "react-slick";

// Component
import { NextArrow, PrevArrow } from './Arrows.component';

const HeroCarousel = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        const requestNowPlayingMovies = async () => {
            const getImages = await axios.get("/movie/now_playing");
            setImages(getImages.data.results);
        }

        requestNowPlayingMovies();
    }, [])

    const settingsLg = {
        arrows: true,
        autoplay: true,
        infinite: true,
        centerMode: true,
        centerPadding: "300px",
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    }
    const settings = {
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };

    return (
        <>
            <div className="lg:hidden">
                <Slider {...settings}>
                    {images.map((image) => (
                        <div className="w-full h-56 md:h-80 py-3">
                            <img src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`} alt="movie poster" className="w-full h-full" />
                        </div>
                    ))}
                </Slider>
            </div>
            <div className="hidden lg:block">
                <Slider {...settingsLg}>
                    {images.map((image) => (
                        <div className="w-full h-80 px-2 py-3">
                            <img src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`} alt="movie poster" className="w-full h-full rounded" />
                        </div>
                    ))}
                </Slider>
            </div>
        </>
    )
}

export default HeroCarousel;