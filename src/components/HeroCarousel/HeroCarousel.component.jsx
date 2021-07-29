import React from 'react';
import Slider from "react-slick";

// Component
import { NextArrow, PrevArrow } from './Arrows.component';

const HeroCarousel = () => {
    const settingsLg = {
        arrows: true,
        autoplay: true,
        dots: true,
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

    const images = [
        "https://in.bmscdn.com/promotions/cms/creatives/1627464448882_rweb29.jpg",
        "https://in.bmscdn.com/promotions/cms/creatives/1625720005981_upgradgrouppagebanner_webshowcase_1280x500.jpg",
        "https://in.bmscdn.com/promotions/cms/creatives/1626372121139_bsm_1280x500_romcom_1.jpg",
        "https://in.bmscdn.com/promotions/cms/creatives/1625135512787_bas_1280x500.jpg",
    ]

    return (
        <>
            <div className="lg:hidden">
                <Slider {...settings}>
                    {images.map((image) => (
                        <div className="w-full h-56 md:h-80 py-3">
                            <img src={image} alt="testing" className="w-full h-full" />
                        </div>
                    ))}
                </Slider>
            </div>
            <div className="hidden lg:block">
                <Slider {...settingsLg}>
                    {images.map((image) => (
                        <div className="w-full h-80 px-2 py-3">
                            <img src={image} alt="testing" className="w-full h-full rounded" />
                        </div>
                    ))}
                </Slider>
            </div>
        </>
    )
}

export default HeroCarousel;