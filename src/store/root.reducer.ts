import { combineReducers } from "redux";
import popularReducer from "./popular/popular.reducer";
import appReducer from "./app/app.reducer";
import movieReducer from "./movie/movie.reducer";


export default combineReducers({
    app: appReducer,
    popular: popularReducer,
    movie: movieReducer,
    battle: () => null,
});