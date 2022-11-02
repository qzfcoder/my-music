import PropTypes from "prop-types";
import React, { memo, useEffect, useState } from "react";
import { PictureBrowserWrapper } from "./style";
import { CSSTransition, SwitchTransition } from "react-transition-group";

import IconTriangleBottom from "@/assets/svg/icon-triangle-bottom";
import IconTriangleTop from "@/assets/svg/icon-triangle-top";
import IconClose from "@/assets/svg/icon-close.jsx";
import Indicator from "@/base-ui/indicator";
import IconRight from "@/assets/svg/icon-arrow-right";
import IconLeft from "@/assets/svg/icon-arrow-left";
import classNames from "classnames";
const PictureBrowser = memo((props) => {
  const { pictureUrls, closeClick } = props;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isNext, setIsNext] = useState(true);
  const [showList, setShowList] = useState(true);
  // 当图片浏览器展示时候，浏览器不能让他滚动了
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  function closeBtnClickHandle() {
    if (closeClick) closeClick();
  }
  function controlClickHandle(isRight = true) {
    // isRight ? sliderRef.current.next() : sliderRef.current.prev();
    // // 获取最新的索引
    let isNext = isRight ? true : false;
    setIsNext(isNext);
    let newIndex = isRight ? currentIndex + 1 : currentIndex - 1;
    const length = pictureUrls.length;
    if (newIndex < 0) newIndex = length - 1;
    if (newIndex > length - 1) newIndex = 0;
    setCurrentIndex(newIndex);
  }
  function toggleShowListHandle() {
    setShowList(!showList);
  }
  function imgItemClickHandle(index) {
    setCurrentIndex(index);
    setIsNext(index > currentIndex);
  }
  return (
    <PictureBrowserWrapper isNext={isNext}>
      <div className="top">
        <div className="close-btn" onClick={() => closeBtnClickHandle()}>
          <IconClose></IconClose>
        </div>
      </div>
      <div className="slider">
        <div className="control">
          <div className="btn left" onClick={(e) => controlClickHandle(false)}>
            <IconLeft width={77} height={77}></IconLeft>
          </div>
          <div className="btn right" onClick={(e) => controlClickHandle()}>
            <IconRight width={77} height={77}></IconRight>
          </div>
        </div>
        <div className="container">
          {/* <img src={pictureUrls[currentIndex]} alt="" /> */}
          <SwitchTransition mode="in-out">
            <CSSTransition key={currentIndex} timeout={150} classNames="fade">
              <img src={pictureUrls[currentIndex]} alt="" />
            </CSSTransition>
          </SwitchTransition>
        </div>
      </div>
      <div className="preview">
        <div className="info">
          <div className="desc">
            <div className="count">
              <span>
                {currentIndex + 1}/{pictureUrls.length}:
              </span>
              <span> room Apartment图片{currentIndex + 1}</span>
            </div>
            <div className="toggle" onClick={toggleShowListHandle}>
              隐藏照片列表
              {showList ? <IconTriangleBottom /> : <IconTriangleTop />}
            </div>
          </div>
          <div className="list" style={{ height: showList ? "67px" : "0" }}>
            <Indicator selectIndex={currentIndex}>
              {pictureUrls.map((item, index) => {
                return (
                  <div
                    className={classNames("item", {
                      active: index === currentIndex,
                    })}
                    key={item}
                    onClick={(e) => imgItemClickHandle(index)}
                  >
                    <img src={item} alt="" />
                  </div>
                );
              })}
            </Indicator>
          </div>
        </div>
      </div>
    </PictureBrowserWrapper>
  );
});

PictureBrowser.propTypes = {
  pictureUrls: PropTypes.array,
};

export default PictureBrowser;
