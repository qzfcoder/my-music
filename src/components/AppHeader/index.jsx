import PropTypes from "prop-types";
import React, { memo, useRef, useCallback, useState } from "react";
import HeaderLeft from "./c-cpns/HeaderLeft";
import HeaderCenter from "./c-cpns/HeaderCenter";
import HeaderRight from "./c-cpns/HeaderRight";
import HeaderBottom from "./c-cpns/HeaderBottom";
import { AppHeaderWrapper } from "./style";

import HeaderData from "@/assets/data/header.json";
const AppHeader = memo((props) => {
  const [nowIndex, setNowIndex] = useState(0);
  // const
  const tabClickHandler = useCallback((index) => {
    setNowIndex(index);
  }, []);
  // console.log(HeaderData[nowIndex], nowIndex);
  return (
    <AppHeaderWrapper>
      <div className="header-top">
        <div className="my-header">
          <HeaderLeft></HeaderLeft>
          <HeaderCenter HeaderData={HeaderData} tabClick={tabClickHandler} />
          <HeaderRight></HeaderRight>
        </div>
      </div>

      <HeaderBottom
        HeaderBottomData={HeaderData[nowIndex]?.list ?? []}
      ></HeaderBottom>
    </AppHeaderWrapper>
  );
});

AppHeader.propTypes = {};

export default AppHeader;
