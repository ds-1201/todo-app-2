import {
  FETCH_TODOS,
  NEW_TODO,
  IS_LOADING,
  EDIT_TODO,
  DELETE_TODO,
  COMPLETE_TODO,
} from "../actions/types";

const initialState = {
  items: [],
  item: {},
  isLoading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_LOADING: {
      return { ...state, isLoading: !state.isLoading };
    }
    case FETCH_TODOS: {
      return { ...state, items: action.payload };
    }
    case NEW_TODO: {
      return { ...state, items: [...state.items, action.payload] };
    }
    case COMPLETE_TODO: {
      let new_list = state.items;

      new_list?.forEach((item) => {
        if (item.id === action.payload.id) {
          item.completed = action.value;
        }
      });

      return { ...state, items: new_list };
    }
    case EDIT_TODO: {
      let new_list = state.items;
      new_list?.forEach((item) => {
        if (item.id === action.payload.id) {
          item.title = action.payload.title;
        }
      });
      return { ...state, items: new_list };
    }
    case DELETE_TODO: {
      let new_list = state?.items?.filter(
        (item) => item.id !== action.payload.id
      );
      return { ...state, items: [...new_list] };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
