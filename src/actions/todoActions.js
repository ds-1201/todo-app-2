import {
  FETCH_TODOS,
  NEW_TODO,
  IS_LOADING,
  EDIT_TODO,
  COMPLETE_TODO,
  DELETE_TODO,
} from "./types";

let actions = {};

actions.fetchTodos = (payload) => ({ type: FETCH_TODOS, payload: payload });

actions.isLoading = () => ({
  type: IS_LOADING,
});

actions.createTodo = (payload) => ({ type: NEW_TODO, payload });

actions.editTodo = (payload) => ({ type: EDIT_TODO, payload });

actions.completeTodo = (data, time) => ({
  type: COMPLETE_TODO,
  payload: data,
  time,
});

actions.deleteTodo = (data) => ({ type: DELETE_TODO, payload: data });

export default actions;
