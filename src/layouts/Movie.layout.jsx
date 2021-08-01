import axios from 'axios';
import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router';

// Component
import MovieNavbar from '../components/Navbar/MovieNavbar.component';

// Context
import { MovieContext } from '../context/movie.context';

const MovieLayout = (props) => {
    const { id } = useParams();
    const { movie, setMovie } = useContext(MovieContext);

    useEffect(() => {
        const requestMovie = async () => {
            const getMovieData = await axios.get(`/movie/${id}`)
            setMovie(getMovieData.data);
        }
        requestMovie();

    }, [id, setMovie])

    return (
        <>
            <MovieNavbar />
            {props.children}
        </>
    )
}

export default MovieLayout;