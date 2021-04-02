import * as ActionTypes from './ActionTypes'
import { baseUrl } from '../shared/baseUrl';

// DISHES
export const fetchDishes = () =>{
    return function(dispatch) {
        dispatch(dishesLoading(true));

        return fetch(baseUrl + 'dishes')
                .then(response => {
                    if(response.ok){
                        return response;
                    }else {
                        let error = new Error('Error '+ response.status + ': '+ response.statusText);
                        error.response = response;
                        throw error;
                    }
                }, error => {
                    let errmsg = new Error(error.message);
                    throw errmsg;
                })
                .then(response => response.json())
                .then(dishes => dispatch(addDishes(dishes)))
                .catch(error => dispatch(dishesFailed(error.message)));
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
                .then(response => {
                    if(response.ok){
                        return response;
                    }else {
                        let error = new Error('Error '+ response.status + ': '+ response.statusText);
                        error.response = response;
                        throw error;
                    }
                }, error => {
                    let errmsg = new Error(error.message);
                    throw errmsg;
                })
                .then(response => response.json())
                .then(comments => dispatch(addComments(comments)))
                .catch(error => dispatch(commentsFailed(error.message)));

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

export const addComment = (comment) =>{
    return ({
        type: ActionTypes.ADD_COMMENT,
        payload : {
            
        }
    })
}

export const postComment = (dishId, rating, author, comment) => (dispatch) => {

    const newComment = {
            dishId : dishId,
            rating : rating,
            author : author,
            comment : comment
        }
    
    newComment.date = new Date().toISOString();

    return fetch(baseUrl + 'comments', {
        method : 'POST',
        body : JSON.stringify(newComment),
        headers : {
            'Content-type' : 'application/json'
        },
        credentials : 'same-origin'
    }).then(response => {
        if(response.ok){
            return response;
        }else {
            let error = new Error('Error '+ response.status + ': '+ response.statusText);
            error.response = response;
            throw error;
        }
    }, error => {
        let errmsg = new Error(error.message);
        throw errmsg;
    })
    .then(response => response.json())
    .then(response => dispatch(addComment(response)))
    .catch(error => {
        console.log('Post Comments', error.message);
        alert('Your comment could not be posted\nError: '+error.message); 
    });
}

// PROMOTIONS
export const fetchPromos = () =>{
    return function(dispatch) {
        dispatch(promosLoading(true));

        return fetch(baseUrl + 'promotions')
                .then(response => {
                    if(response.ok){
                        return response;
                    }else {
                        let error = new Error('Error '+ response.status + ': '+ response.statusText);
                        error.response = response;
                        throw error;
                    }
                }, error => {
                    let errmsg = new Error(error.message);
                    throw errmsg;
                })
                .then(response => response.json())
                .then(promos => dispatch(addPromos(promos)))
                .catch(error => dispatch(promosFailed(error.message)));

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
                .then(response => {
                    if(response.ok){
                        return response;
                    }else {
                        let error = new Error('Error '+ response.status + ': '+ response.statusText);
                        error.response = response;
                        throw error;
                    }
                }, error => {
                    let errmsg = new Error(error.message);
                    throw errmsg;
                })
                .then(response => response.json())
                .then(leaders => dispatch(addLeaders(leaders)))
                .catch(error => dispatch(leadersFailed(error.message)));

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
