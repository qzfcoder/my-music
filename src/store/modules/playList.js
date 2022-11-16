import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getPlayListData,
  getPlaySongListData,
  getSimiPlaySongListData,
} from "@/services/index";

export const fetchPlayListDataAction = createAsyncThunk(
  "fetchdata",
  (payload, { dispatch, getState }) => {
    getPlayListData({ ...payload }).then((res) => {
      dispatch(changePlayListDetailAction(res));
    });
    // getPlaySongListData({ ...payload }).then((res) => {
    //   dispatch(changePlayListDetailAction(res));
    // });
  }
);
export const fetchPlaySongListDataAction = createAsyncThunk(
  "fetchdata",
  (payload, { dispatch, getState }) => {
    getPlaySongListData({ ...payload }).then((res) => {
      dispatch(changePlayListAction(res));
    });
  }
);
export const fetchSimiPlaySongListDataAction = createAsyncThunk(
  "fetchdata",
  (payload, { dispatch, getState }) => {
    getSimiPlaySongListData({ ...payload }).then((res) => {
      dispatch(changeSimiPlayListAction(res));
    });
  }
);

const playListDetailSlice = createSlice({
  name: "playListDetail",
  initialState: {
    playListDetail: {},
    playList: {},
    simiPlayList: {},
  },
  reducers: {
    changePlayListDetailAction(state, { payload }) {
      state.playListDetail = payload;
    },
    changePlayListAction(state, { payload }) {
      state.playList = payload;
    },
    changeSimiPlayListAction(state, { payload }) {
      state.simiPlayList = payload;
    },
  },
  extraReducers: {},
});
export default playListDetailSlice.reducer;
export const {
  changePlayListDetailAction,
  changePlayListAction,
  changeSimiPlayListAction,
} = playListDetailSlice.actions;
