import { T_Movies } from "types/Types";
import { MovieImg, MovieInfo, MovieItem, MovieItems, MovieTitle } from "./styled";
import { useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";

const MovieList = () => {

    const movies: T_Movies = useSelector((state: any) => state.rootReducer.movie.movies);
    const prevMoviesRef = useRef<T_Movies>([]);

    useEffect(() => {
        if (movies.length > 0) {
            prevMoviesRef.current = movies
        }
    }, [movies])

    const moviesToRender = movies?.length > 0 ? movies : prevMoviesRef.current

    return <>

        <MovieItems>{moviesToRender.map((movie) =>
            <MovieItem key={movie.imdbID}>
                <MovieInfo>
                    <div>{movie.Year}</div>
                    <div>{movie.Type}</div>
                </MovieInfo>
                <MovieImg src={movie.Poster} alt={movie.Title} />
                <MovieTitle onClick={() => console.log(movie.Type)}>{movie.Title}</MovieTitle>

            </MovieItem>
        )}</MovieItems>
    </>

}

export default MovieList