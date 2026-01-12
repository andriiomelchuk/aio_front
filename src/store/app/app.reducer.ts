import { SET_IS_LOADING } from "consts";


const initialState: { isLoading: boolean } = {
    isLoading: false,
};

const appReducer = (state: any = initialState, action: any) => { 
    console.log('appReducer action:', action);
    switch (action.type) {
        case SET_IS_LOADING:
            return {
                ...state,
                isLoading: action.payload
            }
        default:
            return state;
    }
}

export default appReducer;