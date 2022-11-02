import PropTypes from "prop-types";
import React, { memo, useState } from "react";
import { HeaderCenterWrapper } from "./style";
import classNames from "classnames";
const HeaderCenter = memo((props) => {
  const { HeaderData, tabClick } = props;
  const [selectIndex, setSelectIndex] = useState(0);
  function selectTab(index, name) {
    setSelectIndex(index);
    tabClick(index);
  }
  return (
    <HeaderCenterWrapper>
      <ul>
        {HeaderData.map((header, index) => {
          return (
            <li
              key={header.name}
              onClick={(e) => selectTab(index, header.name)}
              className={classNames({ active: selectIndex === index })}
            >
              <a>{header.name}</a>
              {selectIndex === index && <sub className="cor">&nbsp;</sub>}
            </li>
          );
        })}
      </ul>
    </HeaderCenterWrapper>
  );
});

HeaderCenter.propTypes = {
  HeaderData: PropTypes.array,
  tabClick: PropTypes.func,
};

export default HeaderCenter;
