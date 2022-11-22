import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getCatlistData, getCatPlaylistData } from "@/services/index";
export const fetchSongListDataAction = createAsyncThunk(
  "fetchdata",
  (payload, { dispatch, getState }) => {
    getCatlistData().then((res) => {
      dispatch(changeCatlistDeatilAction(res));
    });
  }
);
export const fetchSongPlayListDataAction = createAsyncThunk(
  "fetchdata",
  (payload, { dispatch, getState }) => {
    getCatPlaylistData({ ...payload }).then((res) => {
      dispatch(changeCatPlaylistDeatilAction(res));
    });
  }
);

const songListSlice = createSlice({
  name: "home",
  initialState: {
    catList: {},
    catPlayList: {},
  },
  reducers: {
    changeCatlistDeatilAction(state, { payload }) {
      state.catList = payload;
    },
    changeCatPlaylistDeatilAction(state, { payload }) {
      state.catPlayList = payload;
    },
  },
  extraReducers: {},
});
export default songListSlice.reducer;
export const { changeCatlistDeatilAction, changeCatPlaylistDeatilAction } =
  songListSlice.actions;
