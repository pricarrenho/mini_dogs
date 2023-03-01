import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";

import login from "./login/reduce";
import photos from "./photos/reduce";

const middleware = getDefaultMiddleware();
const reducer = combineReducers({ login, photos });
const store = configureStore({ reducer, middleware });

export type RootState = ReturnType<typeof reducer>;

export default store;
