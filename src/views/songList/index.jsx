import PropTypes from "prop-types";
import React, { memo, useEffect } from "react";
import { SongListWrapper } from "./style";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import ItemCard from "@/components/CardItem/c-cpns/ItemCard";
import {
  fetchSongListDataAction,
  fetchSongPlayListDataAction,
} from "@/store/modules/songList";
const SongList = memo((props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSongListDataAction());
    dispatch(fetchSongPlayListDataAction({ cat: "全部歌单" }));
  }, [dispatch]);
  const { catList, catPlayList } = useSelector(
    (state) => ({
      catList: state.songList.catList,
      catPlayList: state.songList.catPlayList,
    }),
    shallowEqual
  );
  function changeCat(e) {
    dispatch(fetchSongPlayListDataAction({ cat: e }));
  }
  return (
    <SongListWrapper>
      {catList && catList.all && (
        <div className="song-list-top">
          <div>{catList?.all?.name}</div>
          <div className="categoriesList">
            {Object.values(catList?.categories).map((item) => {
              return (
                <div
                  className="categoriesList-item"
                  onClick={(e) => changeCat(item)}
                >
                  {item}
                </div>
              );
            })}
          </div>
          <div className="subList">
            {catList?.sub.map((item) => {
              return (
                <div
                  className="subList-item"
                  onClick={(e) => changeCat(item.name)}
                >
                  {item.name}
                </div>
              );
            })}
          </div>
        </div>
      )}
      <div className="song-list-content">
        {catPlayList &&
          catPlayList?.playlists?.map((item) => {
            return <ItemCard ItemData={item} key={item.name}></ItemCard>;
          })}
      </div>
    </SongListWrapper>
  );
});

SongList.propTypes = {};

export default SongList;
