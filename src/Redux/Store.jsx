import { configureStore, combineReducers } from "@reduxjs/toolkit";
import logger from "redux-logger";
import thunk from "redux-thunk";

import { usersReducers } from './Reducer';

const reducer = combineReducers({
    user: usersReducers,
})
const store = configureStore({ reducer: reducer, middleware: [thunk, logger] })


export default store;