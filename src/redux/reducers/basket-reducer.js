import ACTIONS from "../actions/action-types";

const initialState = {
  isLoading: true,
  error: null,
  basket: [],
};

const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.BASKET_LOADING:
      return { ...state, isLoading: true };

    case ACTIONS.BASKET_ERROR:
      return { ...state, isLoading: false, error: action.payload };

    case ACTIONS.BASKET_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        basket: action.payload,
      };

    case ACTIONS.CREATE_ITEM:
      const newBasket = [...state.basket, action.payload];

      return {
        ...state,
        basket: newBasket,
      };

    case ACTIONS.UPDATE_ITEM:
      const updatedBasket = state.basket.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );

      return { ...state, basket: updatedBasket };

    case ACTIONS.REMOVE_ITEM:
      const filtredBasket = state.basket.filter(
        (item) => item.id !== action.payload
      );

      return { ...state, basket: filtredBasket };

    default:
      return state;
  }
};

export default basketReducer;
