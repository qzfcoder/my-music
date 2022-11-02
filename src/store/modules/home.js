import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getHomeBannerData,
  getHotListData,
  getHighqualityData,
  getHighqualityListData,
  getAlbumData,
  getToplistData,
  getToplistDetailData,
  getTopArtistsData,
  getTopPopularData,
} from "@/services/index";

export const fetchHomeDataAction = createAsyncThunk(
  "fetchdata",
  (payload, { dispatch, getState }) => {
    getHomeBannerData().then((res) => {
      dispatch(changeBannerAction(res));
    });
    getHotListData().then((res) => {
      dispatch(changeHotCategoryAction(res));
    });
    getHighqualityData().then((res) => {
      dispatch(changeHighqualityAction(res));
    });
    getHighqualityListData().then((res) => {
      dispatch(changeHighqualityListAction(res));
    });
    getToplistData().then((res) => {
      dispatch(changeToplistAction(res));
    });
    getToplistDetailData().then((res) => {
      dispatch(changeToplistDeatilAction(res));
    });
  }
);
export const fetchHomeAlbumDataAction = createAsyncThunk(
  "fetchdata",
  (payload, { dispatch, getState }) => {
    getAlbumData({ ...payload }).then((res) => {
      dispatch(changeAlbumAction(res));
    });
  }
);
export const fetchTopArtistsDataAction = createAsyncThunk(
  "fetchdata",
  (payload, { dispatch, getState }) => {
    getTopArtistsData({ ...payload }).then((res) => {
      dispatch(changeTopArtistsAction(res));
    });
  }
);
export const fetchTopPopularDataAction = createAsyncThunk(
  "fetchdata",
  (payload, { dispatch, getState }) => {
    getTopPopularData({ ...payload }).then((res) => {
      dispatch(changeTopPopularAction(res));
    });
  }
);

const homeSlice = createSlice({
  name: "home",
  initialState: {
    homeBanner: {},
    hotCategory: {},
    highquality: {},
    highqualityList: {},
    albumList: {},
    topList: {},
    topListDetail: {},
    topArtists: {},
    topPopular: {},
  },
  reducers: {
    changeBannerAction(state, { payload }) {
      state.homeBanner = payload;
    },
    changeHotCategoryAction(state, { payload }) {
      state.hotCategory = payload;
    },
    changeHighqualityAction(state, { payload }) {
      state.highquality = payload;
    },
    changeHighqualityListAction(state, { payload }) {
      state.highqualityList = payload;
    },
    changeToplistAction(state, { payload }) {
      state.topList = payload;
    },
    changeToplistDeatilAction(state, { payload }) {
      state.topListDetail = payload;
    },
    changeTopArtistsAction(state, { payload }) {
      state.topArtists = payload;
    },
    changeTopPopularAction(state, { payload }) {
      state.topPopular = payload;
    },
    changeAlbumAction(state, { payload }) {
      state.albumList = payload;
    },
  },
  extraReducers: {},
});
export default homeSlice.reducer;
export const {
  changeBannerAction,
  changeHotCategoryAction,
  changeHighqualityAction,
  changeHighqualityListAction,
  changeAlbumAction,
  changeToplistAction,
  changeToplistDeatilAction,
  changeTopArtistsAction,
  changeTopPopularAction,
} = homeSlice.actions;
