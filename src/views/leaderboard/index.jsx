import PropTypes from "prop-types";
import React, { memo, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import {
  fetchRankDataAction,
  fetchRankDetailDataAction,
} from "@/store/modules/rank";
import { fetchMusicDataAction } from "@/store/modules/music";
import { date, timestampToTime } from "@/utils/changeTime";
import { LeaderboardWrapper } from "./style";
const Leaderboard = memo((props) => {
  // 请求获取数据，数据存在store中
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRankDataAction());
  }, [dispatch]);
  const { topListDetail, topList } = useSelector((state) => {
    return {
      topListDetail: state.rank.topListDetail,
      topList: state.rank.topList,
    };
  }, shallowEqual);
  console.log(topList);
  function getDetail(id) {
    dispatch(fetchRankDetailDataAction({ id }));
  }
  function playMusicHandle(id) {
    dispatch(fetchMusicDataAction({ id: id }));
  }
  // topListDetail.list && getDetail(topListDetail.list[0].id);
  return (
    <LeaderboardWrapper>
      <div className="leaderboard-left">
        <div className="leaderboard-left-box">
          <div className="leaderboard-left-box-top">
            <div className="leaderboard-left-title">云音乐特色榜</div>
            <div className="leaderboard-left-content">
              {topListDetail?.list?.slice(0, 3).map((item, index) => {
                return (
                  <div
                    className="leaderboard-content-box"
                    key={item.name + index}
                    onClick={(e) => getDetail(item.id)}
                  >
                    <div className="leaderboard-img-box">
                      <img src={item.coverImgUrl} alt="" />
                    </div>
                    <div className="leaderboard-name-box">
                      <div className="leaderboard-name">{item.name}</div>
                      <div className="leaderboard-description">
                        {item.description}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="leaderboard-left-box-bottom">
            <div className="leaderboard-left-title">全球媒体榜</div>
            <div className="leaderboard-left-content">
              {topListDetail?.list?.slice(3).map((item, index) => {
                return (
                  <div
                    className="leaderboard-content-box"
                    key={item.name + index}
                    onClick={(e) => getDetail(item.id)}
                  >
                    <div className="leaderboard-img-box">
                      <img src={item.coverImgUrl} alt="" />
                    </div>
                    <div className="leaderboard-name-box">
                      <div className="leaderboard-name">{item.name}</div>
                      <div className="leaderboard-description">
                        {item.description}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {topList && (
        <div className="leaderboard-right">
          <div className="leaderboard-right-top">
            <div className="leaderboard-right-img">
              <img src={topList?.playlist?.coverImgUrl} alt="" />
            </div>
            <div className="leaderboard-right-content">
              <div className="leaderboard-right-name">
                {topList?.playlist?.name}
              </div>
              <div>{topList?.playlist?.description}</div>
              <div>按钮组........</div>
            </div>
          </div>
          <div className="left-box-bottom">
            <div className="left-box-title">
              <div>
                歌曲列表
                <span className="num">
                  {topList?.playlist?.subscribedCount}首歌
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
                {topList?.playlist?.tracks &&
                  topList?.playlist?.tracks.map((song, index) => {
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
                        <div className="five-clomn">{song.ar[0].name}</div>
                        <div className="four-clomn">{song.al.name}</div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      )}
    </LeaderboardWrapper>
  );
});

Leaderboard.propTypes = {};

export default Leaderboard;
