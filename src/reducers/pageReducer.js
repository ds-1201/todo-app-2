import { CHANGE_PAGE } from "../actions/types";

const initialState = {
  number: "0",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_PAGE: {
      return state.number === action.payload
        ? state
        : { ...state, number: action.payload };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
