import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "./modules/home";
import playListReducer from "./modules/playList";
import musicReducer from "./modules/music";
import rankReducer from "./modules/rank";
const store = configureStore({
  reducer: {
    home: homeReducer,
    playList: playListReducer,
    music: musicReducer,
    rank: rankReducer,
  },
});

export default store;
