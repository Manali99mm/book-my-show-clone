import React from 'react'

// Component
import MovieNavbar from '../components/Navbar/MovieNavbar.component';

const MovieLayout = (props) => {
    return (
        <>
            <MovieNavbar />
            {props.children}
        </>
    )
}

export default MovieLayout;