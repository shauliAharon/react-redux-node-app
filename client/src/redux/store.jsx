import { configureStore } from "@reduxjs/toolkit";

const rootReducer = (state = {}, action) => {
  return state;
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
