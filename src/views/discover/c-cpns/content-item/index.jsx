import PropTypes from "prop-types";
import React, { memo, useEffect } from "react";
import { ContentItemWrapper } from "./style";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import {
  fetchTopArtistsDataAction,
  fetchTopPopularDataAction,
} from "@/store/modules/home";

import SectionV1 from "./section-v1";
import SectionV2 from "./section-v2";
import SectionV3 from "./section-v3";
import RightSectionV1 from "./right-section-v1";
import RightSectionV2 from "./right-section-v2";

const ContentItem = memo((props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      fetchTopArtistsDataAction({
        offset: 0,
        limit: 5,
      })
    );
    dispatch(
      fetchTopPopularDataAction({
        offset: 0,
        limit: 5,
      })
    );
  }, [dispatch]);
  let { hotCategory, highqualityList, topArtists, topPopular } = useSelector(
    (state) => ({
      hotCategory: state.home.hotCategory,
      // highquality: state.home.highquality,
      highqualityList: state.home.highqualityList,
      topArtists: state.home.topArtists,
      topPopular: state.home.topPopular,
    }),
    shallowEqual
  );
  // topPopular = topPopular.data.list.map((item) => {
  //   item.picUrl = item.avatarUrl;
  //   item.name = item.nickName;
  //   return item;
  // });
  console.log(topPopular);
  return (
    <ContentItemWrapper>
      <div className="content">
        <div className="content-left">
          {hotCategory.tags && highqualityList.playlists && (
            <SectionV1
              hotCategoryTags={hotCategory.tags}
              highqualityList={highqualityList.playlists}
            ></SectionV1>
          )}
          {hotCategory.tags && highqualityList.playlists && (
            <SectionV2
              hotCategoryTags={hotCategory.tags}
              highqualityList={highqualityList.playlists}
            ></SectionV2>
          )}
          {hotCategory.tags && highqualityList.playlists && (
            <SectionV3
              hotCategoryTags={hotCategory.tags}
              highqualityList={highqualityList.playlists}
            ></SectionV3>
          )}
        </div>
        <div className="content-right">
          {topArtists.artists && (
            <RightSectionV1
              title="入驻歌手"
              topArtists={topArtists.artists}
            ></RightSectionV1>
          )}
          {topPopular.data && topPopular.data.list && (
            <RightSectionV2
              title="热门主播"
              topArtists={topPopular.data.list}
            ></RightSectionV2>
          )}
        </div>
      </div>
    </ContentItemWrapper>
  );
});

ContentItem.propTypes = {};

export default ContentItem;
