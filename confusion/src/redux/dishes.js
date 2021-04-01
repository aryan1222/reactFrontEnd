import * as ActionTypes from './ActionTypes'

const initialState = {
    isLoading : true,
    dishes : [],
    error : null
}

export const Dishes = (state = initialState, action) => {
    switch(action.type){

        case ActionTypes.ADD_DISHES :
            return {
                ...state,
                isLoading : false,
                dishes : action.payload,
                error : null  
            }

        case ActionTypes.DISHES_LOADING :
            return {
                ...state,
                isLoading : true,
                dishes : [],
                error : null
            }

        case ActionTypes.DISHES_FAILED :
            return {
                ...state,
                isLoading : false,
                dishes : [],
                error : action.payload
            }
            
        default : return state;
    }
}