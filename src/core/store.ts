import { configureStore } from "@reduxjs/toolkit";
import userSearchReducer from "core/slice/reduxSearchTemplateSlice";

export const store = configureStore({
  reducer: {
    usersRoot: userSearchReducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
