import api from "../../api";
import ACTIONS from "../actions/action-types";

// asenkron thunk aksiyonu

export const getRestaurants = () => (dispatch) => {
  dispatch({ type: ACTIONS.REST_LOADİNG });

  api
    .get("/restaurants")
    .then((res) => dispatch({ type: ACTIONS.REST_SUCCESS, payload: res.data }))
    .catch((err) =>
      dispatch({ type: ACTIONS.REST_ERROR, payload: err.message })
    );
};
