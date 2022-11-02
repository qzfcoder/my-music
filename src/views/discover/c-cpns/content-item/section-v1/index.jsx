import PropTypes from "prop-types";
import React, { memo } from "react";
import { SectionV1Wrapper } from "./style";
import ContentTitle from "@/components/ContentTitle";
import CardItem from "@/components/CardItem";
const SectionV1 = memo((props) => {
  const { hotCategoryTags, highqualityList } = props;
  return (
    <SectionV1Wrapper>
      <ContentTitle
        titleName="热门推荐"
        tabList={hotCategoryTags}
      ></ContentTitle>
      <CardItem colSpan="6" highqualityList={highqualityList}></CardItem>
    </SectionV1Wrapper>
  );
});

SectionV1.propTypes = {
  hotCategoryTags: PropTypes.array,
  highqualityList: PropTypes.array,
};

export default SectionV1;
