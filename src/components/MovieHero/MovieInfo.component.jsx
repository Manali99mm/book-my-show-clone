import React, { useContext } from 'react';

// context
import { MovieContext } from '../../context/movie.context';

const MovieInfo = () => {
    const { movie } = useContext(MovieContext);

    const genres = movie.genres?.map(({ name }) => name).join(", ")

    return (
        <>
            <div className="flex flex-col gap-3 px-2 lg:gap-6">
                <div className="flex items-center gap-3 md:px-4">
                    <div className="h-6 w-30">
                        <img src="https://in.bmscdn.com/moviemode/tvod/premiere-tag.png" alt="premiere" className="w-full h-full" />
                    </div>
                    <span className="bg-bms-900 p-1 text-xs text-white rounded-xl">Streaming Now</span>
                </div>
                <h1 className="hidden lg:block text-white lg:text-4xl font-bold md:px-4">{movie.original_title}</h1>
                <div className="flex flex-col-reverse lg:flex-col gap-3 lg:gap-8">
                    <div className="text-white font-light flex flex-col gap-2 md:px-4">
                        <h4>4K &bull; {movie.original_language}</h4>
                        <h4>{parseInt(movie.runtime / 60)}h {parseInt(movie.runtime % 60)}m &bull; {genres} &bull; {movie.adult ? "18+" : "13+"} &bull; {movie.release_date}</h4>
                    </div>
                    <div className="flex text-white items-center gap-3 md:px-4 md:w-screen lg:w-full">
                        <button className="bg-navBtn-300 py-3 w-full font-semibold rounded-lg">Rent ₹149</button>
                        <button className="bg-navBtn-300 py-3 w-full font-semibold rounded-lg">Buy ₹689</button>
                    </div>
                </div>
            </div>
        </>
    )
};

export default MovieInfo;
