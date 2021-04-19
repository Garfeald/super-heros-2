import { combineReducers } from 'redux';
import { supersReducer } from './supersReducer.js';

export const rootReducer = combineReducers({
	supers: supersReducer,
});