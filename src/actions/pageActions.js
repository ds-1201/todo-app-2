import { CHANGE_PAGE } from "./types";

export const changePage = (value) => (dispatch) => {
  dispatch({ type: CHANGE_PAGE, payload: value });
};
