import PropTypes from "prop-types";
import React, { memo } from "react";
import { ContentTitleV2Wrapper } from "./style";
const ContentTitleV2 = memo((props) => {
  const { titleName, tabList } = props;
  return (
    <ContentTitleV2Wrapper>
      <div className="content-title">
        <div className="content-title-title">{titleName}</div>
        <div className="content-title-list">
          {tabList &&
            tabList.slice(0, 4).map((tab, index) => {
              return (
                <div key={tab.name}>
                  <a>{tab.name}</a>
                  <span className="line">{index == 3 ? "" : "|"}</span>
                </div>
              );
            })}
        </div>
        <div className="content-title-more">查看全部</div>
      </div>
    </ContentTitleV2Wrapper>
  );
});

ContentTitleV2.propTypes = {
  titleName: PropTypes.string,
  tabList: PropTypes.array,
};

export default ContentTitleV2;
