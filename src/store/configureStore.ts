import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";

import login from "./login/reduce";

const middleware = getDefaultMiddleware();
const reducer = combineReducers({ login });
const store = configureStore({ reducer, middleware });

export type RootState = ReturnType<typeof reducer>;

export default store;
