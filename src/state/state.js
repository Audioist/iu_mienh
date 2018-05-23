import { combineReducers } from "redux";

import cart from "./cart/reducer";

const state = combineReducers({
  cart
});

export default state;
