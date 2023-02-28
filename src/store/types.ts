import { AnyAction, ThunkAction } from "@reduxjs/toolkit";
import { RootState } from "./configureStore";

export type ThunkActionType<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  AnyAction
>;
