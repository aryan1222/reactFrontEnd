import * as ActionTypes from './ActionTypes';

const initialState = {
    isLoading : false,
    promotions : [],
    error : null
}

export const Promotions = (state = initialState, action) => {
    switch(action.type){
        case ActionTypes.ADD_PROMOS :
            return {
                ...state,
                isLoading : false,
                promotions : action.payload,
                error : null
            }

        case ActionTypes.PROMOS_LOADING :
            return {
                ...state,
                isLoading : true,
                promotions : [],
                error : null
            }

        case ActionTypes.PROMOS_FAILED : 
            return {
                ...state,
                isLoading : false,
                promotions : [],
                error : action.payload
            }

        default : return state;
    }
}