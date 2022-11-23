import PropTypes from "prop-types";
import React, { memo, useEffect, useState } from "react";
import { SongListWrapper } from "./style";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import ItemCard from "@/components/CardItem/c-cpns/ItemCard";
import { Pagination } from "antd";
import {
  fetchSongListDataAction,
  fetchSongPlayListDataAction,
} from "@/store/modules/songList";
const SongList = memo((props) => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState({
    cat: "全部歌单",
    limit: 48,
    offset: 0,
  });
  useEffect(() => {
    dispatch(fetchSongListDataAction());
    dispatch(fetchSongPlayListDataAction({ ...query }));
  }, [dispatch]);
  const { catList, catPlayList } = useSelector(
    (state) => ({
      catList: state.songList.catList,
      catPlayList: state.songList.catPlayList,
    }),
    shallowEqual
  );
  // setTotal(catPlayList.total);
  async function changeCat(e) {
    await setQuery({
      ...query,
      cat: e,
    });
    let queryParams = {
      ...query,
      cat: e,
    };
    dispatch(fetchSongPlayListDataAction({ ...queryParams }));
    // console.log(catPlayList);
    // setTotal(catPlayList.total);
  }
  async function onChange(e, f) {
    console.log(e, f, (e - 1) * f);
    await setQuery({
      ...query,
      limit: f,
      offset: (e - 1) * f,
    });
    let queryParams = {
      ...query,
      limit: f,
      offset: (e - 1) * f,
    };
    dispatch(fetchSongPlayListDataAction({ ...queryParams }));
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
      {catPlayList && (
        <div className="song-list-pagination">
          <Pagination
            defaultCurrent={1}
            pageSize={48}
            onChange={onChange}
            total={catPlayList.total}
          />
        </div>
      )}
    </SongListWrapper>
  );
});

SongList.propTypes = {};

export default SongList;
