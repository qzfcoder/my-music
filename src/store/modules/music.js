import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getMusicUrlData
} from "@/services/index";


export const fetchMusicDataAction = createAsyncThunk(
  "fetchdata",
  (payload, { dispatch, getState }) => {
    getMusicUrlData({ ...payload }).then((res) => {
      dispatch(changeMusicUrlAction(res));
    });
  }
);


const musicSlice = createSlice({
  name: "music",
  initialState: {
    musicUrl: {},
  },
  reducers: {
    changeMusicUrlAction(state, { payload }) {
      state.musicUrl = payload;
    },
  
  },
  extraReducers: {},
});
export default musicSlice.reducer;
export const {
  changeMusicUrlAction,
} = musicSlice.actions;
