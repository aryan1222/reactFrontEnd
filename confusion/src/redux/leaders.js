import * as ActionTypes from './ActionTypes';

const initialState = {
    isLoading : false,
    leaders : [],
    error : null
}

export const Leaders = (state = initialState, action) => {
    switch(action.type){

        case ActionTypes.ADD_LEADERS:
            return {
                ...state,
                isLoading : false,
                leaders : action.payload,
                error : null
            }

        case ActionTypes.LEADERS_FAILED:
            return {
                ...state,
                isLoading : false,
                leaders : [],
                error : action.payload
            }

        case ActionTypes.LEADERS_LOADING:
            return {
                ...state,
                isLoading : true,
                leaders : [],
                error : null
            }

        default : return state;
    }
}