import PropTypes from "prop-types";
import React, { memo, useEffect } from "react";
import { SongListWrapper } from "./style";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { fetchSongListDataAction } from "@/store/modules/songList";
const SongList = memo((props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSongListDataAction());
  }, [dispatch]);
  const { catList } = useSelector(
    (state) => ({
      catList: state.songList.catList,
    }),
    shallowEqual
  );
  return (
    <SongListWrapper>
      {catList && catList.all && (
        <div className="song-list-top">
          <div>{catList?.all?.name}</div>
          <div className="categoriesList">
            {Object.values(catList?.categories).map((item) => {
              return <div className="categoriesList-item">{item}</div>;
            })}
          </div>
          <div className="subList">
            {catList?.sub.map((item) => {
              return <div className="subList-item">{item.name}</div>;
            })}
          </div>
        </div>
      )}
      <div className="song-list-content">1</div>
    </SongListWrapper>
  );
});

SongList.propTypes = {};

export default SongList;
