import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./root.reducer";
import { useDispatch } from "react-redux";
import {createLogger} from "redux-logger";


const logger = createLogger({
    collapsed: true
})

const store = configureStore({
    reducer: {rootReducer},
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(logger)
    ,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

export default store;