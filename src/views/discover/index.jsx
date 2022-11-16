import PropTypes from "prop-types";
import React, { memo, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { DiscoverWrapper } from "./style";
import { fetchHomeDataAction } from "@/store/modules/home";
import TopBanner from "./c-cpns/top-banner";
import ContentItem from "./c-cpns/content-item";
const Discover = memo((props) => {
  // 请求获取数据，数据存在store中
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHomeDataAction());
  }, [dispatch]);
  // 从redux中获取数据
  const { homeBanner } = useSelector(
    (state) => ({
      homeBanner: state.home.homeBanner,
    }),
    shallowEqual
  );
  return (
    <DiscoverWrapper>
      {homeBanner.banners && <TopBanner homeBanner={homeBanner}></TopBanner>}
      <ContentItem></ContentItem>
    </DiscoverWrapper>
  );
});

Discover.propTypes = {};

export default Discover;
