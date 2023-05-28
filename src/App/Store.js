import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import CounterReducer from "./CounterFeatures/Reducer";
import thunk from "redux-thunk";

let RootReducer = combineReducers({
    counter: CounterReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(RootReducer, composeEnhancers(applyMiddleware(thunk)));
export default store;