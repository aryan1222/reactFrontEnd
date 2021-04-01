import * as ActionTypes from './ActionTypes'
import { baseUrl } from '../shared/baseUrl';

// DISHES
export const fetchDishes = () =>{
    return function(dispatch) {
        dispatch(dishesLoading(true));

        return fetch(baseUrl + 'dishes')
                .then(response => response.json())
                .then(dishes => dispatch(addDishes(dishes)));
                
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

// COMMENTS
export const fetchComments = () =>{
    return function(dispatch) {
        return fetch(baseUrl + 'comments')
                .then(response => response.json())
                .then(comments => dispatch(addComments(comments)));
    }
}

export const commentsFailed = (error) => {
    return {
        type : ActionTypes.COMMENTS_FAILED,
        payload : error
    }
}

export const addComments = (comments) => {
    return {
        type : ActionTypes.ADD_COMMENTS,
        payload : comments
    }
}

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

// PROMOTIONS
export const fetchPromos = () =>{
    return function(dispatch) {
        dispatch(promosLoading(true));

        return fetch(baseUrl + 'promotions')
                .then(response => response.json())
                .then(promos => dispatch(addPromos(promos)));
    }
}

export const promosLoading = () => {
    return {
        type : ActionTypes.PROMOS_LOADING
    }
}

export const promosFailed = (error) => {
    return {
        type : ActionTypes.PROMOS_FAILED,
        payload : error
    }
}

export const addPromos = (promos) => {
    return {
        type : ActionTypes.ADD_PROMOS,
        payload : promos
    }
}

// LEADERS
export const fetchLeaders = () =>{
    return function(dispatch) {

        dispatch(leadersLoading(true));

        return fetch(baseUrl + 'leaders')
                .then(response => response.json())
                .then(leaders => dispatch(addLeaders(leaders)));
    }
}

export const leadersLoading = () => {
    return {
        type : ActionTypes.LEADERS_LOADING
    }
}

export const leadersFailed = (error) => {
    return {
        type : ActionTypes.LEADERS_FAILED,
        payload : error
    }
}

export const addLeaders = (leaders) => {
    return {
        type : ActionTypes.ADD_LEADERS,
        payload : leaders
    }
}
