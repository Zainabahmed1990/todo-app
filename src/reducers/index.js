import dataReducer from './data';
import { combineReducers } from 'redux';

const reducers = combineReducers({
	data: dataReducer
});

export default reducers;
