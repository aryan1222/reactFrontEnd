import * as ActionTypes from './ActionTypes'
import {DISHES} from '../shared/dishes';

export const addComment = (dishId, rating, author, comment) =>{
    return ({
        type: ActionTypes.ADD_COMMENT,
        payload : {
            dishId : dishId,
            rating : rating,
            author : author,
            comment : comment
        }
    })
}

export const fetchDishes = () =>{
    return function(dispatch) {
        dispatch(dishesLoading(true));

        setTimeout(()=> {
            dispatch(addDishes(DISHES));
        }, 2000);
    }
}

export const dishesLoading = () => {
    return {
        type : ActionTypes.DISHES_LOADING
    }
}

export const dishesFailed = (error) => {
    return {
        type : ActionTypes.DISHES_FAILED,
        payload : error
    }
}

export const addDishes = (dishes) => {
    return {
        type : ActionTypes.ADD_DISHES,
        payload : dishes
    }
}