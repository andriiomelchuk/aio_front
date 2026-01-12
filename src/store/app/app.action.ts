import { SET_IS_LOADING } from "consts";

export const setIsLoading = (payload: any) => ({
    type: SET_IS_LOADING,
    payload,
})