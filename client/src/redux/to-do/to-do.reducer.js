import {
    GET_TODOS,
    ADD_TODO,
    GET_TODO,
    REMOVE_TODO
  } from './to-do.types';
  
  const initialState = {
    todos: [],
    todo: null,
    loading: true
  };
  
  const todoReducer = (state = initialState, action) => {
    const { type, payload } = action;
  
    switch (type) {
      case GET_TODOS:
        return {
          ...state,
          todos: payload,
          loading: false
        };
      case GET_TODO:
        return {
          ...state,
          todo: payload,
          loading: false
        };
      case ADD_TODO:
        return {
          ...state,
          todos: [payload, ...state.todos],
          loading: false
        };
      case REMOVE_TODO:
        return {
          ...state,
          todos: state.todos.filter(todo => todo._id !== payload),
          loading: false
        };
      default:
        return state;
    }
  }

  export default todoReducer;