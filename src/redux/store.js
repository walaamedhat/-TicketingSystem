/* eslint-disable no-undef */
import thunk from "redux-thunk";
import { createStore, applyMiddleware, combineReducers, compose } from "redux";

import ticketsReducer from "./Home/reducer";


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  tickets: ticketsReducer,
});

const initialState = {};

const store = createStore(rootReducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;
