import PropTypes from "prop-types";
import React, { memo } from "react";
import { HeaderLeftWrapper } from "./style";
const HeaderLeft = memo((props) => {
  return (
    <HeaderLeftWrapper>
      <div className="logo">
        <a href="/#">网易云音乐</a>
      </div>
    </HeaderLeftWrapper>
  );
});

HeaderLeft.propTypes = {};

export default HeaderLeft;
