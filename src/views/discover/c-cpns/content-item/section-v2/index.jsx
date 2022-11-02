import PropTypes from "prop-types";
import React, { memo, useEffect, useState } from "react";
import { SectionV2Wrapper } from "./style";
import ContentTitle from "@/components/ContentTitle";
// import CardItem from "@/components/CardItem";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { fetchHomeAlbumDataAction } from "@/store/modules/home";
import ScrollView from "@/base-ui/scroll-view";
import classNames from "classnames";
const SectionV2 = memo((props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  // 请求获取数据，数据存在store中
  const dispatch = useDispatch();
  useEffect(() => {
    let data = new Date();
    let year = data.getFullYear();
    let month = data.getMonth() + 1;
    dispatch(
      fetchHomeAlbumDataAction({
        offset: 0,
        limit: 18,
        year,
        month,
      })
    );
  }, [dispatch]);
  const { albumList } = useSelector(
    (state) => ({
      albumList: state.home.albumList,
    }),
    shallowEqual
  );
  return (
    <SectionV2Wrapper>
      <ContentTitle titleName="新碟上架"></ContentTitle>
      <div className="scroll-box">
        <ScrollView>
          {albumList &&
            albumList.monthData &&
            albumList.monthData.slice(0, 15).map((item) => {
              return (
                <div className="all-card" key={item.blurPicUrl}>
                  <div className="img-card">
                    <img src={item.blurPicUrl} alt="" />;
                  </div>
                  <div className="name">{item.name}</div>
                  <div className="writer-name">
                    {item.artist?.alias?.[0] || item.artist?.transNames?.[0]}
                  </div>
                </div>
              );
            })}
        </ScrollView>
      </div>
    </SectionV2Wrapper>
  );
});

SectionV2.propTypes = {
  hotCategoryTags: PropTypes.array,
  highqualityList: PropTypes.array,
};

export default SectionV2;
