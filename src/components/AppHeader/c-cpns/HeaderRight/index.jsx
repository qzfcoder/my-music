import PropTypes from "prop-types";
import React, { memo } from "react";
import { HeaderRightWrapper } from "./style";
import { Input, Space } from "antd";
const { Search } = Input;

const HeaderRight = memo((props) => {
  const onSearch = (value) => console.log(value);
  return (
    <HeaderRightWrapper>
      <Search
        placeholder="input search text"
        onSearch={onSearch}
        style={{
          width: 200,
        }}
      />
      <a className="create-center m-topvd">创作者中心</a>
      <a className="login">登录</a>
    </HeaderRightWrapper>
  );
});

HeaderRight.propTypes = {};

export default HeaderRight;
