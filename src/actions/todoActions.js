import {
  FETCH_TODOS,
  NEW_TODO,
  IS_LOADING,
  EDIT_TODO,
  COMPLETE_TODO,
  DELETE_TODO,
} from "./types";
import { getTodos } from "./../service/Todo";
import moment from "moment";

export const fetchTodos = () => async (dispatch) => {
  try {
    dispatch({ type: IS_LOADING });
    const result = await getTodos();
    const time = moment().format("MMM Do YYYY, h:mm:ss");
    // console.log(time);
    const new_data = result.data.map((item) => {
      return {
        ...item,
        createdAt: time,
        completedAt: item.completed ? time : "",
      };
    });
    dispatch({ type: FETCH_TODOS, payload: new_data });
    dispatch({ type: IS_LOADING });
  } catch (err) {
    console.log(err.message);
    alert(err.message);
    dispatch({ type: IS_LOADING });
  }
};

export const createTodo = (data, num) => (dispatch) => {
  const id = Math.random().toString();

  const createdAt = moment().format("MMM Do YYYY, h:mm:ss");
  const new_todo = {
    id,
    createdAt,
    completedAt: "",
    title: data,
    completed: false,
  };

  dispatch({ type: NEW_TODO, payload: new_todo });
};

export const editTodo = (data) => (dispatch) => {
  dispatch({ type: EDIT_TODO, payload: data });
};

export const completeTodo = (data) => (dispatch) => {
  const time = moment().format("MMM Do YYYY, h:mm:ss");
  dispatch({ type: COMPLETE_TODO, payload: data, time });
};

export const deleteTodo = (data) => (dispatch) => {
  console.log(data);
  dispatch({ type: DELETE_TODO, payload: data });
};
