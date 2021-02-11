import { combineReducers } from 'redux';

import todoReducer from './to-do/to-do.reducer';


export default combineReducers({
    todos: todoReducer
});