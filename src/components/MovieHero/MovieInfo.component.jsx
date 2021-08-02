import React, { useContext, useState } from 'react';

// Components
import PaymentModal from '../PaymentModal/Payment.component';

// context
import { MovieContext } from '../../context/movie.context';

const MovieInfo = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [price, setPrice] = useState(0);
    const [paymentTitle, setPaymentTitle] = useState("");
    const [paymentDescription, setPaymentDescription] = useState("");

    const { movie } = useContext(MovieContext);

    const genres = movie.genres?.map(({ name }) => name).join(", ")

    const rentMovies = () => {
        setIsOpen(true);
        setPrice(149);
        setPaymentTitle("Rent")
        setPaymentDescription("You can rent this movie for 30 days but will have 2 days to watch it once you start playback (available for download)")
    }

    const buyMovies = () => {
        setIsOpen(true);
        setPrice(599);
        setPaymentTitle("Buy")
        setPaymentDescription("Watch the movie any time after purchasing it (available for download)")
    }

    return (
        <>
            <PaymentModal title={paymentTitle} description={paymentDescription} isOpen={isOpen} setIsOpen={setIsOpen} price={price} />
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
                        <button onClick={rentMovies} className="bg-navBtn-300 py-3 w-full font-semibold rounded-lg">Rent ₹149</button>
                        <button onClick={buyMovies} className="bg-navBtn-300 py-3 w-full font-semibold rounded-lg">Buy ₹599</button>
                    </div>
                </div>
            </div>
        </>
    )
};

export default MovieInfo;
