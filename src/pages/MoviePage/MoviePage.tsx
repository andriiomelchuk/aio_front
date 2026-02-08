import { Helmet } from "react-helmet";
import { Wrapper } from "./styled";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import Loader from "components/Loader/Loader";
import Search from "./Search";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { useAppDispatch } from "store";
import { loadMovies } from "store/movie/movie.thunk";
import { SET_MOVIE_NAME, SET_MOVIE_TYPE } from "consts";



const MoviePage: React.FC = () => {

    const isLoading = useSelector((state: any) => state.rootReducer.app.isLoading);
    const [searchParams, setSearchParams] = useSearchParams();
    let movieType = searchParams.get("type") ?? "";
    let movieName = searchParams.get("name") ?? "";
    const dispatch = useAppDispatch();

    useEffect(() => {
        console.log(movieName, movieType)
        if (!movieName && !movieType) {
            setSearchParams({ name: "matrix", type: "movie" })
        }
    }, [])

    useEffect(() => {
        dispatch(loadMovies(movieName, movieType))
    }, [movieName, movieType])


    if (isLoading) {
        return <Loader />;
    }


    return <>
        <Helmet>
            <h1>Title into head tag</h1>
        </Helmet>

        <Wrapper><h1>Movie Page</h1>

            <Search />

            <MovieList />


        </Wrapper>

    </>
}


export default MoviePage;

function dispatch(arg0: { type: any; payload: boolean; }) {
    throw new Error("Function not implemented.");
}
