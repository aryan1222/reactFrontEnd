import { createStore, combineReducers, applyMiddleware } from 'redux';
import {createForms} from 'react-redux-form';
import { Dishes } from './dishes';
import { Comments } from './comments';
import { Leaders } from './leaders';
import { Promotions } from './promotions';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { InitialFeedback } from './forms';

const rootReducer = combineReducers({
    dishes : Dishes,
    comments : Comments,
    promotions : Promotions,
    leaders : Leaders,
    ...createForms({
        feedback : InitialFeedback
    })
});

export const store = createStore(rootReducer, applyMiddleware(thunk, logger));
