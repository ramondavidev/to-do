import api from '../../utils/api';

import {
    GET_TODOS,
    GET_TODO,
    ADD_TODO,
    REMOVE_TODO
} from './to-do.types';



export const getTodos = () => async dispatch => {
  try {
    const res = await api.get('/');
    dispatch({
      type: GET_TODOS,
      payload: res.data
    });
  } catch (error) {
    console.log(error);
  }
}

export const getTodo = ( id ) => async dispatch => {
  try {
    const res = await api.get(`/${id}`);
    dispatch({
      type: GET_TODO,
      payload: res.data
    });
  } catch (error) {
    console.log(error);
  }
}

export const addToDo = ( title, description, done ) => async dispatch => {
  try {
    const res = await api.post('/', { title, description, done });
    
    dispatch({
      type: ADD_TODO,
      payload: res.data
    });
  } catch (error) {
   console.log(error);
  }
}

export const editToDo = ( form ) => async dispatch => {
  const { title, description, done, id } = form;
  try {
    console.log(title, description, done, id);
    await api.put(`/${id}`, { title, description, done});
    const res = await api.get('/');
    dispatch({
      type: GET_TODOS,
      payload: res.data
    });
  } catch (error) {
   console.log(error);
  }
}

export const deleteToDo = ( id ) => async dispatch => {
  try {
      await api.delete(`/${id}`);
      dispatch({
        type: REMOVE_TODO,
        payload: id
      });

  } catch (error) {
    console.log(error);
  }
}