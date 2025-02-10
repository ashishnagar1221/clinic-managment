import { INCREMENT_SUCCESS } from "../constants";

const initialState = {
  count: 0,
};

const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_SUCCESS:
      return { count: state.count + 1 };
    default:
      return state;
  }
};

export default countReducer;
