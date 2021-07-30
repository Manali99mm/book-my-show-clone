import React from 'react';
import Slider from 'react-slick';

// Component
import Poster from '../Poster/Poster.component';

// Config
import PosterCarouselSettings from '../../config/PosterCarousel.config';

const PosterSlider = (props) => {
    const sliderConfig = props.config ? props.config : PosterCarouselSettings;
    return (
        <>
            <div className="flex flex-col items-start px-3 my-2">
                <h3 className={`text-2xl font-bold ${props.isDark ? "text-white" : "text-gray-800"}`}>{props.title}</h3>
                <p className={`text-sm ${props.isDark ? "text-white" : "text-gray-800"}`}>{props.subtitle}</p>
            </div>
            <Slider {...sliderConfig} >
                {props.images.map((image) => (
                    <Poster {...image} isDark={props.isDark} />
                ))}
            </Slider>
        </>
    )
}

export default PosterSlider;
