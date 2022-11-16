import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "./modules/home";
import playListReducer from "./modules/playList";
import musicReducer from "./modules/music";
const store = configureStore({
  reducer: {
    home: homeReducer,
    playList: playListReducer,
    music: musicReducer,
  },
});

export default store;
