import { combineReducers } from "redux";
import popularReducer from "./popular/popular.reducer";
import appReducer from "./app/app.reducer";


export default combineReducers({
    app: appReducer,
    popular: popularReducer,
    battle: () => null,
});