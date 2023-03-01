import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../configureStore";
import { ThunkActionType } from "../types";
import { initialState } from "./initialState";

const slice = createSlice({
  name: "login",
  initialState: initialState,
  reducers: {
    fetchPhotosStarted(state) {
      state.loading = true;
    },
    fetchPhotosSuccess(state, action) {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
    },
    fetchPhotosError(state, action) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

const { fetchPhotosStarted, fetchPhotosSuccess, fetchPhotosError } =
  slice.actions;

export const fetchPhotos = (): ThunkActionType<void> => async (dispatch) => {
  try {
    dispatch(fetchPhotosStarted());
    const response = await fetch(
      "https://dogsapi.origamid.dev/json/api/photo/?_page=1&_total=3&_user=0",
      {
        method: "GET",
        cache: "no-store",
      }
    );
    const data = await response.json();
    dispatch(fetchPhotosSuccess(data));
  } catch (error) {
    dispatch(fetchPhotosError(error));
  }
};

export const photosSelector = (state: RootState) => state.photos.data;

export default slice.reducer;
