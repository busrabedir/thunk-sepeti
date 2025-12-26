import ACTIONS from "../actions/action-types";

const initialState = {
  isLoading: true,
  error: null,
  restaurants: [],
};

const restaurantReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.REST_LOADİNG:
      return { ...state, isLoading: true };

    case ACTIONS.REST_ERROR:
      return { ...state, isLoading: false, error: action.payload };

    case ACTIONS.REST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        restaurants: action.payload,
      };

    default:
      return state;
  }
};

export default restaurantReducer;
