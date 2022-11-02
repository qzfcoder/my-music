import PropTypes from "prop-types";
import React, { memo, useState } from "react";
import { HeaderBottomWrapper } from "./style";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";
const HeaderBottom = memo((props) => {
  const [selectIndex, setSelectIndex] = useState(0);
  const { HeaderBottomData } = props;
  console.log(HeaderBottomData);
  function clickTab(index) {
    setSelectIndex(index);
  }
  const navigate = useNavigate();

  function toPage(pageUrl) {
    navigate(`/${pageUrl}`);
  } 
  return (
    <HeaderBottomWrapper>
      {HeaderBottomData.length > 0 && (
        <div className="header-bottom">
          <ul>
            {HeaderBottomData.map((item, index) => {
              return (
                <li
                  key={item.name}
                  className={classNames({ active: index === selectIndex })}
                  onClick={(e) => clickTab(index)}
                >
                  <a onClick={(e) => toPage(item.href)}>{item.name}</a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </HeaderBottomWrapper>
  );
});

HeaderBottom.propTypes = {
  HeaderBottomData: PropTypes.array,
};

export default HeaderBottom;
