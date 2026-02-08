import { SET_MOVIE_NAME, SET_MOVIE_TYPE, SET_MOVIES } from "consts";
import { T_InitialMovieState } from "types/Types";

const initialState: T_InitialMovieState = {
    name: "star wars",
    type: "series",
    movies: [],
    movie: {
        Poster: "",
        Title: "",
        Type: "",
        Year: "",
        imdbID: ""
    },

}




const movieReducer = (state = initialState, action: any) => {

    switch (action.type) {
        case SET_MOVIES:
            return {
                ...state,
                movies: action.payload,
            };
            break;
        case SET_MOVIE_NAME:
            return {
                ...state,
                name: action.payload
            };
            break;
        case SET_MOVIE_TYPE:
            return {
                ...state,
                type: action.payload
            };
            break;
        default:
            return state;
    }

}

export default movieReducer;