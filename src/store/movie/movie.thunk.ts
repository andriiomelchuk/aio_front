import { fetchMovies } from "api/apis";
import { SET_IS_LOADING, SET_MOVIE_NAME, SET_MOVIE_TYPE, SET_MOVIES } from "consts";

import { AppDispatch } from "store";

export const loadMovies = (name: string, type: string) => async (dispatch: AppDispatch) => {
    dispatch({ type: SET_IS_LOADING, payload: true });

    try {

        const data: any = await fetchMovies(name, type.toLocaleLowerCase());

        dispatch({
            type: SET_MOVIE_NAME,
            payload: name
        })

        dispatch({
            type: SET_MOVIE_TYPE,
            payload: type
        })

        dispatch({
            type: SET_MOVIES,
            payload: data.Search ?? []
        })



    } catch (error) {
        console.error(error)
    } finally {
        dispatch({ type: SET_IS_LOADING, payload: false });
    }


}
