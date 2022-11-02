import PropTypes from "prop-types";
import React, { memo, useRef, useState } from "react";
import { TopBannerWrapper } from "./style";
import { Carousel } from "antd";
import IconRight from "@/assets/svg/icon-arrow-right";
import IconLeft from "@/assets/svg/icon-arrow-left";
const TopBanner = memo((props) => {
  const { homeBanner } = props;
  const [selectIndex, setSelectIndex] = useState(0);
  const sliderRef = useRef();
  function afterChange(e) {
    setSelectIndex(e);
  }
  function controlClickHandle(e, isRight = true) {
    isRight ? sliderRef.current.next() : sliderRef.current.prev();
    // 获取最新的索引
    let newIndex = isRight ? selectIndex + 1 : selectIndex - 1;
    const length = homeBanner?.banners.length;
    if (newIndex < 0) newIndex = length - 1;
    if (newIndex > length - 1) newIndex = 0;
    setSelectIndex(newIndex);
    e.stopPropagation();
  }
  return (
    <TopBannerWrapper
      bgImg={(homeBanner && homeBanner?.banners[selectIndex]?.imageUrl) || ""}
    >
      <div className="swiper">
        <div className="control">
          <div
            className="btn left"
            onClick={(e) => controlClickHandle(e, false)}
          >
            <IconLeft width={130} height={130}></IconLeft>
          </div>
          <div className="center"></div>
          <div className="btn right" onClick={(e) => controlClickHandle(e)}>
            <IconRight width={130} height={130}></IconRight>
          </div>
        </div>
        {homeBanner?.banners && (
          <div className="cover">
            <Carousel
              dots={true}
              autoplay={true}
              afterChange={afterChange}
              ref={sliderRef}
            >
              {homeBanner?.banners?.map((item) => {
                return (
                  <div key={item.encodeId}>
                    <img src={item.imageUrl} alt="" />
                  </div>
                );
              })}
            </Carousel>
          </div>
        )}
      </div>
    </TopBannerWrapper>
  );
});

TopBanner.propTypes = {
  homeBanner: PropTypes.object,
};

export default TopBanner;
