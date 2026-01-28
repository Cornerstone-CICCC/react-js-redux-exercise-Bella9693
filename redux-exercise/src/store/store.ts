import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/UserSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

// 타입 추론용 (TypeScript 필수 패턴)
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
