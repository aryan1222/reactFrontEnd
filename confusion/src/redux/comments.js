import * as ActionTypes from './ActionTypes';

const initialState = {
    comments : [],
    error : null
}

export const Comments = (state = initialState, action) => {
    switch(action.type){

        case ActionTypes.ADD_COMMENT : 
            var comment = action.payload;
            comment.id = state.comments.length;
            comment.date = new Date().toISOString();
            return {
                ...state,
                comments : state.comments.concat(comment),
                error : null
            }

        case ActionTypes.COMMENTS_FAILED :
            return {
                ...state,
                comments : [],
                error : action.payload
            }

        case ActionTypes.ADD_COMMENTS :
            return {
                ...state,
                comments : action.payload,
                error : null
            }
            
        default : return state;
    }
}

