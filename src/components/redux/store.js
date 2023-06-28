import { configureStore } from "@reduxjs/toolkit";
import dashboardReducer from "./reducers/getDashboardSlice";

export const store = configureStore({
  reducer: { dashboard: dashboardReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
