import { ACTION_TYPES } from "../actions/postActions";

export const POST_INITIAL_STATES = {
  isLoading: false,
  isError: false,
  data: [],
};

export const postReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.FETCH_START:
      return { isLoading: true, isError: false, data: [] };
    case ACTION_TYPES.FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload,
      };
    case ACTION_TYPES.FETCH_ERROR:
      return { isLoading: false, isError: true, data: [] };
    default:
      return state;
  }
};
