import PropTypes from "prop-types";
import React, { memo } from "react";
import { ItemListWrapper } from "./style";
const ItemList = memo((props) => {
  const { topList, topTitle, color } = props;
  console.log(111, topList);

  return (
    <ItemListWrapper color={color}>
      <div className="top-title">
        <div className="left-img">
          <span>{topTitle}</span>
        </div>
        <div className="right">
          <span>{topTitle}</span>
        </div>
      </div>
      <ul>
        {topList.map((item, index) => {
          return (
            <li>
              {index + 1}、{item.first}
            </li>
          );
        })}
      </ul>
    </ItemListWrapper>
  );
});

ItemList.propTypes = {
  topList: PropTypes.array,
  topTitle: PropTypes.string,
  color: PropTypes.string,
};

export default ItemList;
