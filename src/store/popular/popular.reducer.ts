import { DELETE_SELECTED_LANGUAGE, SET_NEW_LANGUAGE, SET_SELECTED_LANGUAGE } from "consts";
import { T_InitialPopularState } from "types/Types";

const initialState: T_InitialPopularState = {
    selectedLanguageIndex: 0,
    languages: ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'],
};

// export const initialLanguages = {

// };

const popularReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_SELECTED_LANGUAGE:
            return {
                ...state,
                selectedLanguageIndex: action.payload,
            };
        case SET_NEW_LANGUAGE:
            const isExist = state.languages.some((k) => k.toLowerCase() === action.payload.toLowerCase());
            return {
                ...state,
                languages: isExist ? state.languages : [...state.languages, action.payload],
            };

        case DELETE_SELECTED_LANGUAGE:
            console.log('Deleting language:', action.payload);
            return {
                ...state,
                languages: [...state.languages.filter((i) => i !== action.payload)],
            };
        default:
            return state;
    }
};

export default popularReducer;

