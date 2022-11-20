import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getToplistDetailData, getRankDetailData } from "@/services/index";

export const fetchRankDataAction = createAsyncThunk(
  "fetchdata",
  (payload, { dispatch, getState }) => {
    getToplistDetailData().then((res) => {
      dispatch(changeToplistDeatilAction(res));
    });
  }
);
export const fetchRankDetailDataAction = createAsyncThunk(
  "fetchdata",
  (payload, { dispatch, getState }) => {
    getRankDetailData({ ...payload }).then((res) => {
      dispatch(changeRankDeatilAction(res));
    });
  }
);

const rankSlice = createSlice({
  name: "home",
  initialState: {
    topListDetail: {},
    topList: {},
  },
  reducers: {
    changeToplistDeatilAction(state, { payload }) {
      state.topListDetail = payload;
    },
    changeRankDeatilAction(state, { payload }) {
      state.topList = payload;
    },
  },
  extraReducers: {},
});
export default rankSlice.reducer;
export const { changeToplistDeatilAction, changeRankDeatilAction } =
  rankSlice.actions;
