import axios from 'axios';
import React, { useState, useEffect } from 'react'

// Components
import EntertainmentCardSlider from '../components/EntertainmentCard/EntertainmentCard.component'
import PosterSlider from '../components/PosterSlider/PosterSlider.component'

export default function HomePage() {
    const [upcomingMovies, setUpcomingMovies] = useState([]);
    const [popularMovies, setPopularMovies] = useState([]);
    const [nowPlaying, setNowPlaying] = useState([]);

    useEffect(() => {
        const requestUpcomingMovies = async () => {
            const getUpcomingMovies = await axios.get("/movie/upcoming");
            setUpcomingMovies(getUpcomingMovies.data.results);
        }

        requestUpcomingMovies();

    }, [])

    useEffect(() => {
        const requestPopularMovies = async () => {
            const getPopularMovies = await axios.get("/movie/popular");
            setPopularMovies(getPopularMovies.data.results);
        }

        requestPopularMovies();

    }, [])

    useEffect(() => {
        const requestNowPlaying = async () => {
            const getNowPlaying = await axios.get("/movie/now_playing");
            setNowPlaying(getNowPlaying.data.results);
        }

        requestNowPlaying();

    }, [])

    return (
        <>
            <div className="flex flex-col gap-10">
                <div className="container mx-auto px-4">
                    <h1 className="text-2xl font-bold text-gray-800 my-4 mx-6">The Best of Entertainment</h1>
                    <EntertainmentCardSlider />
                </div>
                <div className="bg-premiereBg-800 py-12">
                    <div className="container mx-auto px-8 flex flex-col gap-3">
                        <div className="hidden md:flex">
                            <img
                                src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
                                alt="premiere"
                                className="w-full h-full"
                            />
                        </div>
                        <PosterSlider
                            images={upcomingMovies}
                            title="Premieres"
                            subtitle="Brand new releases every friday"
                            isDark
                        />
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-4 my-8">
                <PosterSlider
                    images={nowPlaying}
                    title="Online Streaming events"
                    isDark={false}
                />
            </div>
            <div className="container mx-auto px-4 my-8">
                <PosterSlider
                    images={popularMovies}
                    title="Popular Movies"
                    isDark={false}
                />
            </div>
        </>
    )
}
