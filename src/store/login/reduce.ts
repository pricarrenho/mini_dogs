import { createSlice } from "@reduxjs/toolkit";
import { ThunkActionType } from "../types";
import { initialState } from "./initialState";
import { FetchTokenProps, FetchTokenResult } from "./types";
import { RootState } from "../configureStore";

const slice = createSlice({
  name: "login",
  initialState,
  reducers: {
    fetchTokenStarted(state) {
      state.loading = true;
    },
    fetchTokenSuccess(state, action) {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
    },
    fetchTokenError(state, action) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

const { fetchTokenStarted, fetchTokenSuccess, fetchTokenError } = slice.actions;

export const fetchToken =
  (userData: FetchTokenProps): ThunkActionType<void> =>
  async (dispatch) => {
    try {
      dispatch(fetchTokenStarted());
      const response = await fetch(
        "https://dogsapi.origamid.dev/json/jwt-auth/v1/token",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        }
      );
      const data: FetchTokenResult = await response.json();
      dispatch(fetchTokenSuccess(data.token));
    } catch (error) {
      dispatch(fetchTokenError(error));
    }
  };

export const loginTokenSelector = (state: RootState) => state.login.data;

export default slice.reducer;
