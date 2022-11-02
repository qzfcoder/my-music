import PropTypes from "prop-types";
import React, { memo } from "react";
import { SectionV3Wrapper } from "./style";
import ContentTitle from "@/components/ContentTitle";
import { useSelector, shallowEqual } from "react-redux";
import ItemList from "./c-cpns/item-list";
const SectionV3 = memo((props) => {
  const { topListDetail } = useSelector(
    (state) => ({
      topListDetail: state.home.topListDetail,
    }),
    shallowEqual
  );
  return (
    <SectionV3Wrapper>
      <ContentTitle titleName="榜单"></ContentTitle>
      {topListDetail && topListDetail?.list && (
        <div className="section-content">
          <ItemList
            topTitle="飙升榜"
            color="pink"
            topList={topListDetail?.list[0]?.tracks}
          ></ItemList>
          <ItemList
            topTitle="新歌榜"
            color="green"
            topList={topListDetail?.list[1]?.tracks}
          ></ItemList>
          <ItemList
            topTitle="原创榜"
            color="blue"
            topList={topListDetail?.list[2]?.tracks}
          ></ItemList>
        </div>
      )}
    </SectionV3Wrapper>
  );
});

SectionV3.propTypes = {};

export default SectionV3;
