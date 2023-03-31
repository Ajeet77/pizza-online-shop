import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  addPizzaReducer,
  getAllPizzaReducer,
  getPizzaByIdReducer,
  updatedPizzaByIdReducer,
} from "./Reducer/PizzaReducer";
import { CartReducer } from "./Reducer/CartReducer";
import {
  getAllUsersReducer,
  loginUserReducer,
  registerUserReducer,
} from "./Reducer/UserReducer";
import {
  allUserOrdersReducer,
  getUserOrdersReducer,
  placeOrderReducer,
} from "./Reducer/OrderReducer";

const rootReducer = combineReducers({
  getAllPizzaReducer: getAllPizzaReducer,
  CartReducer: CartReducer,
  registerUserReducer: registerUserReducer,
  loginUserReducer: loginUserReducer,
  placeOrderReducer: placeOrderReducer,
  getUserOrdersReducer: getUserOrdersReducer,
  addPizzaReducer: addPizzaReducer,
  getPizzaByIdReducer: getPizzaByIdReducer,
  updatePizzaByIdReducer: updatedPizzaByIdReducer,
  allUserOrdersReducer: allUserOrdersReducer,
  getAllUsersReducer: getAllUsersReducer,
});

const cartItems = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const currentUser = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser"))
  : null;

const initialState = {
  CartReducer: {
    cartItems: cartItems,
  },
  loginUserReducer: {
    currentUser: currentUser,
  },
};
const middleware = [thunk];
const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
