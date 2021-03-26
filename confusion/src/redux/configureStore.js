import { createStore, combineReducers } from 'redux';
import { Dishes } from './dishes';
import { Comments } from './comments';
import { Leaders } from './leaders';
import { Promotions } from './promotions';

const rootStore = combineReducers({
    dishes : Dishes,
    comments : Comments,
    promotions : Promotions,
    leaders : Leaders
});

export const configureStore = () => {
    const store = createStore(rootStore);
    return store;
}