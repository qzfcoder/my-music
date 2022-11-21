import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getCatlistData } from "@/services/index";
export const fetchSongListDataAction = createAsyncThunk(
  "fetchdata",
  (payload, { dispatch, getState }) => {
    getCatlistData().then((res) => {
      dispatch(changeCatlistDeatilAction(res));
    });
  }
);

const songListSlice = createSlice({
  name: "home",
  initialState: {
    catList: {},
  },
  reducers: {
    changeCatlistDeatilAction(state, { payload }) {
      state.catList = payload;
    },
  },
  extraReducers: {},
});
export default songListSlice.reducer;
export const { changeCatlistDeatilAction } = songListSlice.actions;
