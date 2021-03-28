import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Dishes } from './dishes';
import { Comments } from './comments';
import { Leaders } from './leaders';
import { Promotions } from './promotions';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    dishes : Dishes,
    comments : Comments,
    promotions : Promotions,
    leaders : Leaders
});

export const configureStore = () => {
    const store = createStore(rootReducer, applyMiddleware(thunk, logger));
    return store;
}