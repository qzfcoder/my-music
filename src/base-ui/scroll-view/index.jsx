import PropTypes from "prop-types";
import React, { memo, useState, useEffect, useRef } from "react";
import { ScollViewWrapper } from "./style";
import IconRight from "@/assets/svg/icon-arrow-right";
import IconLeft from "@/assets/svg/icon-arrow-left";
const ScrollView = memo((props) => {
  const [showRightBtn, setShowRightBtn] = useState(false);
  const [showLeftBtn, setShowLeftBtn] = useState(false);

  const [positionIndex, setPositionIndex] = useState(0);
  // const [totalDistance, setTotalDistance] = useState(0);
  const totalDistanceRef = useRef();
  // 判断是否显示右侧按钮
  const scrollContentRef = useRef();
  useEffect(() => {
    const scrollWidth = scrollContentRef.current.scrollWidth;
    const clientWidth = scrollContentRef.current.clientWidth;
    totalDistanceRef.current = scrollWidth - clientWidth;
    setShowRightBtn(totalDistanceRef.current > 0);
    console.log(scrollWidth, clientWidth);
  }, [props.children]);

  // 事件处理;
  function controlClickHandle(isRight) {
    let newIndex = isRight ? positionIndex + 1 : positionIndex - 1;
    const newEl = scrollContentRef.current.children[newIndex];
    const newLeft = newEl.offsetLeft;
    scrollContentRef.current.style.transform = `translate(-${newLeft}px)`;
    setPositionIndex(newIndex);
    // 是否继续显示右侧按钮
    setShowRightBtn(totalDistanceRef.current > newLeft);
    setShowLeftBtn(newLeft > 0);
  }

  return (
    <ScollViewWrapper>
      {showLeftBtn && (
        <div
          className="control left"
          onClick={(e) => controlClickHandle(false)}
        >
          <IconLeft></IconLeft>
        </div>
      )}

      {showRightBtn && (
        <div
          className="control right"
          onClick={(e) => controlClickHandle(true)}
        >
          <IconRight></IconRight>
        </div>
      )}
      <div className="scroll">
        <div className="scroll-content" ref={scrollContentRef}>
          {props.children}
        </div>
      </div>
    </ScollViewWrapper>
  );
});

ScrollView.propTypes = {};

export default ScrollView;
