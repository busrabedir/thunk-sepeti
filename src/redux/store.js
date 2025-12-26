import { combineReducers, createStore, applyMiddleware } from "redux";
import basketReducer from "./reducers/basket-reducer";
import restaurantReducer from "./reducers/restaurant-reducer";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
	basket: basketReducer,
	restaurant: restaurantReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
