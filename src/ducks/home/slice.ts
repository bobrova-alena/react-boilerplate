/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
import { createSlice } from '@reduxjs/toolkit';

export type HomeState = {
  data?: Array<string>;
};

const homeSlice = createSlice({
  name: 'eventFlows',
  initialState: {},
  reducers: {
    setHomeState(state: HomeState) {
      //
    },

    //sagas
    GET_HOME_STATE(_state: HomeState): void {},
  },
});

export const homeReducer = homeSlice.reducer;

export const { GET_HOME_STATE, setHomeState } = homeSlice.actions;
