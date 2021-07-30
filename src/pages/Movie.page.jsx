import React from 'react'
import { FaCcVisa, FaCcApplePay } from "react-icons/fa";

// Component
import MovieHero from '../components/MovieHero/MovieHero.component'
import Cast from '../components/Cast/Cast.component';
import PosterSlider from '../components/PosterSlider/PosterSlider.component'

// Config
import TempPosters from '../config/TempPosters.config'

const Movie = () => {
    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <>
            <MovieHero />
            <div className="my-10 container px-4 lg:w-2/3 lg:ml-20">
                <div className="flex flex-col items-start gap-3">
                    <h2 className="text-3xl font-bold text-gray-800">About the movie</h2>
                    <p>Kong is on a journey to find his true home but gets in the way of an enraged Godzilla. The epic clash is only the beginning of the mystery that lies within the core of the Earth.</p>
                </div>
                <div className="my-8">
                    <hr />
                </div>
                <div className="my-8">
                    <h2 className="text-3xl font-bold text-gray-800 mb-3">Applicable offers</h2>
                    <div className="flex flex-col gap-3 lg:flex-row lg:gap-5">
                        <div className="flex items-start gap-2 bg-yellow-100 p-3 border-2 border-yellow-300 border-dashed rounded-xl">
                            <div className="w-8 h-8">
                                <FaCcVisa className="w-full h-full" />
                            </div>

                            <div className="flex flex-col items-start">
                                <h3 className="text-gray-800 text-xl font-semibold">Visa stream Offer</h3>
                                <p className="text-gray-600">
                                    Get 50% off up to INR 150 on all Visa cards* on BookMyShow Stream.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-2 bg-yellow-100 p-3 border-2 border-yellow-300 border-dashed rounded-xl">
                            <div className="w-8 h-8">
                                <FaCcApplePay className="w-full h-full" />
                            </div>

                            <div className="flex flex-col items-start">
                                <h3 className="text-gray-800 text-xl font-semibold">Filmy Pass</h3>
                                <p className="text-gray-600">
                                    Get Rs.75* off on 3 movies you buy/rent on Stream. Buy Filmy Pass @Rs.99
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="my-8">
                    <hr />
                </div>
                <div className="my-8">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Cast</h2>
                    <div className="flex flex-wrap gap-4">
                        <Cast image="https://in.bmscdn.com/iedb/artist/images/website/poster/large/alexander-skarsgard-1057902-24-03-2017-13-51-10.jpg" name="Alexander" role="Nathan Lind" />
                        <Cast image="https://in.bmscdn.com/iedb/artist/images/website/poster/large/millie-bobby-brown-1079885-24-05-2019-05-20-16.jpg" name="Millie Bobby Brown" role="Madison Russell" />
                        <Cast image="https://in.bmscdn.com/iedb/artist/images/website/poster/large/rebecca-hall-7076-11-09-2017-05-49-56.jpg" name="Rebecca Hall" role="Ilene Andrews" />
                    </div>
                </div>

                <div className="my-8">
                    <hr />
                </div>

                <div className="my-8">
                    <PosterSlider
                        config={settings}
                        images={TempPosters}
                        title="You Might Also like"
                        isDark={false}
                    />
                </div>

                <div className="my-8">
                    <hr />
                </div>

                <div className="my-8">
                    <PosterSlider
                        config={settings}
                        images={TempPosters}
                        title="BMS XCLUSIV"
                        isDark={false}
                    />
                </div>

            </div>
        </>
    )
}

export default Movie;