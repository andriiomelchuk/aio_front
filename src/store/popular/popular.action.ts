import { DELETE_SELECTED_LANGUAGE, SET_NEW_LANGUAGE, SET_SELECTED_LANGUAGE } from "consts";

export const setSelectedLanguage = (payload: any) => ({
    type: SET_SELECTED_LANGUAGE,
    payload,
})

export const setNewLanguage = (payload: any) => ({
    type: SET_NEW_LANGUAGE,
    payload,
})

export const deleteSelectedLanguage = (payload: any) => ({
    type: DELETE_SELECTED_LANGUAGE,
    payload,
})