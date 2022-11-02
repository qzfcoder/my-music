import PropTypes from "prop-types";
import React, { memo } from "react";
import { ContentTitleWrapper } from "./style";
const ContentTitle = memo((props) => {
  const { titleName, tabList } = props;
  return (
    <ContentTitleWrapper>
      <div className="content-title">
        <div className="content-title-circle"></div>
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
        <div className="content-title-more">更多</div>
      </div>
    </ContentTitleWrapper>
  );
});

ContentTitle.propTypes = {
  titleName: PropTypes.string,
  tabList: PropTypes.array,
};

export default ContentTitle;
