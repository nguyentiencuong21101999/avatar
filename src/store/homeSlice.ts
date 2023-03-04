import { createSlice } from "@reduxjs/toolkit";

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

export const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    increment: (state) => {
      state.value++;
    },
  },
});

export const { actions: homeActions, reducer: homeReducer } = homeSlice;
