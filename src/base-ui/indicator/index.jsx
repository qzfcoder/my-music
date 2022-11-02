import PropTypes from "prop-types";
import React, { memo, useEffect, useRef } from "react";
import { IndicatorWrapper } from "./style";
const Indicator = memo((props) => {
  const { selectIndex = 0 } = props;
  const contentRef = useRef();
  useEffect(() => {
    console.log(selectIndex);
    // 获取selectIndex要滚动的距离

    // 获取selectIndex对应的item
    const selectItemEl = contentRef.current.children[selectIndex];

    const selectElOffsetLeft = selectItemEl.offsetLeft;
    const itemWidth = selectItemEl.clientWidth;
    const contentWidth = contentRef.current.clientWidth;
    console.log(selectElOffsetLeft, itemWidth, contentWidth);
    let distance = selectElOffsetLeft + itemWidth / 2 - contentWidth / 2;
    console.log(distance);
    if (distance < 0) {
      distance = 0;
    }
    const totalDistance = contentRef.current.scrollWidth - contentWidth;
    if (distance >= totalDistance) {
      distance = totalDistance;
    }
    contentRef.current.style.transform = `translate(${-distance}px)`;
  }, [selectIndex]);
  return (
    <IndicatorWrapper>
      <div className="i-content" ref={contentRef}>
        {props.children}
      </div>
    </IndicatorWrapper>
  );
});

Indicator.propTypes = {
  selectIndex: PropTypes.number,
};

export default Indicator;
