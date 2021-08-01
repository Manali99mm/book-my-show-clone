import React, { useContext, useState, useEffect } from 'react'
import { useParams } from 'react-router';
import { FaCcVisa, FaCcApplePay } from "react-icons/fa";
import Slider from 'react-slick';

// Component
import MovieHero from '../components/MovieHero/MovieHero.component'
import Cast from '../components/Cast/Cast.component';
import PosterSlider from '../components/PosterSlider/PosterSlider.component'

// Context
import { MovieContext } from '../context/movie.context';

// Config
import TempPosters from '../config/TempPosters.config'
import axios from 'axios';

const Movie = () => {
    const { id } = useParams();
    const { movie } = useContext(MovieContext);
    const [cast, setCast] = useState([]);
    const [crew, setCrew] = useState([]);
    const [similarMovies, setSimilarMovies] = useState([])
    const [recommended, setRecommended] = useState([])

    useEffect(() => {
        const requestCast = async () => {
            const getCast = await axios.get(`/movie/${id}/credits`);
            setCast(getCast.data.cast);
        }

        requestCast();

    }, [id])

    useEffect(() => {
        const requestCrew = async () => {
            const getCrew = await axios.get(`/movie/${id}/credits`);
            setCrew(getCrew.data.crew);
        }

        requestCrew();

    }, [id])

    useEffect(() => {
        const requestSimilarMovies = async () => {
            const getSimilarMovies = await axios.get(`movie/${id}/similar`)
            setSimilarMovies(getSimilarMovies.data.results)
        }
        requestSimilarMovies();

    }, [id])

    useEffect(() => {
        const requestRecommendedMovies = async () => {
            const getRecommendedMovies = await axios.get(`movie/${id}/recommendations`)
            setRecommended(getRecommendedMovies.data.results)
        }
        requestRecommendedMovies();

    }, [id])

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

    const settingsCastCrew = {
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    initialSlide: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
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
                    <p>{movie.overview}</p>
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
                    <Slider {...settingsCastCrew}>
                        {cast.map((castdata) => (
                            <Cast
                                image={castdata.profile_path && `https://image.tmdb.org/t/p/original${castdata.profile_path}`}
                                name={castdata.original_name}
                                role={castdata.character}
                                isCrew={false}
                            />
                        ))}
                    </Slider>
                </div>

                <div className="my-8">
                    <hr />
                </div>

                <div className="my-8">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Crew</h2>
                    <Slider {...settingsCastCrew}>
                        {crew.map((crewData) => (
                            <Cast
                                image={crewData.profile_path && `https://image.tmdb.org/t/p/original${crewData.profile_path}`}
                                name={crewData.original_name}
                                role={crewData.job}
                                isCrew
                            />
                        ))}
                    </Slider>
                </div>

                <div className="my-8">
                    <hr />
                </div>

                <div className="my-8">
                    <PosterSlider
                        config={settings}
                        images={similarMovies}
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
                        images={recommended}
                        title="BMS XCLUSIV"
                        isDark={false}
                    />
                </div>

            </div>
        </>
    )
}

export default Movie;