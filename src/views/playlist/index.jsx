import PropTypes from "prop-types";
import React, { memo, useEffect } from "react";
import { PlayListWrapper } from "./style";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import {
  fetchPlayListDataAction,
  fetchPlaySongListDataAction,
  fetchSimiPlaySongListDataAction,
} from "@/store/modules/playList";
import { fetchMusicDataAction } from "@/store/modules/music";
import { useNavigate, useParams } from "react-router-dom";
import { useLocation } from "react-router";
import { date, timestampToTime } from "@/utils/changeTime";
const PlayList = memo((props) => {
  const location = useLocation();
  // 请求获取数据，数据存在store中
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPlayListDataAction({ id: location.state.id }));
    dispatch(
      fetchPlaySongListDataAction({
        id: location.state.id,
        offset: 0,
        limit: 10,
      })
    );
    dispatch(
      fetchSimiPlaySongListDataAction({
        id: location.state.id,
      })
    );
  }, [dispatch]);
  // 从redux中获取数据
  const { playListDetail, playList, simiPlayList } = useSelector(
    (state) => ({
      playListDetail: state.playList.playListDetail,
      playList: state.playList.playList,
      simiPlayList: state.playList.simiPlayList,
    }),
    shallowEqual
  );
  function playMusicHandle(id) {
    dispatch(fetchMusicDataAction({ id: id }));
  }
  console.log("simiPlayList", simiPlayList);
  return (
    <PlayListWrapper>
      <div className="left-box">
        <div className="left-box-top">
          <div className="left-content">
            <div className="left-img">
              <img src={playListDetail?.playlist?.coverImgUrl} alt="" />
            </div>
          </div>
          <div className="right-content">
            <div>
              <span className="name">
                歌单
                <span className="circle"></span>
              </span>
              <span className="title">{playListDetail?.playlist?.name}</span>
            </div>
            <div className="player">
              <div className="img-box">
                <img src={playListDetail?.playlist?.creator.avatarUrl} alt="" />
              </div>
              <div className="author">
                {playListDetail?.playlist?.creator.nickname}
              </div>
              <div className="create-time">
                {date(playListDetail?.playlist?.createTime)}
              </div>
            </div>
            <div className="btn-group">按钮组等等等等</div>
            <div className="tag-group">
              <span className="tag-name">标签：</span>
              {playListDetail?.playlist?.tags.map((tag) => {
                return (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                );
              })}
            </div>
            <div className="desc-group">
              <span className="desc-name">介绍：</span>
              <span className="desc">
                {playListDetail?.playlist?.description}
              </span>
            </div>
          </div>
        </div>
        <div className="left-box-bottom">
          <div className="left-box-title">
            <div>
              歌曲列表
              <span className="num">
                {playListDetail?.playlist?.subscribedCount}首歌
              </span>
            </div>
            <div className="song-list">
              <div className="frist-clomn"></div>
              <div className="second-clomn">歌曲标题</div>
              <div className="threed-clomn">时长</div>
              <div className="four-clomn">歌手</div>
              <div className="five-clomn">专辑</div>
            </div>
            <div>
              {playList.songs &&
                playList?.songs.map((song, index) => {
                  return (
                    <div
                      className="song-lists"
                      key={song.id}
                      onClick={(e) => playMusicHandle(song.id)}
                    >
                      <div className="frist-clomn">{index + 1}</div>
                      <div className="second-clomn">{song.name}</div>
                      <div className="threed-clomn">
                        {timestampToTime(song.dt)}
                      </div>
                      <div className="four-clomn">{song.al.name}</div>
                      <div className="five-clomn">{song.ar[0].name}</div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
      <div className="right-box">
        <div className="right-box-title">喜欢这个歌单的人</div>
        <div className="right-box-title">热门歌单</div>
        <div className="allbox">
          {simiPlayList?.result &&
            simiPlayList?.result.slice(0, 10).map((item) => {
              return (
                <div key={item.picUrl} className="box">
                  <img className="img" src={item.picUrl} />
                  <div className='content'>
                    <div className="title">{item.name}</div>
                    <div className="title">播放数：{item.playCount}</div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </PlayListWrapper>
  );
});

PlayList.propTypes = {};

export default PlayList;
