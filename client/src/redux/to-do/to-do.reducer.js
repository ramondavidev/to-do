import {
    GET_TODOS,
    ADD_TODO,
    GET_TODO,
    REMOVE_TODO
  } from './to-do.types';
  
  const initialState = {
    todos: [],
    todo: null
  };
  
  const todoReducer = (state = initialState, action) => {
    const { type, payload } = action;
  
    switch (type) {
      case GET_TODOS:
        return {
          ...state,
          todos: payload
        };
      case GET_TODO:
        return {
          ...state,
          todo: payload
        };
      case ADD_TODO:
        return {
          ...state,
          todos: [payload, ...state.todos]
        };
      case REMOVE_TODO:
        return {
          ...state,
          todos: state.todos.filter(todo => todo._id !== payload)
        };
      default:
        return state;
    }
  }

  export default todoReducer;